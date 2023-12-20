import React from 'react';
import {Row, Col, Card, CardHeader, CardTitle, CardBody,CardText, UncontrolledCollapse,Button} from 'reactstrap';
import {OverlayTrigger,Popover,Tooltip,ButtonToolbar} from 'react-bootstrap';
import {index} from "../../../config/pluginsInit";

class Index extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        btnColor:[
            {
                placement:"top",
                color:"primary",
                class:"btn iq-bg-primary"
            },
            {
                placement:"right",
                color:"success",
                class:"btn iq-bg-success"

            },
            {
                placement:"bottom",
                color:"danger",
                class:"btn iq-bg-danger"

            },
            {
                placement:"left",
                color:"info",
                class:"btn iq-bg-info"

            },
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
                    <Col sm={12} lg={6}>
                        <Card className={"iq-card"}>
                            <CardHeader className={"iq-header-title"}>
                                <span className="text-primary float-right" id="collapse1">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                                <CardTitle  className={"card-title"}><h4>Popovers</h4></CardTitle>
                            </CardHeader>

                            <CardBody className={"iq-card-body"}>
                               <CardText>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</CardText>
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
                            </CardBody>
                        </Card>

                        <Card className={"iq-card"}>
                            <CardHeader className={"iq-header-title"}>
                                <span className="text-primary float-right" id="collapse2">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                                <CardTitle  className={"card-title"}><h4>Dismiss on next click</h4></CardTitle>
                            </CardHeader>

                            <CardBody className={"iq-card-body"}>
                                <CardText>Use the <code>focus</code> trigger to dismiss popovers on the user’s next click of a different element than the toggle element.</CardText>
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
                                <OverlayTrigger trigger="focus"
                                                placement="right"
                                                overlay={(<Popover id="popover-basic">
                                                    <Popover.Title as="h3">Dismissible popover</Popover.Title>
                                                    <Popover.Content>
                                                        And here's some <strong>amazing</strong> content. It's very engaging.
                                                        right?
                                                    </Popover.Content>
                                                </Popover>)}>
                                    <Button color="danger">Dismissible popover</Button>
                                </OverlayTrigger>
                            </CardBody>
                        </Card>

                        <Card className={"iq-card"}>
                            <CardHeader className={"iq-header-title"}>
                                <span className="text-primary float-right" id="collapse3">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                                <CardTitle  className={"card-title"}><h4>Disabled elements</h4></CardTitle>
                            </CardHeader>

                            <CardBody className={"iq-card-body"}>
                                <CardText>Elements with the <code>disabled</code> attribute aren’t interactive, meaning users cannot hover or click them to trigger a popover (or tooltip). As a workaround, you’ll want to trigger the popover from a wrapper <code>&lt;div&gt;</code> or <code>&lt;span&gt;</code> and override the <code>pointer-events</code> on the disabled element.</CardText>
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
<OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Disabled popover</Tooltip>}>
<span className="d-inline-block">
<Button disabled style={{ pointerEvents: 'none' }} >
Disabled button
</Button>
</span>
</OverlayTrigger>
                                                `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Disabled popover</Tooltip>}>
                                  <span className="d-inline-block">
                                    <Button  disabled style={{ pointerEvents: 'none' }}>
                                      Disabled button
                                    </Button>
                                  </span>
                                </OverlayTrigger>
                            </CardBody>
                        </Card>

                        <Card className={"iq-card"}>
                            <CardHeader className={"iq-header-title"}>
                                <span className="text-primary float-right" id="collapse4">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                                <CardTitle  className={"card-title"}><h4>Hover elements</h4></CardTitle>
                            </CardHeader>

                            <CardBody className={"iq-card-body"}>
                                <CardText>For disabled popover triggers, you may also prefer <code>data-trigger="hover"</code> so that the popover appears as immediate visual feedback to your users as they may not expect to <em>click</em> on a disabled element..</CardText>
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
<OverlayTrigger trigger="hover"
placement="right"
overlay={(<Popover id="popover-basic">
<Popover.Title as="h3">Popover title</Popover.Title>
<Popover.Content>
And here's some <strong>amazing</strong> content. It's very engaging.
right?
</Popover.Content>
</Popover>)}>
<Button color="primary">Click to toggle popover</Button>
</OverlayTrigger>
                                                `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                <OverlayTrigger trigger="hover"
                                                placement="right"
                                                overlay={(<Popover id="popover-basic">
                                                    <Popover.Title as="h3">Popover title</Popover.Title>
                                                    <Popover.Content>
                                                        And here's some <strong>amazing</strong> content. It's very engaging.
                                                        right?
                                                    </Popover.Content>
                                                </Popover>)}>
                                    <Button color="primary">Click to toggle popover</Button>
                                </OverlayTrigger>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col sm={12} lg={6}>
                        <Card className={"iq-card"}>
                            <CardHeader className={"iq-header-title"}>
                                <span className="text-primary float-right" id="collapse5">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                                <CardTitle  className={"card-title"}><h4>Four directions</h4></CardTitle>
                            </CardHeader>

                            <CardBody className={"iq-card-body"}>
                                <CardText>Four options are available: top, right, bottom, and left aligned.</CardText>
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
<ButtonToolbar>
{['top', 'right', 'bottom', 'left'].map(placement => (
<OverlayTrigger
key={placement}
placement={placement}
overlay={
<Tooltip id="tooltip"}>
Tooltip on <strong>placement</strong>.
</Tooltip>
}
>
<Button  variant="secondary">Tooltip on {placement }</Button>
</OverlayTrigger>
))}
</ButtonToolbar>
                                                `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                <ButtonToolbar>
                                    {['top', 'right', 'bottom', 'left'].map(placement => (
                                        <OverlayTrigger
                                            key={placement}
                                            placement={placement}
                                            overlay={
                                                <Tooltip id={`tooltip-${placement}`}>
                                                    Tooltip on <strong>{placement}</strong>.
                                                </Tooltip>
                                            }
                                        >
                                            <Button  className={  (placement=== index + 1 ? "" : " mr-1 ")}  variant="secondary">Tooltip on {placement }</Button>
                                        </OverlayTrigger>
                                    ))}
                                </ButtonToolbar>
                            </CardBody>
                        </Card>

                        <Card className={"iq-card"}>
                            <CardHeader className={"iq-header-title"}>
                                <span className="text-primary float-right" id="collapse6">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                                <CardTitle  className={"card-title"}><h4>Popovers With Color</h4></CardTitle>
                            </CardHeader>

                            <CardBody className={"iq-card-body"}>
                                <CardText>Four options are available: top, right, bottom, and left aligned.</CardText>
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
<ButtonToolbar>
{this.state.btnColor.map(item => (
<OverlayTrigger
placement={item.placement}
overlay={
<Tooltip id={\`tooltip-{item.placement}\`}>
Tooltip on <strong>placement</strong>.
</Tooltip>
}
>
<Button color={item.color}>Tooltip on + placemnet</Button>
</OverlayTrigger>
))}
</ButtonToolbar>                            `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                <ButtonToolbar>
                                    {this.state.btnColor.map(item => (
                                        <OverlayTrigger
                                            placement={item.placement}
                                            overlay={
                                                <Tooltip id={`tooltip-${item.placement}`}>
                                                    Tooltip on <strong>{item.placement}</strong>.
                                                </Tooltip>
                                            }
                                        >
                                            <Button className={  (item === index + 1 ? "" : " mr-1 ")}  color={item.color}>Tooltip on {item.placement }</Button>
                                        </OverlayTrigger>
                                    ))}
                                </ButtonToolbar>
                            </CardBody>
                        </Card>

                        <Card className={"iq-card"}>
                            <CardHeader className={"iq-header-title"}>
                                <span className="text-primary float-right" id="collapse7">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                                <CardTitle  className={"card-title"}><h4>Popovers With Color</h4></CardTitle>
                            </CardHeader>

                            <CardBody className={"iq-card-body"}>
                                <CardText>Four options are available: top, right, bottom, and left aligned.</CardText>
                                <UncontrolledCollapse toggler="#collapse7">
                                    <Card>
                                        <kbd className="bg-dark">
                                            <span data-copy-target="#progress" title="Copy"
                                                  data-toggle="tooltip" className="text-white float-right"
                                                  data-copy="true">
                                                Copy
                                            </span>
                                            <pre className="text-white">
                                                <code>{`
<ButtonToolbar>
{this.state.btnColor.map(item => (
<OverlayTrigger
placement={item.placement}
overlay={
<Tooltip id={\`tooltip-{item.placement}\`}>
Tooltip on <strong>placement</strong>.
</Tooltip>
}
>
<Button color={item.color}>Tooltip on + placemnet</Button>
</OverlayTrigger>
))}
</ButtonToolbar>                            `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                <ButtonToolbar>
                                    {this.state.btnColor.map(item => (
                                        <OverlayTrigger
                                            placement={item.placement}
                                            overlay={
                                                <Tooltip id={`tooltip-${item.placement}`}>
                                                    Tooltip on <strong>{item.placement}</strong>.
                                                </Tooltip>
                                            }
                                        >
                                            <Button className={(item.class) + (item === index + 1 ? "" : " mr-1 ")}>Tooltip on {item.placement }</Button>
                                        </OverlayTrigger>
                                    ))}
                                </ButtonToolbar>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </>
        );
    }
}

export default Index;
