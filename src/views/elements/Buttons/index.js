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
    ButtonDropdown,
    ButtonGroup,
    ButtonToggle,
    ButtonToolbar,
    DropdownItem,
    DropdownMenu,
    DropdownToggle, UncontrolledCollapse
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
                    <Col sm={12} lg={6} >
                        <Card className="iq-card">
                                <CardHeader className="iq-header-title">
                                        <span className="text-primary float-right" id="collapse1">
                                            <i className="ri-code-s-slash-line" />
                                         </span>
                                    <CardTitle><h4 className="card-title">Default Buttons</h4></CardTitle>
                                </CardHeader>
                                <CardBody className="iq-card-body">
                                <p className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>

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
<Button color="primary" className="mb-3">primary</Button>{' '}
<Button color="secondary" className="mb-3">secondary</Button>{' '}
<Button color="success" className="mb-3">success</Button>{' '}
<Button color="danger" className="mb-3">danger</Button>{' '}
<Button color="warning" className="mb-3">warning</Button>{' '}
<Button color="info" className="mb-3">info</Button>{' '}
<Button color="light" className="mb-3">Light</Button>{' '}
<Button color="dark" className="mb-3">Dark</Button>{' '}
<Button color="link" className="mb-3">link</Button>
                                                `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>

                                    <Button color="primary" className="mb-3">primary</Button>{' '}
                                    <Button color="secondary" className="mb-3">secondary</Button>{' '}
                                    <Button color="success" className="mb-3">success</Button>{' '}
                                    <Button color="danger" className="mb-3">danger</Button>{' '}
                                    <Button color="warning" className="mb-3">warning</Button>{' '}
                                    <Button color="info" className="mb-3">info</Button>{' '}
                                    <Button color="light" className="mb-3">Light</Button>{' '}
                                    <Button color="dark" className="mb-3">Dark</Button>{' '}
                                    <Button color="link" className="mb-3">link</Button>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col sm={12} lg={6}>
                        <Card className="iq-card">
                                <CardHeader className="iq-header-title">
                                        <span className="text-primary float-right" id="collapse2">
                                            <i className="ri-code-s-slash-line" />
                                         </span>
                                  <CardTitle><h4 className="card-title">Default Buttons Rounded Shape</h4></CardTitle>
                                </CardHeader>
                                <CardBody className="iq-card-body">
                                <CardText className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</CardText>
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
<Button color="primary" className="rounded-pill mb-3">primary</Button>{' '}
<Button color="secondary" className="rounded-pill mb-3">secondary</Button>{' '}
<Button color="success" className="rounded-pill mb-3">success</Button>{' '}
<Button color="danger" className="rounded-pill mb-3">danger</Button>{' '}
<Button color="warning" className="rounded-pill mb-3">warning</Button>{' '}
<Button color="info" className="rounded-pill mb-3">info</Button>{' '}
<Button color="light" className="rounded-pill mb-3">Light</Button>{' '}
<Button color="dark" className="rounded-pill mb-3">Dark</Button>{' '}
<Button color="link" className="rounded-pill mb-3">link</Button>
                                                `}
                                                </code>
                                            </pre>
                                            </kbd>
                                        </Card>
                                    </UncontrolledCollapse>

                                    <Button color="primary" className="rounded-pill mb-3">primary</Button>{' '}
                                    <Button color="secondary" className="rounded-pill mb-3">secondary</Button>{' '}
                                    <Button color="success" className="rounded-pill mb-3">success</Button>{' '}
                                    <Button color="danger" className="rounded-pill mb-3">danger</Button>{' '}
                                    <Button color="warning" className="rounded-pill mb-3">warning</Button>{' '}
                                    <Button color="info" className="rounded-pill mb-3">info</Button>{' '}
                                    <Button color="light" className="rounded-pill mb-3">Light</Button>{' '}
                                    <Button color="dark" className="rounded-pill mb-3">Dark</Button>{' '}
                                    <Button color="link" className="rounded-pill mb-3">link</Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
         
                <Row>
                    <Col sm={12} lg={6} >
                        <Card className="iq-card">
                                <CardHeader className="iq-header-title">
                                     <span className="text-primary float-right" id="collapse3">
                                            <i className="ri-code-s-slash-line" />
                                     </span>
                                   <CardTitle><h4 className="card-title">Outline Buttons</h4></CardTitle>
                                </CardHeader>
                                <CardBody className="iq-card-body">
                                <CardText className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</CardText>
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
<Button outline color="primary">primary</Button>{' '}
<Button outline color="secondary">secondary</Button>{' '}
<Button outline color="success">success</Button>{' '}
<Button outline color="danger">danger</Button>
<Button outline color="warning">warning</Button>{' '}
<Button outline color="info">info</Button>{' '}
<Button outline color="dark">dark</Button>{' '}
<Button outline color="link">link</Button>{' '}
                                                `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                <Button outline color="primary">primary</Button>{' '}
                                <Button outline color="secondary">secondary</Button>{' '}
                                <Button outline color="success">success</Button>{' '}
                                <Button outline color="danger">danger</Button>
                                <Button outline color="warning">warning</Button>{' '}
                                <Button outline color="info">info</Button>{' '}
                                <Button outline color="dark">dark</Button>{' '}
                                <Button outline color="link">link</Button>{' '}
                            </CardBody>
                        </Card>

                    </Col>

                    <Col sm={12} lg={6} >
                        <Card className="iq-card">
                            <CardHeader className="iq-header-title">
                                    <span className="text-primary float-right" id="collapse4">
                                        <i className="ri-code-s-slash-line" />
                                     </span>
                                <CardTitle><h4 className="card-title">Rounded Outline Buttons</h4></CardTitle>
                            </CardHeader>
                            <CardBody className="iq-card-body">
                                <CardText className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</CardText>
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
<Button  outline color="primary" className="rounded-pill mb-3">Primary</Button>
<Button  outline color="secondary" className="rounded-pill mb-3">Secondary</Button>
<Button  outline color="success" className="rounded-pill mb-3">Success</Button>
<Button  outline color="warning" className="rounded-pill mb-3">Warning</Button>
<Button  outline color="danger" className="rounded-pill mb-3">Danger</Button>
<Button  outline color="info" className="rounded-pill mb-3">Info</Button>
<Button  outline color="light" className="rounded-pill mb-3">Light</Button>
<Button  outline color="dark" className="rounded-pill mb-3">Dark</Button>
<Button  outline color="link" className="rounded-pill mb-3" >Link</Button>
                                                `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                    <Button  outline color="primary" className="rounded-pill mb-3">Primary</Button>
                                    <Button  outline color="secondary" className="rounded-pill mb-3">Secondary</Button>
                                    <Button  outline color="success" className="rounded-pill mb-3">Success</Button>
                                    <Button  outline color="warning" className="rounded-pill mb-3">Warning</Button>
                                    <Button  outline color="danger" className="rounded-pill mb-3">Danger</Button>
                                    <Button  outline color="info" className="rounded-pill mb-3">Info</Button>
                                    <Button  outline color="light" className="rounded-pill mb-3">Light</Button>
                                    <Button  outline color="dark" className="rounded-pill mb-3">Dark</Button>
                                    <Button  outline color="link" className="rounded-pill mb-3" >Link</Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            
                <Row>
                    <Col sm={12} lg={6} >
                        <Card className="iq-card">
                                <CardHeader className="iq-header-title">
                                    <span className="text-primary float-right" id="collapse5">
                                        <i className="ri-code-s-slash-line" />
                                     </span>
                                    <CardTitle><h4 className="card-title">Default Buttons</h4></CardTitle>
                                </CardHeader>
                                <CardBody className="iq-card-body">
                                <CardText className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</CardText>
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
<Button color="primary" className="mb-3"><i className="ri-bill-fill" /> primary</Button>{' '}
<Button color="secondary" className="mb-3"><i className="ri-heart-fill" /> secondary</Button>{' '}
<Button color="success" className="mb-3"><i className="ri-bill-fill" /> success</Button>{' '}
<Button color="danger" className="mb-3"><i className="ri-heart-fill" /> danger</Button>{' '}
<Button color="warning" className="mb-3"><i className="ri-bill-fill" /> warning</Button>{' '}
<Button color="info" className="mb-3"><i className="ri-heart-fill" /> info</Button>{' '}
<Button color="light" className="mb-3"><i className="ri-bill-fill" /> Light</Button>{' '}
<Button color="dark" className="mb-3"><i className="ri-heart-fill" /> Dark</Button>{' '}
<Button color="link" className="mb-3"><i className="ri-bill-fill" /> link</Button>
                                                `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                    <Button color="primary" className="mb-3"><i className="ri-bill-fill" /> primary</Button>{' '}
                                    <Button color="secondary" className="mb-3"><i className="ri-heart-fill" /> secondary</Button>{' '}
                                    <Button color="success" className="mb-3"><i className="ri-bill-fill" /> success</Button>{' '}
                                    <Button color="danger" className="mb-3"><i className="ri-heart-fill" /> danger</Button>{' '}
                                    <Button color="warning" className="mb-3"><i className="ri-bill-fill" /> warning</Button>{' '}
                                    <Button color="info" className="mb-3"><i className="ri-heart-fill" /> info</Button>{' '}
                                    <Button color="light" className="mb-3"><i className="ri-bill-fill" /> Light</Button>{' '}
                                    <Button color="dark" className="mb-3"><i className="ri-heart-fill" /> Dark</Button>{' '}
                                    <Button color="link" className="mb-3"><i className="ri-bill-fill" /> link</Button>
                            </CardBody>
                        </Card>

                    </Col>

                    <Col sm={12} lg={6} >
                        <Card className="iq-card">
                                <CardHeader className="iq-header-title">
                                    <span className="text-primary float-right" id="collapse6">
                                        <i className="ri-code-s-slash-line" />
                                     </span>
                                    <CardTitle><h4 className="card-title">Default Buttons Rounded Shape</h4></CardTitle>
                                </CardHeader>
                                <CardBody className="iq-card-body">
                                <CardText className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</CardText>
                                <UncontrolledCollapse toggler="#collapse6">
                                    <Card>
                                        <kbd className="bg-dark">
                                            <span data-copy-target="#sofbox-color" title="Copy"
                                                  data-toggle="tooltip" className="text-white float-right"
                                                  data-copy="true">
                                                Copy
                                            </span>
                                            <pre className="text-white">
                                                <code>{`
