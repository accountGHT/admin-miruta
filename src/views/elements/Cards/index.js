import React from 'react';
import {
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    CardText,
    Button,
    ListGroup,
    ListGroupItem,
    CardFooter,
    CardGroup,
    CardColumns

} from 'reactstrap';
/*import { Link } from "react-router-dom";*/
import {index} from "../../../config/pluginsInit";
class Index extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

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
                    <Col sm={3}>
                        <Card className="card iq-mb-3">
                            <img src={require('../../../assets/images/page-img/07.jpg')}  className="card-img-top" alt="#" />
                                <CardBody>
                                    <CardTitle><h4 className="card-title">Card title</h4></CardTitle>
                                    <CardText className="card-text">It is a long established fact that a reader will be
                                        distracted by the readable content of a page when looking at its layout. </CardText>
                                    <Button color={"primary"}>Button</Button>
                                </CardBody>
                        </Card>
                    </Col>
                    <Col sm={3}>
                        <Card className="card iq-mb-3">
                            <img src={require('../../../assets/images/page-img/07.jpg')} className="card-img-top" alt="#" />
                                <CardBody className="card-body">
                                   <CardTitle><h4 className="card-title">Card title</h4></CardTitle>
                                    <CardText className="card-text">It is a long established fact that a reader will be
                                        distracted by the readable content of a page when looking at its layout. </CardText>
                                    <CardText>It is a long established fact that a the readable content of a page when looking
                                        at its layout.</CardText>
                                    <a href="!#" className="card-link">Card link</a>
                                    <a href="!#" className="card-link">Another link</a>
                                </CardBody>
                        </Card>
                    </Col>
                    <Col sm={3} className="col-sm-3">
                        <Card className="card iq-mb-3">
                            <img src={require('../../../assets/images/page-img/07.jpg')}  className="card-img-top" alt="#" />
                                <CardBody className="card-body">
                                    <CardTitle><h4 className="card-title">Card title</h4></CardTitle>
                                    <CardText className="card-text">It is a long established fact that a reader will be
                                        distracted by the readable content of a page when looking at its layout. </CardText>
                                    <ListGroup variant="flush">
                                        <ListGroupItem>Cras justo odio</ListGroupItem>
                                        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                                        <ListGroupItem>Vestibulum at eros</ListGroupItem>
                                    </ListGroup>
                                </CardBody>
                        </Card>
                    </Col>
                    <Col sm={3} className="col-sm-3">
                        <Card className="card iq-mb-3">
                            <img src={require('../../../assets/images/page-img/07.jpg')} className="card-img-top" alt="#" />
                                <CardBody className="card-body">
                                    <h4 className="card-title">Card title</h4>
                                    <p className="card-text">Some quick example text to build on the card title and make
                                        up the bulk of the card's content.</p>
                                </CardBody>
                                <ListGroup variant="flush">
                                    <ListGroupItem>Cras justo odio</ListGroupItem>
                                </ListGroup>
                                <CardBody className="card-body">
                                    <a href="!#" className="card-link">Card link</a>
                                    <a href="!#" className="card-link">Another link</a>
                                </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col sm={6}>
                        <Card className="card iq-mb-3">
                            <CardBody>
                                <CardTitle><h4 className="card-title">Special title treatment</h4></CardTitle>
                                <CardText className="card-text">It is a long established fact that a reader will be distracted
                                    by the readable content of a page when looking at its layout. </CardText>
                                <Button href="!#" color={"primary"} className="btn-block">Go somewhere</Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm={6}>
                        <Card className="card iq-mb-3">
                            <CardBody className="card-body">
                               <CardTitle><h4 className="card-title">Special title treatment</h4></CardTitle>
                                <CardText className="card-text">It is a long established fact that a reader will be distracted
                                    by the readable content of a page when looking at its layout. </CardText>
                                <Button href="!#"  color={"primary"} className="btn-block">Go somewhere</Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4}>
                        <Card className="card iq-mb-3">
                            <CardHeader className="card-header">
                                Featured
                            </CardHeader>
                            <CardBody className="card-body">
                                <CardTitle><h4 className="card-title">Special title treatment</h4></CardTitle>
                                <CardText className="card-text">With supporting text below as a natural lead-in to additional
                                    content.</CardText>
                                <Button href="!#" color={"primary"}>Go somewhere</Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={4}>
                        <Card className="card iq-mb-3">
                            <CardHeader className="card-header">
                                Quote
                            </CardHeader>
                            <CardBody className="card-body">
                                <blockquote className="blockquote">
                                    <CardText className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                                        posuere erat a ante.</CardText>
                                    <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source
                                        Title</cite></footer>
                                </blockquote>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={4}>
                        <Card className="card iq-mb-3">
                            <CardHeader className="card-header">
                                Featured
                            </CardHeader>
                            <CardBody className="card-body">
                                <Button href="!#" color={"primary"}>Go somewhere</Button>
                            </CardBody>
                            <CardFooter className="text-muted">
                                2 days ago
                            </CardFooter>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4}>
                        <Card className="iq-mb-3">
                            <CardBody>
                                <CardTitle><h4 className="card-title">Special title treatment</h4></CardTitle>
                                <CardText className="card-text">With supporting text below as a natural lead-in to additional
                                    content.</CardText>
                                <Button href="!#" className="btn-block" color={"primary"}>Go somewhere</Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={4} className="text-center">
                        <Card className="iq-mb-3">
                            <CardBody className="card-body">
                                <CardTitle><h4 className="card-title">Special title treatment</h4></CardTitle>
                                <CardText className="card-text">With supporting text below as a natural lead-in to additional
                                    content.</CardText>
                                <Button href="!#" className="btn-block" color={"primary"}>Go somewhere</Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={4} className="text-right">
                        <Card className="iq-mb-3">
                            <CardBody>
                                |<CardTitle><h4 className="card-title">Special title treatment</h4></CardTitle>
                                <CardText className="card-text">With supporting text below as a natural lead-in to additional
                                    content.</CardText>
                                <Button href="!#" color={"primary"} className="btn-block">Go somewhere</Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col sm={4}>
                        <Card className="iq-mb-3">
                            <img src={require('../../../assets/images/page-img/07.jpg')} className="card-img-top" alt="#" />
                                <CardBody className="card-body">
                                    <CardTitle><h4 className="card-title">Card title</h4></CardTitle>
                                    <CardText className="card-text">This is a wider card with supporting text below as a
                                        natural lead-in to additional content. This content is a little bit longer.</CardText>
                                    <CardText className="card-text"><small className="text-muted">Last updated 3 mins
                                        ago</small></CardText>
                                </CardBody>
                        </Card>
                    </Col>
                    <Col sm={4}>
                        <Card className="iq-mb-3">
                            <CardBody className="card-body">
                                <CardTitle><h4 className="card-title">Card title</h4></CardTitle>
                                <CardText className="card-text">This is a wider card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.</CardText>
                                <CardText className="card-text"><small className="text-muted">Last updated 3 mins ago</small>
                                </CardText>
                            </CardBody>
                            <img src={require('../../../assets/images/page-img/07.jpg')} className="card-img-top" alt="#" />
                        </Card>
                    </Col>
                    <Col sm={4}>
                        <div className="card bg-dark text-white iq-mb-3">
                            <img src={require('../../../assets/images/page-img/07.jpg')} className="card-img" alt="#"/>
                                <div className="card-img-overlay">
                                   <CardTitle> <h4 className="card-title text-white">Card title</h4></CardTitle>
                                    <CardText>This is a wider card with supporting text below as a
                                        natural lead-in to additional content. This content is a little bit longer.</CardText>
                                    <CardText className="card-text">Last updated 3 mins ago </CardText>
                                </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <h3 className="mt-4 mb-3">Horizontal Card</h3>
                    </Col>
                    <Col lg={6}>
                        <Card className="iq-mb-3">
                            <Row className="no-gutters">
                                <Col md={4}>
                                    <img src={require('../../../assets/images/page-img/08.jpg')}  className="card-img" alt="#" />
                                </Col>
                                <Col md={8}>
                                    <CardBody className="card-body">
                                        <CardTitle><h4 className="card-title">Card title</h4></CardTitle>
                                        <CardText className="card-text">This is a wider card with supporting text below as a
                                            natural lead-in. a little bit longer.</CardText>
                                        <CardText className="card-text"><small className="text-muted">Last updated 3 mins
                                            ago</small></CardText>
                                    </CardBody>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col lg={6}>
                        <Card className="iq-mb-3">
                            <Row className="no-gutters flex-row-reverse">
                                <Col md={4} >
                                    <img src={require('../../../assets/images/page-img/09.jpg')} className="card-img" alt="#" />
                                </Col>
                                <Col md={8}>
                                    <CardBody className="text-right">
                                       <CardTitle><h4 className="card-title">Card title</h4></CardTitle>
                                        <CardText className="card-text">This is a wider card with supporting text below as a
                                            natural lead-in. a little bit longer.</CardText>
                                        <CardText className="card-text"><small className="text-muted">Last updated 3 mins
                                            ago</small></CardText>
                                    </CardBody>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <h3 className="mt-4 mb-3">Card Colored Styles</h3>
                    </Col>
                    <Col lg={4}>
                        <Card className="text-white  iq-mb-3" color={"primary"}>
                            <CardBody>
                                <CardTitle><h4 className="card-title text-white">Primary card title</h4></CardTitle>
                                <blockquote className="blockquote mb-0">
                                    <p className="font-size-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Integer posuere erat a ante.</p>
                                    <footer className="blockquote-footer text-white font-size-12">Someone famous
                                        in <cite title="Source Title" className="text-white">Source Title</cite>
                                    </footer>
                                </blockquote>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={4}>
                        <Card className="iq-mb-3 text-white " color={"secondary"}>
                            <CardBody className="card-body">
                                <CardTitle><h4 className="card-title text-white">Secondary card title</h4></CardTitle>
                                <blockquote className="blockquote mb-0">
                                    <p className="font-size-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Integer posuere erat a ante.</p>
                                    <footer className="blockquote-footer text-white font-size-12">Someone famous
                                        in <cite title="Source Title" className="text-white">Source Title</cite>
                                    </footer>
                                </blockquote>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={4}>
                        <Card className="iq-mb-3 text-white" color={"success"}>
                            <CardBody className="card-body">
                                <CardTitle><h4 className="card-title text-white">Success card title</h4></CardTitle>
                                <blockquote className="blockquote mb-0">
                                    <p className="font-size-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Integer posuere erat a ante.</p>
                                    <footer className="blockquote-footer text-white font-size-12">Someone famous
                                        in <cite title="Source Title" className="text-white">Source Title</cite>
                                    </footer>
                                </blockquote>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={4}>
                        <Card className="iq-mb-3 text-white" color={"danger"}>
                            <CardBody>
                                <CardTitle><h4 className="card-title text-white">Danger card title</h4></CardTitle>
                                <blockquote className="blockquote mb-0">
                                    <CardText className="font-size-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Integer posuere erat a ante.</CardText>
                                    <footer className="blockquote-footer text-white font-size-12">Someone famous
                                        in <cite title="Source Title" className="text-white">Source Title</cite>
                                    </footer>
                                </blockquote>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={4}>
                        <Card className="iq-mb-3 text-white" color={"warning"}>
                            <CardBody>
                                <CardTitle><h4 className="card-title text-white">Warning card title</h4></CardTitle>
                                <blockquote className="blockquote mb-0">
                                    <CardText className="font-size-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Integer posuere erat a ante.</CardText>
                                    <footer className="blockquote-footer text-white font-size-12">Someone famous
                                        in <cite title="Source Title" className="text-white">Source Title</cite>
                                    </footer>
                                </blockquote>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={4}>
                        <Card className="iq-mb-3 text-white" color={"info"}>
                            <CardBody>
                                <CardTitle><h4 className="card-title text-white">Info card title</h4></CardTitle>
                                <blockquote className="blockquote mb-0">
                                    <CardText className="font-size-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Integer posuere erat a ante.</CardText>
                                    <footer className="blockquote-footer text-white font-size-12">Someone famous
                                        in <cite title="Source Title" className="text-white">Source Title</cite>
                                    </footer>
                                </blockquote>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} >
                        <h3 className="mt-4 mb-3">Border Card</h3>
                    </Col>
                    <Col lg={4} >
                        <Card className="iq-mb-3" outline color={"primary"}>
                            <CardBody className="text-primary">
                                <CardTitle><h4 className="text-primary">Primary card title</h4></CardTitle>
                                <CardText className="card-text">Some quick example text to build on the card title text to
                                    build on the card title and make up the bulk of the card's content.</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={4}>
                        <Card className="iq-mb-3 " outline color={"secondary"}>
                            <div className="card-body text-secondary">
                                <CardTitle><h4 className="card-title text-secondary">Primary card title</h4></CardTitle>
                                <CardText >Some quick example text to build on the card title text to
                                    build on the card title and make up the bulk of the card's content.</CardText>
                            </div>
                        </Card>
                    </Col>
                    <Col lg={4}>
                        <Card className="card iq-mb-3 " outline color={"success"}>
                            <CardBody className="card-body text-success">
                               <CardTitle> <h4 className="card-title text-success">Primary card title</h4></CardTitle>
                                <CardText className="card-text">Some quick example text to build on the card title text to
                                    build on the card title and make up the bulk of the card's content.</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={4}>
                        <Card className="card iq-mb-3" outline color={"danger"}>
                            <CardBody className="card-body text-danger">
                                <CardTitle><h4 className="card-title text-danger">Primary card title</h4></CardTitle>
                                <CardText className="card-text">Some quick example text to build on the card title text to
                                    build on the card title and make up the bulk of the card's content.</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={4}>
                        <Card className="card iq-mb-3 " outline color={"warning"}>
                            <CardBody className="card-body text-warning">
                                <CardTitle><h4 className="card-title text-warning">Primary card title</h4></CardTitle>
                                <CardText className="card-text">Some quick example text to build on the card title text to
                                    build on the card title and make up the bulk of the card's content.</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={4} >
                        <Card className="iq-mb-3" outline color={"info"}>
                            <CardBody className="card-body text-info">
                               <CardTitle> <h4 className="card-title text-info">Primary card title</h4></CardTitle>
                                <CardText className="card-text">Some quick example text to build on the card title text to
                                    build on the card title and make up the bulk of the card's content.</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} className="col-sm-12">
                        <h3 className="mt-4 mb-3">Card groups</h3>
                    </Col>
                    <Col sm={12} className="col-sm-12">
                        <CardGroup className="iq-mb-3">
                            <Card className="card">
                                <img src={require('../../../assets/images/page-img/07.jpg')} className="card-img-top" alt="#" />
                                    <CardBody className="card-body">
                                        <CardTitle><h4 className="card-title">Card title</h4></CardTitle>
                                        <CardText className="card-text">This is a wider card with supporting text below as a
                                            natural lead-in to additional content. This content is a little bit
                                            longer.</CardText>
                                        <CardText className="card-text"><small className="text-muted">Last updated 3 mins
                                            ago</small></CardText>
                                    </CardBody>
                            </Card>
                            <Card >
                                <img src={require('../../../assets/images/page-img/07.jpg')} className="card-img-top" alt="#" />
                                    <CardBody className="card-body">
                                       <CardTitle><h4 className="card-title">Card title</h4></CardTitle>
                                        <CardText className="card-text">This card has supporting text below as a natural
                                            lead-in to additional content.</CardText>
                                        <CardText className="card-text"><small className="text-muted">Last updated 3 mins
                                            ago</small></CardText>
                                    </CardBody>
                            </Card>
                            <Card>
                                <img src={require('../../../assets/images/page-img/07.jpg')} className="card-img-top" alt="#" />
                                    <CardBody className="card-body">
                                        <CardTitle><h4 className="card-title">Card title</h4></CardTitle>
                                        <CardText className="card-text">This is a wider card with supporting text below as a
                                            natural lead-in to additional content. This card has even longer content
                                            than the first to show that equal height action.</CardText>
                                        <CardText className="card-text"><small className="text-muted">Last updated 3 mins
                                            ago</small></CardText>
                                    </CardBody>
                            </Card>
                        </CardGroup>
                    </Col>
                    <Col sm={12} className="col-sm-12">
                        <CardGroup className="iq-mb-3">
                            <Card>
                                <img src={require('../../../assets/images/page-img/07.jpg')} className="card-img-top" alt="#" />
                                    <CardBody className="card-body">
                                        <CardTitle><h4 className="card-title">Card title</h4></CardTitle>
                                        <CardText className="card-text">This is a wider card with supporting text below as a
                                            natural lead-in to additional content. This content is a little bit
                                            longer.</CardText>
                                    </CardBody>
                                    <CardFooter className="card-footer">
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </CardFooter>
                            </Card>
                            <Card>
                                <img src={require('../../../assets/images/page-img/07.jpg')} className="card-img-top" alt="#" />
                                    <CardBody className="card-body">
                                        <CardTitle><h4 className="card-title">Card title</h4></CardTitle>
                                        <CardText className="card-text">This card has supporting text below as a natural
                                            lead-in to additional content.</CardText>
                                    </CardBody>
                                    <CardFooter className="card-footer">
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </CardFooter>
                            </Card>
                            <Card>
                                <img src={require('../../../assets/images/page-img/07.jpg')} className="card-img-top" alt="#" />
                                    <CardBody className="card-body">
                                        <CardTitle><h4 className="card-title">Card title</h4></CardTitle>
                                        <CardText className="card-text">This is a wider card with supporting text below as a
                                            natural lead-in to additional content. This card has even longer content
                                            than the first to show that equal height action.</CardText>
                                    </CardBody>
                                    <CardFooter className="card-footer">
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </CardFooter>
                            </Card>
                        </CardGroup>
                    </Col>
                    <Col sm={12} className="col-sm-12">
                        <h3 className="mb-3">Card Masonry Columns</h3>
                        <CardColumns>
                            <Card className="iq-mb-3">
                                <img src={require('../../../assets/images/page-img/07.jpg')} className="card-img-top" alt="#" />
                                    <CardBody className="card-body">
                                        <CardTitle><h4 className="card-title">Card title that wraps to a new line</h4></CardTitle>
                                        <CardText className="card-text">This is a longer card with supporting text below as a
                                            natural lead-in to additional content. This content is a little bit
                                            longer.</CardText>
                                    </CardBody>
                            </Card>
                            <Card className="iq-mb-3">
                                <blockquote className="blockquote mb-0 card-body">
                                    <CardText className="font-size-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Integer posuere erat a ante.</CardText>
                                    <footer className="blockquote-footer">
                                        <small className="text-muted">
                                            Someone famous in <cite title="Source Title">Source Title</cite>
                                        </small>
                                    </footer>
                                </blockquote>
                            </Card>
                            <Card className="iq-mb-3">
                                <img src={require('../../../assets/images/page-img/07.jpg')} className="card-img-top" alt="#" />
                                    <CardBody className="card-body">
                                        <CardTitle><h4 className="card-title">Card title</h4></CardTitle>
                                        <CardText className="card-text">This card has supporting text below as a natural
                                            lead-in to additional content.</CardText>
                                        <CardText className="card-text"><small className="text-muted">Last updated 3 mins
                                            ago</small></CardText>
                                    </CardBody>
                            </Card>
                            <Card className="text-white text-center iq-mb-3" color={"primary"}>
                                <blockquote className="blockquote mb-0 card-body">
                                    <p className="font-size-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Integer posuere erat a ante.</p>
                                    <footer className="blockquote-footer">
                                        <small className="text-white">
                                            Someone famous in <cite title="Source Title">Source Title</cite>
                                        </small>
                                    </footer>
                                </blockquote>
                            </Card>
                            <Card className="text-center iq-mb-3">
                                <CardBody className="card-body">
                                   <CardTitle><h4 className="card-title">Card title</h4></CardTitle>
                                    <CardText className="card-text">This card has a regular title and short paragraphy of text
                                        below it.</CardText>
                                    <CardText className="card-text"><small className="text-muted">Last updated 3 mins
                                        ago</small></CardText>
                                </CardBody>
                            </Card>
                            <Card className="iq-mb-3">
                                <img src={require('../../../assets/images/page-img/07.jpg')} className="card-img-top" alt="#" />
                            </Card>
                            <Card className="text-right iq-mb-3">
                                <blockquote className="blockquote card-body mb-0">
                                    <CardText className="font-size-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Integer posuere erat a ante.</CardText>
                                    <footer className="blockquote-footer">
                                        <small className="text-muted">
                                            Someone famous in <cite title="Source Title">Source Title</cite>
                                        </small>
                                    </footer>
                                </blockquote>
                            </Card>
                            <Card className="iq-mb-3">
                                <CardBody className="card-body">
                                   <CardTitle><h4 className="card-title">Card title</h4></CardTitle>
                                    <CardText className="card-text">This is another card with title and supporting text below.
                                        This card has some additional content to make it slightly taller overall.</CardText>
                                    <CardText className="card-text"><small className="text-muted">Last updated 3 mins
                                        ago</small></CardText>
                                </CardBody>
                            </Card>
                        </CardColumns>
                    </Col>
                </Row>
            </>
        );
    }
}

export default Index;
