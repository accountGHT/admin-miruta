import React from 'react';
import {Row, Col, Card, CardHeader, CardTitle, CardBody,CardText, UncontrolledCollapse } from 'reactstrap';
import { Pagination } from 'react-bootstrap';
import {index} from "../../../config/pluginsInit";
let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
    items.push(
        <Pagination.Item key={number} active={number === active}>
            {number}
        </Pagination.Item>,
    );
}
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
                    <Col lg={6}>
                        <Card className={"iq-card"}>
                            <CardHeader className={"iq-header-title"}>
                                <span className="text-primary float-right" id="collapse1">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                                <CardTitle  className={"card-title"}><h4>Pagination Examples</h4></CardTitle>
                            </CardHeader>

                            <CardBody className={"iq-card-body"}>
                                <CardText>In addition, as pages likely have more than one such navigation section, it’s advisable to provide a descriptive <code>aria-label</code> for the <code>&lt;nav&gt;</code> to reflect its purpose. For example, if the pagination component is used to navigate between a set of search results, an appropriate label could be <code>aria-label="Search results pages"</code>.</CardText>
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
<OverlayTrigger trigger="click"
placement="right"
overlay={(<Popover id="popover-basic">
<Popover.Title as="h3">Popover title</Popover.Title>
<Popover.Content>
And here's some <strong>amazing</strong> content. It's very engaging.
right?
</Popover.Content>
</Popover>)}>
<Button color="danger">Click to toggle popover</Button>
</OverlayTrigger>
                                                `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                <Pagination>
                                    <Pagination.Item>{"Previous"}</Pagination.Item>
                                    <Pagination.Item>{1}</Pagination.Item>
                                    <Pagination.Item>{2}</Pagination.Item>
                                    <Pagination.Item>{3}</Pagination.Item>
                                    <Pagination.Item>{"Next"}</Pagination.Item>
                                </Pagination>
                            </CardBody>
                        </Card>
                        <Card className={"iq-card"}>
                            <CardHeader className={"iq-header-title"}>
                                <span className="text-primary float-right" id="collapse2">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                                <CardTitle  className={"card-title"}><h4>Disabled and active states</h4></CardTitle>
                            </CardHeader>

                            <CardBody className={"iq-card-body"}>
                                <CardText>
                                    Pagination links are customizable for different circumstances. Use <code>.disabled</code> for links that appear un-clickable and <code>.active</code> to indicate the current page.
                                    While the <code>.disabled</code> class uses <code>pointer-events: none</code> to <em>try</em> to disable the link functionality of <code>&lt;a&gt;</code>s, that CSS property is not yet standardized and doesn’t account for keyboard navigation. As such, you should always add <code>tabindex="-1"</code> on disabled links and use custom JavaScript to fully disable their functionality.
                                </CardText>
                                <UncontrolledCollapse toggler="#collapse2">
                                    <Card>
                                        <kbd className="bg-dark">
                                            <span data-copy-target="#progress" title="Copy"
                                                  data-toggle="tooltip" className="text-white float-right"
                                                  data-copy="true">
                                                Copy
                                            </span>
                                            <pre className="text-white">
                                                <code>{`
<Pagination>
<Pagination.Item><span>{"Previous"}</span></Pagination.Item>
<Pagination.Item><span>{1}</span></Pagination.Item>
<Pagination.Item active><a href="!#">{2}</a></Pagination.Item>
<Pagination.Item><a href="!#">{3}</a></Pagination.Item>
<Pagination.Item><a href="!#">{"Next"}</a></Pagination.Item>
</Pagination>
                                                `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                <Pagination>
                                    <Pagination.Item>{"Previous"}</Pagination.Item>
                                    <Pagination.Item>{1}</Pagination.Item>
                                    <Pagination.Item active>{2}</Pagination.Item>
                                    <Pagination.Item>{3}</Pagination.Item>
                                    <Pagination.Item>{"Next"}</Pagination.Item>
                                </Pagination>
                                <p>You can optionally swap out active or disabled anchors for <code>&lt;span&gt;</code>, or omit the anchor in the case of the prev/next arrows, to remove click functionality and prevent keyboard focus while retaining intended styles.</p>
                                <Pagination>
                                    <Pagination.Item><span>{"Previous"}</span></Pagination.Item>
                                    <Pagination.Item><span>{1}</span></Pagination.Item>
                                    <Pagination.Item active><a href="!#">{2}</a></Pagination.Item>
                                    <Pagination.Item><a href="!#">{3}</a></Pagination.Item>
                                    <Pagination.Item><a href="!#">{"Next"}</a></Pagination.Item>
                                </Pagination>
                            </CardBody>
                        </Card>
                        <Card className={"iq-card"}>
                            <CardHeader className={"iq-header-title"}>
                                <span className="text-primary float-right" id="collapse3">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                                <CardTitle  className={"card-title"}><h4>Pagination With Color</h4></CardTitle>
                            </CardHeader>

                            <CardBody className={"iq-card-body"}>
                                <CardText>In addition, as pages likely have more than one such navigation section, it’s advisable to provide a descriptive <code>aria-label</code> for the <code>&lt;nav&gt;</code> to reflect its purpose. For example, if the pagination component is used to navigate between a set of search results, an appropriate label could be <code>aria-label="Search results pages"</code>.</CardText>
                                <UncontrolledCollapse toggler="#collapse3">
                                    <Card>
                                        <kbd className="bg-dark">
                                            <span data-copy-target="#progress" title="Copy"
                                                  data-toggle="tooltip" className="text-white float-right"
                                                  data-copy="true">
                                                Copy
                                            </span>
                                            <pre className="text-white">
                                                <code>{`
