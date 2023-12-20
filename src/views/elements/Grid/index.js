import React from 'react';
import {Row, Col, Card, CardHeader, CardTitle, CardBody,CardText,Table, UncontrolledCollapse,Container} from 'reactstrap';
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
                    <Col sm={12}>
                        <Card className={"iq-card"}>
                            <CardHeader className={"iq-header-title"}>
                                <span className="text-primary float-right" id="collapse1">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                                <CardTitle  className={"card-title"}><h4>Grid options</h4></CardTitle>
                            </CardHeader>

                            <CardBody className={"iq-card-body"}>
                                <CardText>Here’s a carousel with slides only. Note the presence of the <code>.d-block</code> and <code>.img-fluid</code> on carousel images to prevent browser default image alignment.</CardText>
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
<Table className="table table-bordered table-striped">
<thead>
<tr>
<th></th>
<th className="text-center">
Extra small<br />
<small>&lt;576px</small>
</th>
<th className="text-center">
Small<br/>
<small>≥576px</small>
</th>
<th className="text-center">
Medium<br />
<small>≥768px</small>
</th>
<th className="text-center">
Large<br />
<small>≥992px</small>
</th>
<th className="text-center">
Extra large<br/>
<small>≥1200px</small>
</th>
</tr>
</thead>
<tbody>
<tr>
<th className="text-nowrap text-left" scope="row">Max container width</th>
<td>None (auto)</td>
<td>540px</td>
<td>720px</td>
<td>960px</td>
<td>1140px</td>
</tr>
<tr>
<th className="text-nowrap text-left" scope="row">Class prefix</th>
<td><code>.col-</code></td>
<td><code>.col-sm-</code></td>
<td><code>.col-md-</code></td>
<td><code>.col-lg-</code></td>
<td><code>.col-xl-</code></td>
</tr>
<tr>
<th className="text-nowrap text-left" scope="row"># of columns</th>
<td colSpan="5" className="text-left">12</td>
</tr>
<tr>
<th className="text-nowrap text-left" scope="row">Gutter width</th>
<td colSpan="5" className="text-left">30px (15px on each side of a column)</td>
</tr>
<tr>
<th className="text-nowrap text-left" scope="row">Nestable</th>
<td colSpan="5" className="text-left">Yes</td>
</tr>
<tr>
<th className="text-nowrap text-left" scope="row">Column ordering</th>
<td colSpan="5" className="text-left">Yes</td>
</tr>
</tbody>
</Table>
                                                `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                <Table className="table table-bordered table-striped">
                                    <thead>
                                    <tr>
                                        <th></th>
                                        <th className="text-center">
                                            Extra small<br />
                                            <small>&lt;576px</small>
                                        </th>
                                        <th className="text-center">
                                            Small<br/>
                                            <small>≥576px</small>
                                        </th>
                                        <th className="text-center">
                                            Medium<br />
                                            <small>≥768px</small>
                                        </th>
                                        <th className="text-center">
                                            Large<br />
                                            <small>≥992px</small>
                                        </th>
                                        <th className="text-center">
                                            Extra large<br/>
                                            <small>≥1200px</small>
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <th className="text-nowrap text-left" scope="row">Max container width</th>
                                        <td>None (auto)</td>
                                        <td>540px</td>
                                        <td>720px</td>
                                        <td>960px</td>
                                        <td>1140px</td>
                                    </tr>
                                    <tr>
                                        <th className="text-nowrap text-left" scope="row">Class prefix</th>
                                        <td><code>.col-</code></td>
                                        <td><code>.col-sm-</code></td>
                                        <td><code>.col-md-</code></td>
                                        <td><code>.col-lg-</code></td>
                                        <td><code>.col-xl-</code></td>
                                    </tr>
                                    <tr>
                                        <th className="text-nowrap text-left" scope="row"># of columns</th>
                                        <td colSpan="5" className="text-left">12</td>
                                    </tr>
                                    <tr>
                                        <th className="text-nowrap text-left" scope="row">Gutter width</th>
                                        <td colSpan="5" className="text-left">30px (15px on each side of a column)</td>
                                    </tr>
                                    <tr>
                                        <th className="text-nowrap text-left" scope="row">Nestable</th>
                                        <td colSpan="5" className="text-left">Yes</td>
                                    </tr>
                                    <tr>
                                        <th className="text-nowrap text-left" scope="row">Column ordering</th>
                                        <td colSpan="5" className="text-left">Yes</td>
                                    </tr>
                                    </tbody>
                                </Table>

                            </CardBody>
                        </Card>
                        <Card className={"iq-card"}>
                            <CardHeader className={"iq-header-title"}>
                                <span className="text-primary float-right" id="collapse2">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                                <CardTitle  className={"card-title"}><h4>Equal-width</h4></CardTitle>
                            </CardHeader>

                            <CardBody className={"iq-card-body"}>
                                <CardText>For example, here are two grid layouts that apply to every device and viewport, from <code>xs</code> to <code>xl</code>. Add any number of unit-less classes for each breakpoint you need and every column will be the same width.</CardText>
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
<Row className="iq-example-row">
<Container>
<Row className="mb-3">
<Col md={8}className="col-12">.col-12 .col-md-8</Col>
<Col md={4} className="col-6">.col-6 .col-md-4</Col>
</Row>
<Row className="row mb-3">
<Col md={4} className="col-6">.col-6 .col-md-4</Col>
<Col md={4} className="col-6">.col-6 .col-md-4</Col>
<Col md={4} className="col-6">.col-6 .col-md-4</Col>
</Row>
<Row className="row">
<Col className="col-6">.col-6</Col>
<Col className="col-6">.col-6</Col>
</Row>
</Container>
</Row>
                                                `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>

                                <Row className="iq-example-row">
                                    <Container>

                                        <Row className="mb-3">
                                            <Col md={8}className="col-12">.col-12 .col-md-8</Col>
                                            <Col md={4} className="col-6">.col-6 .col-md-4</Col>
                                        </Row>
                                        <Row className="row mb-3">
                                            <Col md={4} className="col-6">.col-6 .col-md-4</Col>
                                            <Col md={4} className="col-6">.col-6 .col-md-4</Col>
                                            <Col md={4} className="col-6">.col-6 .col-md-4</Col>
                                        </Row>
                                        <Row className="row">
                                            <Col className="col-6">.col-6</Col>
                                            <Col className="col-6">.col-6</Col>
                                        </Row>
                                    </Container>
                                </Row>

                            </CardBody>
                        </Card>
                        <Card className={"iq-card"}>
                            <CardHeader className={"iq-header-title"}>
                                <span className="text-primary float-right" id="collapse3">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                                <CardTitle  className={"card-title"}><h4>Setting one column width</h4></CardTitle>
                            </CardHeader>

                            <CardBody className={"iq-card-body"}>
                                <CardText>Auto-layout for flexbox grid columns also means you can set the width of one column and have the sibling columns automatically resize around it. You may use predefined grid classes (as shown below), grid mixins, or inline widths. Note that the other columns will resize no matter the width of the center column.</CardText>
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
<Row className="iq-example-row">
<Container fluid={true} >
<Row className="mb-3">
<Col className="col">
1 of 3
</Col>
<Col className="col-6">
2 of 3 (wider)
</Col>
<Col className="col">
3 of 3
</Col>
</Row>
<Row>
<Col className="col">
1 of 3
</Col>
<Col className="col-5">
2 of 3 (wider)
</Col>
<Col className="col">
3 of 3
</Col>
</Row>
</Container>
</Row>
                                                `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>

                                <Row className="iq-example-row">
                                    <Container fluid={true} >
                                        <Row className="mb-3">
                                            <Col className="col">
                                                1 of 3
                                            </Col>
                                            <Col className="col-6">
                                                2 of 3 (wider)
                                            </Col>
                                            <Col className="col">
                                                3 of 3
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="col">
                                                1 of 3
                                            </Col>
                                            <Col className="col-5">
                                                2 of 3 (wider)
                                            </Col>
                                            <Col className="col">
                                                3 of 3
                                            </Col>
                                        </Row>
                                    </Container>
                                </Row>

                            </CardBody>
                        </Card>
                        <Card className={"iq-card"}>
                            <CardHeader className={"iq-header-title"}>
                                <span className="text-primary float-right" id="collapse4">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                                <CardTitle  className={"card-title"}><h4>Variable width content</h4></CardTitle>
                            </CardHeader>

                            <CardBody className={"iq-card-body"}>
                                <CardText>Use <code>col-breakpoint-auto</code> classes to size columns based on the natural width of their content.</CardText>
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
<Row className="iq-example-row">
<Container fluid={true} >
<Row className="mb-3 justify-content-md-center mb-3">
<Col lg={2} >
1 of 3
</Col>
<Col md={"auto"}>
Variable width content
</Col>
<Col lg={2}>
3 of 3
</Col>
</Row>
<Row>
<Col className="col">
1 of 3
</Col>
<Col md={"auto"}>
Variable width content
</Col>
<Col lg={2}>
3 of 3
</Col>
</Row>
</Container>
</Row>

                                                `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>

                                <Row className="iq-example-row">
                                    <Container fluid={true} >
                                        <Row className="mb-3 justify-content-md-center mb-3">
                                            <Col lg={2} >
                                                1 of 3
                                            </Col>
                                            <Col md={"auto"}>
                                                Variable width content
                                            </Col>
                                            <Col lg={2}>
                                                3 of 3
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="col">
                                                1 of 3
                                            </Col>
                                            <Col md={"auto"}>
                                                Variable width content
                                            </Col>
                                            <Col lg={2}>
                                                3 of 3
                                            </Col>
                                        </Row>
                                    </Container>
                                </Row>

                            </CardBody>
                        </Card>
                        <Card className={"iq-card"}>
                            <CardHeader className={"iq-header-title"}>
                                <span className="text-primary float-right" id="collapse5">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                                <CardTitle  className={"card-title"}><h4>Equal-width multi-row</h4></CardTitle>
                            </CardHeader>

                            <CardBody className={"iq-card-body"}>
                                <CardText>Create equal-width columns that span multiple rows by inserting a <code>.w-100</code> where you want the columns to break to a new line. Make the breaks responsive by mixing the <code>.w-100</code> with some <a href="/docs/4.3/utilities/display/">responsive display utilities</a>.</CardText>
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
 <Row>
