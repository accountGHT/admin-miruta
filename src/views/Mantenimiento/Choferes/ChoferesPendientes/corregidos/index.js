import React, { Fragment, useEffect, useState } from "react";
import { Card, CardBody, CardHeader, CardTitle } from "reactstrap";
import axios from "axios";
import { backend } from "../../../../../config/backend";
import ModalDocumentos from "./modalDocumentos";
import ModalRechazar from "./modalRechazar";
import moment from "moment";
import TableStrap from "../../../../../components/TableStrap/TableStrap";

const TablaCorregidos = (props) => {
  const { toast } = props;

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [modalDocumentos, setModalDocumentos] = useState(false);
  const [modalRechazados, setModalRechazados] = useState(false);
  const [dataSeleccionado, setDataSeleccionado] = useState(null);

  const columnsCorregidos = [
    {
      key: "fechaEstado",
      text: "Fecha de Ingreso",
    },
    {
      key: "id",
      text: "Dni",
    },
    {
      key: "nombreCompleto",
      text: "Nombre Completo",
    },
    {
      key: "action",
      text: "Acciones",
      cell: (record) => {
        return (
          <Fragment>
            <button
              className="btn btn-primary btn-sm"
              onClick={() => mostrarModalDocumentos(record)}
              style={{ margin: "5px 10px 5px 0" }}
            >
              Ver Doc's.
            </button>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => mostrarModalRechazados(record)}
              style={{ margin: "5px 10px 5px 0" }}
            >
              Rechazar
            </button>
          </Fragment>
        );
      },
    },
  ];

  const config = {
    page_size: 10,
    length_menu: [10, 20, 50],
    show_filter: true,
    show_pagination: true,
    pagination: "advanced",
    filename: "Choferes Corregidos ",
    language: {
      length_menu: "Mostrando _MENU_ registros por pagina",
      filter: "Buscar en registros...",
      info: "Mostrando _START_ a _END_ de _TOTAL_ registros",
      pagination: {
        first: "Primero",
        previous: "Anterior",
        next: "Siguiente",
        last: "Ultimo",
      },
      no_data_text: "No hay registros encontrados",
      loading_text: "Cargando...",
    },
    button: {
      excel: true,
      print: false,
      csv: false,
    },
  };

  const mostrarModalDocumentos = (data) => {
    setModalDocumentos(true);
    setDataSeleccionado(data);
  };
  const mostrarModalRechazados = (data) => {
    setModalRechazados(true);
    setDataSeleccionado(data);
  };

  const traerDatos = async () => {
    const choferesC = await axios.get(backend + "getChoferesC");

    if (choferesC.data.codigo !== "204") {
      const dataActivos = choferesC.data.choferesCorregidos;

      dataActivos.forEach((element, index) => {
        const nombre1 = camelCase(element.nombreCompleto);
        dataActivos[index].nombreCompleto = nombre1;
        const fechaEstado = new Date(Date.parse(element.fechaEstado));
        dataActivos[index].fechaEstado = moment(fechaEstado).format(
          "DD MMMM YYYY - HH:mm"
        );
      });
      setData(choferesC.data.choferesCorregidos);
    } else {
      setData({});
    }
    setLoading(false);
  };
  const camelCase = (str) => {
    return (" " + str).replace(
      /(?:^\w|[A-Z]|\b\w|\s+)/g,
      function (match, index) {
        if (+match === 0) return " ";
        return index === 0 ? match.toLowerCase() : match.toUpperCase();
      }
    );
  };

  useEffect(() => {
    traerDatos();

    // ESTILOS DE TABLA
    const ddd = document.getElementById("tabla1");
    ddd.children[0].children[0].removeChild(
      ddd.children[0].children[0].children[0]
    );
    ddd.children[0].children[0].style.justifyContent = "flex-end";
    ddd.children[0].children[0].children[0].style.maxWidth = "100%";
    ddd.children[0].children[0].children[0].style.display = "flex";
    ddd.children[0].children[0].children[0].style.justifyContent = "flex-end";
  }, []);

  return (
    <Card className="iq-card">
      <CardHeader>
        <CardTitle className="iq-header-title">
          <h4 className="card-title">Choferes Corregidos</h4>
        </CardTitle>
      </CardHeader>
      <CardBody className="iq-card-body" id="tabla1">
        {/* <ReactDatatable
                    config={config}
                    records={data}
                    columns={columnsCorregidos}
                    loading={loading}
                /> */}
        <TableStrap
          config={config}
          records={data}
          columns={columnsCorregidos}
          loading={loading}
        />
      </CardBody>
      {modalDocumentos ? (
        <ModalDocumentos
          modalDocumentos={modalDocumentos}
          setModalDocumentos={setModalDocumentos}
          data={dataSeleccionado}
          traerListaDatos={traerDatos}
        ></ModalDocumentos>
      ) : null}
      {modalRechazados ? (
        <ModalRechazar
          modalRechazados={modalRechazados}
          setModalRechazados={setModalRechazados}
          data={dataSeleccionado}
          traerListaDatos={traerDatos}
          toast={toast}
        ></ModalRechazar>
      ) : null}
    </Card>
  );
};

export default TablaCorregidos;