<Pagination.Item className={"border-primary bg-primary text-white"}>{"Previous"}</Pagination.Item>
<Pagination.Item className={"border-primary bg-primary text-white"}>{1}</Pagination.Item>
<Pagination.Item className={"border-primary bg-primary text-white"}>{2}</Pagination.Item>
<Pagination.Item className={"border-primary bg-primary text-white"}>{3}</Pagination.Item>
<Pagination.Item className={"border-primary bg-primary text-white"}>{"Next"}</Pagination.Item>
                                                `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                <Pagination>
                                    <Pagination.Item className={"border-primary bg-primary text-white"}>{"Previous"}</Pagination.Item>
                                    <Pagination.Item className={"border-primary bg-primary text-white"}>{1}</Pagination.Item>
                                    <Pagination.Item className={"border-primary bg-primary text-white"}>{2}</Pagination.Item>
                                    <Pagination.Item className={"border-primary bg-primary text-white"}>{3}</Pagination.Item>
                                    <Pagination.Item className={"border-primary bg-primary text-white"}>{"Next"}</Pagination.Item>
                                </Pagination>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={6}>
                        <Card className={"iq-card"}>
                            <CardHeader className={"iq-header-title"}>
                                <span className="text-primary float-right" id="collapse4">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                                <CardTitle  className={"card-title"}><h4>Working with iconsr</h4></CardTitle>
                            </CardHeader>

                            <CardBody className={"iq-card-body"}>
                                <CardText>In addition, as pages likely have more than one such navigation section, it’s advisable to provide a descriptive <code>aria-label</code> for the <code>&lt;nav&gt;</code> to reflect its purpose. For example, if the pagination component is used to navigate between a set of search results, an appropriate label could be <code>aria-label="Search results pages"</code>.</CardText>
                                <UncontrolledCollapse toggler="#collapse4">
                                    <Card>
                                        <kbd className="bg-dark">
                                            <span data-copy-target="#progress" title="Copy"
                                                  data-toggle="tooltip" className="text-white float-right"
                                                  data-copy="true">
                                                Copy
                                            </span>
                                            <pre className="text-white">
                                                <code>{`
<Pagination>
<Pagination.Prev />
<Pagination.Item className={"border-primary bg-primary text-white"}>{1}</Pagination.Item>
<Pagination.Item className={"border-primary bg-primary text-white"}>{2}</Pagination.Item>
<Pagination.Item className={"border-primary bg-primary text-white"}>{3}</Pagination.Item>
<Pagination.Next />
</Pagination>
                                                `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                <Pagination>
                                    <Pagination.Prev />
                                    <Pagination.Item className={"border-primary bg-primary text-white"}>{1}</Pagination.Item>
                                    <Pagination.Item className={"border-primary bg-primary text-white"}>{2}</Pagination.Item>
                                    <Pagination.Item className={"border-primary bg-primary text-white"}>{3}</Pagination.Item>
                                    <Pagination.Next />
                                </Pagination>
                            </CardBody>
                        </Card>
                        <Card className={"iq-card"}>
                            <CardHeader className={"iq-header-title"}>
                                <span className="text-primary float-right" id="collapse5">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                                <CardTitle  className={"card-title"}><h4>Pagination Sizing</h4></CardTitle>
                            </CardHeader>

                            <CardBody className={"iq-card-body"}>
                                <CardText>In addition, as pages likely have more than one such navigation section, it’s advisable to provide a descriptive <code>aria-label</code> for the <code>&lt;nav&gt;</code> to reflect its purpose. For example, if the pagination component is used to navigate between a set of search results, an appropriate label could be <code>aria-label="Search results pages"</code>.</CardText>
                                <UncontrolledCollapse toggler="#collapse5">
                                    <Card>
                                        <kbd className="bg-dark">
                                            <span data-copy-target="#progress" title="Copy"
                                                  data-toggle="tooltip" className="text-white float-right"
                                                  data-copy="true">
                                                Copy
                                            </span>
                                            <pre className="text-white">
                                                <code>{`