<Button color="primary" className="rounded-pill mb-3"><i className="ri-bill-fill" /> primary</Button>{' '}
<Button color="secondary" className="rounded-pill mb-3"><i className="ri-heart-fill" /> secondary</Button>{' '}
<Button color="success" className="rounded-pill mb-3"><i className="ri-bill-fill" /> success</Button>{' '}
<Button color="danger" className="rounded-pill mb-3"><i className="ri-heart-fill" /> danger</Button>{' '}
<Button color="warning" className="rounded-pill mb-3"><i className="ri-bill-fill" /> warning</Button>{' '}
<Button color="info" className="rounded-pill mb-3"><i className="ri-heart-fill" /> info</Button>{' '}
<Button color="light" className="rounded-pill mb-3"><i className="ri-bill-fill" /> Light</Button>{' '}
<Button color="dark" className="rounded-pill mb-3"><i className="ri-heart-fill" /> Dark</Button>{' '}
<Button color="link" className="rounded-pill mb-3"><i className="ri-bill-fill" /> link</Button>
                                                `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                    <Button color="primary" className="rounded-pill mb-3"><i className="ri-bill-fill" /> primary</Button>{' '}
                                    <Button color="secondary" className="rounded-pill mb-3"><i className="ri-heart-fill" /> secondary</Button>{' '}
                                    <Button color="success" className="rounded-pill mb-3"><i className="ri-bill-fill" /> success</Button>{' '}
                                    <Button color="danger" className="rounded-pill mb-3"><i className="ri-heart-fill" /> danger</Button>{' '}
                                    <Button color="warning" className="rounded-pill mb-3"><i className="ri-bill-fill" /> warning</Button>{' '}
                                    <Button color="info" className="rounded-pill mb-3"><i className="ri-heart-fill" /> info</Button>{' '}
                                    <Button color="light" className="rounded-pill mb-3"><i className="ri-bill-fill" /> Light</Button>{' '}
                                    <Button color="dark" className="rounded-pill mb-3"><i className="ri-heart-fill" /> Dark</Button>{' '}
                                    <Button color="link" className="rounded-pill mb-3"><i className="ri-bill-fill" /> link</Button>
                            </CardBody>
                        </Card>

                    </Col>
                </Row>
            
                <Row>
                    <Col sm={12} lg={6}>
                        <Card className="iq-card">
                                 <CardHeader className="iq-header-title">
                                    <span className="text-primary float-right" id="collapse7">
                                        <i className="ri-code-s-slash-line" />
                                     </span>
                                    <CardTitle><h4 className="card-title">Outline Buttons</h4></CardTitle>
                                </CardHeader>
                                 <CardBody className="iq-card-body">
                                <CardText className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</CardText>
                                <UncontrolledCollapse toggler="#collapse7">
                                    <Card>
                                        <kbd className="bg-dark">
                                            <span data-copy-target="#sofbox-color" title="Copy"
                                                  data-toggle="tooltip" className="text-white float-right"
                                                  data-copy="true">
                                                Copy
                                            </span>
                                            <pre className="text-white">
                                                <code>{`
