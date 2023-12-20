import React, {useEffect} from "react";
import {Col, Row} from "reactstrap";
import {index} from "../../../config/pluginsInit";

const Index = props => {

    useEffect(() => {
        index();
    });

    return (
        <Row>
            <Col md={12}>
                Here Add Your HTML Content.....
            </Col>
        </Row>
    );
};

export default Index;
