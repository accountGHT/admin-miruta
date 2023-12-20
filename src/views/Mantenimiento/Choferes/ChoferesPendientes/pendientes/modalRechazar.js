import axios from "axios";
import React, { useState } from "react";
import {
  Button,
  FormGroup,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import { backend } from "../../../../../config/backend";

const ModalRechazar = (props) => {
  const { setModalRechazados, modalRechazados, data, toast, traerListaDatos } =
    props;
  const [btnRechazar, setBtnRechazar] = useState(true);
  const [observacion, setObservacion] = useState("");

  const rechazar = async (data, observacion) => {
    setBtnRechazar(true);
    toast.promise(
      () => rechazando(data, observacion),
      {
        pending: "Rechazaando al chofer",
        success: "El chofer a sido rechazado",
        error: "Por favor, vuelva a intentar",
      },
      {
        theme: "colored",
      }
    );
    traerListaDatos();
  };

  const rechazando = async (data, observacion) => {
    const datos = new FormData();
    datos.append("idChofer", data.idChofer);
    datos.append("observaciones", observacion);
    const respuesta = await axios.post(backend + "rechazarPendientes", datos);
    setModalRechazados(false);
    traerListaDatos();
  };
  return (
    <Modal
      isOpen={modalRechazados}
      toggle={() => setModalRechazados(false)}
      className="modal-dialog-scrollable modal-dialog-centered"
    >
      <ModalHeader toggle={() => setModalRechazados(false)}>
        ¿Esta seguro que desea rechazar al Chofer?
      </ModalHeader>
      <ModalBody>
        <p>
          Un chofer rechazado no podra volver a postular, para ello tendra que
          crearse una nueva cuenta.
        </p>
        <FormGroup className="form-group">
          <Label for="MotivoRechazo">Ingrese un motivo</Label>
          <textarea
            className="form-control"
            id="validationTextarea"
            placeholder="Minimo 20 caracteres"
            style={{ lineHeight: "inherit" }}
            required
            rows={4}
            onChange={(event) => {
              if (
                event.target.value !== "" &&
                event.target.value.trim().length > 20
              ) {
                setBtnRechazar(false);
                setObservacion(event.target.value);
              } else {
                setBtnRechazar(true);
              }
            }}
          />
        </FormGroup>
      </ModalBody>
      <ModalFooter>
        <div
          className="container px-3"
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <Button
            color="danger"
            onClick={async () => {
              await rechazar(data, observacion);
              setModalRechazados(false);
            }}
            disabled={btnRechazar}
          >
            Rechazar Chofer
          </Button>
        </div>
      </ModalFooter>
    </Modal>
  );
};

export default ModalRechazar;