<Button outline color="primary" className="mb-3"><i className="ri-heart-line" /> primary</Button>{' '}
<Button outline color="secondary" className="mb-3"><i className="ri-alert-line" /> secondary</Button>{' '}
<Button outline color="success" className="mb-3"><i className="ri-heart-line" /> success</Button>{' '}
<Button outline color="danger" className="mb-3"><i className="ri-alert-line" /> danger</Button>{' '}
<Button outline color="warning" className="mb-3"><i className="ri-heart-line" /> warning</Button>{' '}
<Button outline color="info" className="mb-3"><i className="ri-alert-line" /> info</Button>{' '}
<Button outline color="dark" className="mb-3"><i className="ri-heart-line" /> dark</Button>{' '}
<Button outline color="link" className="mb-3"><i className="ri-alert-line" /> link</Button>
                                                `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                <Button outline color="primary" className="mb-3"><i className="ri-heart-line" /> primary</Button>{' '}
                                <Button outline color="secondary" className="mb-3"><i className="ri-alert-line" /> secondary</Button>{' '}
                                <Button outline color="success" className="mb-3"><i className="ri-heart-line" /> success</Button>{' '}
                                <Button outline color="danger" className="mb-3"><i className="ri-alert-line" /> danger</Button>{' '}
                                <Button outline color="warning" className="mb-3"><i className="ri-heart-line" /> warning</Button>{' '}
                                <Button outline color="info" className="mb-3"><i className="ri-alert-line" /> info</Button>{' '}
                                <Button outline color="dark" className="mb-3"><i className="ri-heart-line" /> dark</Button>{' '}
                                <Button outline color="link" className="mb-3"><i className="ri-alert-line" /> link</Button>
                            </CardBody>
                        </Card>

                    </Col>

                    <Col sm={12} lg={6}>
                        <Card className="iq-card">
                                <CardHeader className="iq-header-title">
                                    <span className="text-primary float-right" id="collapse8">
                                        <i className="ri-code-s-slash-line" />
                                     </span>
                                     <CardTitle><h4 className="card-title">Rounded Outline Buttons</h4></CardTitle>
                                </CardHeader>
                                <CardBody className="iq-card-body">
                                <CardText className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</CardText>
                                <UncontrolledCollapse toggler="#collapse8">
                                    <Card>
                                        <kbd className="bg-dark">
                                            <span data-copy-target="#sofbox-color" title="Copy"
                                                  data-toggle="tooltip" className="text-white float-right"
                                                  data-copy="true">
                                                Copy
                                            </span>
                                            <pre className="text-white">
                                                <code>{`
