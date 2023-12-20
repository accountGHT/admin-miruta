import React from 'react';
import {Row, Col, Card, CardHeader, CardTitle, CardBody, UncontrolledCollapse,Breadcrumb,BreadcrumbItem } from 'reactstrap';
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
                                <CardTitle  className={"card-title"}><h4>Breadcrumb With Icon</h4></CardTitle>
                            </CardHeader>

                            <CardBody className={"iq-card-body"}>
                                <p>Progress components are built with two HTML elements, some CSS to set the width, and a few attributes.</p>

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
<div>
<Breadcrumb>
<BreadcrumbItem active>Home</BreadcrumbItem>
</Breadcrumb>
<Breadcrumb>
<BreadcrumbItem><a href="!#">Home</a></BreadcrumbItem>
<BreadcrumbItem active>Library</BreadcrumbItem>
</Breadcrumb>
<Breadcrumb>
<BreadcrumbItem><a href="!#">Home</a></BreadcrumbItem>
<BreadcrumbItem><a href="!#">Library</a></BreadcrumbItem>
<BreadcrumbItem active>Data</BreadcrumbItem>
</Breadcrumb>
</div>
                                                `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                <div>
                                    <Breadcrumb>
                                        <BreadcrumbItem active>Home</BreadcrumbItem>
                                    </Breadcrumb>
                                    <Breadcrumb>
                                        <BreadcrumbItem><a href="!#">Home</a></BreadcrumbItem>
                                        <BreadcrumbItem active>Library</BreadcrumbItem>
                                    </Breadcrumb>
                                    <Breadcrumb>
                                        <BreadcrumbItem><a href="!#">Home</a></BreadcrumbItem>
                                        <BreadcrumbItem><a href="!#">Library</a></BreadcrumbItem>
                                        <BreadcrumbItem active>Data</BreadcrumbItem>
                                    </Breadcrumb>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm={12} lg={6}>
                        <Card className={"iq-card"}>
                            <CardHeader className={"iq-header-title"}>
                                <span className="text-primary float-right" id="collapse2">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                                <CardTitle  className={"card-title"}><h4>Breadcrumb With Icon</h4></CardTitle>
                            </CardHeader>

                            <CardBody className={"iq-card-body"}>
                                <p>Progress components are built with two HTML elements, some CSS to set the width, and a few attributes.</p>

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
<div>
<Breadcrumb>
<BreadcrumbItem active><i
className="ri-home-4-line mr-1 float-left" />Home</BreadcrumbItem>
</Breadcrumb>
<Breadcrumb>
<BreadcrumbItem><a href="!#"><i
className="ri-home-4-line mr-1 float-left"/>Home</a></BreadcrumbItem>
<BreadcrumbItem active>Library</BreadcrumbItem>
</Breadcrumb>
<Breadcrumb>
<BreadcrumbItem><a href="!#"><i
className="ri-home-4-line mr-1 float-left"></i>Home</a></BreadcrumbItem>
<BreadcrumbItem><a href="!#">Library</a></BreadcrumbItem>
<BreadcrumbItem active>Data</BreadcrumbItem>
</Breadcrumb>
</div>
                                                `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>

                                <div>
                                    <Breadcrumb>
                                        <BreadcrumbItem active><i
                                            className="ri-home-4-line mr-1 float-left" />Home</BreadcrumbItem>
                                    </Breadcrumb>
                                    <Breadcrumb>
                                        <BreadcrumbItem><a href="!#"><i
                                            className="ri-home-4-line mr-1 float-left"/>Home</a></BreadcrumbItem>
                                        <BreadcrumbItem active>Library</BreadcrumbItem>
                                    </Breadcrumb>
                                    <Breadcrumb>
                                        <BreadcrumbItem><a href="!#"><i
                                            className="ri-home-4-line mr-1 float-left"></i>Home</a></BreadcrumbItem>
                                        <BreadcrumbItem><a href="!#">Library</a></BreadcrumbItem>
                                        <BreadcrumbItem active>Data</BreadcrumbItem>
                                    </Breadcrumb>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col sm={12} lg={6}>
                        <Card className={"iq-card"}>
                            <CardHeader className={"iq-header-title"}>
                                <span className="text-primary float-right" id="collapse3">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                                <CardTitle  className={"card-title"}><h4>Breadcrumb</h4></CardTitle>
                            </CardHeader>

                            <CardBody className={"iq-card-body"}>
                                <p>Progress components are built with two HTML elements, some CSS to set the width, and a few attributes.</p>

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
<nav aria-label="breadcrumb ">
<ol className="breadcrumb bg-primary">
<li className="breadcrumb-item active text-white" aria-current="page">Home</li>
</ol>
</nav>
<nav aria-label="breadcrumb">
<ol className="breadcrumb bg-primary">
<li className="breadcrumb-item"><a href="!#" className="text-white">Home</a></li>
<li className="breadcrumb-item active text-white" aria-current="page">Library
</li>
</ol>
</nav>
<nav aria-label="breadcrumb">
<ol className="breadcrumb bg-primary mb-0">
<li className="breadcrumb-item"><a href="!#" className="text-white">Home</a></li>
<li className="breadcrumb-item"><a href="!#" className="text-white">Library</a>
</li>
<li className="breadcrumb-item active text-white" aria-current="page">Data</li>
</ol>
</nav>                                       `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>

                                <nav aria-label="breadcrumb ">
                                    <ol className="breadcrumb bg-primary">
                                        <li className="breadcrumb-item active text-white" aria-current="page">Home</li>
                                    </ol>
                                </nav>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb bg-primary">
                                        <li className="breadcrumb-item"><a href="!#" className="text-white">Home</a></li>
                                        <li className="breadcrumb-item active text-white" aria-current="page">Library
                                        </li>
                                    </ol>
                                </nav>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb bg-primary mb-0">
                                        <li className="breadcrumb-item"><a href="!#" className="text-white">Home</a></li>
                                        <li className="breadcrumb-item"><a href="!#" className="text-white">Library</a>
                                        </li>
                                        <li className="breadcrumb-item active text-white" aria-current="page">Data</li>
                                    </ol>
                                </nav>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm={12} lg={6}>
                        <Card className={"iq-card"}>
                            <CardHeader className={"iq-header-title"}>
                                <span className="text-primary float-right" id="collapse4">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                                <CardTitle  className={"card-title"}><h4>Breadcrumb With Icon</h4></CardTitle>
                            </CardHeader>

                            <CardBody className={"iq-card-body"}>
                                <p>Progress components are built with two HTML elements, some CSS to set the width, and a few attributes.</p>

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
<nav aria-label="breadcrumb">
<ol className="breadcrumb bg-primary">
<li className="breadcrumb-item active text-white" aria-current="page"><i
className="ri-home-4-line mr-1 float-left"></i>Home
</li>
</ol>
</nav>
<nav aria-label="breadcrumb">
<ol className="breadcrumb bg-primary">
<li className="breadcrumb-item"><a href="!#" className="text-white"><i
className="ri-home-4-line mr-1 float-left"></i>Home</a></li>
<li className="breadcrumb-item active text-white" aria-current="page">Library
</li>
</ol>
</nav>
<nav aria-label="breadcrumb">
<ol className="breadcrumb bg-primary mb-0">
<li className="breadcrumb-item"><a href="!#" className="text-white"><i
className="ri-home-4-line mr-1 float-left"></i>Home</a></li>
<li className="breadcrumb-item"><a href="!#" className="text-white">Library</a>
</li>
<li className="breadcrumb-item active text-white" aria-current="page">Data</li>
</ol>
</nav>
                                                `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>

                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb bg-primary">
                                        <li className="breadcrumb-item active text-white" aria-current="page"><i
                                            className="ri-home-4-line mr-1 float-left"></i>Home
                                        </li>
                                    </ol>
                                </nav>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb bg-primary">
                                        <li className="breadcrumb-item"><a href="!#" className="text-white"><i
                                            className="ri-home-4-line mr-1 float-left"></i>Home</a></li>
                                        <li className="breadcrumb-item active text-white" aria-current="page">Library
                                        </li>
                                    </ol>
                                </nav>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb bg-primary mb-0">
                                        <li className="breadcrumb-item"><a href="!#" className="text-white"><i
                                            className="ri-home-4-line mr-1 float-left"></i>Home</a></li>
                                        <li className="breadcrumb-item"><a href="!#" className="text-white">Library</a>
                                        </li>
                                        <li className="breadcrumb-item active text-white" aria-current="page">Data</li>
                                    </ol>
                                </nav>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm={12} lg={6}>
                        <Card className={"iq-card"}>
                            <CardHeader className={"iq-header-title"}>
                                <span className="text-primary float-right" id="collapse5">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                                <CardTitle  className={"card-title"}><h4>Breadcrumb With Icon</h4></CardTitle>
                            </CardHeader>

                            <CardBody className={"iq-card-body"}>
                                <p>Progress components are built with two HTML elements, some CSS to set the width, and a few attributes.</p>

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
 <nav aria-label="breadcrumb">
