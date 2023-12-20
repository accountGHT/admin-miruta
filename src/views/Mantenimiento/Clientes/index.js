/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Input,
  Label,
  Row,
} from "reactstrap";
import ReactDatatable from "@ashvin27/react-datatable";
import { Fragment } from "react";
import axios from "axios";
import { backend } from "../../../config/backend";
import { index } from "../../../config/pluginsInit";
import ModalDetalles from "./modalDetalles";
import ModalEditar from "./modalEditar";
import Moment from "moment";
import "moment/locale/es";
import { toast, ToastContainer } from "react-toastify";
import TableStrap from "../../../components/TableStrap/TableStrap";

const Clientes = () => {
  const [dataActivos, setDataActivos] = useState([]);
  const [dataDesactivados, setDataDesactivados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activos, setActivos] = useState(true);
  const [datosEditar, setDatosEditar] = useState(null);

  const [mostrarModal, setMostrarModal] = useState({
    modalEditar: false,
    modalDetalles: false,
  });

  // Funcion que trae datos del servidor
  const traerDatos = async () => {
    const activos = await axios.get(backend + "getClientesA");
    const desactivados = await axios.get(backend + "getClientesD");
    console.log(desactivados, "cliente d");
    //modificar fecha Activos
    if (activos.data.codigo !== "204") {
      const dataActivos = activos.data.personas;

      dataActivos?.forEach((element, index) => {
        const nombre1 = camelCase(element.nombre);
        dataActivos[index].nombre = nombre1;
        const fechaNacimiento = new Date(Date.parse(element.fechaNacimiento));
        dataActivos[index].fechaNacimiento =
          Moment(fechaNacimiento).format("YYYY-MM-DD");
        const fechaRegistro = new Date(Date.parse(element.fechaRegistro));
        dataActivos[index].fechaRegistro =
          Moment(fechaRegistro).format("DD/MM/YYYY");
      });

      if (desactivados.data.codigo !== "204") {
        const dataInactivos = desactivados.data.personas;

        dataInactivos?.forEach((element, index) => {
          const nombre1 = camelCase(element.nombre);
          dataInactivos[index].nombre = nombre1;
          const fechaNacimiento = new Date(Date.parse(element.fechaNacimiento));
          dataInactivos[index].fechaNacimiento =
            Moment(fechaNacimiento).format("YYYY-MM-DD");
          const fechaRegistro = new Date(Date.parse(element.fechaRegistro));
          dataInactivos[index].fechaRegistro =
            Moment(fechaRegistro).format("DD/MM/YYYY");
        });
        setDataDesactivados(desactivados.data.personas);
      } else {
        setDataDesactivados({});
      }
      setDataActivos(activos.data.personas);
    } else if (desactivados.data.codigo !== "204") {
      const dataInactivos = desactivados.data.personas;

      dataInactivos.forEach((element, index) => {
        const nombre1 = camelCase(element.nombre);
        dataInactivos[index].nombre = nombre1;
        const fechaNacimiento = new Date(Date.parse(element.fechaNacimiento));
        dataInactivos[index].fechaNacimiento =
          Moment(fechaNacimiento).format("YYYY-MM-DD");
        const fechaRegistro = new Date(Date.parse(element.fechaRegistro));
        dataInactivos[index].fechaRegistro =
          Moment(fechaRegistro).format("DD/MM/YYYY");
      });
      setDataDesactivados(desactivados.data.personas);
    } else {
      setDataActivos({});
      setDataDesactivados({});
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

  useEffect(() => {
    traerDatos();
    index();
    Moment.locale("es");
  }, [setDataActivos, setLoading, setDataDesactivados, setMostrarModal]);

  const cambioModal = (texto, record) => {
    const temporal = mostrarModal;
    temporal[texto] = !temporal[texto];
    setMostrarModal({ ...temporal });
    setDatosEditar(record ? record : null);
    // console.log(temporal);
  };

  const columns = [
    {
      key: "nombre",
      text: "Nombre",
      className: "name",
      sortable: true,
    },
    {
      key: "correoElectronico",
      text: "Correo Electronico",
      sortable: true,
    },
    {
      key: "dni",
      text: "Dni",
      className: "postcode",
      sortable: true,
    },
    {
      key: "celular",
      text: "Celular",
      className: "rating",
      sortable: true,
    },
    {
      key: "fechaRegistro",
      text: "Fecha Registro",
      className: "type_of_food",
      sortable: true,
    },
    {
      key: "detalles",
      text: "Detalles",
      cell: (record) => {
        return (
          <Fragment>
            <button
              className="btn btn-primary btn-sm"
              onClick={() => cambioModal("modalDetalles", record)}
              style={{ marginRight: "5px" }}
            >
              detalles
            </button>
          </Fragment>
        );
      },
    },

    {
      key: "action",
      text: "Acciones",
      cell: (record) => {
        return (
          <Fragment>
            <button
              className="btn btn-primary btn-sm"
              onClick={() => cambioModal("modalEditar", record)}
              style={{ margin: "5px 10px 5px 0" }}
            >
              Editar
            </button>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => btnDesactivar(record)}
              style={{ margin: "5px 10px 5px 0" }}
            >
              {activos ? "Desactivar" : "Activar"}
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
    filename: "Clientes  ",
    sort: {
      column: "nombre",
      order: "asc",
    },
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

  const btnDesactivar = async (abc) => {
    // console.log(abc);

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
    const respuesta = await axios.post(backend + "deactivateCliente", data);
    traerDatos();
  };

  return (
    <Row>
      <Col sm="12">
        <Card className="iq-card">
          <CardHeader>
            <CardTitle className="iq-header-title">
              <Row>
                <Col lg="6">
                  <h4 className="card-title">Mantenimiento Clientes</h4>
                </Col>
                <Col lg="6" className="justify-content-end d-flex">
                  <div className="custom-control custom-switch custom-control-inline">
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
                      {activos ? "Usuarios Activos" : "Usuarios Desactivos"}
                    </Label>
                  </div>
                </Col>
              </Row>
            </CardTitle>
          </CardHeader>
          <CardBody className="iq-card-body">
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
              //   records={dataDesactivados}
              //   columns={columns}
              //   loading={loading}
              // />
              <TableStrap
                config={config}
                records={dataDesactivados}
                columns={columns}
                loading={loading}
              />
            )}
            {datosEditar === null ? null : (
              <ModalEditar
                cambioModal={cambioModal}
                mostrarModal={mostrarModal}
                datosEditar={datosEditar}
                traerDatos={traerDatos}
                toast={toast}
              ></ModalEditar>
            )}
            {mostrarModal.modalDetalles ? (
              <ModalDetalles
                cambioModal={cambioModal}
                mostrarModal={mostrarModal}
                datosEditar={datosEditar}
              ></ModalDetalles>
            ) : null}
          </CardBody>
        </Card>
        <ToastContainer pauseOnHover={false} />
      </Col>
    </Row>
  );
};
export default Clientes;
