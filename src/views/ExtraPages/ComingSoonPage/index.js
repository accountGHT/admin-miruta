import React from "react";
import {Button, Col, Container, FormGroup, Row} from "reactstrap";
import {Link} from "react-router-dom";

const Index = props => {
    return (
        <>
            <div className={"iq-comingsoon pt-5"}>
                <Container fluid>
                    <Row className={"justify-content-center"}>
                        <Col md={8} className={"text-center"}>
                            <div className={"iq-comingsoon-info"}>
                                <Link to={"/"}>
                                    <img src={ require("../../../assets/images/logo-full2.png") } className={"img-fluid w-25"} alt={""}/>
                                </Link>
                                <h2 className={"mt-4 mb-1"}>Stay tunned, we're launching very soon</h2>
                                <ul className={"countdown"} data-date={"Feb 02 2022 20:20:22"}>
                                    <li><span data-days="">751</span>Days</li>
                                    <li><span data-hours="">2</span>Hours</li>
                                    <li><span data-minutes="">0</span>Minutes</li>
                                    <li><span data-seconds="">22</span>Seconds</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>

                    <Row className={"justify-content-center"}>
                        <Col lg={4}>
                            <form action="" className={"iq-comingsoon-form mt-5"}>
                                <FormGroup>
                                    <input type={"email"} id={"exampleInputEmail1"} className={"form-control mb-0"} placeholder={"Enter email address"} />
                                    <Button color={"primary"}>Subscribe</Button>
                                </FormGroup>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Index;