<ol class="breadcrumb iq-bg-primary">
<li class="breadcrumb-item active" aria-current="page"><i class="ri-home-4-line mr-1 float-left"></i>Home</li>
</ol>
</nav>
<nav aria-label="breadcrumb">
<ol class="breadcrumb iq-bg-primary">
<li class="breadcrumb-item"><a href="!#"><i class="ri-home-4-line mr-1 float-left"></i>Home</a></li>
<li class="breadcrumb-item active" aria-current="page">Library</li>
</ol>
</nav>
<nav aria-label="breadcrumb">
<ol class="breadcrumb iq-bg-primary mb-0">
<li class="breadcrumb-item"><a href="!#"><i class="ri-home-4-line mr-1 float-left"></i>Home</a></li>
<li class="breadcrumb-item"><a href="!#">Library</a></li>
<li class="breadcrumb-item active" aria-current="page">Data</li>
</ol>
</nav>
                                                `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>

                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb iq-bg-primary">
                                        <li className="breadcrumb-item active" aria-current="page"><i
                                            className="ri-home-4-line mr-1 float-left"></i>Home
                                        </li>
                                    </ol>
                                </nav>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb iq-bg-primary">
                                        <li className="breadcrumb-item"><a href="!#"><i
                                            className="ri-home-4-line mr-1 float-left"></i>Home</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Library</li>
                                    </ol>
                                </nav>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb iq-bg-primary mb-0">
                                        <li className="breadcrumb-item"><a href="!#"><i
                                            className="ri-home-4-line mr-1 float-left"></i>Home</a></li>
                                        <li className="breadcrumb-item"><a href="!#">Library</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Data</li>
                                    </ol>
                                </nav>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm={12} lg={6}>
                        <Card className={"iq-card"}>
                            <CardHeader className={"iq-header-title"}>
                                <span className="text-primary float-right" id="collapse6">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                                <CardTitle  className={"card-title"}><h4>Breadcrumb With Icon</h4></CardTitle>
                            </CardHeader>

                            <CardBody className={"iq-card-body"}>
                                <p>Progress components are built with two HTML elements, some CSS to set the width, and a few attributes.</p>

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
<nav aria-label="breadcrumb">
<ol class="breadcrumb iq-bg-danger">
<li class="breadcrumb-item active" aria-current="page"><i class="ri-home-4-line mr-1 float-left"></i>Home</li>
</ol>
</nav>
<nav aria-label="breadcrumb">
<ol class="breadcrumb iq-bg-danger">
<li class="breadcrumb-item"><a href="!#" class="text-danger"><i class="ri-home-4-line mr-1 float-left"></i>Home</a></li>
<li class="breadcrumb-item active" aria-current="page">Library</li>
</ol>
</nav>
<nav aria-label="breadcrumb">
<ol class="breadcrumb iq-bg-danger mb-0">
<li class="breadcrumb-item"><a href="!#" class="text-danger"><i class="ri-home-4-line mr-1 float-left"></i>Home</a></li>
<li class="breadcrumb-item"><a href="!#" class="text-danger">Library</a></li>
<li class="breadcrumb-item active" aria-current="page">Data</li>
</ol>
</nav>
                                                `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>

                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb iq-bg-danger">
                                        <li className="breadcrumb-item active" aria-current="page"><i
                                            className="ri-home-4-line mr-1 float-left"></i>Home
                                        </li>
                                    </ol>
                                </nav>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb iq-bg-danger">
                                        <li className="breadcrumb-item"><a href="!#" className="text-danger"><i
                                            className="ri-home-4-line mr-1 float-left"></i>Home</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Library</li>
                                    </ol>
                                </nav>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb iq-bg-danger mb-0">
                                        <li className="breadcrumb-item"><a href="!#" className="text-danger"><i
                                            className="ri-home-4-line mr-1 float-left"></i>Home</a></li>
                                        <li className="breadcrumb-item"><a href="!#" className="text-danger">Library</a>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">Data</li>
                                    </ol>
                                </nav>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

            </>
        );
    }
}

export default Index;
