import React from "react";
import {Card, CardText, CardHeader, CardTitle, Col, Row} from "reactstrap";
import {index} from "../../../config/pluginsInit";
import "line-awesome/dist/line-awesome/css/line-awesome.min.css";
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
                                    <CardTitle><h4 className="card-title">lineawesome Icon</h4></CardTitle>
                                </CardHeader>
                            <Col className="iq-card-body">
                                <CardText>Use Class <code>&lt;i class="las la-bell"&gt;&lt;/i&gt;</code></CardText>
                                <Row className="mt-3">

                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><i className="las la-bell" />bell</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><i className="las la-phone-volume" />phone</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><i className="las la-radiation" />radiation</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><i className="las la-dog" />dog</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><i className="las la-fish" />fish</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><i className="las la-spider" />la-spider</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><i className="las la-angle-down" />angle-down</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><i className="las la-angle-left" />angle-left</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><i className="las la-angle-right" />angle-right</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><i className="las la-angle-up" />angle-up</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><i className="las la-caret-left" />caret-left</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><i className="las la-caret-right" />caret-right</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><i className="las la-download" />download</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><i className="las la-location-arrow" />location-arrow</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><i className="las la-share" />share</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><i className="las la-backward" />backward</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><i className="las la-play" />play</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><i className="las la-pause" />pause</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><i className="las la-sync" />sync</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><i className="las la-volume-down" />volume-down</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><i className="las la-volume-mute" />volume-mute</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><i className="las la-volume-off" />volume-off</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><i className="las la-volume-up" />volume-up</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><i className="lab la-youtube" />youtube</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><i className="las la-car" />car</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><i className="las la-truck" />truck</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><i className="las la-tree" />tree</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><i className="lab la-pinterest-p" />pinterest</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><i className="lab la-java" />java</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><i className="las la-city" />city</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><i className="las la-edit" />edit</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><i className="las la-copy" />copy</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><i className="las la-cut" />cut</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><i className="las la-pen" />pen</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><i className="las la-tag" />tag</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><i className="las la-save" />save</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><i className="las la-tasks" />tasks</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><i className="las la-comment" />comment</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><i className="las la-video" />video</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><i className="las la-smile" />smile</a>
                                    </Col>
                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><i className="las la-smile" />smile</a>
                                    </Col>

                                    <Col sm={6} md={4} lg={2}>
                                        <a className="iq-icons-list" href="!#"><i className="las la-smile" />smile</a>
                                    </Col>

                                    <Col sm={12} className="text-center mt-3">
                                        <a href="https://icons8.com/line-awesome" target="blank"
                                           className="btn btn-primary">View All Icon</a>
                                    </Col>
                                </Row>
                            </Col>
                        </Card>
                    </Col>
                </Row>
            </>
        )
    }
}

export default Index;