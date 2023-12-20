import axios from "axios";
import React, { useState } from "react";
import { Label, Modal, ModalHeader, ModalBody, ModalFooter, Button, Input, FormGroup, Row } from "reactstrap";
import { backend } from "../../../config/backend";

const ModalEditar = (props) => {
  const { cambioModal, mostrarModal, datosEditar, traerDatos, toast } = props;

  const [datos, setDatos] = useState({
    ...datosEditar
  });
  const [btnEstado, setBtnEstado] = useState(true);

  const guardarDatos = async (datos) => {
   
    setBtnEstado(false);
    toast.promise(() => editando(datos), {
      pending: 'Editando usuario',
      success: 'El usuario se editó',
      error: 'Por favor, vuelva a intentar'
    }, {
      theme: 'colored'
    });
  };

  const editando = async (datos) => {
    console.log(datos);
    const data = new FormData();
    data.append("id", datos.id.trim());
    data.append("dni", datos.dni.trim());
    data.append("nombre", datos.nombre.trim());
    data.append("apellidoPaterno", datos.apellidoPaterno.trim());
    data.append("apellidoMaterno", datos.apellidoMaterno.trim());
    data.append("celular", datos.celular.trim());
    data.append("telefono", datos.telefono.trim());
    data.append("email", datos.correoElectronico.trim());
    data.append("direccion", datos.direccion.trim());
    data.append("sexo", datos.sexo);

    const respuesta = await axios.post(backend + "updateCliente", data);
    await traerDatos();
    cambioModal("modalEditar");
  }

  return (
    <Modal
      isOpen={mostrarModal["modalEditar"]}
      toggle={() => cambioModal("modalEditar")}
      className="modal-dialog-scrollable modal-dialog-centered"
    >
      <ModalHeader toggle={() => cambioModal("modalEditar")}>
        Editar Cliente
      </ModalHeader>

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
              value={datos.dni}
            />
          </FormGroup>
          <FormGroup style={{ marginLeft: "15px", width: "70%" }}>
            <Label for="nombre">Nombre</Label>
            <Input
              type="text"
              name="nombre"
              id="nombre"
              className={"form-control"}
              value={datos.nombre}
              onChange={(value) => {
                const abc = datosEditar;
                abc["nombre"] = value.target.value;
                setDatos({ ...abc });
              }}
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
              value={datos.apellidoPaterno}
              onChange={(value) => {
                const abc = datosEditar;
                abc["apellidoPaterno"] = value.target.value;
                setDatos({ ...abc });
              }}
            />
          </FormGroup>
          <FormGroup style={{ marginLeft: "15px", width: "45%" }}>
            <Label for="apellidoMaterno">Apellido Materno</Label>
            <Input
              type="text"
              name="apellidoMaterno"
              id="apellidoMaterno"
              className={"form-control"}
              value={datos.apellidoMaterno}
              onChange={(value) => {
                const abc = datosEditar;
                abc["apellidoMaterno"] = value.target.value;
                setDatos({ ...abc });
              }}
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
            value={datos.correoElectronico}
          />
        </FormGroup>
        <FormGroup>
          <Label for="direccion">Direccion</Label>
          <Input
            type="text"
            name="direccion"
            id="direccion"
            className={"form-control"}
            value={datos.direccion}
            onChange={(value) => {
              const abc = datosEditar;
              abc["direccion"] = value.target.value;
              setDatos({ ...abc });
            }}
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
              value={datos.celular}
            />
          </FormGroup>
          <FormGroup style={{ marginLeft: "15px", width: "45%" }}>
            <Label for="telefono">Telefono</Label>
            <Input
              type="text"
              name="telefono"
              id="telefono"
              className={"form-control"}
              value={datos.telefono}
              onChange={(value) => {
                const abc = datosEditar;
                abc["telefono"] = value.target.value;
                setDatos({ ...abc });
              }}
            />
          </FormGroup>
        </Row>
        <Row>
          <FormGroup style={{ marginLeft: "15px", width: "20%" }}>
            <Label for="sexo">Sexo</Label>
            {datosEditar.sexo == 1 ? (
              <FormGroup onChange={(value) => {
                const abc = datosEditar;
                abc["sexo"] = value.target.value;
                setDatos({ ...abc });
              }}>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="sexo" value="2" /> Mujer
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="radio"
                      name="sexo"
                      defaultChecked
                      value="1"
                    />{" "}
                    Varón
                  </Label>
                </FormGroup>
              </FormGroup>
            ) : (
              <FormGroup onChange={(value) => {
                const abc = datosEditar;
                abc["sexo"] = value.target.value;
                setDatos({ ...abc });
              }}>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="radio"
                      name="sexo"
                      defaultChecked
                      value="2"
                    />{" "}
                    Mujer
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="sexo" value="1" /> Varón
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
              value={datos.fechaNacimiento}
              onChange={(value) => {
                console.log(value.target.value);
                const abc = datosEditar;
                abc["fechaNacimiento"] = value.target.value;
                setDatos({ ...abc });
              }}
            />
          </FormGroup>
        </Row>
      </ModalBody>
      <ModalFooter>
        <Button
          color="primary"
          disabled={!btnEstado} 
          onClick={() => guardarDatos(datos)  }
        >
          Guardar cambios
        </Button>{" "}
        <Button color="secondary" onClick={() => cambioModal("modalEditar")}>
          Cancelar
        </Button>
      </ModalFooter>
    </Modal>
  );
};
export default ModalEditar;
