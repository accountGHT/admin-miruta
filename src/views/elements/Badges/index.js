import React from 'react';
import {Row, Col, Card, CardHeader, CardTitle, CardBody, UncontrolledCollapse,Badge,Button} from 'reactstrap';
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
                    <Col sm={12} lg={6}>
                        <Card className={"iq-card"}>
                            <CardHeader className={"iq-header-title"}>
                                <span className="text-primary float-right" id="collapse1">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                                <CardTitle  className={"card-title"}><h4>Badge</h4></CardTitle>
                            </CardHeader>

                            <CardBody className={"iq-card-body"}>
                                <p>Badges scale to match the size of the immediate parent element by using relative font sizing and <code>em</code> units.</p>

                                <UncontrolledCollapse toggler="#collapse1">
                                    <Card>
                                        <kbd className="bg-dark">
                                            <span data-copy-target="#badge" title="Copy"
                                                  data-toggle="tooltip" className="text-white float-right"
                                                  data-copy="true">
                                                Copy
                                            </span>
                                            <pre className="text-white">
                                                <code>{`
<h1 className="mb-3">Example heading
<Badge color="primary">New</Badge>
</h1>
<h2 className="mb-3">Example heading <Badge color="secondary">New</Badge>
</h2>
<h3 className="mb-3">Example heading <Button color="success">
    Notifications <Badge color="secondary">4</Badge>
</Button>
</h3>
<h4 className="mb-3">Example heading <Badge color="danger">New</Badge>
</h4>
<h5 className="mb-3">Example heading <Badge color="warning">New</Badge>
</h5>
<h6 className="mb-0">Example heading<Badge color="info">New</Badge></h6>
                                                `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>

                                <h1 className="mb-3">Example heading
                                    <Badge color="primary">New</Badge>
                                </h1>
                                <h2 className="mb-3">Example heading <Badge color="secondary">New</Badge>
                                </h2>
                                <h3 className="mb-3">Example heading <Button color="success">
                                    Notifications <Badge color="secondary">4</Badge>
                                </Button>
                                </h3>
                                <h4 className="mb-3">Example heading <Badge color="danger">New</Badge>
                                </h4>
                                <h5 className="mb-3">Example heading <Badge color="warning">New</Badge>
                                </h5>
                                <h6 className="mb-0">Example heading<Badge color="info">New</Badge></h6>

                            </CardBody>
                        </Card>

                        <Card className={"iq-card"}>
                            <CardHeader className={"iq-header-title"}>
                                <span className="text-primary float-right" id="collapse2">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                                <CardTitle  className={"card-title"}><h4>Button Badges</h4></CardTitle>
                            </CardHeader>

                            <CardBody className={"iq-card-body"}>
                                <p>Badges can be used as part of buttons to provide a counter.</p>

                                <UncontrolledCollapse toggler="#collapse2">
                                    <Card>
                                        <kbd className="bg-dark">
                                            <span data-copy-target="#badge" title="Copy"
                                                  data-toggle="tooltip" className="text-white float-right"
                                                  data-copy="true">
                                                Copy
                                            </span>
                                            <pre className="text-white">
                                                <code>{`
<Button color="primary"  className="mb-1">
Notifications <Badge color="light" className="ml-2">4</Badge>
</Button>{' '}
<Button color="success" className="mb-1 btn-success">
Notifications <Badge color="light" className="ml-2">4</Badge>
</Button>{' '}
<Button color="danger" className="mb-1 btn-danger">
Notifications <Badge  color="light" className="ml-2">4</Badge>
</Button>{' '}
                                                `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>

                                <Button color="primary"  className="mb-1">
                                    Notifications <Badge color={"light"} className="ml-2">4</Badge>
                                </Button>{' '}
                                <Button color="success" className="mb-1 btn-success">
                                    Notifications <Badge color={"light"} className="ml-2">4</Badge>
                                </Button>{' '}
                                <Button color="danger" className="mb-1 btn-danger">
                                    Notifications <Badge color={"light"} className="ml-2">4</Badge>
                                </Button>

                            </CardBody>
                        </Card>

                        <Card className={"iq-card"}>
                            <CardHeader className={"iq-header-title"}>
                                <span className="text-primary float-right" id="collapse3">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                                <CardTitle  className={"card-title"}><h4>Button Border Badges</h4></CardTitle>
                            </CardHeader>

                            <CardBody className={"iq-card-body"}>
                                <p>Badges can be used as part of buttons to provide a counter.</p>

                                <UncontrolledCollapse toggler="#collapse3">
                                    <Card>
                                        <kbd className="bg-dark">
                                            <span data-copy-target="#badge" title="Copy"
                                                  data-toggle="tooltip" className="text-white float-right"
                                                  data-copy="true">
                                                Copy
                                            </span>
                                            <pre className="text-white">
                                                <code>{`
<Button outline color="primary"  className="mb-1 btn-outline-primary">
Notifications <Badge color="primary" className="ml-2">4</Badge>
</Button>{' '}
<Button  outline color="success" className="mb-1 btn-outline-success">
Notifications <Badge  color="success" className="ml-2">4</Badge>
</Button>{' '}
<Button outline color="danger" className="mb-1 btn-outline-danger">
Notifications <Badge  color="danger" className="ml-2">4</Badge>
</Button>{' '}
                                                `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>

                                <Button outline color="primary"  className="mb-1 btn-outline-primary">
                                    Notifications <Badge color="primary" className="ml-2">4</Badge>
                                </Button>{' '}
                                <Button outline color="success" className="mb-1 btn-outline-success">
                                    Notifications <Badge  color="success" className="ml-2">4</Badge>
                                </Button>{' '}
                                <Button outline color="danger" className="mb-1 btn-outline-danger">
                                    Notifications <Badge  color="danger" className="ml-2">4</Badge>
                                </Button>{' '}

                            </CardBody>
                        </Card>

                        <Card className={"iq-card"}>
                            <CardHeader className={"iq-header-title"}>
                                <span className="text-primary float-right" id="collapse4">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                                <CardTitle  className={"card-title"}><h4>Button Light background Badges</h4></CardTitle>
                            </CardHeader>

                            <CardBody className={"iq-card-body"}>
                                <p>Badges can be used as part of buttons to provide a counter.</p>

                                <UncontrolledCollapse toggler="#collapse4">
                                    <Card>
                                        <kbd className="bg-dark">
                                            <span data-copy-target="#badge" title="Copy"
                                                  data-toggle="tooltip" className="text-white float-right"
                                                  data-copy="true">
                                                Copy
                                            </span>
                                            <pre className="text-white">
                                                <code>{`
<Button  color="primary"  className="mb-1 iq-bg-primary">
Notifications <Badge color="primary" className="ml-2">4</Badge>
</Button>{' '}
<Button   color="success" className="mb-1 iq-bg-success">
Notifications <Badge  color="success" className="ml-2">4</Badge>
</Button>{' '}
<Button  color="danger" className="mb-1 iq-bg-danger">
Notifications <Badge  color="danger" className="ml-2">4</Badge>
</Button>
                                                `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>

                                <Button  color="primary"  className="mb-1 iq-bg-primary">
                                    Notifications <Badge color="primary" className="ml-2">4</Badge>
                                </Button>{' '}
                                <Button   color="success" className="mb-1 iq-bg-success">
                                    Notifications <Badge  color="success" className="ml-2">4</Badge>
                                </Button>{' '}
                                <Button  color="danger" className="mb-1 iq-bg-danger">
                                    Notifications <Badge  color="danger" className="ml-2">4</Badge>
                                </Button>

                            </CardBody>
                        </Card>


                    </Col>

                    <Col sm={12} lg={6}>
                        <Card className={"iq-card"}>
                            <CardHeader className={"iq-header-title"}>
                                <span className="text-primary float-right" id="collapse5">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                                <CardTitle  className={"card-title"}><h4>Contextual variations</h4></CardTitle>
                            </CardHeader>

                            <CardBody className={"iq-card-body"}>
                                <p>Add any of the below mentioned modifier classes to change the appearance of a badge.</p>

                                <UncontrolledCollapse toggler="#collapse5">
                                    <Card>
                                        <kbd className="bg-dark">
                                            <span data-copy-target="#badge" title="Copy"
                                                  data-toggle="tooltip" className="text-white float-right"
                                                  data-copy="true">
                                                Copy
                                            </span>
                                            <pre className="text-white">
                                                <code>{`
<Badge color="primary">Primary</Badge>{' '}
<Badge color="secondary">Secondary</Badge>{' '}
<Badge color="success">Success</Badge>{' '}
<Badge color="danger">Danger</Badge>{' '}
<Badge color="warning">Warning</Badge>{' '}
<Badge color="info">Info</Badge>{' '}
<Badge color="light">Light</Badge>{' '}
<Badge color="dark">Dark</Badge>{' '}
<h5 color="card-title mt-4">Pill badges</h5>
<p>Use the <code>.badge-pill</code> modifier class to make badges more rounded (with a
larger <code>border-radius</code> and additional horizontal <code>padding</code>).
Useful if you miss the badges from v3.</p>
<Badge pill color="primary">Primary</Badge>{' '}
<Badge pill color="secondary">Secondary</Badge>{' '}
<Badge pill color="success">Success</Badge>{' '}
<Badge pill color="danger">Danger</Badge>{' '}
<Badge pill color="warning">Warning</Badge>{' '}
<Badge pill color="info">Info</Badge>{' '}
<Badge pill color="light">Light</Badge>{' '}
<Badge pill color="dark">Dark</Badge>{' '}
<h5 className="card-title mt-4">Links</h5>
<p>Using the contextual <code>.badge-*</code> classes on
an <code>&lt;a&gt;</code> element quickly provide <em>actionable</em> badges with
hover and focus states.</p>
<a href="!#" className="badge badge-primary">Primary</a>{' '}
<a href="!#" className="badge badge-secondary">Secondary</a>{' '}
<a href="!#" className="badge badge-success">Success</a>{' '}
<a href="!#" className="badge badge-danger">Danger</a>{' '}
<a href="!#" className="badge badge-warning">Warning</a>{' '}
<a href="!#" className="badge badge-info">Info</a>{' '}
<a href="!#" className="badge badge-light">Light</a>{' '}
<a href="!#" className="badge badge-dark">Dark</a>{' '}

                                                `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>

                                <Badge color="primary">Primary</Badge>{' '}
                                <Badge color="secondary">Secondary</Badge>{' '}
                                <Badge color="success">Success</Badge>{' '}
                                <Badge color="danger">Danger</Badge>{' '}
                                <Badge color="warning">Warning</Badge>{' '}
                                <Badge color="info">Info</Badge>{' '}
                                <Badge color="light">Light</Badge>{' '}
                                <Badge color="dark">Dark</Badge>v
                                <h5 color="card-title mt-4">Pill badges</h5>
                                <p>Use the <code>.badge-pill</code> modifier class to make badges more rounded (with a
                                    larger <code>border-radius</code> and additional horizontal <code>padding</code>).
                                    Useful if you miss the badges from v3.</p>
                                <Badge pill color="primary">Primary</Badge>{' '}
                                <Badge pill color="secondary">Secondary</Badge>{' '}
                                <Badge pill color="success">Success</Badge>{' '}
                                <Badge pill color="danger">Danger</Badge>{' '}
                                <Badge pill color="warning">Warning</Badge>{' '}
                                <Badge pill color="info">Info</Badge>{' '}
                                <Badge pill color="light">Light</Badge>{' '}
                                <Badge pill color="dark">Dark</Badge>{' '}
                                <h5 className="card-title mt-4">Links</h5>
                                <p>Using the contextual <code>.badge-*</code> classes on
                                    an <code>&lt;a&gt;</code> element quickly provide <em>actionable</em> badges with
                                    hover and focus states.</p>
                                <a href="!#" className="badge badge-primary">Primary</a>{' '}
                                <a href="!#" className="badge badge-secondary">Secondary</a>{' '}
                                <a href="!#" className="badge badge-success">Success</a>{' '}
                                <a href="!#" className="badge badge-danger">Danger</a>{' '}
                                <a href="!#" className="badge badge-warning">Warning</a>{' '}
                                <a href="!#" className="badge badge-info">Info</a>{' '}
                                <a href="!#" className="badge badge-light">Light</a>{' '}
                                <a href="!#" className="badge badge-dark">Dark</a>

                            </CardBody>
                        </Card>

                        <Card className={"iq-card"}>
                            <CardHeader className={"iq-header-title"}>
                                <span className="text-primary float-right" id="collapse6">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                                <CardTitle  className={"card-title"}><h4>Contextual variations Border</h4></CardTitle>
                            </CardHeader>

                            <CardBody className={"iq-card-body"}>
                                <p>Add any of the below mentioned modifier classes to change the appearance of a badge.</p>

                                <UncontrolledCollapse toggler="#collapse6">
                                    <Card>
                                        <kbd className="bg-dark">
                                            <span data-copy-target="#badge" title="Copy"
                                                  data-toggle="tooltip" className="text-white float-right"
                                                  data-copy="true">
                                                Copy
                                            </span>
                                            <pre className="text-white">
                                                <code>{`
<span className={"badge border border-primary text-primary "}>Primary</span>{' '}
<span className={"badge border border-secondary text-secondary"}>Secondary</span>{' '}
<span className={"badge border border-success text-success"}>Success</span>{' '}
<span className={"badge border border-danger text-danger"}>Danger</span>{' '}
<span className={"badge border border-warning text-warning"}>Warning</span>{' '}
<span className={"badge border border-info text-info"}>Info</span>{' '}
<span className={"badge border border-light text-light"}>Light</span>{' '}
<span className={"badge border border-dark text-dark"} >Dark</span>
<h5 color="card-title mt-4">Pill badges</h5>
<p>Use the <code>.badge-pill</code> modifier class to make badges more rounded (with a
    larger <code>border-radius</code> and additional horizontal <code>padding</code>).
    Useful if you miss the badges from v3.</p>
<span className={"badge badge-pill border border-primary text-primary "}>Primary</span>{' '}
<span className={"badge badge-pill border border-secondary text-secondary"}>Secondary</span>{' '}
<span className={"badge badge-pill border border-success text-success"}>Success</span>{' '}
<span className={"badge badge-pill border border-danger text-danger"}>Danger</span>{' '}
<span className={"badge badge-pill border border-warning text-warning"}>Warning</span>{' '}
<span className={"badge badge-pill border border-info text-info"}>Info</span>{' '}
<span className={"badge badge-pill border border-light text-light"}>Light</span>{' '}
<span className={"badge badge-pill border border-dark text-dark"} >Dark</span>
<h5 className="card-title mt-4">Links</h5>
<p>Using the contextual <code>.badge-*</code> classes on
    an <code>&lt;a&gt;</code> element quickly provide <em>actionable</em> badges with
    hover and focus states.</p>
<a href="!#" className={"badge border border-primary text-primary "}>Primary</a>{' '}
<a href="!#" className={"badge border border-secondary text-secondary"}>Secondary</a>{' '}
<a href="!#" className={"badge border border-success text-success"}>Success</a>{' '}
<a href="!#" className={"badge border border-danger text-danger"}>Danger</a>{' '}
<a href="!#" className={"badge border border-warning text-warning"}>Warning</a>{' '}
<a href="!#" className={"badge border border-info text-info"}>Info</a>{' '}
<a href="!#" className={"badge border border-light text-light"}>Light</a>{' '}
<a href="!#" className={"badge border border-dark text-dark"} >Dark</a>

                                                `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>

                                <span className={"badge border border-primary text-primary "}>Primary</span>{' '}
                                <span className={"badge border border-secondary text-secondary"}>Secondary</span>{' '}
                                <span className={"badge border border-success text-success"}>Success</span>{' '}
                                <span className={"badge border border-danger text-danger"}>Danger</span>{' '}
                                <span className={"badge border border-warning text-warning"}>Warning</span>{' '}
                                <span className={"badge border border-info text-info"}>Info</span>{' '}
                                <span className={"badge border border-light text-light"}>Light</span>{' '}
                                <span className={"badge border border-dark text-dark"} >Dark</span>
                                <h5 color="card-title mt-4">Pill badges</h5>
                                <p>Use the <code>.badge-pill</code> modifier class to make badges more rounded (with a
                                    larger <code>border-radius</code> and additional horizontal <code>padding</code>).
                                    Useful if you miss the badges from v3.</p>
                                <span className={"badge badge-pill border border-primary text-primary "}>Primary</span>{' '}
                                <span className={"badge badge-pill border border-secondary text-secondary"}>Secondary</span>{' '}
                                <span className={"badge badge-pill border border-success text-success"}>Success</span>{' '}
                                <span className={"badge badge-pill border border-danger text-danger"}>Danger</span>{' '}
                                <span className={"badge badge-pill border border-warning text-warning"}>Warning</span>{' '}
                                <span className={"badge badge-pill border border-info text-info"}>Info</span>{' '}
                                <span className={"badge badge-pill border border-light text-light"}>Light</span>{' '}
                                <span className={"badge badge-pill border border-dark text-dark"} >Dark</span>
                                <h5 className="card-title mt-4">Links</h5>
                                <p>Using the contextual <code>.badge-*</code> classes on
                                    an <code>&lt;a&gt;</code> element quickly provide <em>actionable</em> badges with
                                    hover and focus states.</p>
                                <a href={"!#"} className={"badge border border-primary text-primary "}>Primary</a>{' '}
                                <a href={"!#"} className={"badge border border-secondary text-secondary"}>Secondary</a>{' '}
                                <a href={"!#"} className={"badge border border-success text-success"}>Success</a>{' '}
                                <a href={"!#"} className={"badge border border-danger text-danger"}>Danger</a>{' '}
                                <a href={"!#"} className={"badge border border-warning text-warning"}>Warning</a>{' '}
                                <a href={"!#"} className={"badge border border-info text-info"}>Info</a>{' '}
                                <a href={"!#"} className={"badge border border-light text-light"}>Light</a>{' '}
                                <a href={"!#"} className={"badge border border-dark text-dark"} >Dark</a>

                            </CardBody>
                        </Card>

                    </Col>
                </Row>
            </>
        );
    }
}

export default Index;
