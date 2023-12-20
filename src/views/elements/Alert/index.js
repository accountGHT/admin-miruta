import React from 'react';
import {Alert, Card, UncontrolledAlert, UncontrolledCollapse} from 'reactstrap';
import {Link} from "react-router-dom";

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
                <div className="row">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <span className="text-primary float-right" id="collapse1">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                                <h5 className="card-title">Basic Alerts</h5>
                                <p className="mb-4">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry's standard dummy text ever
                                </p>

                                <UncontrolledCollapse toggler="#collapse1">
                                    <Card>
                                        <kbd className="bg-dark">
                                            <span data-copy-target="#basic-alert" title="Copy"
                                               data-toggle="tooltip" className="text-white float-right"
                                               data-copy="true">
                                                Copy
                                            </span>
                                            <pre className="text-white">
                                                <code>{`

<Alert color="primary">
    <div className="iq-alert-text">A simple <b>primary</b> alert—check it out!</div>
</Alert>
<Alert color="secondary">
    <div className="iq-alert-text">A simple <b>secondary</b> alert—check it out!</div>
</Alert>
<Alert color="success">
    <div className="iq-alert-text">A simple <b>success</b> alert—check it out!</div>
</Alert>
<Alert color="danger">
    <div className="iq-alert-text">A simple <b>danger</b> alert—check it out!</div>
</Alert>
<Alert color="warning">
    <div className="iq-alert-text">A simple <b>warning</b> alert—check it out!</div>
</Alert>
<Alert color="info">
    <div className="iq-alert-text">A simple <b>info</b> alert—check it out!</div>
</Alert>
<Alert color="light">
    <div className="iq-alert-text">A simple <b>light</b> alert—check it out!</div>
</Alert>

                                                `}</code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>

                                <Alert color="primary">
                                    <div className="iq-alert-text">A simple <b>primary</b> alert—check it out!</div>
                                </Alert>
                                <Alert color="secondary">
                                    <div className="iq-alert-text">A simple <b>secondary</b> alert—check it out!</div>
                                </Alert>
                                <Alert color="success">
                                    <div className="iq-alert-text">A simple <b>success</b> alert—check it out!</div>
                                </Alert>
                                <Alert color="danger">
                                    <div className="iq-alert-text">A simple <b>danger</b> alert—check it out!</div>
                                </Alert>
                                <Alert color="warning">
                                    <div className="iq-alert-text">A simple <b>warning</b> alert—check it out!</div>
                                </Alert>
                                <Alert color="info">
                                    <div className="iq-alert-text">A simple <b>info</b> alert—check it out!</div>
                                </Alert>
                                <Alert color="light">
                                    <div className="iq-alert-text">A simple <b>light</b> alert—check it out!</div>
                                </Alert>

                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <span className="text-primary float-right" id="collapse2">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                                <h5 className="card-title">Basic Alerts With Icons</h5>
                                <p className="mb-4">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry's standard dummy text ever
                                </p>

                                <UncontrolledCollapse toggler="#collapse2">
                                    <Card>
                                        <kbd className="bg-dark">
                                            <span data-copy-target="#basic-alert" title="Copy"
                                               data-toggle="tooltip" className="text-white float-right"
                                               data-copy="true">
                                                Copy
                                            </span>
                                            <pre className="text-white">
                                                <code>{`

<Alert color="primary">
    <div className="iq-alert-icon">
        <i className="ri-alert-line" />
    </div>
    <div className="iq-alert-text">A simple <b>primary</b> alert—check it out!</div>
</Alert>
<Alert color="secondary">
    <div className="iq-alert-icon">
        <i className="ri-information-line" />
    </div>
    <div className="iq-alert-text">A simple <b>secondary</b> alert—check it out!</div>
</Alert>
<Alert color="success">
    <div className="iq-alert-icon">
        <i className="ri-alert-line" />
    </div>
    <div className="iq-alert-text">A simple <b>success</b> alert—check it out!</div>
</Alert>
<Alert color="danger">
    <div className="iq-alert-icon">
        <i className="ri-information-line" />
    </div>
    <div className="iq-alert-text">A simple <b>danger</b> alert—check it out!</div>
</Alert>
<Alert color="warning">
    <div className="iq-alert-icon">
        <i className="ri-alert-line" />
    </div>
    <div className="iq-alert-text">A simple <b>warning</b> alert—check it out!</div>
</Alert>
<Alert color="info">
    <div className="iq-alert-icon">
        <i className="ri-information-line" />
    </div>
    <div className="iq-alert-text">A simple <b>info</b> alert—check it out!</div>
</Alert>
<Alert color="light">
    <div className="iq-alert-icon">
        <i className="ri-alert-line" />
    </div>
    <div className="iq-alert-text">A simple <b>light</b> alert—check it out!</div>
</Alert>

                                                `}</code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>

                                <Alert color="primary">
                                    <div className="iq-alert-icon">
                                        <i className="ri-alert-line" />
                                    </div>
                                    <div className="iq-alert-text">A simple <b>primary</b> alert—check it out!</div>
                                </Alert>
                                <Alert color="secondary">
                                    <div className="iq-alert-icon">
                                        <i className="ri-information-line" />
                                    </div>
                                    <div className="iq-alert-text">A simple <b>secondary</b> alert—check it out!</div>
                                </Alert>
                                <Alert color="success">
                                    <div className="iq-alert-icon">
                                        <i className="ri-alert-line" />
                                    </div>
                                    <div className="iq-alert-text">A simple <b>success</b> alert—check it out!</div>
                                </Alert>
                                <Alert color="danger">
                                    <div className="iq-alert-icon">
                                        <i className="ri-information-line" />
                                    </div>
                                    <div className="iq-alert-text">A simple <b>danger</b> alert—check it out!</div>
                                </Alert>
                                <Alert color="warning">
                                    <div className="iq-alert-icon">
                                        <i className="ri-alert-line" />
                                    </div>
                                    <div className="iq-alert-text">A simple <b>warning</b> alert—check it out!</div>
                                </Alert>
                                <Alert color="info">
                                    <div className="iq-alert-icon">
                                        <i className="ri-information-line" />
                                    </div>
                                    <div className="iq-alert-text">A simple <b>info</b> alert—check it out!</div>
                                </Alert>
                                <Alert color="light">
                                    <div className="iq-alert-icon">
                                        <i className="ri-alert-line" />
                                    </div>
                                    <div className="iq-alert-text">A simple <b>light</b> alert—check it out!</div>
                                </Alert>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <span className="text-primary float-right" id="collapse3">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                                <h5 className="card-title">Basic Line Alerts</h5>
                                <p className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry's standard dummy text ever</p>

                                <UncontrolledCollapse toggler="#collapse3">
                                    <Card>
                                        <kbd className="bg-dark">
                                            <span data-copy-target="#basic-alert" title="Copy"
                                               data-toggle="tooltip" className="text-white float-right"
                                               data-copy="true">
                                                Copy
                                            </span>
                                            <pre className="text-white">
                                                <code>{`

<Alert color="primary" className={"bg-white"}>
    <div className="iq-alert-text">A simple <b>primary</b> alert—check it out!</div>
</Alert>
<Alert color="secondary" className={"bg-white"}>
    <div className="iq-alert-text">A simple <b>secondary</b> alert—check it out!</div>
</Alert>
<Alert color="success" className={"bg-white"}>
    <div className="iq-alert-text">A simple <b>success</b> alert—check it out!</div>
</Alert>
<Alert color="danger" className={"bg-white"}>
    <div className="iq-alert-text">A simple <b>danger</b> alert—check it out!</div>
</Alert>
<Alert color="warning" className={"bg-white"}>
    <div className="iq-alert-text">A simple <b>warning</b> alert—check it out!</div>
</Alert>
<Alert color="info" className={"bg-white"}>
    <div className="iq-alert-text">A simple <b>info</b> alert—check it out!</div>
</Alert>
<Alert color="light" className={"bg-white"}>
    <div className="iq-alert-text">A simple <b>light</b> alert—check it out!</div>
</Alert>

                                                `}</code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>

                                <Alert color="primary" className={"bg-white"}>
                                    <div className="iq-alert-text">A simple <b>primary</b> alert—check it out!</div>
                                </Alert>
                                <Alert color="secondary" className={"bg-white"}>
                                    <div className="iq-alert-text">A simple <b>secondary</b> alert—check it out!</div>
                                </Alert>
                                <Alert color="success" className={"bg-white"}>
                                    <div className="iq-alert-text">A simple <b>success</b> alert—check it out!</div>
                                </Alert>
                                <Alert color="danger" className={"bg-white"}>
                                    <div className="iq-alert-text">A simple <b>danger</b> alert—check it out!</div>
                                </Alert>
                                <Alert color="warning" className={"bg-white"}>
                                    <div className="iq-alert-text">A simple <b>warning</b> alert—check it out!</div>
                                </Alert>
                                <Alert color="info" className={"bg-white"}>
                                    <div className="iq-alert-text">A simple <b>info</b> alert—check it out!</div>
                                </Alert>
                                <Alert color="light" className={"bg-white"}>
                                    <div className="iq-alert-text">A simple <b>light</b> alert—check it out!</div>
                                </Alert>

                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <span className="text-primary float-right" id="collapse4">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                                <h5 className="card-title">Basic Line Alerts With Icons</h5>
                                <p className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry's standard dummy text ever</p>

                                <UncontrolledCollapse toggler="#collapse4">
                                    <Card>
                                        <kbd className="bg-dark">
                                            <span data-copy-target="#basic-alert" title="Copy"
                                               data-toggle="tooltip" className="text-white float-right"
                                               data-copy="true">
                                                Copy
                                            </span>
                                            <pre className="text-white">
                                                <code>{`

<Alert color="primary" className={"bg-white"}>
    <div className="iq-alert-icon">
        <i className="ri-alert-line" />
    </div>
    <div className="iq-alert-text">A simple <b>primary</b> alert—check it out!</div>
</Alert>
<Alert color="secondary" className={"bg-white"}>
    <div className="iq-alert-icon">
        <i className="ri-information-line" />
    </div>
    <div className="iq-alert-text">A simple <b>secondary</b> alert—check it out!</div>
</Alert>
<Alert color="success" className={"bg-white"}>
    <div className="iq-alert-icon">
        <i className="ri-alert-line" />
    </div>
    <div className="iq-alert-text">A simple <b>success</b> alert—check it out!</div>
</Alert>
<Alert color="danger" className={"bg-white"}>
    <div className="iq-alert-icon">
        <i className="ri-information-line" />
    </div>
    <div className="iq-alert-text">A simple <b>danger</b> alert—check it out!</div>
</Alert>
<Alert color="warning" className={"bg-white"}>
    <div className="iq-alert-icon">
        <i className="ri-alert-line" />
    </div>
    <div className="iq-alert-text">A simple <b>warning</b> alert—check it out!</div>
</Alert>
<Alert color="info" className={"bg-white"}>
    <div className="iq-alert-icon">
        <i className="ri-information-line" />
    </div>
    <div className="iq-alert-text">A simple <b>info</b> alert—check it out!</div>
</Alert>
<Alert color="light" className={"bg-white"}>
    <div className="iq-alert-icon">
        <i className="ri-alert-line" />
    </div>
    <div className="iq-alert-text">A simple <b>light</b> alert—check it out!</div>
</Alert>

                                                `}</code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>

                                <Alert color="primary" className={"bg-white"}>
                                    <div className="iq-alert-icon">
                                        <i className="ri-alert-line" />
                                    </div>
                                    <div className="iq-alert-text">A simple <b>primary</b> alert—check it out!</div>
                                </Alert>
                                <Alert color="secondary" className={"bg-white"}>
                                    <div className="iq-alert-icon">
                                        <i className="ri-information-line" />
                                    </div>
                                    <div className="iq-alert-text">A simple <b>secondary</b> alert—check it out!</div>
                                </Alert>
                                <Alert color="success" className={"bg-white"}>
                                    <div className="iq-alert-icon">
                                        <i className="ri-alert-line" />
                                    </div>
                                    <div className="iq-alert-text">A simple <b>success</b> alert—check it out!</div>
                                </Alert>
                                <Alert color="danger" className={"bg-white"}>
                                    <div className="iq-alert-icon">
                                        <i className="ri-information-line" />
                                    </div>
                                    <div className="iq-alert-text">A simple <b>danger</b> alert—check it out!</div>
                                </Alert>
                                <Alert color="warning" className={"bg-white"}>
                                    <div className="iq-alert-icon">
                                        <i className="ri-alert-line" />
                                    </div>
                                    <div className="iq-alert-text">A simple <b>warning</b> alert—check it out!</div>
                                </Alert>
                                <Alert color="info" className={"bg-white"}>
                                    <div className="iq-alert-icon">
                                        <i className="ri-information-line" />
                                    </div>
                                    <div className="iq-alert-text">A simple <b>info</b> alert—check it out!</div>
                                </Alert>
                                <Alert color="light" className={"bg-white"}>
                                    <div className="iq-alert-icon">
                                        <i className="ri-alert-line" />
                                    </div>
                                    <div className="iq-alert-text">A simple <b>light</b> alert—check it out!</div>
                                </Alert>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <span className="text-primary float-right" id="collapse5">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                                <h5 className="card-title">Alerts With Background</h5>
                                <p className="mb-4">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry's standard dummy text ever
                                </p>

                                <UncontrolledCollapse toggler="#collapse5">
                                    <Card>
                                        <kbd className="bg-dark">
                                            <span data-copy-target="#basic-alert" title="Copy"
                                               data-toggle="tooltip" className="text-white float-right"
                                               data-copy="true">
                                                Copy
                                            </span>
                                            <pre className="text-white">
                                                <code>{`

<Alert color="primary" className={"text-white bg-primary"}>
    <div className="iq-alert-text">A simple <b>primary</b> alert—check it out!</div>
</Alert>
<Alert color="secondary" className={"text-white bg-secondary"}>
    <div className="iq-alert-text">A simple <b>secondary</b> alert—check it out!</div>
</Alert>
<Alert color="success" className={"text-white bg-success"}>
    <div className="iq-alert-text">A simple <b>success</b> alert—check it out!</div>
</Alert>
<Alert color="danger" className={"text-white bg-danger"}>
    <div className="iq-alert-text">A simple <b>danger</b> alert—check it out!</div>
</Alert>
<Alert color="warning" className={"text-white bg-warning"}>
    <div className="iq-alert-text">A simple <b>warning</b> alert—check it out!</div>
</Alert>
<Alert color="info" className={"text-white bg-info"}>
    <div className="iq-alert-text">A simple <b>info</b> alert—check it out!</div>
</Alert>
<Alert color="light" className={"bg-light"}>
    <div className="iq-alert-text">A simple <b>light</b> alert—check it out!</div>
</Alert>

                                                `}</code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>

                                <Alert color="primary" className={"text-white bg-primary"}>
                                    <div className="iq-alert-text">A simple <b>primary</b> alert—check it out!</div>
                                </Alert>
                                <Alert color="secondary" className={"text-white bg-secondary"}>
                                    <div className="iq-alert-text">A simple <b>secondary</b> alert—check it out!</div>
                                </Alert>
                                <Alert color="success" className={"text-white bg-success"}>
                                    <div className="iq-alert-text">A simple <b>success</b> alert—check it out!</div>
                                </Alert>
                                <Alert color="danger" className={"text-white bg-danger"}>
                                    <div className="iq-alert-text">A simple <b>danger</b> alert—check it out!</div>
                                </Alert>
                                <Alert color="warning" className={"text-white bg-warning"}>
                                    <div className="iq-alert-text">A simple <b>warning</b> alert—check it out!</div>
                                </Alert>
                                <Alert color="info" className={"text-white bg-info"}>
                                    <div className="iq-alert-text">A simple <b>info</b> alert—check it out!</div>
                                </Alert>
                                <Alert color="light" className={"bg-light"}>
                                    <div className="iq-alert-text">A simple <b>light</b> alert—check it out!</div>
                                </Alert>

                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <span className="text-primary float-right" id="collapse6">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                                <h5 className="card-title">Background Alerts With Icons</h5>
                                <p className="mb-4">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry's standard dummy text ever
                                </p>

                                <UncontrolledCollapse toggler="#collapse6">
                                    <Card>
                                        <kbd className="bg-dark">
                                            <span data-copy-target="#basic-alert" title="Copy"
                                               data-toggle="tooltip" className="text-white float-right"
                                               data-copy="true">
                                                Copy
                                            </span>
                                            <pre className="text-white">
                                                <code>{`

<Alert color="primary" className={"text-white bg-primary"}>
    <div className="iq-alert-icon">
        <i className="ri-alert-line" />
    </div>
    <div className="iq-alert-text">A simple <b>primary</b> alert—check it out!</div>
</Alert>
<Alert color="secondary" className={"text-white bg-secondary"}>
    <div className="iq-alert-icon">
        <i className="ri-information-line" />
    </div>
    <div className="iq-alert-text">A simple <b>secondary</b> alert—check it out!</div>
</Alert>
<Alert color="success" className={"text-white bg-success"}>
    <div className="iq-alert-icon">
        <i className="ri-alert-line" />
    </div>
    <div className="iq-alert-text">A simple <b>success</b> alert—check it out!</div>
</Alert>
<Alert color="danger" className={"text-white bg-danger"}>
    <div className="iq-alert-icon">
        <i className="ri-information-line" />
    </div>
    <div className="iq-alert-text">A simple <b>danger</b> alert—check it out!</div>
</Alert>
<Alert color="warning" className={"text-white bg-warning"}>
    <div className="iq-alert-icon">
        <i className="ri-alert-line" />
    </div>
    <div className="iq-alert-text">A simple <b>warning</b> alert—check it out!</div>
</Alert>
<Alert color="info" className={"text-white bg-info"}>
    <div className="iq-alert-icon">
        <i className="ri-information-line" />
    </div>
    <div className="iq-alert-text">A simple <b>info</b> alert—check it out!</div>
</Alert>
<Alert color="light" className={"bg-light"}>
    <div className="iq-alert-icon">
        <i className="ri-alert-line" />
    </div>
    <div className="iq-alert-text">A simple <b>light</b> alert—check it out!</div>
</Alert>

                                                `}</code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>

                                <Alert color="primary" className={"text-white bg-primary"}>
                                    <div className="iq-alert-icon">
                                        <i className="ri-alert-line" />
                                    </div>
                                    <div className="iq-alert-text">A simple <b>primary</b> alert—check it out!</div>
                                </Alert>
                                <Alert color="secondary" className={"text-white bg-secondary"}>
                                    <div className="iq-alert-icon">
                                        <i className="ri-information-line" />
                                    </div>
                                    <div className="iq-alert-text">A simple <b>secondary</b> alert—check it out!</div>
                                </Alert>
                                <Alert color="success" className={"text-white bg-success"}>
                                    <div className="iq-alert-icon">
                                        <i className="ri-alert-line" />
                                    </div>
                                    <div className="iq-alert-text">A simple <b>success</b> alert—check it out!</div>
                                </Alert>
                                <Alert color="danger" className={"text-white bg-danger"}>
                                    <div className="iq-alert-icon">
                                        <i className="ri-information-line" />
                                    </div>
                                    <div className="iq-alert-text">A simple <b>danger</b> alert—check it out!</div>
                                </Alert>
                                <Alert color="warning" className={"text-white bg-warning"}>
                                    <div className="iq-alert-icon">
                                        <i className="ri-alert-line" />
                                    </div>
                                    <div className="iq-alert-text">A simple <b>warning</b> alert—check it out!</div>
                                </Alert>
                                <Alert color="info" className={"text-white bg-info"}>
                                    <div className="iq-alert-icon">
                                        <i className="ri-information-line" />
                                    </div>
                                    <div className="iq-alert-text">A simple <b>info</b> alert—check it out!</div>
                                </Alert>
                                <Alert color="light" className={"bg-light"}>
                                    <div className="iq-alert-icon">
                                        <i className="ri-alert-line" />
                                    </div>
                                    <div className="iq-alert-text">A simple <b>light</b> alert—check it out!</div>
                                </Alert>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <span className="text-primary float-right" id="collapse7">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                                <h5 className="card-title">Alerts Dismissing</h5>
                                <p className="mb-4">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry's standard dummy text ever
                                </p>

                                <UncontrolledCollapse toggler="#collapse7">
                                    <Card>
                                        <kbd className="bg-dark">
                                            <span data-copy-target="#basic-alert" title="Copy"
                                               data-toggle="tooltip" className="text-white float-right"
                                               data-copy="true">
                                                Copy
                                            </span>
                                            <pre className="text-white">
                                                <code>{`

<UncontrolledAlert color="primary" className={"text-white bg-primary"}>
    <div className="iq-alert-text">A simple <b>primary</b> alert—check it out!</div>
</UncontrolledAlert>
<UncontrolledAlert color="secondary" className={"text-white bg-secondary"}>
    <div className="iq-alert-text">A simple <b>primary</b> alert—check it out!</div>
</UncontrolledAlert>
<UncontrolledAlert color="success" className={"text-white bg-success"}>
    <div className="iq-alert-text">A simple <b>primary</b> alert—check it out!</div>
</UncontrolledAlert>
<UncontrolledAlert color="danger" className={"text-white bg-danger"}>
    <div className="iq-alert-text">A simple <b>primary</b> alert—check it out!</div>
</UncontrolledAlert>
<UncontrolledAlert color="info" className={"text-white bg-info"}>
    <div className="iq-alert-text">A simple <b>primary</b> alert—check it out!</div>
</UncontrolledAlert>
<UncontrolledAlert color="light" className={"bg-light"}>
    <div className="iq-alert-text">A simple <b>primary</b> alert—check it out!</div>
</UncontrolledAlert>

                                                `}</code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>

                                <UncontrolledAlert color="primary" className={"text-white bg-primary"}>
                                    <div className="iq-alert-text">A simple <b>primary</b> alert—check it out!</div>
                                </UncontrolledAlert>
                                <UncontrolledAlert color="secondary" className={"text-white bg-secondary"}>
                                    <div className="iq-alert-text">A simple <b>primary</b> alert—check it out!</div>
                                </UncontrolledAlert>
                                <UncontrolledAlert color="success" className={"text-white bg-success"}>
                                    <div className="iq-alert-text">A simple <b>primary</b> alert—check it out!</div>
                                </UncontrolledAlert>
                                <UncontrolledAlert color="danger" className={"text-white bg-danger"}>
                                    <div className="iq-alert-text">A simple <b>primary</b> alert—check it out!</div>
                                </UncontrolledAlert>
                                <UncontrolledAlert color="info" className={"text-white bg-info"}>
                                    <div className="iq-alert-text">A simple <b>primary</b> alert—check it out!</div>
                                </UncontrolledAlert>
                                <UncontrolledAlert color="light" className={"bg-light"}>
                                    <div className="iq-alert-text">A simple <b>primary</b> alert—check it out!</div>
                                </UncontrolledAlert>

                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <span className="text-primary float-right" id="collapse8">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                                <h5 className="card-title">Alerts Dismissing With Icons</h5>
                                <p className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry's standard dummy text ever</p>

                                <UncontrolledCollapse toggler="#collapse8">
                                    <Card>
                                        <kbd className="bg-dark">
                                            <span data-copy-target="#basic-alert" title="Copy"
                                               data-toggle="tooltip" className="text-white float-right"
                                               data-copy="true">
                                                Copy
                                            </span>
                                            <pre className="text-white">
                                                <code>{`

<UncontrolledAlert color="primary" className={"text-white bg-primary"}>
    <div className="iq-alert-icon">
        <i className="ri-alert-line" />
    </div>
    <div className="iq-alert-text">A simple <b>primary</b> alert—check it out!</div>
</UncontrolledAlert>
<UncontrolledAlert color="secondary" className={"text-white bg-secondary"}>
    <div className="iq-alert-icon">
        <i className="ri-information-line" />
    </div>
    <div className="iq-alert-text">A simple <b>secondary</b> alert—check it out!</div>
</UncontrolledAlert>
<UncontrolledAlert color="success" className={"text-white bg-success"}>
    <div className="iq-alert-icon">
        <i className="ri-alert-line" />
    </div>
    <div className="iq-alert-text">A simple <b>success</b> alert—check it out!</div>
</UncontrolledAlert>
<UncontrolledAlert color="danger" className={"text-white bg-danger"}>
    <div className="iq-alert-icon">
        <i className="ri-information-line" />
    </div>
    <div className="iq-alert-text">A simple <b>danger</b> alert—check it out!</div>
</UncontrolledAlert>
<UncontrolledAlert color="warning" className={"text-white bg-warning"}>
    <div className="iq-alert-icon">
        <i className="ri-alert-line" />
    </div>
    <div className="iq-alert-text">A simple <b>warning</b> alert—check it out!</div>
</UncontrolledAlert>
<UncontrolledAlert color="info" className={"text-white bg-info"}>
    <div className="iq-alert-icon">
        <i className="ri-information-line" />
    </div>
    <div className="iq-alert-text">A simple <b>info</b> alert—check it out!</div>
</UncontrolledAlert>
<UncontrolledAlert color="light" className={"bg-light"}>
    <div className="iq-alert-icon">
        <i className="ri-alert-line" />
    </div>
    <div className="iq-alert-text">A simple <b>light</b> alert—check it out!</div>
</UncontrolledAlert>

                                                `}</code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>

                                <UncontrolledAlert color="primary" className={"text-white bg-primary"}>
                                    <div className="iq-alert-icon">
                                        <i className="ri-alert-line" />
                                    </div>
                                    <div className="iq-alert-text">A simple <b>primary</b> alert—check it out!</div>
                                </UncontrolledAlert>
                                <UncontrolledAlert color="secondary" className={"text-white bg-secondary"}>
                                    <div className="iq-alert-icon">
                                        <i className="ri-information-line" />
                                    </div>
                                    <div className="iq-alert-text">A simple <b>secondary</b> alert—check it out!</div>
                                </UncontrolledAlert>
                                <UncontrolledAlert color="success" className={"text-white bg-success"}>
                                    <div className="iq-alert-icon">
                                        <i className="ri-alert-line" />
                                    </div>
                                    <div className="iq-alert-text">A simple <b>success</b> alert—check it out!</div>
                                </UncontrolledAlert>
                                <UncontrolledAlert color="danger" className={"text-white bg-danger"}>
                                    <div className="iq-alert-icon">
                                        <i className="ri-information-line" />
                                    </div>
                                    <div className="iq-alert-text">A simple <b>danger</b> alert—check it out!</div>
                                </UncontrolledAlert>
                                <UncontrolledAlert color="warning" className={"text-white bg-warning"}>
                                    <div className="iq-alert-icon">
                                        <i className="ri-alert-line" />
                                    </div>
                                    <div className="iq-alert-text">A simple <b>warning</b> alert—check it out!</div>
                                </UncontrolledAlert>
                                <UncontrolledAlert color="info" className={"text-white bg-info"}>
                                    <div className="iq-alert-icon">
                                        <i className="ri-information-line" />
                                    </div>
                                    <div className="iq-alert-text">A simple <b>info</b> alert—check it out!</div>
                                </UncontrolledAlert>
                                <UncontrolledAlert color="light" className={"bg-light"}>
                                    <div className="iq-alert-icon">
                                        <i className="ri-alert-line" />
                                    </div>
                                    <div className="iq-alert-text">A simple <b>light</b> alert—check it out!</div>
                                </UncontrolledAlert>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <span className="text-primary float-right" id="collapse9">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                                <h5 className="card-title">Alerts With Background</h5>
                                <p className="mb-4">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever
                                </p>

                                <UncontrolledCollapse toggler="#collapse9">
                                    <Card>
                                        <kbd className="bg-dark">
                                            <span data-copy-target="#basic-alert" title="Copy"
                                               data-toggle="tooltip" className="text-white float-right"
                                               data-copy="true">
                                                Copy
                                            </span>
                                            <pre className="text-white">
                                                <code>{`

<Alert color="primary">
    <div className="iq-alert-text">
        A simple primary alert with <Link to="/dashboard1/alert" className="alert-link">an example link</Link>. Give it a click if you like.
    </div>
</Alert>
<Alert color="secondary">
    <div className="iq-alert-text">
        A simple secondary alert with <Link to="/dashboard1/alert" className="alert-link">an example link</Link>. Give it a click if you like.
    </div>
</Alert>
<Alert color="success">
    <div className="iq-alert-text">
        A simple success alert with <Link to="/dashboard1/alert" className="alert-link">an example link</Link>. Give it a click if you like.
    </div>
</Alert>
<Alert color="danger">
    <div className="iq-alert-text">
        A simple danger alert with <Link to="/dashboard1/alert" className="alert-link">an example link</Link>. Give it a click if you like.
    </div>
</Alert>
<Alert color="warning">
    <div className="iq-alert-text">
        A simple warning alert with <Link to="/dashboard1/alert" className="alert-link">an example link</Link>. Give it a click if you like.
    </div>
</Alert>
<Alert color="info">
    <div className="iq-alert-text">
        A simple info alert with <Link to="/dashboard1/alert" className="alert-link">an example link</Link>. Give it a click if you like.
    </div>
</Alert>
<Alert color="light">
    <div className="iq-alert-text">
        A simple light alert with <Link to="/dashboard1/alert" className="alert-link">an example link</Link>. Give it a click if you like.
    </div>
</Alert>

                                                `}</code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>

                                <Alert color="primary">
                                    <div className="iq-alert-text">
                                        A simple primary alert with <Link to="/dashboard1/alert" className="alert-link">an example link</Link>. Give it a click if you like.
                                    </div>
                                </Alert>
                                <Alert color="secondary">
                                    <div className="iq-alert-text">
                                        A simple secondary alert with <Link to="/dashboard1/alert" className="alert-link">an example link</Link>. Give it a click if you like.
                                    </div>
                                </Alert>
                                <Alert color="success">
                                    <div className="iq-alert-text">
                                        A simple success alert with <Link to="/dashboard1/alert" className="alert-link">an example link</Link>. Give it a click if you like.
                                    </div>
                                </Alert>
                                <Alert color="danger">
                                    <div className="iq-alert-text">
                                        A simple danger alert with <Link to="/dashboard1/alert" className="alert-link">an example link</Link>. Give it a click if you like.
                                    </div>
                                </Alert>
                                <Alert color="warning">
                                    <div className="iq-alert-text">
                                        A simple warning alert with <Link to="/dashboard1/alert" className="alert-link">an example link</Link>. Give it a click if you like.
                                    </div>
                                </Alert>
                                <Alert color="info">
                                    <div className="iq-alert-text">
                                        A simple info alert with <Link to="/dashboard1/alert" className="alert-link">an example link</Link>. Give it a click if you like.
                                    </div>
                                </Alert>
                                <Alert color="light">
                                    <div className="iq-alert-text">
                                        A simple light alert with <Link to="/dashboard1/alert" className="alert-link">an example link</Link>. Give it a click if you like.
                                    </div>
                                </Alert>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <span className="text-primary float-right" id="collapse10">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                                <h5 className="card-title">Background Alerts With Icons</h5>
                                <p className="mb-4">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry's standard dummy text ever
                                </p>

                                <UncontrolledCollapse toggler="#collapse10">
                                    <Card>
                                        <kbd className="bg-dark">
                                            <span data-copy-target="#basic-alert" title="Copy"
                                               data-toggle="tooltip" className="text-white float-right"
                                               data-copy="true">
                                                Copy
                                            </span>
                                            <pre className="text-white">
                                                <code>{`

<Alert color="primary" className={"text-white bg-primary"}>
    <div className="iq-alert-icon">
        <i className="ri-alert-line" />
    </div>
    A simple primary alert with <Link to="/dashboard1/alert" className="alert-link">an example link</Link>. Give it a click if you like.
</Alert>
<Alert color="secondary" className={"text-white bg-secondary"}>
    <div className="iq-alert-icon">
        <i className="ri-information-line" />
    </div>
    A simple secondary alert with <Link to="/dashboard1/alert" className="alert-link">an example link</Link>. Give it a click if you like.
</Alert>
<Alert color="success" className={"text-white bg-success"}>
    <div className="iq-alert-icon">
        <i className="ri-alert-line" />
    </div>
    A simple success alert with <Link to="/dashboard1/alert" className="alert-link">an example link</Link>. Give it a click if you like.
</Alert>
<Alert color="danger" className={"text-white bg-danger"}>
    <div className="iq-alert-icon">
        <i className="ri-information-line" />
    </div>
    A simple danger alert with <Link to="/dashboard1/alert" className="alert-link">an example link</Link>. Give it a click if you like.
</Alert>
<Alert color="warning" className={"text-white bg-warning"}>
    <div className="iq-alert-icon">
        <i className="ri-alert-line" />
    </div>
    A simple warning alert with <Link to="/dashboard1/alert" className="alert-link">an example link</Link>. Give it a click if you like.
</Alert>
<Alert color="info" className={"text-white bg-info"}>
    <div className="iq-alert-icon">
        <i className="ri-information-line" />
    </div>
    A simple info alert with <Link to="/dashboard1/alert" className="alert-link">an example link</Link>. Give it a click if you like.
</Alert>
<Alert color="light" className={"bg-light"}>
    <div className="iq-alert-icon">
        <i className="ri-alert-line" />
    </div>
    A simple light alert with <Link to="/dashboard1/alert" className="alert-link">an example link</Link>. Give it a click if you like.
</Alert>

                                                `}</code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>

                                <Alert color="primary" className={"text-white bg-primary"}>
                                    <div className="iq-alert-icon">
                                        <i className="ri-alert-line" />
                                    </div>
                                    A simple primary alert with <Link to="/dashboard1/alert" className="alert-link">an example link</Link>. Give it a click if you like.
                                </Alert>
                                <Alert color="secondary" className={"text-white bg-secondary"}>
                                    <div className="iq-alert-icon">
                                        <i className="ri-information-line" />
                                    </div>
                                    A simple secondary alert with <Link to="/dashboard1/alert" className="alert-link">an example link</Link>. Give it a click if you like.
                                </Alert>
                                <Alert color="success" className={"text-white bg-success"}>
                                    <div className="iq-alert-icon">
                                        <i className="ri-alert-line" />
                                    </div>
                                    A simple success alert with <Link to="/dashboard1/alert" className="alert-link">an example link</Link>. Give it a click if you like.
                                </Alert>
                                <Alert color="danger" className={"text-white bg-danger"}>
                                    <div className="iq-alert-icon">
                                        <i className="ri-information-line" />
                                    </div>
                                    A simple danger alert with <Link to="/dashboard1/alert" className="alert-link">an example link</Link>. Give it a click if you like.
                                </Alert>
                                <Alert color="warning" className={"text-white bg-warning"}>
                                    <div className="iq-alert-icon">
                                        <i className="ri-alert-line" />
                                    </div>
                                    A simple warning alert with <Link to="/dashboard1/alert" className="alert-link">an example link</Link>. Give it a click if you like.
                                </Alert>
                                <Alert color="info" className={"text-white bg-info"}>
                                    <div className="iq-alert-icon">
                                        <i className="ri-information-line" />
                                    </div>
                                    A simple info alert with <Link to="/dashboard1/alert" className="alert-link">an example link</Link>. Give it a click if you like.
                                </Alert>
                                <Alert color="light" className={"bg-light"}>
                                    <div className="iq-alert-icon">
                                        <i className="ri-alert-line" />
                                    </div>
                                    A simple light alert with <Link to="/dashboard1/alert" className="alert-link">an example link</Link>. Give it a click if you like.
                                </Alert>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-body">
                                <span className="text-primary float-right" id="collapse11">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                                <h5 className="card-title">Additional content</h5>
                                <p className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever</p>

                                <UncontrolledCollapse toggler="#collapse11">
                                    <Card>
                                        <kbd className="bg-dark">
                                            <span data-copy-target="#basic-alert" title="Copy"
                                               data-toggle="tooltip" className="text-white float-right"
                                               data-copy="true">
                                                Copy
                                            </span>
                                            <pre className="text-white">
                                                <code>{`

<div className="col-sm-6">
    <Alert color="primary">
        <div className="iq-alert-text">
            <h5 className="alert-heading">Well done!</h5>
            <p>
                Aww yeah, you successfully read this important alert message. This
                example text is going to run a bit longer so that you can see how
                spacing within an alert works with this kind of content.
            </p>
            <hr />
            <p className="mb-0">
                Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
            </p>
        </div>
    </Alert>
</div>
<div className="col-sm-6">
    <Alert color="success">
        <div className="iq-alert-text">
            <h5 className="alert-heading">Well done!</h5>
            <p>
                Aww yeah, you successfully read this important alert message. This
                example text is going to run a bit longer so that you can see how
                spacing within an alert works with this kind of content.
            </p>
            <hr />
            <p className="mb-0">
                Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
            </p>
        </div>
    </Alert>
</div>

                                                `}</code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <Alert color="primary">
                                            <div className="iq-alert-text">
                                                <h5 className="alert-heading">Well done!</h5>
                                                <p>
                                                    Aww yeah, you successfully read this important alert message. This
                                                    example text is going to run a bit longer so that you can see how
                                                    spacing within an alert works with this kind of content.
                                                </p>
                                                <hr />
                                                <p className="mb-0">
                                                    Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
                                                </p>
                                            </div>
                                        </Alert>
                                    </div>
                                    <div className="col-sm-6">
                                        <Alert color="success">
                                            <div className="iq-alert-text">
                                                <h5 className="alert-heading">Well done!</h5>
                                                <p>
                                                    Aww yeah, you successfully read this important alert message. This
                                                    example text is going to run a bit longer so that you can see how
                                                    spacing within an alert works with this kind of content.
                                                </p>
                                                <hr />
                                                <p className="mb-0">
                                                    Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
                                                </p>
                                            </div>
                                        </Alert>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Index;
