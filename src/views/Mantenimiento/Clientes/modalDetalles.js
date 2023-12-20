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

const ModalDetalles = (props) => {
  const { cambioModal, mostrarModal, datosEditar } = props;

  console.log(datosEditar, "datos del index");

  const estilo1 = {
    // marginTop: "10px",
    paddingLeft: "20px",
    fontSize: "20px",
    fontWeight: "500",
  };
  const estilo2 = {
    // marginTop: "10px",
    paddingLeft: "20px",
    fontSize: "20px",
    // fontWeight: "500",
  };

  return (
    <Modal
      isOpen={mostrarModal["modalDetalles"]}
      toggle={() => cambioModal("modalDetalles")}
      className="modal-dialog-scrollable modal-dialog-centered"
    >
      <ModalHeader toggle={() => cambioModal("modalDetalles")}>
        Detalles del cliente
      </ModalHeader>
      <ModalBody>
        {datosEditar ? (
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
                  value={datosEditar.dni}
                />
              </FormGroup>
              <FormGroup style={{ marginLeft: "15px", width: "70%" }}>
                <Label for="nombre">Nombre</Label>
                <Input
                  type="text"
                  name="nombre"
                  id="nombre"
                  className={"form-control"}
                  disabled
                  value={datosEditar.nombre}
                />
              </FormGroup>
            </Row>
            <Row>
              <FormGroup style={{ marginLeft: "15px", width: "45%" }}>
                <Label for="apellidoPaterno">Apellido Paterno</Label>
                <Input
                  type="text"
                  name="apellidoPaterno"
                  id="apellidoPaterno"
                  className={"form-control"}
                  disabled
                  value={datosEditar.apellidoPaterno}
                />
              </FormGroup>
              <FormGroup style={{ marginLeft: "15px", width: "45%" }}>
                <Label for="apellidoMaterno">Apellido Materno</Label>
                <Input
                  type="text"
                  name="apellidoMaterno"
                  id="apellidoMaterno"
                  className={"form-control"}
                  disabled
                  value={datosEditar.apellidoMaterno}
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
                value={datosEditar.correoElectronico}
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
                value={datosEditar.direccion}
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
                  value={datosEditar.celular}
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
                  value={datosEditar.telefono}
                />
              </FormGroup>
            </Row>
            <Row>
              <FormGroup style={{ marginLeft: "15px", width: "20%" }}>
                <Label for="sexo">Sexo</Label>
                {datosEditar.sexo == 1 ? (
              <FormGroup disabled>
                <FormGroup check disabled>
                  <Label check>
                    <Input type="radio" name="radio1" disabled value="2" /> Mujer
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
                    <Input type="radio" name="radio1" disabled value="1" /> Varón
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
                  value={datosEditar.fechaNacimiento}
                />
              </FormGroup>
            </Row>
          </ModalBody>
        ) : null}
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={() => cambioModal("modalDetalles")}>
          Aceptar
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ModalDetalles;
