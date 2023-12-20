import React from 'react';

import { index } from "../../../config/pluginsInit";
import {Row, Col, Card, CardHeader, CardText, CardBody,Button,ButtonToolbar} from 'reactstrap';
import {OverlayTrigger,Tooltip} from 'react-bootstrap';
class Index extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data:[
                {
                    placement: "top",
                    text: "Top",
                    class:"iq-bg-primary mt-3",
                    color:"primary"
                },
                {
                    placement: "bottom",
                    text: "Bottom",
                    class:"iq-bg-success mt-3",
                    color:"success"


                },
                {
                    placement: "left",
                    text: "Left",
                    class:"iq-bg-danger mt-3",
                    color:"danger"


                },
                {
                    placement: "right",
                    text: "Right",
                    class:"iq-bg-info mt-3",
                    color:"info"


                }
            ]
        };
    }

    componentDidMount() {
        setTimeout(function () {
            index();
        },800);
    }


    render() {
        return (
            <>
                <Row>
                    <Col sm="12" lg="6">
                        <Card className={"iq-card"}>
                            <CardHeader>Tooltips</CardHeader>
                            <CardBody>
                                <CardText>Images in Bootstrap are made responsive with <code>.img-fluid</code>. <code>max-width: 100%;</code> and <code>height: auto;</code> are applied to the image so that it scales with the parent element.</CardText>
                                <ButtonToolbar>
                                    {this.state.data.map((item, index) => (
                                        <OverlayTrigger
                                            key={index}
                                            placement={item.placement}
                                            overlay={
                                                <Tooltip id={`tooltip-${index}`}>
                                                    Tooltip on <strong>{item.placement}</strong>.
                                                </Tooltip>
                                            }
                                        >
                                            <Button color="secondary" className={this.state.data.length === index + 1 ? "" : "mr-1"}>Tooltip on {item.placement}</Button>
                                        </OverlayTrigger>
                                    ))}
                                </ButtonToolbar>
                            </CardBody>
                        </Card>
                        <Card className={"iq-card"}>
                            <CardHeader><h4>Disabled elements</h4></CardHeader>
                            <CardBody>
                                <CardText>Elements with the <code>disabled</code> attribute aren’t interactive, meaning users cannot focus, hover, or click them to trigger.</CardText>
                                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Tooltip!</Tooltip>}>
                                    <span className="d-inline-block">
                                        <Button disabled style={{ pointerEvents: 'none' }}>
                                            Disabled button
                                        </Button>
                                    </span>
                                </OverlayTrigger>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="12" lg="6">
                        <Card className={"iq-card"}>
                            <CardHeader>Tooltips</CardHeader>
                            <CardBody>
                                <CardText>Images in Bootstrap are made responsive with <code>.img-fluid</code>. <code>max-width: 100%;</code> and <code>height: auto;</code> are applied to the image so that it scales with the parent element.</CardText>
                                <ButtonToolbar>
                                    {this.state.data.map((item, index) => (
                                        <OverlayTrigger
                                            key={index}
                                            placement={item.placement}
                                            overlay={
                                                <Tooltip id={`tooltip-${index}`}>
                                                    Tooltip on <strong>{item.placement}</strong>.
                                                </Tooltip>
                                            }
                                        >
                                            <Button className={this.state.data.length === index + 1 ? "" : "mr-1"} color={item.color}>Tooltip on {item.placement}</Button>
                                        </OverlayTrigger>
                                    ))}
                                </ButtonToolbar>
                            </CardBody>
                        </Card>
                        <Card className={"iq-card"}>
                            <CardHeader>Tooltips</CardHeader>
                            <CardBody>
                                <CardText>Images in Bootstrap are made responsive with <code>.img-fluid</code>. <code>max-width: 100%;</code> and <code>height: auto;</code> are applied to the image so that it scales with the parent element.</CardText>
                                <ButtonToolbar>
                                    {this.state.data.map((item, index) => (
                                        <OverlayTrigger
                                            key={index}
                                            placement={item.placement}
                                            overlay={
                                                <Tooltip id={`tooltip-${index}`}>
                                                    Tooltip on <strong>{item.placement}</strong>.
                                                </Tooltip>
                                            }
                                        >
                                            <Button className={ item.class + (this.state.data.length === index + 1 ? "" : " mr-1 ")}> Tooltip on {item.placement}</Button>
                                        </OverlayTrigger>
                                    ))}
                                </ButtonToolbar>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg="12">
                        <Card className={"iq-card"}>
                            <CardHeader><h4>Disabled elements</h4></CardHeader>
                            <CardBody>
                                <CardText>Elements with the <code>disabled</code> attribute aren’t interactive, meaning users cannot focus, hover, or click them to trigger.</CardText>
                                 <OverlayTrigger
                                     trigger={"hover"}
                                     overlay={<Tooltip id="tooltip-disabled">Tooltip!</Tooltip>}>
                                    <a href={"!#"} className="d-inline-block">
                                        Hover On me !
                                    </a>
                                </OverlayTrigger>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </>
        );
    }
}

export default Index;