<Button outline color="primary" className="mb-3 rounded-pill"><i className="ri-heart-line" /> primary</Button>{' '}
<Button outline color="secondary" className="mb-3 rounded-pill"><i className="ri-alert-line" /> secondary</Button>{' '}
<Button outline color="success" className="mb-3 rounded-pill"><i className="ri-heart-line" /> success</Button>{' '}
<Button outline color="danger" className="mb-3 rounded-pill"><i className="ri-alert-line" /> danger</Button>{' '}
<Button outline color="warning" className="mb-3 rounded-pill"><i className="ri-heart-line" /> warning</Button>{' '}
<Button outline color="info" className="mb-3 rounded-pill"><i className="ri-alert-line" /> info</Button>{' '}
<Button outline color="dark" className="mb-3 rounded-pill"><i className="ri-heart-line" /> dark</Button>{' '}
<Button outline color="link" className="mb-3 rounded-pill"><i className="ri-alert-line" /> link</Button>
                                                `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                    <Button outline color="primary" className="mb-3 rounded-pill"><i className="ri-heart-line" /> primary</Button>{' '}
                                    <Button outline color="secondary" className="mb-3 rounded-pill"><i className="ri-alert-line" /> secondary</Button>{' '}
                                    <Button outline color="success" className="mb-3 rounded-pill"><i className="ri-heart-line" /> success</Button>{' '}
                                    <Button outline color="danger" className="mb-3 rounded-pill"><i className="ri-alert-line" /> danger</Button>{' '}
                                    <Button outline color="warning" className="mb-3 rounded-pill"><i className="ri-heart-line" /> warning</Button>{' '}
                                    <Button outline color="info" className="mb-3 rounded-pill"><i className="ri-alert-line" /> info</Button>{' '}
                                    <Button outline color="dark" className="mb-3 rounded-pill"><i className="ri-heart-line" /> dark</Button>{' '}
                                    <Button outline color="link" className="mb-3 rounded-pill"><i className="ri-alert-line" /> link</Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            
                <Row>
                    <Col sm={12} lg={6}>
                        <Card className="iq-card">
                                <CardHeader className="iq-header-title">
                                    <span className="text-primary float-right" id="collapse9">
                                        <i className="ri-code-s-slash-line" />
                                     </span>
                                    <CardTitle><h4 className="card-title">Button Tags</h4></CardTitle>
                                </CardHeader>
                                <CardBody className="iq-card-body">
                                <CardText className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</CardText>
                                <UncontrolledCollapse toggler="#collapse9">
                                    <Card>
                                        <kbd className="bg-dark">
                                            <span data-copy-target="#sofbox-color" title="Copy"
                                                  data-toggle="tooltip" className="text-white float-right"
                                                  data-copy="true">
                                                Copy
                                            </span>
                                            <pre className="text-white">
                                                <code>{`
