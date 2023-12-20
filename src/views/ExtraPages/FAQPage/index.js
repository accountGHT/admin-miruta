import React, {useEffect, useState} from "react";
import {index} from "../../../config/pluginsInit";
import {Col, Container, Row} from "reactstrap";

const Index = props => {

    useEffect(() => {
        index();
    });

    const [faqData] = useState([
        {
            title: "It is a long established fact that a reader will be?",
            description: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. "
        },
        {
            title: "Distracted by the readable content of a page went?",
            description: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. "
        },
        {
            title: "What is user interface kit?",
            description: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. "
        },
        {
            title: "The readable content of a page when looking at its layout?",
            description: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. "
        },
        {
            title: "It is a long established fact that a reader will be?",
            description: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. "
        },
        {
            title: "What is user interface kit?",
            description: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. "
        }
    ]);

    return (
        <>
            <Row>
                <Col md={6}>
                    <div className="iq-accordion career-style faq-style">
                        { faqData.map((item, index) => (
                            <div key={index} className="iq-card iq-accordion-block">
                                <div className="active-faq clearfix">
                                    <Container>
                                        <Row>
                                            <Col md={12}>
                                                <a href={"!#"} className="accordion-title">
                                                    <span> { item.title } </span>
                                                </a>
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>
                                <div className="accordion-details" style={{ display: "none" }}>
                                    <p className="mb-0">
                                        { item.description }
                                    </p>
                                </div>
                            </div>
                        )) }
                    </div>
                </Col>
                <Col md={6}>
                    <div className="iq-accordion career-style faq-style  ">
                        { faqData.map((item, index) => (
                            <div key={index} className="iq-card iq-accordion-block">
                                <div className="active-faq clearfix">
                                    <Container>
                                        <Row>
                                            <Col md={12}>
                                                <a href={"!#"} className="accordion-title">
                                                    <span> { item.title } </span>
                                                </a>
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>
                                <div className="accordion-details" style={{ display: "none" }}>
                                    <p className="mb-0">
                                        { item.description }
                                    </p>
                                </div>
                            </div>
                        )) }
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default Index;