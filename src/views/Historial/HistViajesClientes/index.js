import axios from "axios";
import moment from "moment";
import React, { Fragment, useEffect, useState } from "react";
import ReactDatatable from "@ashvin27/react-datatable";
import { Card, CardBody, CardHeader, CardTitle, Col, Row } from "reactstrap";
import { backend } from "../../../config/backend";
import { index } from "../../../config/pluginsInit";
import ModalViajes from "./modalViajes";
import TableStrap from "../../../components/TableStrap/TableStrap";

const HistorialViajesCliente = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [modalViajes, setModalViajes] = useState(false);
  const [dataEnviar, setDataEnviar] = useState({});

  const traerDatos = async () => {
    const histviajes = await axios.get(backend + "getHistorialViajesCliente");
    const data = histviajes.data.historialViajesChofer;
    if (histviajes.codigo == "200") {
      data.forEach((element, index) => {
        const nombre1 = camelCase(element.nombre);
        data[index].nombre = nombre1;
        //     const fechaEstado = new Date(Date.parse(element.fechaEstado));
        //     data[index].fechaEstado = moment(fechaEstado).format('DD MMMM YYYY - HH:mm');
      });
      setData(histviajes.data.historialViajesChofer);
      setLoading(false);
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

  const mostrarModalViaje = (record) => {
    setModalViajes(true);
    setDataEnviar(record);
  };

  useEffect(() => {
    traerDatos();
    index();
  }, [setData, setLoading]);

  const columns = [
    {
      key: "dni",
      text: "Dni",
      className: "type_of_food",
      sortable: true,
    },
    {
      key: "nombre",
      text: "Nombre",
      className: "type_of_food",
      sortable: true,
    },
    {
      key: "correoElectronico",
      text: "Correo Electronico",
      className: "name",
      sortable: true,
    },
    {
      key: "cant",
      text: "Cant. Viajes",
      className: "name",
      sortable: true,
    },
    {
      key: "action",
      text: "Acciones",
      cell: (record) => {
        return (
          <Fragment>
            <button
              className="btn btn-primary btn-sm"
              onClick={() => mostrarModalViaje(record)}
              style={{ margin: "5px 10px 5px 0" }}
            >
              ver Viajes
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
    filename: "Historial de recargas ",
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
                    Historial de Viajes por Clientes
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
            {modalViajes ? (
              <ModalViajes
                dataEnviar={dataEnviar}
                modalViajes={modalViajes}
                setModalViajes={setModalViajes}
              />
            ) : null}
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};
export default HistorialViajesCliente;
