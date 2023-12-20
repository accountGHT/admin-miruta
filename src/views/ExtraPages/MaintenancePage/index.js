import React, {useEffect} from "react";
import {Card, CardBody, Col, Container, Row} from "reactstrap";
import {index} from "../../../config/pluginsInit";

const Index = props => {

    useEffect(() => {
        index();
    });

    return (
        <>
            <div className={"mt-5 iq-maintenance"}>
                <Container fluid className={"p-0"}>
                    <Row noGutters>
                        <Col md={12} className={"text-center"}>
                            <div className={"iq-maintenance"}>
                                <img src={ require("../../../assets/images/error/02.png") } alt="" className={"img-fluid"}/>
                                <h3 className={"mb-0"}>We are Currently Performing Maintenance</h3>
                                <p>Please check back in sometime.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container className={"mt-3"}>
                    <Row>
                        <Col md={4}>
                            <Card className={"iq-card text-center mb-0"}>
                                <CardBody className={"iq-card-body"}>
                                    <i className={"ri-window-line ri-4x line-height text-primary"} />
                                    <h5 className={"card-title mt-1"}>Why is the Site Down?</h5>
                                    <p className={"mb-0"}>
                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                    </p>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className={"iq-card text-center mb-0"}>
                                <CardBody className={"iq-card-body"}>
                                    <i className={"ri-time-line  ri-4x line-height text-primary"} />
                                    <h5 className={"card-title mt-1"}>What is the Downtime?</h5>
                                    <p className={"mb-0"}>
                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                    </p>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card className={"iq-card text-center mb-0"}>
                                <CardBody className={"iq-card-body"}>
                                    <i className={"ri-information-line ri-4x line-height text-primary"} />
                                    <h5 className={"card-title mt-1"}>Do you need Support?</h5>
                                    <p className={"mb-0"}>
                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                    </p>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Index;
