import React, { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Col, Row } from "reactstrap";
import { index } from "../../../../config/pluginsInit";
import TablaMarca from './Marca';
import TablaModelo from './Modelo';


const Vehiculos = () => {

    useEffect(() => {
        index();
    }, []);

    return (
        <Row>
            <Col md="6">
                <TablaMarca
                    toast={toast}
                ></TablaMarca>
            </Col>
            <Col md="6">
                <TablaModelo
                    toast={toast}
                ></TablaModelo>
            </Col>
            <ToastContainer pauseOnHover={false} />
        </Row>
    );
};

export default Vehiculos;