<Button color="primary">Link</Button>{' '}
<Button color="success" type="submit">Button</Button>
<Button color="danger"  as="input" type="button" value="Input" /> {' '}
<Button color="warning"  as="input" type="submit" value="Submit" />{' '}
<Button color="info"as="input" type="reset" value="Reset" />{' '}
                                                `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                <Button color="primary">Link</Button>{' '}
                                <Button color="success" type="submit">Button</Button>
                                <Button color="danger"  as="input" type="button" value="Input" /> {' '}
                                <Button color="warning"  as="input" type="submit" value="Submit" />{' '}
                                <Button color="info"as="input" type="reset" value="Reset" />{' '}
                               
                            </CardBody>
                        </Card>

                    </Col>

                    <Col sm={12} lg={6}>
                        <Card className="iq-card">
                                <CardHeader className="iq-header-title">
                                     <span className="text-primary float-right" id="collapse10">
                                        <i className="ri-code-s-slash-line" />
                                     </span>
                                  <CardTitle><h4 className="card-title">Buttons Sizes</h4></CardTitle>
                                </CardHeader>
                                <CardBody className="iq-card-body">
                                <CardText className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</CardText>
                                <UncontrolledCollapse toggler="#collapse10">
                                    <Card>
                                        <kbd className="bg-dark">
                                            <span data-copy-target="#sofbox-color" title="Copy"
                                                  data-toggle="tooltip" className="text-white float-right"
                                                  data-copy="true">
                                                Copy
                                            </span>
                                            <pre className="text-white">
                                                <code>{`
<Button color="primary" size="sm" className="mr-2">Small Button</Button>{' '}
<Button color="success" className="mr-2">Button</Button>{' '}
<Button color="info" size="lg">Large Button</Button>{' '}
                                                `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                <Button color="primary" size="sm" className="mr-2">Small Button</Button>{' '}
                                <Button color="success" className="mr-2">Button</Button>{' '}
                                <Button color="info" size="lg">Large Button</Button>{' '}
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
          
                <Row>
                    <Col sm={12} lg={6}>
                        <Card className="iq-card">
                                <CardHeader className="iq-header-title">
                                     <span className="text-primary float-right" id="collapse11">
                                        <i className="ri-code-s-slash-line" />
                                     </span>
                                    <CardTitle><h4 className="card-title">Block Buttons</h4></CardTitle>
                                </CardHeader>
                                <CardBody className="iq-card-body">
                                <CardText className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</CardText>
                                <UncontrolledCollapse toggler="#collapse11">
                                    <Card>
                                        <kbd className="bg-dark">
                                            <span data-copy-target="#sofbox-color" title="Copy"
                                                  data-toggle="tooltip" className="text-white float-right"
                                                  data-copy="true">
                                                Copy
                                            </span>
                                            <pre className="text-white">
                                                <code>{`
<Button color="primary" block>Block level button</Button>
<Button color="success" block>Block level button</Button>
                               
                                                `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                <Button color="primary" block>Block level button</Button>
                                <Button color="success" block>Block level button</Button>
                               
                            </CardBody>
                        </Card>

                    </Col>
                    <Col sm={12} lg={6}>
                        <Card className="iq-card">
                                <CardHeader className="iq-header-title">
                                     <span className="text-primary float-right" id="collapse12">
                                        <i className="ri-code-s-slash-line" />
                                     </span>
                                    <CardTitle><h4 className="card-title">Icons Buttons</h4></CardTitle>
                                </CardHeader>
                                 <CardBody className="iq-card-body">
                                <CardText className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</CardText>
                                <UncontrolledCollapse toggler="#collapse12">
                                    <Card>
                                        <kbd className="bg-dark">
                                            <span data-copy-target="#sofbox-color" title="Copy"
                                                  data-toggle="tooltip" className="text-white float-right"
                                                  data-copy="true">
                                                Copy
                                            </span>
                                            <pre className="text-white">
                                                <code>{`
