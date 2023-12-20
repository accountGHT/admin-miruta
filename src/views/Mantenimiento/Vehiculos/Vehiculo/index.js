import React, { Fragment, useEffect, useState } from "react";
import { Card, CardBody, CardHeader, CardTitle, Col, Row } from "reactstrap";
import ReactDatatable from "@ashvin27/react-datatable";
import axios from "axios";
import { backend } from "../../../../config/backend";
import TableStrap from "../../../../components/TableStrap/TableStrap";

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
  sort: {
    column: "marca",
    order: "asc",
  },
  button: {
    excel: true,
    print: false,
    csv: false,
  },
};

const traerDatos = async (setData, setLoading) => {
  const vehiculos = await axios.get(backend + "getTipoVehiculo");

  setData(vehiculos.data.tipoVehiculo);

  setLoading(false);
  console.log(vehiculos.data, "back");
};

const TablaVehiculo = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  const columns = [
    {
      key: "nombre",
      text: "Nombre",
      className: "name",
      sortable: true,
    },
    {
      key: "tarifaReserva",
      text: "Tarifa de Reserva",
      className: "name",
      sortable: true,
    },
    {
      key: "numeroAsientos",
      text: "Numero de Asientos",
      className: "name",
      sortable: true,
    },
    {
      key: "tarifoMinima",
      text: "Tarifa Minima",
      className: "name",
      sortable: true,
    },
    {
      key: "impuestos",
      text: "Impuestos",
      className: "name",
      sortable: true,
    },
    {
      key: "imagen",
      text: "imagen",
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
              //   onClick={() => mostrarModalEditar(record)}
              style={{ marginRight: "10px" }}
            >
              Editar
            </button>
          </Fragment>
        );
      },
    },
  ];

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
          <Row>
            <Col lg="6">
              <h4 className="card-title">Marcas</h4>
            </Col>
            <Col lg="6" className="justify-content-end d-flex"></Col>
          </Row>
        </CardTitle>
      </CardHeader>
      <CardBody className="iq-card-body" id="tabla">
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
      </CardBody>
    </Card>
  );
};

export default TablaVehiculo;
