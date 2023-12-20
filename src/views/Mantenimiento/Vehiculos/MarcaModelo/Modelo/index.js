import React, { Fragment, useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Row,
  Col,
  Input,
  Label,
} from "reactstrap";
import ReactDatatable from "@ashvin27/react-datatable";
import axios from "axios";
import { backend } from "../../../../../config/backend";
import ModalEditar from "./modalEditar";
import ModalAgregar from "./modalAgregar";
import { index } from "../../../../../config/pluginsInit";
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
    column: "modelo",
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

  const [dataActivos, setDataActivos] = useState({});
  const [dataDesactivos, setDataDesactivos] = useState({});
  const [loading, setLoading] = useState(true);
  const [activos, setActivos] = useState(true);

  const [modalEditar, setModalEditar] = useState(false);
  const [modalAgregar, setModalAgregar] = useState(false);
  const [dataEnviar, setDataEnviar] = useState(null);

  const traerDatos = async () => {
    const activos = await axios.get(backend + "getModeloA");
    const desactivos = await axios.get(backend + "getModeloD");

    if (activos.data.codigo !== "204") {
      const dataA = activos.data.modelos;
      dataA.forEach((element, index) => {
        const nombre1 = camelCase(element.modelo);
        dataA[index].modelo = nombre1;
      });

      if (desactivos.data.codigo !== "204") {
        const dataInactivos = desactivos.data.modelos;

        dataInactivos.forEach((element, index) => {
          const nombre1 = camelCase(element.modelo);
          dataInactivos[index].modelo = nombre1;
        });
        setDataDesactivos(desactivos.data.modelos);
      } else {
        setDataDesactivos({});
      }
      setDataActivos(activos.data.modelos);
    } else if (desactivos.data.codigo !== "204") {
      const dataInactivos = desactivos.data.modelos;

      dataInactivos.forEach((element, index) => {
        const nombre1 = camelCase(element.modelo);
        dataInactivos[index].modelo = nombre1;
      });
      setDataDesactivos(desactivos.data.personas);
    } else {
      setDataActivos({});
      setDataDesactivos({});
    }
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
      key: "modelo",
      text: "Modelo",
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
              Editar Modelo
            </button>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => btnDesactivar(record)}
              style={{ marginRight: "10px" }}
            >
              {activos ? "Descativar" : "Activar"}
            </button>
          </Fragment>
        );
      },
    },
  ];

  useEffect(() => {
    traerDatos();
    index();
    // ESTILOS DE TABLA
    const ddd = document.getElementById("tabla2");
    ddd.children[0].children[0].removeChild(
      ddd.children[0].children[0].children[0]
    );
    ddd.children[0].children[0].style.justifyContent = "flex-end";
    ddd.children[0].children[0].children[0].style.maxWidth = "100%";
    ddd.children[0].children[0].children[0].style.display = "flex";
    ddd.children[0].children[0].children[0].style.justifyContent = "flex-end";
  }, [setDataActivos, setLoading, setDataDesactivos]);

  const mostrarModalAgregar = () => {
    setModalAgregar(true);
  };
  const mostrarModalEditar = (data) => {
    setModalEditar(true);
    setDataEnviar(data);
  };

  const btnDesactivar = async (abc) => {
    toast.promise(
      () => desactivando(abc),
      {
        pending: activos
          ? "Desactivando usuario..."
          : "Activando el usuario...",
        success:
          "El usuario se" +
          (activos ? "desactivó " : "activó") +
          " correctamente",
        error: "Por favor, vuelva a intentar",
      },
      {
        theme: "colored",
      }
    );
  };

  const desactivando = async (abc) => {
    const data = new FormData();
    data.append("id", abc.id);
    const respuesta = await axios.post(backend + "deactivateModelo", data);
    traerDatos();
  };

  return (
    <Card className="iq-card">
      <CardHeader>
        <CardTitle className="iq-header-title">
          <Row>
            <Col>
              <h4 className="card-title">Modelos</h4>
            </Col>
            <Col lg="8" className="justify-content-end d-flex">
              <button
                className="btn btn-primary btn-sm"
                onClick={() => mostrarModalAgregar()}
                style={{ marginRight: "20px" }}
              >
                Nuevo
              </button>
              <div className="custom-control custom-switch custom-control-inline">
                {/* Radio Button */}
                <Input
                  type="checkbox"
                  className="custom-control-input"
                  id="customSwitch1"
                  defaultChecked={activos}
                  onChange={() => {
                    setActivos(!activos);
                    traerDatos();
                  }}
                />
                <Label className="custom-control-label" for="customSwitch1">
                  Modelos Activos
                </Label>
              </div>
            </Col>
          </Row>
        </CardTitle>
      </CardHeader>
      <CardBody className="iq-card-body" id="tabla2">
        {activos ? (
          // <ReactDatatable
          //   config={config}
          //   records={dataActivos}
          //   columns={columns}
          //   loading={loading}
          // />
          <TableStrap
            config={config}
            records={dataActivos}
            columns={columns}
            loading={loading}
          />
        ) : (
          // <ReactDatatable
          //   config={config}
          //   records={dataDesactivos}
          //   columns={columns}
          //   loading={loading}
          // />
          <TableStrap
            config={config}
            records={dataDesactivos}
            columns={columns}
            loading={loading}
          />
        )}
        {modalAgregar ? (
          <ModalAgregar
            modalAgregar={modalAgregar}
            setModalAgregar={setModalAgregar}
            traerDatos={traerDatos}
            toast={toast}
            dataEnviar={dataEnviar}
          ></ModalAgregar>
        ) : null}
        {modalEditar ? (
          <ModalEditar
            modalEditar={modalEditar}
            setModalEditar={setModalEditar}
            dataEnviar={dataEnviar}
            traerDatos={traerDatos}
            toast={toast}
          ></ModalEditar>
        ) : null}
      </CardBody>
    </Card>
  );
};

export default TablaMarca;
