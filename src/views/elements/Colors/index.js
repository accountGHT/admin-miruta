import React from 'react';
import {Row, Col, Card, CardHeader, CardTitle, CardBody, UncontrolledCollapse} from 'reactstrap';
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
                    <Col lg={12}>
                        <Card className={"iq-card"}>
                            <CardHeader className="iq-card-header d-flex justify-content-between">
                                <CardTitle className="iq-header-title">
                                    <h4 className="card-title ">Classification</h4>
                                </CardTitle>
                                <span className="text-primary float-right" id="collapse1">
                                        <i className="ri-code-s-slash-line" />
                                    </span>
                            </CardHeader>

                            <CardBody className={"iq-card-body"}>
                                <p>Similar to the contextual text color classes, easily set the background of an element to any contextual class. Anchor components will darken on hover, just like the text classes. Background utilities <strong>do not set <code>color</code></strong>, so in some cases you’ll want to use <code>.text-*</code> utilities.</p>

                                <UncontrolledCollapse toggler="#collapse1">
                                    <Card>
                                        <kbd className="bg-dark">
                                            <span data-copy-target="#sofbox-color" title="Copy"
                                                  data-toggle="tooltip" className="text-white float-right"
                                                  data-copy="true">
                                                Copy
                                            </span>
                                            <pre className="text-white">
                                                <code>{`
<Col lg={2} md={6} className={"text-center"}>
    <p className="bg-primary pt-5 pb-5 text-center rounded"></p>
    <h6>Primary</h6>
</Col>
<Col lg={2} md={6} className={"text-center"}>
    <p className="bg-secondary pt-5 pb-5 text-center rounded"></p>
    <h6>Secondary</h6>
</Col>
<Col lg={2} md={6} className={"text-center"}>
    <p className="bg-success pt-5 pb-5 text-center rounded"></p>
    <h6>Success</h6>
</Col>
<Col lg={2} md={6} className={"text-center"}>
    <p className="bg-danger pt-5 pb-5 text-center rounded"></p>
    <h6>Danger</h6>
</Col>
<Col lg={2} md={6} className={"text-center"}>
    <p className="bg-warning pt-5 pb-5 text-center rounded"></p>
    <h6>Warning</h6>
</Col>
<Col lg={2} md={6} className={"text-center"}>
    <p className="bg-info pt-5 pb-5 text-center rounded"></p>
    <h6>Info</h6>
</Col>
<Col lg={2} md={6} className={"text-center mt-4"}>
    <p className="bg-light pt-5 pb-5 text-center rounded"></p>
    <h6>Light</h6>
</Col>
<Col lg={2} md={6} className={"text-center mt-4"}>
    <p className="bg-dark pt-5 pb-5 text-center rounded"></p>
    <h6>Dark</h6>
</Col>
                                                `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>

                                <Row className={"row mt-4"}>
                                    <Col lg={2} md={6} className={"text-center"}>
                                        <p className="bg-primary pt-5 pb-5 text-center rounded"></p>
                                        <h6>Primary</h6>
                                    </Col>
                                    <Col lg={2} md={6} className={"text-center"}>
                                        <p className="bg-secondary pt-5 pb-5 text-center rounded"></p>
                                        <h6>Secondary</h6>
                                    </Col>
                                    <Col lg={2} md={6} className={"text-center"}>
                                        <p className="bg-success pt-5 pb-5 text-center rounded"></p>
                                        <h6>Success</h6>
                                    </Col>
                                    <Col lg={2} md={6} className={"text-center"}>
                                        <p className="bg-danger pt-5 pb-5 text-center rounded"></p>
                                        <h6>Danger</h6>
                                    </Col>
                                    <Col lg={2} md={6} className={"text-center"}>
                                        <p className="bg-warning pt-5 pb-5 text-center rounded"></p>
                                        <h6>Warning</h6>
                                    </Col>
                                    <Col lg={2} md={6} className={"text-center"}>
                                        <p className="bg-info pt-5 pb-5 text-center rounded"></p>
                                        <h6>Info</h6>
                                    </Col>
                                    <Col lg={2} md={6} className={"text-center mt-4"}>
                                        <p className="bg-light pt-5 pb-5 text-center rounded"></p>
                                        <h6>Light</h6>
                                    </Col>
                                    <Col lg={2} md={6} className={"text-center mt-4"}>
                                        <p className="bg-dark pt-5 pb-5 text-center rounded"></p>
                                        <h6>Dark</h6>
                                    </Col>
                                </Row>

                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={6}>
                        <Card className="iq-card">

                            <CardHeader className="iq-card-header d-flex justify-content-between">
                                <CardTitle className="iq-header-title">
                                    <h4 className="card-title ">Sofbox Text Color</h4>
                                </CardTitle>
                                <span className="text-primary float-right" id="collapse2">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                            </CardHeader>

                            <CardBody className="iq-card-body">
                                <p>Contextual text classes also work well on anchors with the provided hover and focus
                                    states. <strong>Note that
                                        the <code>.text-white</code> and <code>.text-muted</code> class has no
                                        additional link styling beyond underline.</strong></p>

                                <UncontrolledCollapse toggler="#collapse2">
                                    <Card>
                                        <kbd className="bg-dark">
                                            <span data-copy-target="#sofbox-color" title="Copy"
                                                  data-toggle="tooltip" className="text-white float-right"
                                                  data-copy="true">
                                                Copy
                                            </span>
                                             <pre className="text-white">
                                                <code>{`
<p className="text-primary">.text-primary</p>
<p className="text-secondary">.text-secondary</p>
<p className="text-success">.text-success</p>
<p className="text-danger">.text-danger</p>
<p className="text-warning">.text-warning</p>
<p className="text-info">.text-info</p>
<p className="text-light bg-dark">.text-light</p>
<p className="text-dark">.text-dark</p>
<p className="text-muted">.text-muted</p>
<p className="text-white bg-dark">.text-white</p>
<p className="text-black-50">.text-black-50</p>
<p className="text-white-50 bg-dark mb-0">.text-white-50</p>
                                                `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>

                                <p className="text-primary">.text-primary</p>
                                <p className="text-secondary">.text-secondary</p>
                                <p className="text-success">.text-success</p>
                                <p className="text-danger">.text-danger</p>
                                <p className="text-warning">.text-warning</p>
                                <p className="text-info">.text-info</p>
                                <p className="text-light bg-dark">.text-light</p>
                                <p className="text-dark">.text-dark</p>
                                <p className="text-muted">.text-muted</p>
                                <p className="text-white bg-dark">.text-white</p>
                                <p className="text-black-50">.text-black-50</p>
                                <p className="text-white-50 bg-dark mb-0">.text-white-50</p>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={6}>
                        <Card className="iq-card">
                            <CardHeader className="iq-card-header d-flex justify-content-between">
                                <CardTitle className="iq-header-title">
                                    <h4 className="card-title ">Sofbox Text Color</h4>
                                </CardTitle>
                                <span className="text-primary float-right" id="collapse3">
                                     <i className="ri-code-s-slash-line"/>
                                </span>
                            </CardHeader>

                            <CardBody className="iq-card-body">
                                <p>Contextual text classes also work well on anchors with the provided hover and focus
                                    states. <strong>Note that
                                        the <code>.text-white</code> and <code>.text-muted</code> class has no
                                        additional link styling beyond underline.</strong></p>
                                <UncontrolledCollapse toggler="#collapse3">
                                    <Card>
                                        <kbd className="bg-dark">
                                            <span data-copy-target="#sofbox-color" title="Copy"
                                                  data-toggle="tooltip" className="text-white float-right"
                                                  data-copy="true">
                                                Copy
                                            </span>
                                            <pre className="text-white">
                                                <code>{`
<p><a href="!#" className="text-primary">Primary link</a></p>
<p><a href="!#" className="text-secondary">Secondary link</a></p>
<p><a href="!#" className="text-success">Success link</a></p>
<p><a href="!#" className="text-danger">Danger link</a></p>
<p><a href="!#" className="text-warning">Warning link</a></p>
<p><a href="!#" className="text-info">Info link</a></p>
<p><a href="!#" className="text-light bg-dark">Light link</a></p>
<p><a href="!#" className="text-dark">Dark link</a></p>
<p><a href="!#" className="text-muted">Muted link</a></p>
<p className="mb-0"><a href="!#" className="text-white bg-dark">White link</a></p>
                                                `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                <p><a href={"!#"} className="text-primary">Primary link</a></p>
                                <p><a href={"!#"} className="text-secondary">Secondary link</a></p>
                                <p><a href={"!#"} className="text-success">Success link</a></p>
                                <p><a href={"!#"} className="text-danger">Danger link</a></p>
                                <p><a href={"!#"} className="text-warning">Warning link</a></p>
                                <p><a href={"!#"} className="text-info">Info link</a></p>
                                <p><a href={"!#"} className="text-light bg-dark">Light link</a></p>
                                <p><a href={"!#"} className="text-dark">Dark link</a></p>
                                <p><a href={"!#"} className="text-muted">Muted link</a></p>
                                <p className="mb-0"><a href={"!#"} className="text-white bg-dark">White link</a></p>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={6}>
                        <Card className="iq-card">

                            <CardHeader className="iq-card-header d-flex justify-content-between">
                                <CardTitle className="iq-header-title">
                                    <h4 className="card-title ">Sofbox Text Color</h4>
                                </CardTitle>
                                <span className="text-primary float-right" id="collapse4">
                                     <i className="ri-code-s-slash-line"/>
                                </span>
                            </CardHeader>

                            <CardBody className="iq-card-body">
                                <p>Contextual text classes also work well on anchors with the provided hover and focus
                                    states. <strong>Note that
                                        the <code>.text-white</code> and <code>.text-muted</code> class has no
                                        additional link styling beyond underline.</strong></p>
                                <UncontrolledCollapse toggler="#collapse4">
                                    <Card>
                                        <kbd className="bg-dark">
                                            <span data-copy-target="#sofbox-color" title="Copy"
                                                  data-toggle="tooltip" className="text-white float-right"
                                                  data-copy="true">
                                                Copy
                                            </span>
                                            <pre className="text-white">
                                                <code>{`
<p className="iq-bg-primary pl-3 pr-3 pt-2 pb-2 rounded">Primary link</p>
<p className="iq-bg-secondary pl-3 pr-3 pt-2 pb-2 rounded">Secondary link</p>
<p className="iq-bg-success pl-3 pr-3 pt-2 pb-2 rounded">Success link</p>
<p className="iq-bg-danger pl-3 pr-3 pt-2 pb-2 rounded">Danger link</p>
<p className="iq-bg-warning pl-3 pr-3 pt-2 pb-2 rounded">Warning link</p>
<p className="iq-bg-info pl-3 pr-3 pt-2 pb-2 rounded">Info link</p>
<p className="iq-bg-dark pl-3 pr-3 pt-2 pb-2 rounded mb-0">Dark link</p>
                                                `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                <p className="iq-bg-primary pl-3 pr-3 pt-2 pb-2 rounded">Primary link</p>
                                <p className="iq-bg-secondary pl-3 pr-3 pt-2 pb-2 rounded">Secondary link</p>
                                <p className="iq-bg-success pl-3 pr-3 pt-2 pb-2 rounded">Success link</p>
                                <p className="iq-bg-danger pl-3 pr-3 pt-2 pb-2 rounded">Danger link</p>
                                <p className="iq-bg-warning pl-3 pr-3 pt-2 pb-2 rounded">Warning link</p>
                                <p className="iq-bg-info pl-3 pr-3 pt-2 pb-2 rounded">Info link</p>
                                <p className="iq-bg-dark pl-3 pr-3 pt-2 pb-2 rounded mb-0">Dark link</p>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={6}>
                        <Card className="iq-card">

                            <CardHeader className="iq-card-header d-flex justify-content-between">
                                <CardTitle className="iq-header-title">
                                    <h4 className="card-title ">Sofbox Text Color</h4>
                                </CardTitle>
                                <span className="text-primary float-right" id="collapse5">
                                     <i className="ri-code-s-slash-line"/>
                                </span>
                            </CardHeader>
                            <CardBody className="iq-card-body">
                                <p>Contextual text classes also work well on anchors with the provided hover and focus
                                    states. <strong>Note that
                                        the <code>.text-white</code> and <code>.text-muted</code> class has no
                                        additional link styling beyond underline.</strong></p>
                                <UncontrolledCollapse toggler="#collapse5">
                                    <Card>
                                        <kbd className="bg-dark">
                                            <span data-copy-target="#sofbox-color" title="Copy"
                                                  data-toggle="tooltip" className="text-white float-right"
                                                  data-copy="true">
                                                Copy
                                            </span>
                                            <pre className="text-white">
                                                <code>{`
<p>
    <a href="!#" className="iq-bg-primary pl-3 pr-3 pt-2 pb-2 rounded d-inline-block">Primary link</a>
</p>
<p>
    <a href="!#" className="iq-bg-secondary pl-3 pr-3 pt-2 pb-2 rounded d-inline-block">Secondary link</a>
</p>
<p>
    <a href="!#" className="iq-bg-success pl-3 pr-3 pt-2 pb-2 rounded d-inline-block">Success link</a>
</p>
<p>
    <a href="!#" className="iq-bg-danger pl-3 pr-3 pt-2 pb-2 rounded d-inline-block">Danger link</a>
</p>
<p>
    <a href="!#" className="iq-bg-warning pl-3 pr-3 pt-2 pb-2 rounded d-inline-block">Warning link</a>
</p>
<p>
    <a href="!#" className="iq-bg-info pl-3 pr-3 pt-2 pb-2 rounded d-inline-block">Info link</a>
</p>
<p className="mb-0">
    <a className="iq-bg-dark pl-3 pr-3 pt-2 pb-2 rounded d-inline-block">Dark link</a>
</p>
                                                `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                <p><a href={"!#"} className="iq-bg-primary pl-3 pr-3 pt-2 pb-2 rounded d-inline-block">Primary
                                    link</a></p>
                                <p><a href={"!#"} className="iq-bg-secondary pl-3 pr-3 pt-2 pb-2 rounded d-inline-block">Secondary
                                    link</a></p>
                                <p><a href={"!#"} className="iq-bg-success pl-3 pr-3 pt-2 pb-2 rounded d-inline-block">Success
                                    link</a></p>
                                <p><a href={"!#"} className="iq-bg-danger pl-3 pr-3 pt-2 pb-2 rounded d-inline-block">Danger
                                    link</a></p>
                                <p><a href={"!#"} className="iq-bg-warning pl-3 pr-3 pt-2 pb-2 rounded d-inline-block">Warning
                                    link</a></p>
                                <p><a href={"!#"} className="iq-bg-info pl-3 pr-3 pt-2 pb-2 rounded d-inline-block">Info
                                    link</a></p>
                                <p className="mb-0"><a href={"!#"} className="iq-bg-dark pl-3 pr-3 pt-2 pb-2 rounded d-inline-block">Dark
                                    link</a></p>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </>
        );
    }
}

export default Index;