<Col className="col">col</Col>
<Col className="col">col</Col>
<Col className="w-100"></Col>
<Col className="col">col</Col>
<Col className="col">col</Col>
</Row>

                                                `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>

                                <Row className="iq-example-row">
                                    <Container fluid={true} >
                                        <Row>
                                            <Col className="col">col</Col>
                                            <Col className="col">col</Col>
                                            <Col className="w-100"></Col>
                                            <Col className="col">col</Col>
                                            <Col className="col">col</Col>
                                        </Row>
                                    </Container>
                                </Row>

                            </CardBody>
                        </Card>
                        <Card className={"iq-card"}>
                            <CardHeader className={"iq-header-title"}>
                                <span className="text-primary float-right" id="collapse6">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                                <CardTitle  className={"card-title"}><h4>Responsive classes</h4></CardTitle>
                            </CardHeader>

                            <CardBody className={"iq-card-body"}>
                                <CardText>Bootstrap’s grid includes five tiers of predefined classes for building complex responsive layouts. Customize the size of your columns on extra small, small, medium, large, or extra large devices however you see fit</CardText>
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
<Row className="iq-example-row">
<Container fluid={true}>
<Row className="mb-3">
<Col className="col">col</Col>
<Col className="col">col</Col>
<Col className="col">col</Col>
<Col className="col">col</Col>
</Row>
<Row>
<Col md={8} >col-8</Col>
<Col md={4}>col-4</Col>
</Row>
</Container>
</Row>
                                                `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>

                                <h4 className="card-title">All breakpoints</h4>
                                <CardText>For grids that are the same from the smallest of devices to the largest, use
                                    the <code>.col</code> and <code>.col-*</code> classes. Specify a numbered class when
                                    you need a particularly sized column; otherwise, feel free to stick
                                    to <code>.col</code>.</CardText>
                                <Row className="iq-example-row">
                                    <Container fluid={true}>
                                        <Row className="mb-3">
                                            <Col className="col">col</Col>
                                            <Col className="col">col</Col>
                                            <Col className="col">col</Col>
                                            <Col className="col">col</Col>
                                        </Row>
                                        <Row>
                                            <Col md={8} >col-8</Col>
                                            <Col md={4}>col-4</Col>
                                        </Row>
                                    </Container>
                                </Row>

                            </CardBody>
                        </Card>
                        <Card className={"iq-card"}>
                            <CardHeader className={"iq-header-title"}>
                                <span className="text-primary float-right" id="collapse7">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                                <CardTitle  className={"card-title"}><h4>Stacked to horizontal</h4></CardTitle>
                            </CardHeader>

                            <CardBody className={"iq-card-body"}>
                                <CardText>Using a single set of <code>.col-sm-*</code> classes, you can create a basic grid system that starts out stacked and becomes horizontal at the small breakpoint (<code>sm</code>)</CardText>
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
<Row className="iq-example-row">
<Container fluid={true}>
<Row className="row mb-3">
<Col sm={8} >col-sm-8</Col>
<Col sm={4} >col-sm-4</Col>
</Row>
<Row>
<div className="col-sm">col-sm</div>
<div className="col-sm">col-sm</div>
<div className="col-sm">col-sm</div>
</Row>
</Container>
</Row>

                                                `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>

                                <Row className="iq-example-row">
                                    <Container fluid={true}>
                                        <Row className="row mb-3">
                                            <Col sm={8} >col-sm-8</Col>
                                            <Col sm={4} >col-sm-4</Col>
                                        </Row>
                                        <Row>
                                            <div className="col-sm">col-sm</div>
                                            <div className="col-sm">col-sm</div>
                                            <div className="col-sm">col-sm</div>
                                        </Row>
                                    </Container>
                                </Row>

                            </CardBody>
                        </Card>
                        <Card className={"iq-card"}>
                            <CardHeader className={"iq-header-title"}>
                                <span className="text-primary float-right" id="collapse8">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                                <CardTitle  className={"card-title"}><h4>Mix and match</h4></CardTitle>
                            </CardHeader>

                            <CardBody className={"iq-card-body"}>
                                <CardText>Don’t want your columns to simply stack in some grid tiers? Use a combination of different classes for each tier as needed. See the example below for a better idea of how it all works.</CardText>
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

<Row className="iq-example-row">
<Container fluid={true}>
<Row className="mb-3">
<Col md={8} className="col-12">.col-12 .col-md-8</Col>
<Col md={4} className="col-6">.col-6 .col-md-4</Col>
</Row>
<Row className="mb-3">
<Col md={4} className="col-6">.col-6 .col-md-4</Col>
<Col md={4} className="col-6">.col-6 .col-md-4</Col>
<Col md={4} className="col-6">.col-6 .col-md-4</Col>
</Row>
<Row>
<Col className="col-6">.col-6</Col>
<Col className="col-6">.col-6</Col>
</Row>
</Container>
</Row>
                                                `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                <Row className="iq-example-row">
                                    <Container fluid={true}>
                                        <Row className="mb-3">
                                            <Col md={8} className="col-12">.col-12 .col-md-8</Col>
                                            <Col md={4} className="col-6">.col-6 .col-md-4</Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Col md={4} className="col-6">.col-6 .col-md-4</Col>
                                            <Col md={4} className="col-6">.col-6 .col-md-4</Col>
                                            <Col md={4} className="col-6">.col-6 .col-md-4</Col>
                                        </Row>
                                        <Row>
                                            <Col className="col-6">.col-6</Col>
                                            <Col className="col-6">.col-6</Col>
                                        </Row>
                                    </Container>
                                </Row>

                            </CardBody>
                        </Card>
                        <Card className={"iq-card"}>
                            <CardHeader className={"iq-header-title"}>
                                <span className="text-primary float-right" id="collapse9">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                                <CardTitle  className={"card-title"}><h4>Gutters</h4></CardTitle>
                            </CardHeader>

                            <CardBody className={"iq-card-body"}>
                                <CardText>Gutters can be responsively adjusted by breakpoint-specific padding and negative margin utility classes. To change the gutters in a given row, pair a negative margin utility on the <code>.row</code> and matching padding utilities on the <code>.col</code>s. The <code>.container</code> or <code>.container-fluid</code> parent may need to be adjusted too to avoid unwanted overflow, using again matching padding utility.</CardText>
                                <CardText>Here’s an example of customizing the Bootstrap grid at the large (<code>lg</code>) breakpoint and above. We’ve increased the <code>.col</code> padding with <code>.px-lg-5</code>, counteracted that with <code>.mx-lg-n5</code> on the parent <code>.row</code> and then adjusted the <code>.container</code> wrapper with <code>.px-lg-5</code>.</CardText>
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
<Row className="iq-example-row">
<Container fluid={true}  className="px-lg-5">
<Row className="mx-lg-n5">
<div className="col py-3 px-lg-5 border bg-light">Custom column padding
</div>
<div className="col py-3 px-lg-5 border bg-light">Custom column padding
</div>
</Row>
</Container>
</Row>
                                                `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                <Row className="iq-example-row">
                                    <Container fluid={true}  className="px-lg-5">
                                        <Row className="mx-lg-n5">
                                            <div className="col py-3 px-lg-5 border bg-light">Custom column padding
                                            </div>
                                            <div className="col py-3 px-lg-5 border bg-light">Custom column padding
                                            </div>
                                        </Row>
                                    </Container>
                                </Row>

                            </CardBody>
                        </Card>
                        <Card className={"iq-card"}>
                            <CardHeader className={"iq-header-title"}>
                                <span className="text-primary float-right" id="collapse10">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                                <CardTitle  className={"card-title"}><h4>Alignment</h4></CardTitle>
                            </CardHeader>

                            <CardBody className={"iq-card-body"}>
                                <CardText>Use flexbox alignment utilities to vertically and horizontally align columns. <strong>Internet Explorer 10-11 do not support vertical alignment of flex items when the flex container has a <code>min-height</code> as shown below.</strong> <a href="https://github.com/philipwalton/flexbugs#flexbug-3">See Flexbugs #3 for more details.</a>.</CardText>

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
<Row className="iq-example-row iq-example-row-flex-cols">
<Container fluid={true}>
<Row className="align-items-start">
<Col className="col">
One of three columns
</Col>
<Col className="col">
One of three columns
</Col>
<Col className="col">
One of three columns
</Col>
</Row>
<Row className="align-items-center">
<Col className="col">
One of three columns
</Col>
<Col className="col">
One of three columns
</Col>
<Col className="col">
One of three columns
</Col>
</Row>
<div className="row align-items-end">
<div className="col">
One of three columns
</div>
<div className="col">
One of three columns
</div>
<div className="col">
One of three columns
</div>
</div>
</Container>
<Container fluid={true}>
<Row>
<Col className="col align-self-start">
One of three columns
</Col>
<Col className="col align-self-center">
One of three columns
</Col>
<Col className="col align-self-end">
One of three columns
</Col>
</Row>
</Container>
</Row>
                                                `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                <h4 className="mb-3">Vertical alignment</h4>
                                <Row className="iq-example-row iq-example-row-flex-cols">
                                    <Container fluid={true}>
                                        <Row className="align-items-start">
                                            <Col className="col">
                                                One of three columns
                                            </Col>
                                            <Col className="col">
                                                One of three columns
                                            </Col>
                                            <Col className="col">
                                                One of three columns
                                            </Col>
                                        </Row>
                                        <Row className="align-items-center">
                                            <Col className="col">
                                                One of three columns
                                            </Col>
                                            <Col className="col">
                                                One of three columns
                                            </Col>
                                            <Col className="col">
                                                One of three columns
                                            </Col>
                                        </Row>
                                        <div className="row align-items-end">
                                            <div className="col">
                                                One of three columns
                                            </div>
                                            <div className="col">
                                                One of three columns
                                            </div>
                                            <div className="col">
                                                One of three columns
                                            </div>
                                        </div>
                                    </Container>
                                    <Container fluid={true}>
                                        <Row>
                                            <Col className="col align-self-start">
                                                One of three columns
                                            </Col>
                                            <Col className="col align-self-center">
                                                One of three columns
                                            </Col>
                                            <Col className="col align-self-end">
                                                One of three columns
                                            </Col>
                                        </Row>
                                    </Container>
                                </Row>

                            </CardBody>
                        </Card>
                        <Card className={"iq-card"}>
                            <CardHeader className={"iq-header-title"}>
                                <span className="text-primary float-right" id="collapse11">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                                <CardTitle  className={"card-title"}><h4>Horizontal alignment</h4></CardTitle>
                            </CardHeader>

                            <CardBody className={"iq-card-body"}>
                                <CardText>Create equal-width columns that span multiple rows by inserting a <code>.w-100</code> where you want the columns to break to a new line. Make the breaks responsive by mixing the <code>.w-100</code> with some <a href="/docs/4.3/utilities/display/">responsive display utilities</a>.</CardText>

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
<Row className="iq-example-row">
<Container fluid={true}>
<Row className="justify-content-start mb-3">
<Col className="col-4">
One of two columns
</Col>
<Col className="col-4">
One of two columns
</Col>
</Row>
<Row className="justify-content-center mb-3">
<Col className="col-4">
One of two columns
</Col>
<Col className="col-4">
One of two columns
</Col>
</Row>
<Row className="justify-content-end mb-3">
<Col className="col-4">
One of two columns
</Col>
<Col className="col-4">
One of two columns
</Col>
</Row>
<Row className="justify-content-around mb-3">
<Col className="col-4">
One of two columns
</Col>
<Col className="col-4">
One of two columns
</Col>
</Row>
<Row className="justify-content-between">
<Col className="col-4">
One of two columns
</Col>
<Col className="col-4">
One of two columns
</Col>
</Row>
</Container>
</Row>                                      `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>

                                <Row className="iq-example-row">
                                    <Container fluid={true}>
                                        <Row className="justify-content-start mb-3">
                                            <Col className="col-4">
                                                One of two columns
                                            </Col>
                                            <Col className="col-4">
                                                One of two columns
                                            </Col>
                                        </Row>
                                        <Row className="justify-content-center mb-3">
                                            <Col className="col-4">
                                                One of two columns
                                            </Col>
                                            <Col className="col-4">
                                                One of two columns
                                            </Col>
                                        </Row>
                                        <Row className="justify-content-end mb-3">
                                            <Col className="col-4">
                                                One of two columns
                                            </Col>
                                            <Col className="col-4">
                                                One of two columns
                                            </Col>
                                        </Row>
                                        <Row className="justify-content-around mb-3">
                                            <Col className="col-4">
                                                One of two columns
                                            </Col>
                                            <Col className="col-4">
                                                One of two columns
                                            </Col>
                                        </Row>
                                        <Row className="justify-content-between">
                                            <Col className="col-4">
                                                One of two columns
                                            </Col>
                                            <Col className="col-4">
                                                One of two columns
                                            </Col>
                                        </Row>
                                    </Container>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </>
        );
    }
}

export default Index;
