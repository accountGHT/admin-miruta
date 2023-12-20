import React from "react";
import {Card, CardBody, CardHeader, CardTitle, Col, Row} from "reactstrap";
import {index} from "../../../config/pluginsInit";
/*import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';*/

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
                                    <h4 className="card-title">Fontawesome Icon</h4>
                                </CardTitle>
                            </CardHeader>
                            <CardBody className="iq-card-body">
                                <p><i className="fa fa-address-book" aria-hidden="true" /></p>
                                <p>Use Class <code>&lt;i class="fa fa-address-book"&gt;&lt;/i&gt;</code></p>
                                <Row className="mt-3">
                                    <Col sm="6" md="4" lg="2">
                                        <a className="iq-icons-list" href="!#"> <i className="fa fa-address-book" aria-hidden="true" />address-book</a>
                                    </Col>
                                    <Col sm="6" md="4" lg="2">
                                        <a className="iq-icons-list" href="!#"> <i className="fa fa-envelope-open" aria-hidden="true" />envelope-open</a>
                                    </Col>
                                    <Col sm="6" md="4" lg="2">
                                        <a className="iq-icons-list" href="!#"> <i className="fa fa-id-card" aria-hidden="true" />id-card</a>
                                    </Col>
                                    <Col sm="6" md="4" lg="2">
                                        <a className="iq-icons-list" href="!#"> <i className="fa fa-telegram" aria-hidden="true" />telegram</a>
                                    </Col>
                                    <Col sm="6" md="4" lg="2">
                                        <a className="iq-icons-list" href="!#"> <i className="fa fa-user-circle" aria-hidden="true" />user-circle</a>
                                    </Col>
                                    <Col sm="6" md="4" lg="2">
                                        <a className="iq-icons-list" href="!#"> <i className="fa fa-area-chart" aria-hidden="true" />area-chart</a>
                                    </Col>
                                    <Col sm="6" md="4" lg="2">
                                        <a className="iq-icons-list" href="!#"> <i className="fa fa-asterisk" aria-hidden="true" />asterisk</a>
                                    </Col>
                                    <Col sm="6" md="4" lg="2">
                                        <a className="iq-icons-list" href="!#"> <i className="fa fa-car" aria-hidden="true" />car</a>
                                    </Col>
                                    <Col sm="6" md="4" lg="2">
                                        <a className="iq-icons-list" href="!#"> <i className="fa fa-bars" aria-hidden="true" />bars</a>
                                    </Col>
                                    <Col sm="6" md="4" lg="2">
                                        <a className="iq-icons-list" href="!#"> <i className="fa fa-battery-full" aria-hidden="true" />battery-full</a>
                                    </Col>
                                    <Col sm="6" md="4" lg="2">
                                        <a className="iq-icons-list" href="!#"> <i className="fa fa-bluetooth" aria-hidden="true" />bluetooth</a>
                                    </Col>
                                    <Col sm="6" md="4" lg="2">
                                        <a className="iq-icons-list" href="!#"> <i className="fa fa-book" aria-hidden="true" />book</a>
                                    </Col>
                                    <Col sm="6" md="4" lg="2">
                                        <a className="iq-icons-list" href="!#"> <i className="fa fa-bug" aria-hidden="true" />bug</a>
                                    </Col>
                                    <Col sm="6" md="4" lg="2">
                                        <a className="iq-icons-list" href="!#"> <i className="fa fa-building" aria-hidden="true" />building</a>
                                    </Col>
                                    <Col sm="6" md="4" lg="2">
                                        <a className="iq-icons-list" href="!#"> <i className="fa fa-calculator" aria-hidden="true" />calculator</a>
                                    </Col>
                                    <Col sm="6" md="4" lg="2">
                                        <a className="iq-icons-list" href="!#"> <i className="fa fa-calendar" aria-hidden="true" />calendar</a>
                                    </Col>
                                    <Col sm="6" md="4" lg="2">
                                        <a className="iq-icons-list" href="!#"> <i className="fa fa-camera" aria-hidden="true" />camera</a>
                                    </Col>
                                    <Col sm="6" md="4" lg="2">
                                        <a className="iq-icons-list" href="!#"> <i className="fa fa-commenting" aria-hidden="true" />commenting</a>
                                    </Col>
                                    <Col sm="6" md="4" lg="2">
                                        <a className="iq-icons-list" href="!#"> <i className="fa fa-crop" aria-hidden="true" />crop</a>
                                    </Col>
                                    <Col sm="6" md="4" lg="2">
                                        <a className="iq-icons-list" href="!#"> <i className="fa fa-download" aria-hidden="true" />download</a>
                                    </Col>
                                    <Col sm="6" md="4" lg="2">
                                        <a className="iq-icons-list" href="!#"> <i className="fa fa-folder" aria-hidden="true" />folder</a>
                                    </Col>
                                    <Col sm="6" md="4" lg="2">
                                        <a className="iq-icons-list" href="!#"> <i className="fa fa-gift" aria-hidden="true" />gift</a>
                                    </Col>
                                    <Col sm="6" md="4" lg="2">
                                        <a className="iq-icons-list" href="!#"> <i className="fa fa-users" aria-hidden="true" />users</a>
                                    </Col>
                                    <Col sm="6" md="4" lg="2">
                                        <a className="iq-icons-list" href="!#"> <i className="fa fa-hashtag" aria-hidden="true" />hashtag</a>
                                    </Col>
                                    <Col sm="6" md="4" lg="2">
                                        <a className="iq-icons-list" href="!#"> <i className="fa fa-home" aria-hidden="true" />home</a>
                                    </Col>
                                    <Col sm="6" md="4" lg="2">
                                        <a className="iq-icons-list" href="!#"> <i className="fa fa-lock" aria-hidden="true" />lock</a>
                                    </Col>
                                    <Col sm="6" md="4" lg="2">
                                        <a className="iq-icons-list" href="!#"> <i className="fa fa-graduation-cap" aria-hidden="true" />graduation-cap</a>
                                    </Col>
                                    <Col sm="6" md="4" lg="2">
                                        <a className="iq-icons-list" href="!#"> <i className="fa fa-paper-plane" aria-hidden="true" />paper-plane</a>
                                    </Col>
                                    <Col sm="6" md="4" lg="2">
                                        <a className="iq-icons-list" href="!#"> <i className="fa fa-star" aria-hidden="true" />star</a>
                                    </Col>
                                    <Col sm="6" md="4" lg="2">
                                        <a className="iq-icons-list" href="!#"> <i className="fa fa-tag" aria-hidden="true" />tag</a>
                                    </Col>
                                    <Col sm="6" md="4" lg="2">
                                        <a className="iq-icons-list" href="!#"> <i className="fa fa-trash" aria-hidden="true" />trash</a>
                                    </Col>
                                    <Col sm="6" md="4" lg="2">
                                        <a className="iq-icons-list" href="!#"> <i className="fa fa-upload" aria-hidden="true" />upload</a>
                                    </Col>
                                    <Col sm="6" md="4" lg="2">
                                        <a className="iq-icons-list" href="!#"> <i className="fa fa-university" aria-hidden="true" />university</a>
                                    </Col>
                                    <Col sm="6" md="4" lg="2">
                                        <a className="iq-icons-list" href="!#"> <i className="fa fa-wifi" aria-hidden="true" />wifi</a>
                                    </Col>
                                    <Col sm="6" md="4" lg="2">
                                        <a className="iq-icons-list" href="!#"> <i className="fa fa-thumbs-up" aria-hidden="true" />thumbs-up</a>
                                    </Col>
                                    <Col sm="6" md="4" lg="2">
                                        <a className="iq-icons-list" href="!#"> <i className="fa fa-train" aria-hidden="true" />train</a>
                                    </Col>
                                    <Col sm="6" md="4" lg="2">
                                        <a className="iq-icons-list" href="!#"> <i className="fa fa-file" aria-hidden="true" />file</a>
                                    </Col>
                                    <Col sm="6" md="4" lg="2">
                                        <a className="iq-icons-list" href="!#"> <i className="fa fa-snapchat" aria-hidden="true" />snapchat</a>
                                    </Col>
                                    <Col sm="6" md="4" lg="2">
                                        <a className="iq-icons-list" href="!#"> <i className="fa fa-twitter" aria-hidden="true" />twitter</a>
                                    </Col>
                                    <Col sm="6" md="4" lg="2">
                                        <a className="iq-icons-list" href="!#"> <i className="fa fa-wordpress" aria-hidden="true" />wordpress</a>
                                    </Col>
                                    <Col sm="6" md="4" lg="2">
                                        <a className="iq-icons-list" href="!#"> <i className="fa fa-wordpress" aria-hidden="true" />wordpress</a>
                                    </Col>
                                    <Col sm="6" md="4" lg="2">
                                        <a className="iq-icons-list" href="!#"> <i className="fa fa-wordpress" aria-hidden="true" />wordpress</a>
                                    </Col>
                                    <div className="col-sm-12 text-center mt-3">
                                        <a href="https://fontawesome.com/v4.7.0/" target="blank" className="btn btn-primary">View All Icon</a>
                                    </div>
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