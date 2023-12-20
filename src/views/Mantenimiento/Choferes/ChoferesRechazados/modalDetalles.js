
import React from "react";
import { Card } from "react-bootstrap";
import {
  Button,
  CardText,
  CardTitle,
  Col,
  Modal,
  Row,
} from "reactstrap";

const ModalDetalles = (props) => {
  const { modalDetalles, setModalDetalles, dataEditar } = props;

  console.log(dataEditar, "datos del index");
  return (
    <Modal
      isOpen={modalDetalles}
      toggle={() => setModalDetalles(false)}
      className="modal-dialog-centered"
    >
      <Card body color="success">
        <CardTitle tag="h5" >Motivo del rechazo</CardTitle>
        <CardText style={{ paddingTop: "10px" }}><i>{'"' + dataEditar.observaciones + '"'}</i></CardText>
        <Row>
          <Col className="justify-content-end d-flex">{dataEditar.fechaEstado}</Col>
        </Row>
        <Row style={{ padding: "20px 20px 0 20px" }}>
          <Button color="info" block onClick={() => setModalDetalles(false)}>Aceptar</Button>
        </Row>
      </Card>
    </Modal>
  );
};
export default ModalDetalles;
