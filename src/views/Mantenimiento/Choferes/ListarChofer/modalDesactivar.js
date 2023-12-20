import axios from "axios";
import React, { useState } from "react";
import { Button, FormGroup, Label, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { backend } from "../../../../config/backend";

const ModalDesactivar = (props) => {
    const { setModalDesactivar, modalDesactivar, dataEditar, toast, traerDatos } = props;
    const [btnRechazar, setBtnRechazar] = useState(true);
    const [observacion, setObservacion] = useState("")
    console.log(dataEditar,"data del inedx");
    const btnDesactivar = async (dataEditar, observacion) => {

        setBtnRechazar(true);
        if(dataEditar.estado === "2"){
            toast.promise(() => desactivando(dataEditar,observacion), {
            pending: 'desactivando',
            success: "se desactivo con exito",
            error: "Por favor, vuelva a intentar"
          }, {  
            theme: 'colored'
          });
        }else {
            toast.promise(() => desactivando(dataEditar,observacion), {
                pending: 'Activando',
                success: "se activo con exito",
                error: "Por favor, vuelva a intentar"
              }, {  
                theme: 'colored'
              });
        }
        
    }

    const desactivando = async (dataEditar,observacion) => {
        const datos = new FormData();
        datos.append('idChofer', dataEditar.idChofer);
        datos.append('observaciones', observacion);
        const respuesta = await axios.post(backend + 'deactivateChofer', datos);
        traerDatos();
      }

    return (
        <Modal
            isOpen={modalDesactivar}
            toggle={() => setModalDesactivar(false)}
            className="modal-dialog-scrollable modal-dialog-centered"
        >
            <ModalHeader toggle={() => setModalDesactivar(false)}>
                ¿Esta seguro que desea  { dataEditar.estado === "2" ? "desactivar" : "activar" } al Chofer?
            </ModalHeader>
            <ModalBody>
                <p>
                    Comente los motivos por el cual se  { dataEditar.estado === "2" ? "desactivara al Chofer" : "activara al Chofer" }
                </p>
                <FormGroup className="form-group">
                    <Label for="MotivoRechazo">Ingrese un motivo</Label>
                    <textarea className="form-control" id="validationTextarea"
                        placeholder="Minimo 20 caracteres" required style={{ lineHeight: "inherit" }} rows={4} onChange={(event) => {
                            if (event.target.value !== "" && event.target.value.trim().length > 20) {
                                setBtnRechazar(false);
                                setObservacion(event.target.value);
                            } else {
                                setBtnRechazar(true);
                            }
                        }} />
                </FormGroup>
            </ModalBody>
            <ModalFooter>
                <div className="container px-3" style={{ display: "flex", justifyContent: "flex-end" }}>
                    <Button color="danger" onClick={async () => {
                        await btnDesactivar(dataEditar, observacion, setBtnRechazar);
                        setModalDesactivar(false);
                    }} disabled={btnRechazar}>
                       { dataEditar.estado === "2" ? "Rechazar Chofer" : "Activar Chofer" }
                    </Button>
                </div>
            </ModalFooter>
        </Modal>
    );
};

export default ModalDesactivar;
