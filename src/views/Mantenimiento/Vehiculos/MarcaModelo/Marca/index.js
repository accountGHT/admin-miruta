import React, { Fragment, useEffect, useState } from "react";
import { Card, CardBody, CardHeader, CardTitle, Col, Row } from "reactstrap";
import ReactDatatable from "@ashvin27/react-datatable";
import axios from "axios";
import { backend } from "../../../../../config/backend";
import ModalAgregar from "./modalAgregar";
import ModalEditar from "./modalEditar";
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

const TablaMarca = (props) => {
  const { toast } = props;

  const [cargando, setCargando] = useState(true);
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  const [modalAgregar, setModalAgregar] = useState(false);
  const [modalEditar, setModalEditar] = useState(false);
  const [dataEnviar, setDataEnviar] = useState(null);

  const traerDatos = async () => {
    const marcas = await axios.get(backend + "getMarca");

    const data = marcas.data.marcas;
    if (marcas.codigo == "200") {
      data.forEach((element, index) => {
        const nombre1 = camelCase(element.marca);
        data[index].marca = nombre1;
      });
      setData(marcas.data.marcas);
      setLoading(false);
    }
    setData(marcas.data.marcas);
    setLoading(false);
  };

  const camelCase = (str) => {
    return (" " + str).replace(
      /(?:^\w|[A-Z]|\b\w|\s+)/g,
      function (match, index) {
        // if (+match === 0) return " ";
        return index === 0 ? match.toLowerCase() : match.toUpperCase();
      }
    );
  };
  const columns = [
    {
      key: "id",
      text: "Id Marca",
      className: "name",
      sortable: true,
    },
    {
      key: "marca",
      text: "Marca",
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
              onClick={() => mostrarModalEditar(record)}
              style={{ marginRight: "10px" }}
            >
              Editar Marca
            </button>
          </Fragment>
        );
      },
    },
  ];

  useEffect(() => {
    traerDatos();

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

  const mostrarModalAgregar = () => {
    setModalAgregar(true);
  };
  const mostrarModalEditar = (data) => {
    setModalEditar(true);
    setDataEnviar(data);
  };

  return (
    <Card className="iq-card">
      <CardHeader>
        <CardTitle className="iq-header-title">
          <Row>
            <Col lg="6">
              <h4 className="card-title">Marcas</h4>
            </Col>
            <Col lg="6" className="justify-content-end d-flex">
              <button
                className="btn btn-primary btn-sm"
                onClick={() => mostrarModalAgregar()}
                style={{ marginRight: "20px" }}
              >
                Nuevo
              </button>
            </Col>
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
        {modalAgregar ? (
          <ModalAgregar
            modalAgregar={modalAgregar}
            setModalAgregar={setModalAgregar}
            data={data}
            toast={toast}
            traerDatos={traerDatos}
          ></ModalAgregar>
        ) : null}
        {modalEditar ? (
          <ModalEditar
            modalEditar={modalEditar}
            setModalEditar={setModalEditar}
            dataEnviar={dataEnviar}
            toast={toast}
            traerDatos={traerDatos}
          ></ModalEditar>
        ) : null}
      </CardBody>
    </Card>
  );
};

export default TablaMarca;
