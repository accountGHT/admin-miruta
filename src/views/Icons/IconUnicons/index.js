import React from "react";
import {Card, CardBody,CardText, CardHeader, CardTitle, Col, Row} from "reactstrap";
import {index} from "../../../config/pluginsInit";
/*import "ionicons/dist/ionicons";*/

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
                        <Card className="iq-card">
                                <CardHeader className="iq-header-title">
                                    <CardTitle><h4 className="card-title">Unicons Icon</h4></CardTitle>
                                </CardHeader>
                            <CardBody className="iq-card-body">
                                <CardText>Use Class <code>&lt;i class="ion-archive"&gt;&lt;/i&gt;</code></CardText>
                                <Row className="mt-3">
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><i className="ion-archive" />Archive</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><i className="ion-reply" />Reply</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><i className="ion-reply-all" />Reply All</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><i className="ion-forward" />Forward</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><i className="ion-play" />Play</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><i className="ion-volume-high" />Volume
                                            High</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><i className="ion-pricetags" />Pricetags</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><i className="ion-pause" />Pause</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><i className="ion-briefcase" />Briefcase</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><i className="ion-medkit" />Medkit</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><i className="ion-at" />At</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><i className="ion-pound" />Pound</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><i className="ion-asterisk" />Asterisk</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><i className="ion-alert" />Alert</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><i className="ion-alert-circled" />Alert
                                            Circled</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><i className="ion-refresh" />Refresh</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><i className="ion-loop" />Loop</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><i className="ion-shuffle" />Shuffle</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><i className="ion-home" />Home</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><i className="ion-search" />Search</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><i className="ion-flag" />Flag</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><i className="ion-heart" />Heart</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><i className="ion-heart-broken" />Broken</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><i className="ion-gear-a" />Gear</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><i className="ion-gear-b" />Gear
                                            bold</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><i className="ion-toggle-filled" />Toggle</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><i className="ion-trash-b" />Trash fill</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><i className="ion-hammer" />Hammer</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><i className="ion-wrench" />Wrench</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><i className="ion-information-circled" />Information</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><i className="ion-help-circled" />Help</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><i className="ion-plus-circled" />Plush</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><i className="ion-close-circled" />Close</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><i className="ion-email-unread" />Email</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><i className="ion-upload" />Upload</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><i className="ion-soup-can" />Database</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><i className="ion-thumbsup" />Thumbsup</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><i className="ion-thumbsdown" />Thumbsdown</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><i className="ion-pricetag" />Pricetag</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><i className="ion-bowtie" />Bowtie</a>
                                    </Col>

                                    <Col className="col-sm-12 text-center mt-3">
                                        <a href="https://www.unicon.net/" target="blank" className="btn btn-primary">View
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