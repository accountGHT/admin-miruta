import React, { useState } from "react";
import { Input, Label, ModalHeader, ModalBody, ModalFooter, Modal, Button, FormGroup } from "reactstrap";
import axios from "axios";
import { backend } from "../../../config/backend";

const ModalEditar = (props) => {

    const { cambioModal, mostrarModal, datosEditar, traerDatos, toast } = props;
    const [cambioPass, setCambioPass] = useState(false);
    const [datos, setDatos] = useState({
        nombre: datosEditar.nombre,
        apellidos: datosEditar.apellidos,
        email: datosEditar.email,
        celular: datosEditar.celular,
        dni: datosEditar.dni,
        pass: "",
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
        const data = new FormData();
        data.append('dni', datos.dni.trim());
        data.append('nombre', datos.nombre.trim());
        data.append('apellidos', datos.apellidos.trim());
        data.append('celular', datos.celular.trim());
        data.append('email', datos.email.trim());
        data.append('clave', datos.pass.trim());

        const respuesta = await axios.post(backend + "udpdateEmpleado", data);
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
                Editar Usuario
            </ModalHeader>
            <ModalBody>
                <FormGroup>
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
                        disabled={!cambioPass}
                        value={datos.pass}
                        onChange={(value) => {
                            const abc = datos;
                            abc["pass"] = value.target.value;
                            setDatos({ ...abc });
                        }}
                    />
                </FormGroup>
                <FormGroup className={"mb-3"} check>
                    <Label check>
                        <Input
                            type="checkbox"
                            defaultChecked={cambioPass}
                            onChange={() => {
                                setCambioPass(!cambioPass);
                                if (cambioPass) {
                                    const abc = datos;
                                    abc["pass"] = "";
                                    setDatos({ ...abc });
                                }
                            }}
                        />{" "}
                        Cambiar Contraseña
                    </Label>
                </FormGroup>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" disabled={!btnEstado} onClick={() => {
                    guardarDatos(datos);
                }}>
                    Guardar cambios
                </Button>
                <Button color="secondary" onClick={() => cambioModal("modalEditar")}>
                    Cancelar
                </Button>
            </ModalFooter>
        </Modal>
    );
};
export default ModalEditar;