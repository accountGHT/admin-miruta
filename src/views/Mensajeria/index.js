import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import ReactDatatable from "@ashvin27/react-datatable";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import { index } from "../../config/pluginsInit";
import axios from "axios";
import { backendMiRuta } from "../../config/backend";
import TableStrap from "../../components/TableStrap/TableStrap";

const ESTADO_USUARIO = Object.freeze({
  ALL: Symbol("all"),
  ONLINE: Symbol("online"),
});

const TIPO_USUARIO = Object.freeze({
  CHOFER: Symbol("chofer"),
  PASAJERO: Symbol("pasajero"),
});

const MensajeriaGlobal = () => {
  const [loading, setLoading] = useState(false);
  const [usuarios, setUsuarios] = useState([]);
  const [datos, setDatos] = useState({
    tipoChofer: ESTADO_USUARIO.ALL,
    mensajeChofer: "",
    tipoPasajero: ESTADO_USUARIO.ALL,
    mensajePasajero: "",
  });

  const listar = async ({ tipo, usuarios }) => {
    setLoading(true);
    const usuariosArr = [];
    try {
      if (tipo === TIPO_USUARIO.CHOFER) {
        if (usuarios === ESTADO_USUARIO.ALL) {
          const resp = await axios.get(
            backendMiRuta + "admin/chofer/listar/all"
          );
          if (resp.data.code === 200) {
            usuariosArr.push(...resp.data.data);
          }
        }
        if (usuarios === ESTADO_USUARIO.ONLINE) {
          const resp = await axios.get(
            backendMiRuta + "admin/chofer/listar/online"
          );
          if (resp.data.code === 200) {
            usuariosArr.push(...resp.data.data);
          }
        }
      }
      if (tipo === TIPO_USUARIO.PASAJERO) {
        if (usuarios === ESTADO_USUARIO.ALL) {
          const resp = await axios.get(
            backendMiRuta + "admin/pasajeros/listar"
          );
          if (resp.data.code === 200) {
            usuariosArr.push(...resp.data.data);
          }
        }
      }
    } catch (error) {
      toast.error("Por favor, vuelva a intentar");
    }
    setUsuarios(usuariosArr);
    setLoading(false);
  };

  const notificar = async ({ tipo, mensaje }) => {
    try {
      if (mensaje === "") {
        toast.error("Debe ingresar un mensaje");
        return;
      }
      if (tipo === TIPO_USUARIO.CHOFER) {
        await axios.post(backendMiRuta + "admin/notificar/choferes", {
          mensaje,
        });
      }
      if (tipo === TIPO_USUARIO.PASAJERO) {
        await axios.post(backendMiRuta + "admin/notificar/pasajeros", {
          mensaje,
        });
      }
      toast.success("Se notificó correctamente");
    } catch (error) {
      toast.error("Por favor, vuelva a intentar");
    }
  };

  useEffect(() => {
    index();
  }, []);

  const columns = [
    {
      key: "dni",
      text: "DNI",
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
      sortable: true,
    },
    {
      key: "adress",
      text: "Address",
      sortable: true,
    },
    {
      key: "conexion",
      text: "Ultima Conexion",
      sortable: true,
    },
    {
      key: "celular",
      text: "Celular",
      sortable: true,
    },
  ];

  const config = {
    page_size: 10,
    length_menu: [10, 20, 50],
    show_filter: true,
    show_pagination: true,
    pagination: "advance",
    sort: {
      column: "dni",
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
      no_data_text: "Seleccione un tipo de usuario para ver sus datos",
      loading_text: "Cargando...",
    },
    filename: "administradores",
    button: {
      excel: true,
      print: false,
      csv: false,
    },
  };

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
          <Card style={{ width: "100%" }}>
            <CardHeader>
              <CardTitle className="iq-header-title">
                <Row>
                  <Col lg="6">
                    <h4 className="card-title">Choferes</h4>
                  </Col>
                  <Col
                    lg="6"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "end",
                      justifyContent: "end",
                    }}
                  >
                    <Button
                      color="primary"
                      onClick={() => {
                        listar({
                          tipo: TIPO_USUARIO.CHOFER,
                          usuarios: datos.tipoChofer,
                        });
                      }}
                    >
                      Mostrar
                    </Button>
                  </Col>
                </Row>
              </CardTitle>
            </CardHeader>
            <CardBody>
              <div
                className="row"
                style={{ padding: "0 20px", width: "100%", margin: 0 }}
              >
                <FormGroup style={{ marginBottom: "20px", width: "100%" }}>
                  <Label for="typeChofer">Usuarios: </Label>
                  <FormGroup check id="typeChofer">
                    <Label check>
                      <Input
                        type="radio"
                        name="choferesAll"
                        defaultChecked={datos.tipoChofer === ESTADO_USUARIO.ALL}
                        checked={datos.tipoChofer === ESTADO_USUARIO.ALL}
                        value={datos.tipoChofer === ESTADO_USUARIO.ALL}
                        onChange={() => {
                          setDatos((prev) => ({
                            ...prev,
                            tipoChofer:
                              datos.tipoChofer === ESTADO_USUARIO.ALL
                                ? ESTADO_USUARIO.ONLINE
                                : ESTADO_USUARIO.ALL,
                          }));
                        }}
                      />{" "}
                      Todos
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input
                        type="radio"
                        name="choferesOnline"
                        defaultChecked={
                          datos.tipoChofer === ESTADO_USUARIO.ONLINE
                        }
                        checked={datos.tipoChofer === ESTADO_USUARIO.ONLINE}
                        value={datos.tipoChofer === ESTADO_USUARIO.ONLINE}
                        onChange={(e) => {
                          setDatos((prev) => ({
                            ...prev,
                            tipoChofer:
                              datos.tipoChofer === ESTADO_USUARIO.ALL
                                ? ESTADO_USUARIO.ONLINE
                                : ESTADO_USUARIO.ALL,
                          }));
                        }}
                      />{" "}
                      Conectados
                    </Label>
                  </FormGroup>
                </FormGroup>
                <FormGroup style={{ width: "100%" }}>
                  <Label for="mensajeChofer">Enviar mensaje: </Label>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "20px",
                    }}
                  >
                    <Input
                      style={{ width: "100%" }}
                      type="text"
                      name="mensajeChofer"
                      id="mensajeChofer"
                      className={"form-control"}
                      value={datos.mensajeChofer}
                      onChange={(value) => {
                        const abc = datos;
                        abc["mensajeChofer"] = value.target.value;
                        setDatos({ ...abc });
                      }}
                    />
                    <Button
                      color="primary"
                      onClick={() => {
                        notificar({
                          tipo: TIPO_USUARIO.CHOFER,
                          mensaje: datos.mensajeChofer,
                        });
                      }}
                    >
                      Enviar
                    </Button>
                  </div>
                </FormGroup>
              </div>
            </CardBody>
          </Card>
          <Card style={{ width: "100%" }}>
            <CardHeader>
              <CardTitle className="iq-header-title">
                <Row>
                  <Col lg="6">
                    <h4 className="card-title">Pasajeros</h4>
                  </Col>
                  <Col
                    lg="6"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "end",
                      justifyContent: "end",
                    }}
                  >
                    <Button
                      color="primary"
                      onClick={() => {
                        listar({
                          tipo: TIPO_USUARIO.PASAJERO,
                          usuarios: datos.tipoPasajero,
                        });
                      }}
                    >
                      Mostrar
                    </Button>
                  </Col>
                </Row>
              </CardTitle>
            </CardHeader>
            <CardBody>
              <div
                className="row"
                style={{ padding: "0 20px", width: "100%", margin: 0 }}
              >
                <FormGroup style={{ marginBottom: "20px" }}>
                  <Label for="typePasajeros">Usuarios: </Label>
                  <FormGroup check id="typePasajeros">
                    <Label check>
                      <Input
                        type="radio"
                        name="pasajerosAll"
                        defaultChecked={
                          datos.tipoPasajero === ESTADO_USUARIO.ALL
                        }
                        value={datos.tipoPasajero === ESTADO_USUARIO.ALL}
                      />{" "}
                      Pasajeros
                    </Label>
                  </FormGroup>
                </FormGroup>
                <FormGroup style={{ width: "100%" }}>
                  <Label for="mensajePasajero">Enviar mensaje: </Label>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "20px",
                    }}
                  >
                    <Input
                      style={{ width: "100%" }}
                      type="text"
                      name="mensajePasajero"
                      id="mensajePasajero"
                      className={"form-control"}
                      value={datos.mensajePasajero}
                      onChange={(value) => {
                        const abc = datos;
                        abc["mensajePasajero"] = value.target.value;
                        setDatos({ ...abc });
                      }}
                    />
                    <Button
                      color="primary"
                      onClick={() => {
                        notificar({
                          tipo: TIPO_USUARIO.PASAJERO,
                          mensaje: datos.mensajePasajero,
                        });
                      }}
                    >
                      Enviar
                    </Button>
                  </div>
                </FormGroup>
              </div>
            </CardBody>
          </Card>
        </div>
        <Card style={{ margin: "20px 0 0 0" }}>
          <CardHeader>
            <CardTitle className="iq-header-title">
              <Row>
                <Col lg="6">
                  <h4 className="card-title">{usuarios.length} Usuarios</h4>
                </Col>
              </Row>
            </CardTitle>
          </CardHeader>
          <CardBody>
            <div style={{ padding: "0 10px 0 0", width: "100%" }}>
              {/* <ReactDatatable
                config={config}
                records={usuarios || []}
                columns={columns}
                loading={loading}
                style={{ width: "100%" }}
              /> */}
              <TableStrap
                config={config}
                records={usuarios}
                columns={columns}
                loading={loading}
              />
            </div>
          </CardBody>
        </Card>
      </div>
      <ToastContainer pauseOnHover={false} />
    </div>
  );
};
export default MensajeriaGlobal;
