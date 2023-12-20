import React, { useState } from "react";
import { Input, Label, ModalHeader, ModalBody, ModalFooter, Modal, Button, FormGroup } from "reactstrap";
import axios from "axios";
import { backend } from "../../../config/backend";

const ModalAgregar = (props) => {
  const { cambioModal, mostrarModal, traerDatos, toast } = props;


  const [btnEstado, setBtnEstado] = useState(true);
  const [datos, setDatos] = useState({
    nombre: "",
    apellidos: "",
    email: "",
    celular: "",
    dni: "",
    pass: "",
    validated: false,
  });

  const guardarDatos = async (datos) => {

    setBtnEstado(false);
    if (datos.dni.length === 8) {
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

      if (reg.test(datos.email) === true) {
        const abc = datos;
        setDatos({ ...abc });

        if (datos.celular.length === 9) {
          const abc = datos;
          abc["validated"] = true;
          setDatos({ ...abc });

          if ((datos.nombre.length > 0) && (datos.apellidos.length > 0) && (datos.pass.length > 0)) {
            toast.promise(() => guardando(datos), {
              pending: 'Registrando usuario',
              success: 'El usuario se resgistro con exito',
              error: 'Por favsor, vuelva a intentar'
            }, {
              theme: 'colored'
            });
          } else {
            toast("¡Rellene todo los datos!");
            setBtnEstado(true);
          }

        } else {
          toast("¡Numero Telefonico no Valido!");
          setBtnEstado(true);
        }
      } else {
        const abc = datos;
        abc["validated"] = false;
        setDatos({ ...abc });
        toast("¡Correo no Valido!");
        setBtnEstado(true);
      }
    } else {
      toast("¡DNI no valido!");
      setBtnEstado(true);
    }

  };

  const guardando = async (datos) => {
    const data = new FormData();
    data.append("dni", datos.dni.trim());
    data.append("nombre", datos.nombre.trim());
    data.append("apellidos", datos.apellidos.trim());
    data.append("celular", datos.celular.trim());
    data.append("email", datos.email.trim());
    data.append("clave", datos.pass.trim());

    const respuesta = await axios.post(backend + "registroEmpleado", data);
    setDatos({
      nombre: "",
      apellidos: "",
      email: "",
      celular: "",
      dni: "",
      pass: "",
    });
    await traerDatos();
    cambioModal("modalAgregar");
  }

  return (
    <Modal
      isOpen={mostrarModal["modalAgregar"]}
      toggle={() => cambioModal("modalAgregar")}
      className="modal-dialog-scrollable modal-dialog-centered"
    >
      <ModalHeader toggle={() => cambioModal("modalAgregar")}>
        Agregar nuevo Administrador
      </ModalHeader>
      <ModalBody>
        <FormGroup>
          <Label for="dni">DNI</Label>
          <Input
            type="number"
            name="dni"
            id="dni"
            className={"form-control"}
            value={datos.dni}
            onChange={(value) => {
              const abc = datos;
              abc["dni"] = value.target.value;
              setDatos({ ...abc });
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label for="nombre">Nombre</Label>
          <Input
            type="text"
            name="nombre"
            id="nombre"
            className={"form-control"}
            value={datos.nombre}
            onChange={(value) => {
              const abc = datos;
              abc["nombre"] = value.target.value;
              setDatos({ ...abc });
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label for="apellidos">Apellidos</Label>
          <Input
            type="text"
            name="apellidos"
            id="apellidos"
            className={"form-control"}
            value={datos.apellidos}
            onChange={(value) => {
              const abc = datos;
              abc["apellidos"] = value.target.value;
              setDatos({ ...abc });
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Correo Electronico</Label>
          <Input
            type="email"
            name="email"
            id="email"
            className={"form-control"}
            value={datos.email}
            onChange={(value) => {
              const abc = datos;
              abc["email"] = value.target.value;
              setDatos({ ...abc });
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label for="celular">Celular</Label>
          <Input
            type="number"
            name="celular"
            id="celular"
            className={"form-control"}
            value={datos.celular}
            onChange={(value) => {
              const abc = datos;
              abc["celular"] = value.target.value;
              setDatos({ ...abc });
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label for="pass">Contraseña</Label>
          <Input
            type="password"
            name="pass"
            id="pass"
            className={"form-control"}
            value={datos.pass}
            onChange={(value) => {
              const abc = datos;
              abc["pass"] = value.target.value;
              setDatos({ ...abc });
            }}
          />
        </FormGroup>
      </ModalBody>
      <ModalFooter>
        <Button
          color="primary"
          disabled={!btnEstado}
          onClick={() => {guardarDatos(datos) }}
        >
          Guardar cambios
        </Button>{" "}
        <Button color="secondary" onClick={() => cambioModal("modalAgregar")}>
          Cancelar
        </Button>
      </ModalFooter>
    </Modal>
  );
};


export default ModalAgregar;