<div>
<Pagination>{items}</Pagination>
<br />

<Pagination size="lg">{items}</Pagination>
<br />

<Pagination size="sm">{items}</Pagination>
</div>
                                                `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                <div>
                                    <Pagination>{items}</Pagination>
                                    <br />

                                    <Pagination size="lg">{items}</Pagination>
                                    <br />

                                    <Pagination size="sm">{items}</Pagination>
                                </div>
                            </CardBody>
                        </Card>
                        <Card className={"iq-card"}>
                            <CardHeader className={"iq-header-title"}>
                                <span className="text-primary float-right" id="collapse6">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                                <CardTitle  className={"card-title"}><h4>Pagination Sizing</h4></CardTitle>
                            </CardHeader>

                            <CardBody className={"iq-card-body"}>
                                <CardText>In addition, as pages likely have more than one such navigation section, it’s advisable to provide a descriptive <code>aria-label</code> for the <code>&lt;nav&gt;</code> to reflect its purpose. For example, if the pagination component is used to navigate between a set of search results, an appropriate label could be <code>aria-label="Search results pages"</code>.</CardText>
                                <UncontrolledCollapse toggler="#collapse6">
                                    <Card>
                                        <kbd className="bg-dark">
                                            <span data-copy-target="#progress" title="Copy"
                                                  data-toggle="tooltip" className="text-white float-right"
                                                  data-copy="true">
                                                Copy
                                            </span>
                                            <pre className="text-white">
                                                <code>{`
<p>Change the alignment of pagination components with <a href="/docs/4.3/utilities/flex/">flexbox utilities</a>.</p>
<h6>left</h6>
<Pagination>
<Pagination.Item>{"Previous"}</Pagination.Item>
<Pagination.Item>{1}</Pagination.Item>
<Pagination.Item>{2}</Pagination.Item>
<Pagination.Item>{3}</Pagination.Item>
<Pagination.Item >{"Next"}</Pagination.Item>
</Pagination>
<h6 className="text-center">Center</h6>
<Pagination className={"pagination justify-content-center"}>
<Pagination.Item>{"Previous"}</Pagination.Item>
<Pagination.Item>{1}</Pagination.Item>
<Pagination.Item>{2}</Pagination.Item>
<Pagination.Item>{3}</Pagination.Item>
<Pagination.Item >{"Next"}</Pagination.Item>
</Pagination>
<h6 className="text-right">Right</h6>
<Pagination className={"justify-content-end"}>
<Pagination.Item>{"Previous"}</Pagination.Item>
<Pagination.Item>{1}</Pagination.Item>
<Pagination.Item>{2}</Pagination.Item>
<Pagination.Item>{3}</Pagination.Item>
<Pagination.Item >{"Next"}</Pagination.Item>
</Pagination>
                                                `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                <p>Change the alignment of pagination components with <a href="/docs/4.3/utilities/flex/">flexbox utilities</a>.</p>
                                <h6>left</h6>
                                <Pagination>
                                    <Pagination.Item>{"Previous"}</Pagination.Item>
                                    <Pagination.Item>{1}</Pagination.Item>
                                    <Pagination.Item>{2}</Pagination.Item>
                                    <Pagination.Item>{3}</Pagination.Item>
                                    <Pagination.Item >{"Next"}</Pagination.Item>
                                </Pagination>
                                <h6 className="text-center">Center</h6>
                                <Pagination className={"pagination justify-content-center"}>
                                    <Pagination.Item>{"Previous"}</Pagination.Item>
                                    <Pagination.Item>{1}</Pagination.Item>
                                    <Pagination.Item>{2}</Pagination.Item>
                                    <Pagination.Item>{3}</Pagination.Item>
                                    <Pagination.Item >{"Next"}</Pagination.Item>
                                </Pagination>
                                <h6 className="text-right">Right</h6>
                                <Pagination className={"justify-content-end"}>
                                    <Pagination.Item>{"Previous"}</Pagination.Item>
                                    <Pagination.Item>{1}</Pagination.Item>
                                    <Pagination.Item>{2}</Pagination.Item>
                                    <Pagination.Item>{3}</Pagination.Item>
                                    <Pagination.Item >{"Next"}</Pagination.Item>
                                </Pagination>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </>
        );
    }
}

export default Index;
