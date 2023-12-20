
import axios from "axios";
import React, { useState } from "react";
import { Modal, Row, Card, Button, CardTitle, Input } from "reactstrap";
import { backend } from "../../../../../config/backend";

const ModalAgregar = (props) => {
    const { modalAgregar, setModalAgregar, data, toast, traerDatos } = props;
    const [datos, setDatos] = useState({});
    const [btnEstado, setBtnEstado] = useState(true);
console.log(data);
    const guardarDatos = async () => {

        let existe = false;
        if(data !== undefined){
            data.forEach(element => {
                if (element.marca == datos.marca.trim()) {
                    existe = true;
                }
            });
        }
        if (!existe) {
            setBtnEstado(false);
            toast.promise(() => guardando(datos), {
                pending: 'Registrando Marca',
                success: 'La marca se agrego con exito',
                error: 'Por favor, vuelva a intentar'
            }, {
                theme: 'colored'
            });
        } else toast("La Marca ya existe");
    }
    const guardando = async (datos) => {
        const data = new FormData();
        data.append("marca", datos.marca.trim());
        const respuesta = await axios.post(backend + "addMarca", data);
        await traerDatos();
        setModalAgregar(false);
    }

    return (
        <Modal
            isOpen={modalAgregar}
            toggle={() => setModalAgregar(false)}
            className="modal-dialog-centered"
        >
            <Card body >
                <CardTitle tag="h5" style={{ paddingBottom: "20px" }} >Agrega nueva marca</CardTitle>
                <Input type="text" placeholder="Nombre de la marca"

                    onChange={(value) => {
                        const abc = datos;
                        abc["marca"] = value.target.value;
                        setDatos({ ...abc });
                    }}
                ></Input>
                <Row style={{ padding: "20px 20px 0 20px" }}>
                    <Button color="info" block disabled={!btnEstado} onClick={() => guardarDatos()}>Registrar</Button>
                </Row>
            </Card>
        </Modal>
    );
};

export default ModalAgregar;
