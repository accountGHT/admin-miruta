import axios from "axios";
import React from "react";
import { Row } from "react-bootstrap";
import {
  Button,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import { backendMiRuta } from "../../../../config/backend";

const suspender = async ({
  agregarSuspension,
  dataEditar,
  toast,
  traerDatos,
  setModalDetalles,
}) => {
  toast.promise(
    async () => {
      if (agregarSuspension) {
        await axios.put(
          backendMiRuta +
            "admin/chofer/agregarSuspensionChofer/" +
            dataEditar.idUsuario
        );
      } else {
        await axios.put(
          backendMiRuta +
            "admin/chofer/quitarSuspensionChofer/" +
            dataEditar.idUsuario
        );
      }
      traerDatos();
      setModalDetalles(false);
    },
    {
      pending: "Modificando datos...",
      success: "Los datos se modificaron correctamente",
      error: "Por favor, vuelva a intentar",
    },
    {
      theme: "colored",
    }
  );
};
const comision = async ({
  agregar,
  dataEditar,
  toast,
  traerDatos,
  setModalDetalles,
}) => {
  toast.promise(
    async () => {
      if (agregar) {
        await axios.put(
          backendMiRuta + "admin/chofer/agregarComision/" + dataEditar.idUsuario
        );
      } else {
        await axios.put(
          backendMiRuta +
            "admin/chofer/exonerarComision/" +
            dataEditar.idUsuario
        );
      }
      traerDatos();
      setModalDetalles(false);
    },
    {
      pending: "Modificando datos...",
      success: "Los datos se modificaron correctamente",
      error: "Por favor, vuelva a intentar",
    },
    {
      theme: "colored",
    }
  );
};

const ModalDetalles = (props) => {
  const { modalDetalles, setModalDetalles, dataEditar, toast, traerDatos } =
    props;
  console.log(dataEditar);

  return (
    <Modal
      isOpen={modalDetalles}
      toggle={() => setModalDetalles(false)}
      className="modal-dialog-scrollable modal-dialog-centered"
    >
      <ModalHeader toggle={() => setModalDetalles(false)}>
        Detalles del Chofer
      </ModalHeader>
      <ModalBody>
        {dataEditar ? (
          <ModalBody>
            <Row>
              <FormGroup style={{ marginLeft: "15px", width: "20%" }}>
                <Label for="dni">DNI</Label>
                <Input
                  type="text"
                  name="dni"
                  id="dni"
                  className={"form-control"}
                  disabled
                  value={dataEditar.id}
                />
              </FormGroup>
              <FormGroup style={{ marginLeft: "15px", width: "70%" }}>
                <Label for="nombre">Nombre</Label>
                <Input
                  type="text"
                  name="nombreCompleto"
                  id="nombreCompleto"
                  className={"form-control"}
                  disabled
                  value={dataEditar.nombreCompleto}
                />
              </FormGroup>
            </Row>
            <FormGroup>
              <Label for="correoElectronico">Correo Electronico</Label>
              <Input
                type="email"
                name="correoElectronico"
                id="correoElectronico"
                className={"form-control"}
                disabled
                value={dataEditar.correoElectronico}
              />
            </FormGroup>
            <FormGroup>
              <Label for="direccion">Direccion</Label>
              <Input
                type="text"
                name="direccion"
                id="direccion"
                className={"form-control"}
                disabled
                value={dataEditar.direccion}
              />
            </FormGroup>
            <Row>
              <FormGroup style={{ marginLeft: "15px", width: "45%" }}>
                <Label for="celular">Celular</Label>
                <Input
                  type="number"
                  name="celular"
                  id="celular"
                  className={"form-control"}
                  disabled
                  value={dataEditar.celular}
                />
              </FormGroup>
              <FormGroup style={{ marginLeft: "15px", width: "45%" }}>
                <Label for="telefono">Telefono</Label>
                <Input
                  type="text"
                  name="telefono"
                  id="telefono"
                  className={"form-control"}
                  disabled
                  value={dataEditar.telefono}
                />
              </FormGroup>
            </Row>
            <Row>
              <FormGroup style={{ marginLeft: "15px", width: "20%" }}>
                <Label for="sexo">Sexo</Label>
                {dataEditar.sexo == 1 ? (
                  <FormGroup disabled>
                    <FormGroup check disabled>
                      <Label check>
                        <Input type="radio" name="radio1" disabled value="2" />{" "}
                        Mujer
                      </Label>
                    </FormGroup>
                    <FormGroup check disabled>
                      <Label check>
                        <Input
                          type="radio"
                          name="radio1"
                          defaultChecked
                          disabled
                          value="1"
                        />{" "}
                        Varón
                      </Label>
                    </FormGroup>
                  </FormGroup>
                ) : (
                  <FormGroup>
                    <FormGroup check disabled>
                      <Label check>
                        <Input
                          type="radio"
                          name="radio1"
                          defaultChecked
                          disabled
                          value="2"
                        />{" "}
                        Mujer
                      </Label>
                    </FormGroup>
                    <FormGroup check disabled>
                      <Label check>
                        <Input type="radio" name="radio1" disabled value="1" />{" "}
                        Varón
                      </Label>
                    </FormGroup>
                  </FormGroup>
                )}
              </FormGroup>
              <FormGroup style={{ marginLeft: "15px", width: "70%" }}>
                <Label for="fechaNacimiento">Fecha de Nacimiento</Label>
                <Input
                  type="date"
                  name="fechaNacimiento"
                  id="fechaNacimiento"
                  className={"form-control"}
                  disabled
                  value={dataEditar.fechaNacimiento}
                />
              </FormGroup>
            </Row>
            <Row>
              {dataEditar.penalidad === null ? (
                <Button
                  color="warning"
                  onClick={() => {
                    suspender({
                      agregarSuspension: true,
                      dataEditar,
                      toast,
                      traerDatos,
                      setModalDetalles,
                    });
                    traerDatos();
                  }}
                >
                  Suspender
                </Button>
              ) : (
                <Button
                  color="warning"
                  onClick={() => {
                    suspender({
                      agregarSuspension: false,
                      dataEditar,
                      toast,
                      traerDatos,
                      setModalDetalles,
                    });
                    traerDatos();
                  }}
                >
                  Quitar suspensión
                </Button>
              )}
            </Row>
            <Row style={{ marginTop: "20px" }}>
              {dataEditar.flagComisionUsuario === "0" ? (
                <Button
                  color="warning"
                  onClick={() => {
                    comision({
                      agregar: true,
                      dataEditar,
                      toast,
                      traerDatos,
                      setModalDetalles,
                    });
                    traerDatos();
                  }}
                >
                  Agregar comisión
                </Button>
              ) : (
                <Button
                  color="warning"
                  onClick={() => {
                    comision({
                      agregar: false,
                      dataEditar,
                      toast,
                      traerDatos,
                      setModalDetalles,
                    });
                    traerDatos();
                  }}
                >
                  Exonerar comisión
                </Button>
              )}
            </Row>
          </ModalBody>
        ) : null}
        {/* //TODO:  validar si no es null   no input para observaciones      */}
        {console.log(dataEditar.observaciones)}
        {dataEditar.observaciones === null ? null : (
          <FormGroup style={{ padding: " 0 20px 0 20px " }}>
            <Label>
              <b>Observaciones:</b>
            </Label>
            {/* <div style={{ backgroundColor: "#f08080", color: "white", padding: "10px 10px 0 10px" }}> */}
            <div>
              <i>
                <Label>"{dataEditar.observaciones}"</Label>
              </i>
            </div>
            {/* </div> */}
          </FormGroup>
        )}
      </ModalBody>

      <ModalFooter>
        <Button color="secondary" onClick={() => setModalDetalles(false)}>
          Cancelar
        </Button>
      </ModalFooter>
    </Modal>
  );
};
export default ModalDetalles;
