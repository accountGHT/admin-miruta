import React from "react";
import {Card, CardBody,CardText, CardHeader, CardTitle, Col, Row} from "reactstrap";
import {index} from "../../../config/pluginsInit";
import  Icon  from 'react-remixicon';
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
                    <Col sm={12}>
                        <Card>
                            <CardHeader className="iq-header-title bg-white">
                                <CardTitle><h4 className="card-title">Remixicon Icon</h4></CardTitle>
                            </CardHeader>
                            <CardBody className="iq-card-body">
                                <CardText>Use Class <code>&lt;i class="ri-4k-fill"&gt;&lt;/i&gt;</code></CardText>
                                <Row className="mt-3">
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><Icon name={"4k"} type={"fill"} />4k fill</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><Icon name={"4k"} type={"line"} />4k line</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><Icon name={"account-box"} type={"fill"} />Account
                                            Fill</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><Icon name={"account-pin-box"} type={"line"} />account-pin-box</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><Icon name={"award"} type={"line"} />award-line</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><Icon name={"award"} type={"fill"} />award-fill</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><Icon name={"bookmark"} type={"line"} />bookmark-line</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><Icon name={"bookmark"} type={"fill"} />bookmark-fill</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><Icon name={"calculator"} type={"line"} />calculator-line</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><Icon name={"calculator"} type={"fill"} />calculator-fill</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><Icon name={"calendar"} type={"line"} />calendar-line</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><Icon name={"calendar"} type={"fill"} />calendar-fill</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><Icon name={"reply"} type={"line"} />reply-line</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><Icon name={"reply"} type={"fill"} />reply-fill</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><Icon name={"send-plane"} type={"line"} />send-plane-line</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><Icon name={"send-plane"} type={"fill"} />send-plane-fill</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><Icon name={"computer"} type={"line"} />computer-line</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><Icon name={"computer"} type={"fill"} />computer-fill</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><Icon name={"cellphone"} type={"line"} />cellphone-line</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><Icon name={"cellphone"} type={"fill"} />cellphone-fill</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><Icon name={"phone"} type={"line"} />phone-line</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><Icon name={"phone"} type={"fill"} />phone-fill</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><Icon name={"tablet"} type={"line"} />tablet-line</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><Icon name={"tablet"} type={"fill"} />tablet-fill</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><Icon name={"device"} type={"line"} />device-line</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><Icon name={"device"} type={"fill"} />device-fill</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><Icon name={"battery"} type={"line"} />battery-line</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><Icon name={"battery"} type={"fill"} />battery-fill</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><Icon name={"battery-low"} type={"line"} />battery-low-line</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><Icon name={"battery-low"} type={"fill"} />battery-low-fill</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><Icon name={"file"} type={"line"} />file-line</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><Icon name={"file"} type={"fill"} />file-fill</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><Icon name={"book-open"} type={"line"} />book-open-line</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><Icon name={"book-open"} type={"fill"} />book-open-fill</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><Icon name={"lightbulb"} type={"line"} />lightbulb-line</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><Icon name={"lightbulb"} type={"fill"} />lightbulb-fill</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><Icon name={"map-pin"} type={"line"} />map-pin-line</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><Icon name={"map-pin"} type={"fill"} />map-pin-fill</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><Icon name={"drop"} type={"line"} />drop-line</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><Icon name={"drop"} type={"fill"} />drop-fill</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><Icon name={"drop"} type={"fill"} />drop-fill</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><Icon name={"drop"} type={"fill"} />drop-fill</a>
                                    </Col>
                                    <Col className="col-sm-12 text-center mt-3">
                                        <a href="https://remixicon.com/" target="blank" className="btn btn-primary">View
                                            All Icon</a>
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