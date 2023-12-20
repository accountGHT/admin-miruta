import axios from "axios";
import React, { useState } from "react";
import {Modal,Row,Card,Button,CardTitle,Input,Label,Col} from "reactstrap";
import { backend } from "../../../config/backend";

const ModalEditar = (props) => {
    const { modalEditar, setModalEditar, dataEnviar, traerDatos, toast } = props;
    const [datos, setDatos] = useState({
        ...dataEnviar
    });
    const [btnEstado, setBtnEstado] = useState(true);

    
const guardarDatos = async (datos) => {
    setBtnEstado(false);
    toast.promise(() => editando(datos), {
        pending: 'Editando Comision',
        success: 'La comision se editó conm exito',
        error: 'Por favsor, vuelva a intentar'
    }, {
        theme: 'colored'
    });
}

const editando = async (datos) =>{
    const data = new FormData();
    data.append("id", datos.id.trim());
    data.append("deuda", datos.deudaMaxima.trim());
    data.append("comision", datos.porcentajeComision.trim());
    const respuesta = await axios.post(backend + "updateComision", data);
    setModalEditar(false);
    traerDatos();
}
    
    return (
        <Modal
            isOpen={modalEditar}
            toggle={() => setModalEditar(false)}
            className="modal-dialog-centered"
        >
            <Card body >
                <CardTitle tag="h5" style={{ paddingBottom: "20px" }}>Editar {datos.tipoVehiculo}</CardTitle>
                {/* <Label>Nombre de la marca</Label> */}
                <Row>
                    <Col>
                    <Label>Comision</Label>
                        <Input type="number"
                            value={datos.porcentajeComision}
                            onChange={(value) => {
                                const abc = datos;
                                abc["porcentajeComision"] = value.target.value;
                                setDatos({ ...abc });
                            }}
                        ></Input>
                    </Col>
                    <Col>
                    <Label>Deuda Maxima</Label>
                        <Input type="number"
                            value={datos.deudaMaxima}
                            onChange={(value) => {
                                const abc = datos;
                                abc["deudaMaxima"] = value.target.value;
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
