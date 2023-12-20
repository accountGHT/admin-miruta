import React, {useEffect} from "react";
import {index} from "../../../config/pluginsInit";
import {Button, Card, CardBody, Col, Row} from "reactstrap";

import bgImage from "../../../assets/images/page-img/25.jpg";

const Index = props => {

    useEffect(() => {
        index();
    });

    return (
        <>
            <Row>
                <Col lg={3} md={6} sm={12}>
                    <Card className={"iq-card"}>
                        <CardBody className={"iq-card-body border text-center"}>
                            <span className={"font-size-16 text-uppercase"}>Basic</span>
                            <h2 className={"mb-4 display-3 font-weight-bolder "}>$26
                                <small className={"font-size-14 text-muted"}>/ Month</small>
                            </h2>
                            <ul className="list-unstyled line-height-4 mb-0">
                                <li>Lorem ipsum dolor sit amet</li>
                                <li>Consectetur adipiscing elit</li>
                                <li>Integer molestie lorem at massa</li>
                                <li>Facilisis in pretium nisl aliquet</li>
                                <li>Nulla volutpat aliquam velit</li>
                            </ul>
                            <Button color={"primary"} className={"mt-5"}>Start Starter</Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={3} md={6} sm={12}>
                    <Card className={"iq-card bg-primary text-white"}>
                        <CardBody className={"iq-card-body border text-center"}>
                            <span className={"font-size-16 text-uppercase"}>Basic</span>
                            <h2 className={"mb-4 display-3 font-weight-bolder text-white"}>$99
                                <small className={"font-size-14 text-white"}>/ Month</small>
                            </h2>
                            <ul className="list-unstyled line-height-4 mb-0">
                                <li>Lorem ipsum dolor sit amet</li>
                                <li>Consectetur adipiscing elit</li>
                                <li>Integer molestie lorem at massa</li>
                                <li>Facilisis in pretium nisl aliquet</li>
                                <li>Nulla volutpat aliquam velit</li>
                            </ul>
                            <Button color={"light"} className={"mt-5"} block>Start Starter</Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={3} md={6} sm={12}>
                    <Card className={"iq-card"}>
                        <CardBody className={"iq-card-body border text-center"}>
                            <span className={"font-size-16 text-uppercase"}>Basic</span>
                            <h2 className={"mb-4 display-3 font-weight-bolder "}>$39
                                <small className={"font-size-14 text-muted"}>/ Month</small>
                            </h2>
                            <ul className="list-unstyled line-height-4 mb-0">
                                <li>Lorem ipsum dolor sit amet</li>
                                <li>Consectetur adipiscing elit</li>
                                <li>Integer molestie lorem at massa</li>
                                <li>Facilisis in pretium nisl aliquet</li>
                                <li>Nulla volutpat aliquam velit</li>
                            </ul>
                            <Button color={"primary"} className={"mt-5"}>Start Starter</Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={3} md={6} sm={12}>
                    <Card className={"iq-card"}>
                        <CardBody className={"iq-card-body border text-center"}>
                            <span className={"font-size-16 text-uppercase"}>Basic</span>
                            <h2 className={"mb-4 display-3 font-weight-bolder "}>$25
                                <small className={"font-size-14 text-muted"}>/ Month</small>
                            </h2>
                            <ul className="list-unstyled line-height-4 mb-0">
                                <li>Lorem ipsum dolor sit amet</li>
                                <li>Consectetur adipiscing elit</li>
                                <li>Integer molestie lorem at massa</li>
                                <li>Facilisis in pretium nisl aliquet</li>
                                <li>Nulla volutpat aliquam velit</li>
                            </ul>
                            <Button color={"primary"} className={"mt-5"}>Start Starter</Button>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

            <Row>
                { [0, 1, 2, 3].map((item, index) => (
                    <Col key={index} lg={3} md={6} sm={12}>
                        <Card className={"bg-dark text-white text-center iq-mb-3"}>
                            <img src={ bgImage } alt="bg" className={"card-img"}/>
                            <div className={"card-img-overlay"}>
                                <h2 className={"mb-4 display-3 font-weight-bolder text-white"}>
                                    19
                                    <small className={"font-size-14 text-white"}>$ / Month</small>
                                </h2>
                                <ul className="list-unstyled line-height-4 mb-0 ">
                                    <li>Lorem ipsum dolor sit amet</li>
                                    <li>Consectetur adipiscing elit</li>
                                    <li>Integer molestie lorem at massa</li>
                                    <li>Facilisis in pretium nisl aliquet</li>
                                    <li>Nulla volutpat aliquam velit</li>
                                </ul>
                                <Button color={"primary"} className={"mt-5"}>Get started</Button>
                            </div>
                        </Card>
                    </Col>
                )) }
            </Row>
        </>
    );
};

export default Index;
