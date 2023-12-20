import axios from "axios";
import React, { useState } from "react";
import { Modal, Row, Card, Button, CardTitle, Input, Col, Label } from "reactstrap";
import { backend } from "../../../../../config/backend";

const ModalEditar = (props) => {
    const { modalEditar, setModalEditar, dataEnviar, toast, traerDatos } = props;
    const [datos, setDatos] = useState({
        ...dataEnviar
    });
    const [btnEstado, setBtnEstado] = useState(true);

    const guardarDatos = async (datos) => {
        setBtnEstado(false);
        toast.promise(() => editando(datos), {
            pending: 'Editando Marca',
            success: 'La marca se Editó',
            error: 'Por favor, vuelva a intentar'
        }, {
            theme: 'colored'
        });
    }

    const editando = async (datos) => {
        const data = new FormData();
        data.append("id", datos.id.trim());
        data.append("modelo", datos.modelo.trim());
        console.log(datos.modelo.trim());
        const respuesta = await axios.post(backend + "updateModelo", data);
        await traerDatos();
        setModalEditar(false);
    }


    return (
        <Modal
            isOpen={modalEditar}
            toggle={() => setModalEditar(false)}
            className="modal-dialog-centered"
        >
            <Card body >
                <CardTitle tag="h5" style={{ paddingBottom: "20px" }}>Editar Modelo</CardTitle>
                <Row>
                    <Col>
                    <Label>Marca</Label>
                    <Input type="text" placeholder="Nombre de la marca" disabled
                    value={datos.Marca}
                ></Input>
                    </Col>
                    <Col>
                    <Label>Modelo</Label>
                        <Input type="text" placeholder="Nombre de la marca"
                            value={datos.modelo}
                            onChange={(value) => {
                                const abc = datos;
                                abc["modelo"] = value.target.value;
                                setDatos({ ...abc });
                            }}
                        ></Input>
                    </Col>
                </Row>

                <Row style={{ padding: "20px 20px 0 20px" }}>
                    <Button color="info" block disabled={!btnEstado} onClick={() => guardarDatos(datos)}>Modificar</Button>
                </Row>
            </Card>
        </Modal>
    );
};

export default ModalEditar;