<Button color ="primary" className="mb-3"><i className="ri-heart-fill pr-0" /> </Button>{' '}
<Button color ="secondary" className="mb-3"><i className="ri-star-fill pr-0" /> </Button>{' '}
<Button color ="success"  className="mb-3"><i className="ri-settings-4-fill pr-0" /> </Button>{' '}
<Button color ="danger"  className="mb-3"><i className="ri-radio-button-fill pr-0" /> </Button>{' '}
<Button color ="warning"  className="mb-3"><i className="ri-delete-bin-2-fill pr-0" /> </Button>{' '}
<Button color ="info"  className="mb-3"><i className="ri-lock-fill pr-0" /> </Button>{' '}
<Button color ="light" className="mb-3"><i className="ri-time-fill pr-0" /> </Button>{' '}
<Button color ="dark" className="mb-3"><i className="ri-sun-fill pr-0" /> </Button>{' '}
<Button color ="link"  className="mb-3"><i className="ri-moon-fill pr-0" /> </Button>
<div className="d-inline-block w-100 mt-3">
<Button className="mb-3" color="primary"><i className="ri-heart-fill" /> Buttons</Button>{' '}
<Button className="mb-3" color="secondary"><i className="ri-star-fill" /> Buttons</Button>{' '}
<Button className="mb-3" color="success"><i className="ri-settings-4-fill" /> Buttons</Button>{' '}
<Button className="mb-3" color="danger"><i className="ri-radio-button-fill" /> Buttons</Button>{' '}
<Button className="mb-3" color="primary"><i className="ri-lock-fill" /> Buttons</Button>
</div>
                                                `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                     <Button color ="primary" className="mb-3"><i className="ri-heart-fill pr-0" /> </Button>{' '}
                                    <Button color ="secondary" className="mb-3"><i className="ri-star-fill pr-0" /> </Button>{' '}
                                    <Button color ="success"  className="mb-3"><i className="ri-settings-4-fill pr-0" /> </Button>{' '}
                                    <Button color ="danger"  className="mb-3"><i className="ri-radio-button-fill pr-0" /> </Button>{' '}
                                    <Button color ="warning"  className="mb-3"><i className="ri-delete-bin-2-fill pr-0" /> </Button>{' '}
                                    <Button color ="info"  className="mb-3"><i className="ri-lock-fill pr-0" /> </Button>{' '}
                                    <Button color ="light" className="mb-3"><i className="ri-time-fill pr-0" /> </Button>{' '}
                                    <Button color ="dark" className="mb-3"><i className="ri-sun-fill pr-0" /> </Button>{' '}
                                    <Button color ="link"  className="mb-3"><i className="ri-moon-fill pr-0" /> </Button>
                                <div className="d-inline-block w-100 mt-3">
                                    <Button className="mb-3" color="primary"><i className="ri-heart-fill" /> Buttons</Button>{' '}
                                    <Button className="mb-3" color="secondary"><i className="ri-star-fill" /> Buttons</Button>{' '}
                                    <Button className="mb-3" color="success"><i className="ri-settings-4-fill" /> Buttons</Button>{' '}
                                    <Button className="mb-3" color="danger"><i className="ri-radio-button-fill" /> Buttons</Button>{' '}
                                    <Button className="mb-3" color="primary"><i className="ri-lock-fill" /> Buttons</Button>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
          
                <Row>
                    <Col sm={12} lg={6}>
                        <Card className="iq-card">
                                <CardHeader className="iq-header-title">
                                    <span className="text-primary float-right" id="collapse13">
                                        <i className="ri-code-s-slash-line" />
                                     </span>
                                    <CardTitle><h4 className="card-title">Social Disabled State</h4></CardTitle>
                                </CardHeader>
                                <CardBody className="iq-card-body">
                                <CardText className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</CardText>
                                <UncontrolledCollapse toggler="#collapse13">
                                    <Card>
                                        <kbd className="bg-dark">
                                            <span data-copy-target="#sofbox-color" title="Copy"
                                                  data-toggle="tooltip" className="text-white float-right"
                                                  data-copy="true">
                                                Copy
                                            </span>
                                            <pre className="text-white">
                                                <code>{`
<Button color="primary" disabled>Primary button</Button>{' '}
<Button color="success"  disabled>Button</Button>{' '}
<Button outline color="primary"  disabled>Button</Button>
                                                `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                <Button color="primary" disabled>Primary button</Button>{' '}
                                <Button color="success"  disabled>Button</Button>{' '}
                                <Button outline color="primary"  disabled>Button</Button>
                            </CardBody>
                        </Card>

                    </Col>

                    <Col sm={12} lg={6}>
                        <Card className="iq-card">
                                <CardHeader className="iq-header-title">
                                    <span className="text-primary float-right" id="collapse14">
                                        <i className="ri-code-s-slash-line" />
                                     </span>
                                    <CardTitle><h4 className="card-title">Buttons Toggle States</h4></CardTitle>
                                </CardHeader>
                                 <CardBody className="iq-card-body">
                                <p className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
                                <UncontrolledCollapse toggler="#collapse14">
                                    <Card>
                                        <kbd className="bg-dark">
                                            <span data-copy-target="#sofbox-color" title="Copy"
                                                  data-toggle="tooltip" className="text-white float-right"
                                                  data-copy="true">
                                                Copy
                                            </span>
                                            <pre className="text-white">
                                                <code>{`
