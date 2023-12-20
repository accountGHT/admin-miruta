import React, { useEffect } from "react";
import { Col, Row } from "reactstrap";
import TablaPendientes from "./pendientes";
import TablaObservados from "./observados";
import TablaCorregidos from "./corregidos";
import { index } from "../../../../config/pluginsInit";
import { toast, ToastContainer } from "react-toastify";

const ChofPendientes = () => {
  useEffect(() => {
    index();
  }, []);

  return (
    <Row>
      <Col sm="12">
        <TablaPendientes toast={toast}></TablaPendientes>
        <Row style={{ marginTop: "50px" }}>
          <Col md="6">
            <TablaObservados toast={toast}></TablaObservados>
          </Col>
          <Col md="6">
            <TablaCorregidos toast={toast}></TablaCorregidos>
          </Col>
        </Row>
      </Col>
      <ToastContainer pauseOnHover={false} />
    </Row>
  );
};

export default ChofPendientes;
