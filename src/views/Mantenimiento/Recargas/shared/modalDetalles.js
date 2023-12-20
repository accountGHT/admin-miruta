import axios from "axios";
import React from "react";
import { Row } from "react-bootstrap";
import {
  Button,
  CardImg,
  Col,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import { backendMiRuta } from "../../../../config/backend";
import { useState } from "react";

const cambiarEstado = async ({
  aprobar,
  body,
  toast,
  traerDatos,
  setModalDetalles,
}) => {
  toast.promise(
    async () => {
      if (aprobar) {
        await axios.post(backendMiRuta + "admin/recarga/aprobar", {
          idPersona: body.idPersona,
          idRecarga: body.idRecarga,
          idChofer: body.idChofer,
          billetera: body.billetera,
          monto: body.monto,
        });
      } else {
        await axios.post(backendMiRuta + "admin/recarga/rechazar", {
          idRecarga: body.idRecarga,
        });
      }
      traerDatos();
      setModalDetalles(false);
    },
    {
      pending: "Modificando datos...",
      success: "Los datos se modificaron correctamente",
      error: "Por favor, vuelva a intentar",
    },
    {
      theme: "colored",
    }
  );
};

const ModalDetalles = (props) => {
  const { modalDetalles, setModalDetalles, dataEditar, toast, traerDatos } =
    props;
  const [body, setBody] = useState(dataEditar);

  return (
    <Modal
      isOpen={modalDetalles}
      toggle={() => setModalDetalles(false)}
      className="modal-dialog-scrollable modal-dialog-centered"
    >
      <ModalHeader toggle={() => setModalDetalles(false)}>
        Detalles de la Recarga
      </ModalHeader>
      <ModalBody>
        {dataEditar ? (
          <ModalBody>
            <div
              style={{
                float: "left",
                paddingLeft: "25px",
                width: "50%",
              }}
            >
              <Col>
                <CardImg
                  alt={"recarga" + dataEditar.billetera + dataEditar.idRecarga}
                  src={dataEditar.imagenCaptura}
                  style={{
                    height: "100%",
                  }}
                  width="100%"
                />
              </Col>
            </div>

            <div style={{ width: "50%", float: "left" }}>
              <Col>
                <Row>
                  <FormGroup style={{ marginLeft: "15px", width: "70%" }}>
                    <Label for="nombre">Nombre</Label>
                    <Input
                      type="text"
                      name="nombreCompleto"
                      id="nombreCompleto"
                      className={"form-control"}
                      disabled
                      value={dataEditar.nombreCompleto}
                    />
                  </FormGroup>
                </Row>
                <Row>
                  <FormGroup style={{ marginLeft: "15px", width: "50%" }}>
                    <Label for="billetera">Billetera</Label>
                    <Input
                      type="text"
                      name="billetera"
                      id="billetera"
                      className={"form-control"}
                      disabled
                      value={dataEditar.billetera}
                    />
                  </FormGroup>
                  <FormGroup style={{ marginLeft: "10px", width: "18%" }}>
                    <CardImg
                      alt={"billetera" + dataEditar.billetera}
                      src={dataEditar.logoBilletera}
                      style={{
                        marginTop: 30,
                        height: 50,
                      }}
                    />
                  </FormGroup>
                </Row>
                <Row>
                  <FormGroup style={{ marginLeft: "15px", width: "70%" }}>
                    <Label for="monto">Monto</Label>
                    <Input
                      type="number"
                      name="monto"
                      id="monto"
                      className={"form-control"}
                      disabled={dataEditar.estado !== "0"}
                      value={body.monto}
                      onChange={(event) =>
                        setBody((body) => ({
                          ...body,
                          monto: event?.target?.value,
                        }))
                      }
                    />
                  </FormGroup>
                </Row>
                {dataEditar.estado === "0" && (
                  <Row style={{ marginTop: "20px" }}>
                    <Button
                      color="success"
                      onClick={() => {
                        cambiarEstado({
                          aprobar: true,
                          body,
                          toast,
                          traerDatos,
                          setModalDetalles,
                        });
                        traerDatos();
                      }}
                      style={{ marginRight: "15px", marginLeft: "20px" }}
                    >
                      Aprobar
                    </Button>
                    <Button
                      color="warning"
                      onClick={() => {
                        cambiarEstado({
                          aprobar: false,
                          body,
                          toast,
                          traerDatos,
                          setModalDetalles,
                        });
                        traerDatos();
                      }}
                    >
                      Rechazar
                    </Button>
                  </Row>
                )}
              </Col>
            </div>
          </ModalBody>
        ) : null}
      </ModalBody>

      <ModalFooter>
        <Button color="secondary" onClick={() => setModalDetalles(false)}>
          Cancelar
        </Button>
      </ModalFooter>
    </Modal>
  );
};
export default ModalDetalles;
