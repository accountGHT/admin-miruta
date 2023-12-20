import axios from "axios";
import React, { useState } from "react";
import { Modal, Row, Card, Button, Col } from "reactstrap";
import { backend } from "../../config/backend";

const ModalDesactivar = (props) => {

    const { modalDesactivar, setModalDesactivar, dataEnviar, traerDatos, desactivar, toast } = props;
    const [datos, setDatos] = useState({
        ...dataEnviar
    });
    console.log(datos);
    const [btnEstado, setBtnEstado] = useState(true);

    const Desactivar = async (datos) => {
        setBtnEstado(false);
        toast.promise(() => desactivando(datos), {
            pending: desactivar ? 'Desactivando funcionalidad' : 'Activando funcionalidad',
            success: desactivar ? 'La funcionalidad se desactivo con exito' : 'La funcionalidad se Activo con exito',
            error: 'Por favor, vuelva a intentar'
        }, {
            theme: 'colored'
        });
    }

    const desactivando = async (datos) => {
        const data = new FormData();
        data.append('idFuncionalidades', datos.idFuncionalidades);
        const respuesta = await axios.post(backend + 'deactivateFuncionalidad', data);
        setModalDesactivar(false);
        traerDatos();
    }
    return (
        <Modal
            isOpen={modalDesactivar}
            toggle={() => setModalDesactivar(false)}
            className="modal-dialog-centered"
        >
            <Card body >
                <Row style={{ margin: "50px", textAlign: "center" }}>
                    <h3>¿Esta seguro que desea {desactivar ? <span style={{ color: "red" }}>DESACTIVAR</span> : <span style={{ color: "red" }}>ACTIVAR</span>} la funcionalidad  {datos.tipoFuncionalidad}?</h3>
                </Row>
                <Row style={{ padding: "20px 20px 0 20px" }}>
                    <Col>
                        <Button color="info" block onClick={() => setModalDesactivar(false)}>Cancelar</Button>
                    </Col>
                    <Col>
                        <Button color="danger" disabled={!btnEstado} block onClick={() => Desactivar(datos)}>Aceptar</Button>
                    </Col>
                </Row>
            </Card>
        </Modal>
    );
};

export default ModalDesactivar;
