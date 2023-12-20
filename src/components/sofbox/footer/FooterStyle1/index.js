import React from "react";
import { Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";

const Index = props => {

    const { footerNavList, title, dark } = props;

    return (
        <>
            <footer className={dark ? "iq-footer" : "bg-white iq-footer"} style={dark ? { background: "#151b21", color: "#ffffff" } : {}}>
                <Container fluid>
                    <Row>
                        <Col lg={6}>
                            <ul className={"list-inline mb-0"}>
                                {footerNavList.map((item, index) => (
                                    <li key={index} className={"list-inline-item"}>
                                        <Link to={item.href}>{item.title}</Link>
                                    </li>
                                ))}
                            </ul>
                        </Col>
                        <Col lg={6} className={"text-right"}>
                            {title}
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    );
};

export default Index;