<ButtonToggle color="primary">Single Toggle</ButtonToggle>{' '}
                                                `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                <ButtonToggle color="primary">Single Toggle</ButtonToggle>{' '}
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col sm={12} lg={6}>
                        <Card className="iq-card">
                                <CardHeader className="iq-header-title">
                                    <span className="text-primary float-right" id="collapse15">
                                        <i className="ri-code-s-slash-line" />
                                     </span>
                                    <CardTitle><h4 className="card-title">Default Buttons Active</h4></CardTitle>
                                </CardHeader>
                                <CardBody className="iq-card-body">
                                <CardText className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</CardText>
                                <UncontrolledCollapse toggler="#collapse15">
                                    <Card>
                                        <kbd className="bg-dark">
                                            <span data-copy-target="#sofbox-color" title="Copy"
                                                  data-toggle="tooltip" className="text-white float-right"
                                                  data-copy="true">
                                                Copy
                                            </span>
                                            <pre className="text-white">
                                                <code>{`
<Button className="mb-3" color ="primary" active>Active</Button>{' '}
<Button className="mb-3" color ="secondary" active>Active</Button>{' '}
<Button className="mb-3" color ="warning" active>Active</Button>{' '}
<Button className="mb-3" color ="accent" disabled>Disabled</Button>{' '}
<Button className="mb-3" color ="primary" disabled>Disabled</Button>{' '}
<Button className="mb-3" outline color ="primary" disabled>Disabled</Button>
                                                `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                <Button className="mb-3" color ="primary" active>Active</Button>{' '}
                               <Button className="mb-3" color ="secondary" active>Active</Button>{' '}
                               <Button className="mb-3" color ="warning" active>Active</Button>{' '}
                               <Button className="mb-3" color ="accent" disabled>Disabled</Button>{' '}
                               <Button className="mb-3" color ="primary" disabled>Disabled</Button>{' '}
                               <Button className="mb-3" outline color ="primary" disabled>Disabled</Button>
                                    
                            </CardBody>
                        </Card>

                    </Col>

                    <Col sm={12} lg={6}>
                        <Card className="iq-card">
                                <CardHeader className="iq-header-title">
                                    <span className="text-primary float-right" id="collapse16">
                                         <i className="ri-code-s-slash-line" />
                                     </span>
                                <CardTitle><h4 className="card-title">Button Group</h4></CardTitle>
                                </CardHeader>
                                 <CardBody className="iq-card-body">
                                <CardText className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</CardText>
                                <UncontrolledCollapse toggler="#collapse16">
                                    <Card>
                                        <kbd className="bg-dark">
                                            <span data-copy-target="#sofbox-color" title="Copy"
                                                  data-toggle="tooltip" className="text-white float-right"
                                                  data-copy="true">
                                                Copy
                                            </span>
                                            <pre className="text-white">
                                                <code>{`
<ButtonGroup>
<Button color="primary">Left</Button>
<Button color="primary">Middle</Button>
<Button color="primary">Right</Button>
</ButtonGroup>

<ButtonToolbar className="mt-3">
<ButtonGroup className="mr-2">
<Button color="secondary">1</Button>
<Button color="secondary">2</Button>
<Button color="secondary">3</Button>
<Button color="secondary">4</Button>
</ButtonGroup>
<ButtonGroup className="mr-2">
<Button color="secondary">5</Button>
<Button color="secondary">6</Button>
<Button color="secondary">7</Button>
</ButtonGroup>
<ButtonGroup>
<Button color="secondary">8</Button>
</ButtonGroup>
</ButtonToolbar>
                                                `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                <ButtonGroup>
                                <Button color="primary">Left</Button>
                                <Button color="primary">Middle</Button>
                                <Button color="primary">Right</Button>
                                </ButtonGroup>

                                <ButtonToolbar className="mt-3">
                                    <ButtonGroup className="mr-2">
                                        <Button color="secondary">1</Button>
                                        <Button color="secondary">2</Button>
                                        <Button color="secondary">3</Button>
                                        <Button color="secondary">4</Button>
                                    </ButtonGroup>
                                    <ButtonGroup className="mr-2">
                                        <Button color="secondary">5</Button>
                                        <Button color="secondary">6</Button>
                                        <Button color="secondary">7</Button>
                                    </ButtonGroup>
                                    <ButtonGroup>
                                        <Button color="secondary">8</Button>
                                    </ButtonGroup>
                                </ButtonToolbar>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            
                <Row>
                    <Col sm={12} lg={6}>
                        <Card className="iq-card">
                                <CardHeader className="iq-header-title">
                                        <span className="text-primary float-right" id="collapse17">
                                        <i className="ri-code-s-slash-line" />
                                     </span>
                                    <CardTitle><h4 className="card-title">Button Group Sizing</h4></CardTitle>
                                </CardHeader>
                                <CardBody className="iq-card-body">
                                <CardText className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</CardText>
                                <UncontrolledCollapse toggler="#collapse17">
                                    <Card>
                                        <kbd className="bg-dark">
                                            <span data-copy-target="#sofbox-color" title="Copy"
                                                  data-toggle="tooltip" className="text-white float-right"
                                                  data-copy="true">
                                                Copy
                                            </span>
                                            <pre className="text-white">
                                                <code>{`
