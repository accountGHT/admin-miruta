import React from "react";
import {Card, CardBody, CardHeader, CardTitle, Col, Row} from "reactstrap";
/*import '@icon/dripicons/dripicons.css';*/
import {index} from "../../../config/pluginsInit";

class Index extends React.Component {

    componentDidMount() {
        setTimeout(function () {
            index();
        }, 800);
    }

    render() {
        return (
            <>
                <Row>
                    <Col sm="12">
                        <Card className="iq-card">
                            <CardHeader className="iq-card-header d-flex justify-content-between">
                                <CardTitle className="iq-header-title">
                                    <h4 className="card-title">Dripicons Icon</h4>
                                </CardTitle>
                            </CardHeader>
                            <CardBody className="iq-card-body">
                                <p>Use Class <code>&lt;div data-icon="a" class="icon"&gt;&lt;/div&gt;</code></p>
                                <Row className="mt-3">
                                    <Col sm="6" md="4" lg="3" xl="2" >
                                        <a className="iq-icons-list" href="!#">
                                            <div data-icon="a" className="icon" />
                                            <span>4k Fill</span>
                                        </a>
                                    </Col>
                                    <Col sm="6" md="4" lg="3" xl="2" >
                                        <a className="iq-icons-list" href="!#">
                                            <div data-icon="o" className="icon" />
                                            <span>Up Arrow</span>
                                        </a>
                                    </Col>
                                    <Col sm="6" md="4" lg="3" xl="2" >
                                        <a className="iq-icons-list" href="!#">
                                            <div data-icon="h" className="icon" />
                                            <span>Down Arrow</span>
                                        </a>
                                    </Col>
                                    <Col sm="6" md="4" lg="3" xl="2" >
                                        <a className="iq-icons-list" href="!#">
                                            <div data-icon="j" className="icon" />
                                            <span>Left Arrow</span>
                                        </a>
                                    </Col>
                                    <Col sm="6" md="4" lg="3" xl="2" >
                                        <a className="iq-icons-list" href="!#">
                                            <div data-icon="i" className="icon" />
                                            <span>Right Arrow</span>
                                        </a>
                                    </Col>
                                    <Col sm="6" md="4" lg="3" xl="2" >
                                        <a className="iq-icons-list" href="!#">
                                            <div data-icon="l" className="icon" />
                                            <span>left</span>
                                        </a>
                                    </Col>
                                    <Col sm="6" md="4" lg="3" xl="2" >
                                        <a className="iq-icons-list" href="!#">
                                            <div data-icon="k" className="icon" />
                                            <span>Down</span>
                                        </a>
                                    </Col>
                                    <Col sm="6" md="4" lg="3" xl="2" >
                                        <a className="iq-icons-list" href="!#">
                                            <div data-icon="n" className="icon" />
                                            <span>Up</span>
                                        </a>
                                    </Col>
                                    <Col sm="6" md="4" lg="3" xl="2" >
                                        <a className="iq-icons-list" href="!#">
                                            <div data-icon="m" className="icon" />
                                            <span>Right</span>
                                        </a>
                                    </Col>
                                    <Col sm="6" md="4" lg="3" xl="2" >
                                        <a className="iq-icons-list" href="!#">
                                            <div data-icon="f" className="icon" />
                                            <span>Anchor</span>
                                        </a>
                                    </Col>
                                    <Col sm="6" md="4" lg="3" xl="2" >
                                        <a className="iq-icons-list" href="!#">
                                            <div data-icon="g" className="icon" />
                                            <span>File</span>
                                        </a>
                                    </Col>
                                    <Col sm="6" md="4" lg="3" xl="2" >
                                        <a className="iq-icons-list" href="!#">
                                            <div data-icon="p" className="icon" />
                                            <span>Note</span>
                                        </a>
                                    </Col>
                                    <Col sm="6" md="4" lg="3" xl="2" >
                                        <a className="iq-icons-list" href="!#">
                                            <div data-icon="s" className="icon" />
                                            <span>Dribbble</span>
                                        </a>
                                    </Col>
                                    <Col sm="6" md="4" lg="3" xl="2" >
                                        <a className="iq-icons-list" href="!#">
                                            <div data-icon="K" className="icon" />
                                            <span>Download</span>
                                        </a>
                                    </Col>
                                    <Col sm="6" md="4" lg="3" xl="2" >
                                        <a className="iq-icons-list" href="!#">
                                            <div data-icon="G" className="icon" />
                                            <span>Sun</span>
                                        </a>
                                    </Col>
                                    <Col sm="6" md="4" lg="3" xl="2" >
                                        <a className="iq-icons-list" href="!#">
                                            <div data-icon="H" className="icon" />
                                            <span>Haf light</span>
                                        </a>
                                    </Col>
                                    <Col sm="6" md="4" lg="3" xl="2" >
                                        <a className="iq-icons-list" href="!#">
                                            <div data-icon="F" className="icon" />
                                            <span>Light</span>
                                        </a>
                                    </Col>
                                    <Col sm="6" md="4" lg="3" xl="2" >
                                        <a className="iq-icons-list" href="!#">
                                            <div data-icon="I" className="icon" />
                                            <span>Voice</span>
                                        </a>
                                    </Col>
                                    <Col sm="6" md="4" lg="3" xl="2" >
                                        <a className="iq-icons-list" href="!#">
                                            <div data-icon="x" className="icon" />
                                            <span>Notification</span>
                                        </a>
                                    </Col>
                                    <Col sm="6" md="4" lg="3" xl="2" >
                                        <a className="iq-icons-list" href="!#">
                                            <div data-icon="J" className="icon" />
                                            <span>Page</span>
                                        </a>
                                    </Col>
                                    <Col sm="6" md="4" lg="3" xl="2" >
                                        <a className="iq-icons-list" href="!#">
                                            <div data-icon="t" className="icon" />
                                            <span>Battery Empty</span>
                                        </a>
                                    </Col>
                                    <Col sm="6" md="4" lg="3" xl="2" >
                                        <a className="iq-icons-list" href="!#">
                                            <div data-icon="u" className="icon" />
                                            <span>Battery Full</span>
                                        </a>
                                    </Col>
                                    <Col sm="6" md="4" lg="3" xl="2" >
                                        <a className="iq-icons-list" href="!#">
                                            <div data-icon="v" className="icon" />
                                            <span>Battery One</span>
                                        </a>
                                    </Col>
                                    <Col sm="6" md="4" lg="3" xl="2" >
                                        <a className="iq-icons-list" href="!#">
                                            <div data-icon="w" className="icon" />
                                            <span>Battery Two</span>
                                        </a>
                                    </Col>
                                    <Col sm="6" md="4" lg="3" xl="2" >
                                        <a className="iq-icons-list" href="!#">
                                            <div data-icon="Q" className="icon" />
                                            <span>Cart</span>
                                        </a>
                                    </Col>
                                    <Col sm="6" md="4" lg="3" xl="2" >
                                        <a className="iq-icons-list" href="!#">
                                            <div data-icon="P" className="icon" />
                                            <span>Card</span>
                                        </a>
                                    </Col>
                                    <Col sm="6" md="4" lg="3" xl="2" >
                                        <a className="iq-icons-list" href="!#">
                                            <div data-icon="O" className="icon" />
                                            <span>Camera</span>
                                        </a>
                                    </Col>
                                    <Col sm="6" md="4" lg="3" xl="2" >
                                        <a className="iq-icons-list" href="!#">
                                            <div data-icon="N" className="icon" />
                                            <span>Video</span>
                                        </a>
                                    </Col>
                                    <Col sm="6" md="4" lg="3" xl="2" >
                                        <a className="iq-icons-list" href="!#">
                                            <div data-icon="S" className="icon" />
                                            <span>Check</span>
                                        </a>
                                    </Col>
                                    <Col sm="6" md="4" lg="3" xl="2" >
                                        <a className="iq-icons-list" href="!#">
                                            <div data-icon="T" className="icon" />
                                            <span>Angle Down</span>
                                        </a>
                                    </Col>
                                    <Col sm="6" md="4" lg="3" xl="2" >
                                        <a className="iq-icons-list" href="!#">
                                            <div data-icon="U" className="icon" />
                                            <span>Angle Left</span>
                                        </a>
                                    </Col>
                                    <Col sm="6" md="4" lg="3" xl="2" >
                                        <a className="iq-icons-list" href="!#">
                                            <div data-icon="V" className="icon" />
                                            <span>Angle Right</span>
                                        </a>
                                    </Col>
                                    <Col sm="6" md="4" lg="3" xl="2" >
                                        <a className="iq-icons-list" href="!#">
                                            <div data-icon="W" className="icon" />
                                            <span>Angle Up</span>
                                        </a>
                                    </Col>
                                    <Col sm="6" md="4" lg="3" xl="2" >
                                        <a className="iq-icons-list" href="!#">
                                            <div data-icon="X" className="icon" />
                                            <span>Up Arrow</span>
                                        </a>
                                    </Col>
                                    <Col sm="6" md="4" lg="3" xl="2" >
                                        <a className="iq-icons-list" href="!#">
                                            <div data-icon="Y" className="icon" />
                                            <span>Clock</span>
                                        </a>
                                    </Col>
                                    <Col sm="6" md="4" lg="3" xl="2" >
                                        <a className="iq-icons-list" href="!#">
                                            <div data-icon="Z" className="icon" />
                                            <span>Reload</span>
                                        </a>
                                    </Col>
                                    <Col sm="6" md="4" lg="3" xl="2" >
                                        <a className="iq-icons-list" href="!#">
                                            <div data-icon="0" className="icon" />
                                            <span>Cloud</span>
                                        </a>
                                    </Col>
                                    <Col sm="6" md="4" lg="3" xl="2" >
                                        <a className="iq-icons-list" href="!#">
                                            <div data-icon="1" className="icon" />
                                            <span>Cloud Download</span>
                                        </a>
                                    </Col>
                                    <Col sm="6" md="4" lg="3" xl="2" >
                                        <a className="iq-icons-list" href="!#">
                                            <div data-icon="2" className="icon" />
                                            <span>Cloud Upload</span>
                                        </a>
                                    </Col>
                                    <Col sm="6" md="4" lg="3" xl="2" >
                                        <a className="iq-icons-list" href="!#">
                                            <div data-icon="5" className="icon" />
                                            <span>Arrow</span>
                                        </a>
                                    </Col>
                                    <Col sm="6" md="4" lg="3" xl="2" >
                                        <a className="iq-icons-list" href="!#">
                                            <div data-icon="5" className="icon" />
                                            <span>Arrow</span>
                                        </a>
                                    </Col>
                                    <Col sm="6" md="4" lg="3" xl="2" >
                                        <a className="iq-icons-list" href="!#">
                                            <div data-icon="5" className="icon" />
                                            <span>Arrow</span>
                                        </a>
                                    </Col>

                                    <Col sm="12" className="text-center mt-3">
                                        <a className="btn btn-primary" href="http://demo.amitjakhu.com/dripicons/" target="blank">View All Icon</a>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </>
        )
    }
}

export default Index;