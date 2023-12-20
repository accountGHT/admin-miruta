import React from 'react';
import {Row, Col, Card, CardHeader, CardTitle, CardBody,CardText,UncontrolledCollapse } from 'reactstrap';
import {index} from "../../../config/pluginsInit";
import {img} from "../../../assets/images/small/img-1.jpg"

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
                    <Col sm={12} lg={6}>
                        <Card className={"iq-card"}>
                            <CardHeader className={"iq-header-title"}>
                                <span className="text-primary float-right" id="collapse1">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                                <CardTitle  className={"card-title"}><h4>Slides only</h4></CardTitle>
                            </CardHeader>

                            <CardBody className={"iq-card-body"}>
                                <CardText>Here’s a carousel with slides only. Note the presence of the <code>.d-block</code> and <code>.img-fluid</code> on carousel images to prevent browser default image alignment.</CardText>
                                <UncontrolledCollapse toggler="#collapse1">
                                    <Card>
                                        <kbd className="bg-dark">
                                            <span data-copy-target="#progress" title="Copy"
                                                  data-toggle="tooltip" className="text-white float-right"
                                                  data-copy="true">
                                                Copy
                                            </span>
                                            <pre className="text-white">
                                                <code>{`
<div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel" >
<div className="carousel-inner">
<div className="carousel-item active">
<img src={require('../../../assets/images/small/img-1.jpg')} className="d-block w-100" alt="#" />
</div>
<div className="carousel-item">
<img src={require('../../../assets/images/small/img-1.jpg')} className="d-block w-100" alt="#" />
</div>
<div className="carousel-item">
<img src={require('../../../assets/images/small/img-1.jpg')} className="d-block w-100" alt="#" />
</div>
</div>
</div>
                      `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel" >
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src={require('../../../assets/images/small/img-1.jpg')} className="d-block w-100" alt="#" />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={require('../../../assets/images/small/img-1.jpg')} className="d-block w-100" alt="#" />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={require('../../../assets/images/small/img-1.jpg')} className="d-block w-100" alt="#" />
                                        </div>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm={12} lg={6}>
                        <Card className={"iq-card"}>
                            <CardHeader className={"iq-header-title"}>
                                <span className="text-primary float-right" id="collapse1">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                                <CardTitle  className={"card-title"}><h4>Slides only</h4></CardTitle>
                            </CardHeader>

                            <CardBody className={"iq-card-body"}>
                                <CardText>Here’s a carousel with slides only. Note the presence of the <code>.d-block</code> and <code>.img-fluid</code> on carousel images to prevent browser default image alignment.</CardText>
                                <UncontrolledCollapse toggler="#collapse1">
                                    <Card>
                                        <kbd className="bg-dark">
                                            <span data-copy-target="#progress" title="Copy"
                                                  data-toggle="tooltip" className="text-white float-right"
                                                  data-copy="true">
                                                Copy
                                            </span>
                                            <pre className="text-white">
                                                <code>{`
<div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel" >
<div className="carousel-inner">
<div className="carousel-item active">
<img src={require('../../../assets/images/small/img-1.jpg')} className="d-block w-100" alt="#" />
</div>
<div className="carousel-item">
<img src={require('../../../assets/images/small/img-1.jpg')} className="d-block w-100" alt="#" />
</div>
<div className="carousel-item">
<img src={require('../../../assets/images/small/img-1.jpg')} className="d-block w-100" alt="#" />
</div>
</div>
</div>
                      `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src={require('../../../assets/images/small/img-1.jpg')} className="d-block w-100" alt="#" />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={require('../../../assets/images/small/img-1.jpg')} className="d-block w-100" alt="#" />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={require('../../../assets/images/small/img-1.jpg')} className="d-block w-100" alt="#" />
                                        </div>
                                    </div>
                                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button"
                                       data-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href="#carouselExampleControls" role="button"
                                       data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm={12} lg={6}>
                        <Card className={"iq-card"}>
                            <CardHeader className={"iq-header-title"}>
                                <span className="text-primary float-right" id="collapse1">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                                <CardTitle  className={"card-title"}><h4>Slides With Indicators</h4></CardTitle>
                            </CardHeader>

                            <CardBody className={"iq-card-body"}>
                                <CardText>Here’s a carousel with slides only. Note the presence of the <code>.d-block</code> and <code>.img-fluid</code> on carousel images to prevent browser default image alignment</CardText>
                                <UncontrolledCollapse toggler="#collapse1">
                                    <Card>
                                        <kbd className="bg-dark">
                                            <span data-copy-target="#progress" title="Copy"
                                                  data-toggle="tooltip" className="text-white float-right"
                                                  data-copy="true">
                                                Copy
                                            </span>
                                            <pre className="text-white">
                                                <code>{`
<div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel" >
<div className="carousel-inner">
<div className="carousel-item active">
<img src={require('../../../assets/images/small/img-1.jpg')} className="d-block w-100" alt="#" />
</div>
<div className="carousel-item">
<img src={require('../../../assets/images/small/img-1.jpg')} className="d-block w-100" alt="#" />
</div>
<div className="carousel-item">
<img src={require('../../../assets/images/small/img-1.jpg')} className="d-block w-100" alt="#" />
</div>
</div>
</div>
                      `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                    <ol className="carousel-indicators">
                                        <li data-target="#carouselExampleIndicators" data-slide-to="0"
                                            className="active"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                    </ol>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src={require('../../../assets/images/small/img-1.jpg')} className="d-block w-100" alt="#" />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={require('../../../assets/images/small/img-1.jpg')} className="d-block w-100" alt="#" />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={require('../../../assets/images/small/img-1.jpg')} className="d-block w-100" alt="#" />
                                        </div>
                                    </div>
                                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button"
                                       data-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button"
                                       data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm={12} lg={6}>
                        <Card className={"iq-card"}>
                            <CardHeader className={"iq-header-title"}>
                                <span className="text-primary float-right" id="collapse1">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                                <CardTitle  className={"card-title"}><h4>Slides only</h4></CardTitle>
                            </CardHeader>

                            <CardBody className={"iq-card-body"}>
                                <CardText>Here’s a carousel with slides only. Note the presence of the <code>.d-block</code> and <code>.img-fluid</code> on carousel images to prevent browser default image alignment.</CardText>
                                <UncontrolledCollapse toggler="#collapse1">
                                    <Card>
                                        <kbd className="bg-dark">
                                            <span data-copy-target="#progress" title="Copy"
                                                  data-toggle="tooltip" className="text-white float-right"
                                                  data-copy="true">
                                                Copy
                                            </span>
                                            <pre className="text-white">
                                                <code>{`
<div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel" >
<div className="carousel-inner">
<div className="carousel-item active">
<img src={require('../../../assets/images/small/img-1.jpg')} className="d-block w-100" alt="#" />
</div>
<div className="carousel-item">
<img src={require('../../../assets/images/small/img-1.jpg')} className="d-block w-100" alt="#" />
</div>
<div className="carousel-item">
<img src={require('../../../assets/images/small/img-1.jpg')} className="d-block w-100" alt="#" />
</div>
</div>
</div>
                      `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                <div className="bd-example">
                                    <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                                        <ol className="carousel-indicators">
                                            <li data-target="#carouselExampleCaptions" data-slide-to="0"
                                                className="active"></li>
                                            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                                            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                                        </ol>
                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <img src={require('../../../assets/images/small/img-1.jpg')} className="d-block w-100" alt="#" />
                                                    <div className="carousel-caption d-none d-md-block">
                                                        <h4 className="text-white">First slide label</h4>
                                                        <p>Nulla vitae elit libero, a pharetra augue mollis
                                                            interdum.</p>
                                                    </div>
                                            </div>
                                            <div className="carousel-item">
                                                <img src={require('../../../assets/images/small/img-1.jpg')} className="d-block w-100" alt="#"/>
                                                    <div className="carousel-caption d-none d-md-block">
                                                        <h4 className="text-white">Second slide label</h4>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                    </div>
                                            </div>
                                            <div className="carousel-item">
                                                <img src={require('../../../assets/images/small/img-1.jpg')} className="d-block w-100" alt="#" />
                                                    <div className="carousel-caption d-none d-md-block">
                                                        <h4 className="text-white">Third slide label</h4>
                                                        <p>Praesent commodo cursus magna, vel scelerisque nisl
                                                            consectetur.</p>
                                                    </div>
                                            </div>
                                        </div>
                                        <a className="carousel-control-prev" href="#carouselExampleCaptions"
                                           role="button" data-slide="prev">
                                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span className="sr-only">Previous</span>
                                        </a>
                                        <a className="carousel-control-next" href="#carouselExampleCaptions"
                                           role="button" data-slide="next">
                                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span className="sr-only">Next</span>
                                        </a>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm={12} lg={6}>
                        <Card className={"iq-card"}>
                            <CardHeader className={"iq-header-title"}>
                                <span className="text-primary float-right" id="collapse1">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                                <CardTitle  className={"card-title"}><h4>Slides only</h4></CardTitle>
                            </CardHeader>

                            <CardBody className={"iq-card-body"}>
                                <CardText>Here’s a carousel with slides only. Note the presence of the <code>.d-block</code> and <code>.img-fluid</code> on carousel images to prevent browser default image alignment.</CardText>
                                <UncontrolledCollapse toggler="#collapse1">
                                    <Card>
                                        <kbd className="bg-dark">
                                            <span data-copy-target="#progress" title="Copy"
                                                  data-toggle="tooltip" className="text-white float-right"
                                                  data-copy="true">
                                                Copy
                                            </span>
                                            <pre className="text-white">
                                                <code>{`
<div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel" >
<div className="carousel-inner">
<div className="carousel-item active">
<img src={require('../../../assets/images/small/img-1.jpg')} className="d-block w-100" alt="#" />
</div>
<div className="carousel-item">
<img src={require('../../../assets/images/small/img-1.jpg')} className="d-block w-100" alt="#" />
</div>
<div className="carousel-item">
<img src={require('../../../assets/images/small/img-1.jpg')} className="d-block w-100" alt="#" />
</div>
</div>
</div>
                      `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                <div id="carouselExampleFade" className="carousel slide carousel-fade"
                                     data-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src={require('../../../assets/images/small/img-1.jpg')} className="d-block w-100" alt="#" />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={require('../../../assets/images/small/img-1.jpg')} className="d-block w-100" alt="#" />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={require('../../../assets/images/small/img-1.jpg')} className="d-block w-100" alt="#" />
                                        </div>
                                    </div>
                                    <a className="carousel-control-prev" href="#carouselExampleFade" role="button"
                                       data-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href="#carouselExampleFade" role="button"
                                       data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>

                </Row>
            </>
        );
    }
}

export default Index;
