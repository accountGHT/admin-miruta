import React, { Fragment, useEffect, useState } from "react";
import { Card, CardBody, CardHeader, CardTitle } from "reactstrap";
import ReactDatatable from "@ashvin27/react-datatable";
import axios from "axios";
import { backend } from "../../../../../config/backend";
import ModalDetalles from "./modalDatalles";
import moment from "moment";
import TableStrap from "../../../../../components/TableStrap/TableStrap";

const config = {
  page_size: 10,
  length_menu: [10, 20, 50],
  show_filter: true,
  show_pagination: true,
  show_length_menu: false,
  pagination: "advanced",
  filename: "Choferes Observados ",
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
  // sort: {
  //   column: "fechaEstado",
  //   order: "asc",
  // },
  button: {
    excel: true,
    print: false,
    csv: false,
  },
};

const TablaObservados = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalDetalles, setModalDetalles] = useState(false);
  const [dataSeleccionado, setDataSeleccionado] = useState(null);

  const traerDatos = async () => {
    setLoading(true);
    const choferesO = await axios.get(backend + "getChoferesO");

    if (choferesO.data.codigo !== "204") {
      const dataActivos = choferesO.data.choferesObservados;
      dataActivos.forEach((element, index) => {
        const nombre1 = camelCase(element.nombreCompleto);
        dataActivos[index].nombreCompleto = nombre1;
        const fechaEstado = new Date(Date.parse(element.fechaEstado));
        dataActivos[index].fechaEstado =
          moment(fechaEstado).format("DD/MM/YYYY - HH:mm");
      });

      setData(choferesO.data.choferesObservados);
    } else {
      setData([]);
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

  const columnsObservados = [
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
              onClick={() => mostrarModalDetalles(record)}
              style={{ marginRight: "10px" }}
            >
              Detalless
            </button>
          </Fragment>
        );
      },
    },
  ];

  const mostrarModalDetalles = (data) => {
    setModalDetalles(true);
    setDataSeleccionado(data);
  };

  useEffect(() => {
    traerDatos(setData, setLoading);

    // ESTILOS DE TABLA
    const ddd = document.getElementById("tabla");
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
          <h4 className="card-title">Choferes Observados</h4>
        </CardTitle>
      </CardHeader>
      <CardBody className="iq-card-body" id="tabla">
        {/* <ReactDatatable
          config={config}
          records={data || []}
          columns={columnsObservados}
          loading={loading}
        /> */}
        <TableStrap
          config={config}
          records={data}
          columns={columnsObservados}
          loading={loading}
        />
      </CardBody>
      {modalDetalles ? (
        <ModalDetalles
          modalDetalles={modalDetalles}
          setModalDetalles={setModalDetalles}
          data={dataSeleccionado}
        ></ModalDetalles>
      ) : null}
    </Card>
  );
};

export default TablaObservados;
