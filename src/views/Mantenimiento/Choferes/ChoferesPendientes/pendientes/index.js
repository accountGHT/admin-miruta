import React, { Fragment, useEffect, useState } from "react";
import { Button, Card, CardBody, CardHeader, CardTitle } from "reactstrap";
import axios from "axios";
import { backend } from "../../../../../config/backend";
import ModalDocumentos from "./modalDocumentos";
import ModalRechazar from "./modalRechazar";
import moment from "moment";
import TableStrap from "../../../../../components/TableStrap/TableStrap";

const config = {
  page_size: 10,
  length_menu: [10, 20, 50],
  show_filter: true,
  show_pagination: true,
  pagination: "advanced",
  filename: "Choferes Pedientes",
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

const TablaPendientes = (props) => {
  const { toast } = props;
  const [data, setData] = useState([]);
  // const [dataFiltered, setDataFiltered] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalDocumentos, setModalDocumentos] = useState(false);
  const [modalRechazados, setModalRechazados] = useState(false);
  const [dataSeleccionado, setDataSeleccionado] = useState(null);

  const traerDatos = async () => {
    setLoading(true);
    const choferesP = await axios.get(backend + "getChoferesP");

    if (choferesP.data.codigo !== "204") {
      const dataActivos = choferesP.data.choferesPendientes;
      dataActivos.forEach((element, index) => {
        dataActivos[index].key = index + "pendiente";
        const nombre1 = camelCase(element.nombre);
        dataActivos[index].nombre = nombre1;
        const apellido1 = camelCase(element.apellidos);
        dataActivos[index].apellidos = apellido1;
        const fechaResgistro = new Date(Date.parse(element.fechaResgistro));
        dataActivos[index].fechaResgistro = moment(fechaResgistro).format(
          "DD MMMM YYYY - HH:mm"
        );
      });
      setData(dataActivos);
      // setDataFiltered(dataActivos);
    } else {
      setData([]);
      // setDataFiltered([]);
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
  }, []);

  const columnsPendientes = [
    {
      key: "fechaResgistro",
      text: "Fecha de Ingreso",
    },
    {
      key: "id",
      text: "Dni",
    },
    {
      key: "nombre",
      text: "Nombre",
    },
    {
      key: "apellidos",
      text: "Apellidos",
    },
    {
      key: "direccion",
      text: "Direccion",
    },
    {
      key: "celular",
      text: "Celular",
    },
    {
      key: "correoElectronico",
      text: "Correo Electronico",
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
              Ver doc's
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

  const mostrarModalDocumentos = (data) => {
    setModalDocumentos(true);
    setDataSeleccionado(data);
  };
  const mostrarModalRechazados = (data) => {
    setModalRechazados(true);
    setDataSeleccionado(data);
  };
  console.log(data);
  return (
    <Card className="iq-card">
      <CardHeader>
        <CardTitle
          className="iq-header-title"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <h4 className="card-title">Choferes Pendientes</h4>
          <Button onClick={() => traerDatos()}>Recargar</Button>
        </CardTitle>
      </CardHeader>
      <CardBody className="iq-card-body">
        {/* <ReactDatatable
          config={config}
          records={dataFiltered || []}
          columns={columnsPendientes}
          loading={loading}
          onChange={(e) => {
            setLoading(true);
            const arrData = data.filter(
              (_d) =>
                _d.nombre
                  ?.toLowerCase()
                  .startsWith(e.filter_value?.toLowerCase()) ||
                _d.apellidos
                  ?.toLowerCase()
                  .startsWith(e.filter_value?.toLowerCase()) ||
                _d.celular
                  ?.toLowerCase()
                  .startsWith(e.filter_value?.toLowerCase()) ||
                _d.id?.toLowerCase().startsWith(e.filter_value?.toLowerCase())
            );
            setDataFiltered(arrData || []);
            setLoading(false);
          }}
        /> */}
        <TableStrap
          config={config}
          records={data}
          columns={columnsPendientes}
          loading={loading}
        />
      </CardBody>
      {modalDocumentos ? (
        <ModalDocumentos
          modalDocumentos={modalDocumentos}
          setModalDocumentos={setModalDocumentos}
          data={dataSeleccionado}
          toast={toast}
          traerListaDatos={traerDatos}
        ></ModalDocumentos>
      ) : null}
      {modalRechazados ? (
        <ModalRechazar
          modalRechazados={modalRechazados}
          setModalRechazados={setModalRechazados}
          data={dataSeleccionado}
          toast={toast}
          traerListaDatos={traerDatos}
        ></ModalRechazar>
      ) : null}
    </Card>
  );
};

export default TablaPendientes;
