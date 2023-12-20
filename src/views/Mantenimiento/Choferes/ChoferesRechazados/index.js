import React, { Fragment, useEffect, useState } from "react";
import ReactDatatable from "@ashvin27/react-datatable";
import { Card, CardBody, CardHeader, CardTitle, Col, Row } from "reactstrap";
import { index } from "../../../../config/pluginsInit";
import axios from "axios";
import { backend } from "../../../../config/backend";
import ModalDetalles from "./modalDetalles";
import moment from "moment";
import "./style.css";
import TableStrap from "../../../../components/TableStrap/TableStrap";

const ChofRechazados = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalDetalles, setModalDetalles] = useState(false);
  const [dataEditar, setDataEditar] = useState(null);

  const traerDatos = async () => {
    const activos = await axios.get(backend + "getChoferesR");

    if (activos.data.codigo !== "204") {
      const dataActivos = activos.data.choferesRechazados;

      dataActivos.forEach((element, index) => {
        const nombre1 = camelCase(element.nombre);
        dataActivos[index].nombre = nombre1;
        const apellido1 = camelCase(element.apellidos);
        dataActivos[index].apellidos = apellido1;
        const fechaEstado = new Date(Date.parse(element.fechaEstado));
        dataActivos[index].fechaEstado =
          moment(fechaEstado).format("DD/MM/YYYY - HH:mm");
      });
      setData(activos.data.choferesRechazados);
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

  const mostrarModalDetalles = (data) => {
    setModalDetalles(true);
    setDataEditar(data);
  };

  useEffect(() => {
    traerDatos();
    index();
  }, [setData, setLoading]);

  const columns = [
    {
      key: "fechaEstado",
      text: "Fecha de Rechazo",
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
              onClick={() => mostrarModalDetalles(record)}
              style={{ marginRight: "10px" }}
            >
              Detalles
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
    filename: "Choferes Rechazados ",
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

  return (
    <Row>
      <Col sm="12">
        <Card className="iq-card">
          <CardHeader>
            <CardTitle className="iq-header-title">
              <Row>
                <Col lg="6">
                  <h4 className="card-title">
                    Mantenimiento de Choferes Rechazados
                  </h4>
                </Col>
                <Col lg="6" className="justify-content-end d-flex"></Col>
              </Row>
            </CardTitle>
          </CardHeader>
          <CardBody className="iq-card-body">
            {/* <ReactDatatable
              config={config}
              records={data}
              columns={columns}
              loading={loading}
            /> */}
            <TableStrap
              config={config}
              records={data}
              columns={columns}
              loading={loading}
            />
            {modalDetalles ? (
              <ModalDetalles
                modalDetalles={modalDetalles}
                setModalDetalles={setModalDetalles}
                dataEditar={dataEditar}
              ></ModalDetalles>
            ) : null}
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default ChofRechazados;