<div className="d-block">
<ButtonGroup size="lg" color="primary">
<Button color="primary">Left</Button>
<Button color="primary"> Middle</Button>
<Button color="primary">Right</Button>
</ButtonGroup>
</div>
<div className="d-block" >
<ButtonGroup className="mt-3" color="primary">
<Button color="primary">Left</Button>
<Button color="primary">Middle</Button>
<Button color="primary">Right</Button>
</ButtonGroup>
</div>

<div className="d-block">
<ButtonGroup size="sm" className="mt-3" color="primary">
<Button color="primary">Left</Button>
<Button color="primary">Middle</Button>
<Button color="primary">Right</Button>
</ButtonGroup>
</div>
                                                `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                <div className="d-block">
                                    <ButtonGroup size="lg" color="primary">
                                    <Button color="primary">Left</Button>
                                    <Button color="primary"> Middle</Button>
                                    <Button color="primary">Right</Button>
                                    </ButtonGroup>
                                </div>
                                <div className="d-block" >
                                    <ButtonGroup className="mt-3" color="primary">
                                    <Button color="primary">Left</Button>
                                    <Button color="primary">Middle</Button>
                                    <Button color="primary">Right</Button>
                                    </ButtonGroup>
                                </div>

                                <div className="d-block">
                                    <ButtonGroup size="sm" className="mt-3" color="primary">
                                    <Button color="primary">Left</Button>
                                    <Button color="primary">Middle</Button>
                                    <Button color="primary">Right</Button>
                                    </ButtonGroup>
                                </div>
                                    
                            </CardBody>
                        </Card>

                    </Col>

                    <Col sm={12} lg={6}>
                        <Card className="iq-card">
                                <CardHeader className="iq-header-title">
                                    <span className="text-primary float-right" id="collapse18">
                                        <i className="ri-code-s-slash-line" />
                                     </span>
                                    <CardTitle><h4 className="card-title">Button Group</h4></CardTitle>
                                </CardHeader>
                                <CardBody className="iq-card-body">
                                <CardText className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</CardText>
                                <UncontrolledCollapse toggler="#collapse18">
                                    <Card>
                                        <kbd className="bg-dark">
                                            <span data-copy-target="#sofbox-color" title="Copy"
                                                  data-toggle="tooltip" className="text-white float-right"
                                                  data-copy="true">
                                                Copy
                                            </span>
                                            <pre className="text-white">
                                                <code>{`
<ButtonGroup color="primary">
<Button color="primary">1</Button>
<Button color="primary">2</Button>
<ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} color="primary">
<DropdownToggle caret color="primary">
Dropdown
</DropdownToggle>
<DropdownMenu>
<DropdownItem >Dropdown Link</DropdownItem>
<DropdownItem >Dropdown Link</DropdownItem>
</DropdownMenu>
</ButtonDropdown>
</ButtonGroup>
<div className="d-block mt-3">
<ButtonGroup vertical color="primary">
<Button color="primary">1</Button>
<Button color="primary">2</Button>
<ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
<DropdownToggle caret color="primary">
Dropdown
</DropdownToggle>
<DropdownMenu >
<DropdownItem>Dropdown Link</DropdownItem>
<DropdownItem >Dropdown Link</DropdownItem>
</DropdownMenu>
</ButtonDropdown>
</ButtonGroup>
</div>
                                                `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                <ButtonGroup color="primary">
                                    <Button color="primary">1</Button>
                                    <Button color="primary">2</Button>
                                    <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} color="primary">
                                        <DropdownToggle caret color="primary">
                                        Dropdown
                                        </DropdownToggle>
                                        <DropdownMenu>
                                        <DropdownItem >Dropdown Link</DropdownItem>
                                        <DropdownItem >Dropdown Link</DropdownItem>
                                        </DropdownMenu>
                                    </ButtonDropdown>
                                </ButtonGroup>
                                <div className="d-block mt-3">
                                    <ButtonGroup vertical color="primary">
                                        <Button color="primary">1</Button>
                                        <Button color="primary">2</Button>
                                        <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                            <DropdownToggle caret color="primary">
                                            Dropdown
                                            </DropdownToggle>
                                            <DropdownMenu >
                                            <DropdownItem>Dropdown Link</DropdownItem>
                                            <DropdownItem >Dropdown Link</DropdownItem>
                                            </DropdownMenu>
                                        </ButtonDropdown>
                                    </ButtonGroup>
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
