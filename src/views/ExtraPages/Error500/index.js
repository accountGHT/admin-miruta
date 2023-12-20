import React, {useEffect} from "react";

import {Col, Container, Row} from "reactstrap";
import {index} from "../../../config/pluginsInit";

const Index = props => {

    useEffect(() => {
        index();
    });

    return (
        <Container fluid className={"p-0"}>
            <Row noGutters>
                <Col md={12} className={"text-center"}>
                    <div className={"iq-error"}>
                        <h1>500</h1>
                        <h4 className={"mb-0"}>Oops! This Page is Not Working.</h4>
                        <p>The requested is Internal Server Error.</p>
                        <a href={"index.html"} className={"btn btn-primary mt-3"}>
                            <i className={"ri-home-4-line"} /> Back to Home
                        </a>

                        <img src={ require("../../../assets/images/error/01.png") } alt="" className={"img-fluid iq-error-img"}/>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Index;
