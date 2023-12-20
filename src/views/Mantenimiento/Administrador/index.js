import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Row,
  Input,
  Label,
} from "reactstrap";
import ReactDatatable from "@ashvin27/react-datatable";
import { Fragment } from "react";
import axios from "axios";
import { backend } from "../../../config/backend";
import ModalEditar from "./modalEditar";
import ModalModulos from "./modalModulos";
import ModalAgregar from "./modalAgregar";
import { index } from "../../../config/pluginsInit";

// toast message
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TableStrap from "../../../components/TableStrap/TableStrap";

const Index = () => {
  // variable que tendra la informacion del servidor
  const [dataActivos, setDataActivos] = useState([]);
  const [dataDesactivados, setDataDesactivados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activos, setActivos] = useState(true);

  const [mostrarModal, setMostrarModal] = useState({
    modalEditar: false,
    modalModulos: false,
    modalAgregar: false,
  });
  const [datosEditar, setDatosEditar] = useState(null);

  // Funcion que trae datos del servidor
  const traerDatos = async () => {
    const activos = await axios.get(backend + "getEmpleadoA");
    const desactivados = await axios.get(backend + "getEmpleadoD");

    if (activos.data.codigo !== "204") {
      const activo = activos.data.personas;

      activo.forEach((element, index) => {
        const nombre1 = camelCase(element.nombre);
        activo[index].nombre = nombre1;
        const apellido1 = camelCase(element.nombre);
        activo[index].apellidos = apellido1;
      });

      if (desactivados.data.codigo !== "204") {
        const desactivado = desactivados.data.personas;
        desactivado.forEach((element, index) => {
          const nombre1 = camelCase(element.nombre);
          desactivado[index].nombre = nombre1;
          const apellido1 = camelCase(element.nombre);
          desactivado[index].apellidos = apellido1;
        });
        setDataDesactivados(desactivados.data.personas);
      } else {
        setDataDesactivados({});
      }
      setDataActivos(activos.data.personas);
    } else if (desactivados.data.codigo !== "204") {
      const desactivado = desactivados.data.personas;
      desactivado.forEach((element, index) => {
        const nombre1 = camelCase(element.nombre);
        desactivado[index].nombre = nombre1;
        const apellido1 = camelCase(element.nombre);
        desactivado[index].apellidos = apellido1;
      });
      setDataDesactivados(desactivados.data.personas);
    } else {
      setDataDesactivados({});
      setDataActivos({});
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

  // ejecuto la funcion para traer datos en el inicio de la aplicacion
  useEffect(() => {
    traerDatos();
    index();
  }, [setDataActivos, setLoading, setDataDesactivados, setMostrarModal]);

  // cambio de estado de modal
  const cambioModal = (texto, record) => {
    const temporal = mostrarModal;
    temporal[texto] = !temporal[texto];
    setMostrarModal({ ...temporal });
    setDatosEditar(record ? record : null);
  };

  // columnas de mi tabla
  const columns = [
    {
      key: "dni",
      text: "DNI",
      className: "name",
      sortable: true,
    },
    {
      key: "nombre",
      text: "Nombre",
      sortable: true,
    },
    {
      key: "apellidos",
      text: "Apellidos",
      className: "postcode",
      sortable: true,
    },
    {
      key: "email",
      text: "Email",
      className: "rating",
      sortable: true,
    },
    {
      key: "celular",
      text: "Celular",
      className: "type_of_food",
      sortable: true,
    },
    {
      key: "roles",
      text: "Roles",
      cell: (record) => {
        return (
          <Fragment>
            <button
              className="btn btn-primary btn-sm"
              onClick={() => cambioModal("modalModulos", record)}
            >
              Ver / Editar
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
            >
              {activos ? "Descativar" : "Activar"}
            </button>
          </Fragment>
        );
      },
    },
  ];

  // configuracion de mis tablas
  const config = {
    page_size: 10,
    length_menu: [10, 20, 50],
    show_filter: true,
    show_pagination: true,
    pagination: "advance",
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
    filename: "administradores",
    button: {
      excel: true,
      print: false,
      csv: false,
    },
  };

  // boton desactivar
  const btnDesactivar = async (abc) => {
    if (abc.dni !== "99999999") {
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
    } else {
      toast.error("No puedes desactivar el usuario Administrador");
    }
  };

  const desactivando = async (abc) => {
    const data = new FormData();
    data.append("dni", abc.dni);

    const respuesta = await axios.post(backend + "deactivateEmpleado", data);
    await traerDatos();
  };

  return (
    <Row>
      <Col sm="12">
        <Card className="iq-card">
          <CardHeader>
            <CardTitle className="iq-header-title">
              <Row>
                <Col lg="6">
                  <h4 className="card-title">Mantenimiento Administrador</h4>
                </Col>
                <Col lg="6" className="justify-content-end d-flex">
                  <button
                    // color="dark"
                    className="btn btn-primary btn-sm"
                    onClick={() => cambioModal("modalAgregar")}
                    style={{ marginRight: "20px" }}
                  >
                    Nuevo Administrador
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
                      Administradores Activos
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
            {datosEditar === null ? null : (
              <ModalModulos
                cambioModal={cambioModal}
                mostrarModal={mostrarModal}
                datosEditar={datosEditar}
                toast={toast}
              ></ModalModulos>
            )}

            <ModalAgregar
              cambioModal={cambioModal}
              mostrarModal={mostrarModal}
              traerDatos={traerDatos}
              toast={toast}
            ></ModalAgregar>
          </CardBody>
        </Card>
        <ToastContainer pauseOnHover={false} />
      </Col>
    </Row>
  );
};

export default Index;
