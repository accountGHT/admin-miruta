import React from 'react';
import {Row, Col, Card, CardHeader, CardTitle, CardBody,CardText, Badge,UncontrolledCollapse,ListGroupItem,ListGroupItemHeading,ListGroupItemText} from 'reactstrap';
import {ListGroup} from 'react-bootstrap';
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
                                <CardTitle  className={"card-title"}><h4>List group</h4></CardTitle>
                            </CardHeader>

                            <CardBody className={"iq-card-body"}>
                                <CardText>The most basic list group is an unordered list with list items and the proper classes. Build upon it with the options that follow, or with your own CSS as needed.</CardText>
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
<ListGroup>
<ListGroup.Item>Cras justo odio</ListGroup.Item>
<ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
<ListGroup.Item>Morbi leo risus</ListGroup.Item>
<ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
<ListGroup.Item>Vestibulum at eros</ListGroup.Item>
</ListGroup>
                                                `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                <ListGroup>
                                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                                    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                                </ListGroup>
                            </CardBody>
                        </Card>
                        <Card className={"iq-card"}>
                            <CardHeader className={"iq-header-title"}>
                                <span className="text-primary float-right" id="collapse2">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                                <CardTitle  className={"card-title"}><h4>Disabled items</h4></CardTitle>
                            </CardHeader>

                            <CardBody className={"iq-card-body"}>
                                <CardText>Add <code>.disabled</code> to a <code>.list-group-item</code> to make it <em>appear</em> disabled. Note that some elements with <code>.disabled</code> will also require custom JavaScript to fully disable their click events (e.g., links).</CardText>
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
<ListGroup>
<ListGroup.Item disabled>Cras justo odio</ListGroup.Item>
<ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
<ListGroup.Item>Morbi leo risus</ListGroup.Item>
<ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
</ListGroup>
                                                `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                <ListGroup>
                                    <ListGroup.Item disabled>Cras justo odio</ListGroup.Item>
                                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                                    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                                </ListGroup>
                            </CardBody>
                        </Card>
                        <Card className={"iq-card"}>
                            <CardHeader className={"iq-header-title"}>
                                <span className="text-primary float-right" id="collapse3">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                                <CardTitle  className={"card-title"}><h4>Flush</h4></CardTitle>
                            </CardHeader>

                            <CardBody className={"iq-card-body"}>
                                <CardText>Add <code class="highlighter-rouge">.list-group-flush</code> to remove some borders and rounded corners to render list group items edge-to-edge in a parent container (e.g., cards).</CardText>
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
<ListGroup variant="flush">
<ListGroup.Item>Cras justo odio</ListGroup.Item>
<ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
<ListGroup.Item>Morbi leo risus</ListGroup.Item>
<ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
</ListGroup>>
                                                `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                                    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                                </ListGroup>
                            </CardBody>
                        </Card>
                        <Card className={"iq-card"}>
                            <CardHeader className={"iq-header-title"}>
                                <span className="text-primary float-right" id="collapse4">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                                <CardTitle  className={"card-title"}><h4>Contextual classes</h4></CardTitle>
                            </CardHeader>

                            <CardBody className={"iq-card-body"}>
                                <CardText>Add <code class="highlighter-rouge">.list-group-flush</code> to remove some borders and rounded corners to render list group items edge-to-edge in a parent container (e.g., cards).</CardText>
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
<ListGroup>
<ListGroup.Item>No style</ListGroup.Item>
<ListGroup.Item variant="primary">Primary</ListGroup.Item>
<ListGroup.Item variant="secondary">Secondary</ListGroup.Item>
<ListGroup.Item variant="success">Success</ListGroup.Item>
<ListGroup.Item variant="danger">Danger</ListGroup.Item>
<ListGroup.Item variant="warning">Warning</ListGroup.Item>
<ListGroup.Item variant="info">Info</ListGroup.Item>
<ListGroup.Item variant="light">Light</ListGroup.Item>
<ListGroup.Item variant="dark">Dark</ListGroup.Item>
</ListGroup>
                                                `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                <ListGroup>
                                    <ListGroup.Item>No style</ListGroup.Item>
                                    <ListGroup.Item variant="primary">Primary</ListGroup.Item>
                                    <ListGroup.Item variant="secondary">Secondary</ListGroup.Item>
                                    <ListGroup.Item variant="success">Success</ListGroup.Item>
                                    <ListGroup.Item variant="danger">Danger</ListGroup.Item>
                                    <ListGroup.Item variant="warning">Warning</ListGroup.Item>
                                    <ListGroup.Item variant="info">Info</ListGroup.Item>
                                    <ListGroup.Item variant="light">Light</ListGroup.Item>
                                    <ListGroup.Item variant="dark">Dark</ListGroup.Item>
                                </ListGroup>
                            </CardBody>
                        </Card>
                        <Card className={"iq-card"}>
                            <CardHeader className={"iq-header-title"}>
                                <span className="text-primary float-right" id="collapse5">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                                <CardTitle  className={"card-title"}><h4>With badges</h4></CardTitle>
                            </CardHeader>

                            <CardBody className={"iq-card-body"}>
                                <CardText>Add <code class="highlighter-rouge">.list-group-flush</code> to remove some borders and rounded corners to render list group items edge-to-edge in a parent container (e.g., cards).</CardText>
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
<ListGroup>
<ListGroup.Item>Cras justo odio <Badge  variant={"primary"} className="badge badge-primary badge-pill">14</Badge></ListGroup.Item>
<ListGroup.Item>Dapibus ac facilisis in<Badge variant={"success"} className="badge badge-success badge-pill">2</Badge></ListGroup.Item>
<ListGroup.Item>Morbi leo risus <Badge variant={"danger"}
className="badge badge-danger badge-pill">1</Badge></ListGroup.Item>
</ListGroup>>
                                                `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                <ListGroup>
                                    <ListGroup.Item>Cras justo odio <Badge  variant={"primary"} className="badge badge-primary badge-pill">14</Badge></ListGroup.Item>
                                    <ListGroup.Item>Dapibus ac facilisis in<Badge variant={"success"} className="badge badge-success badge-pill">2</Badge></ListGroup.Item>
                                    <ListGroup.Item>Morbi leo risus <Badge variant={"danger"}
                                        className="badge badge-danger badge-pill">1</Badge></ListGroup.Item>
                                </ListGroup>

                            </CardBody>
                        </Card>
                        <Card className={"iq-card"}>
                            <CardHeader className={"iq-header-title"}>
                                <span className="text-primary float-right" id="collapse6">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                                <CardTitle  className={"card-title"}><h4>With badges</h4></CardTitle>
                            </CardHeader>

                            <CardBody className={"iq-card-body"}>
                                <CardText>Add badges to any list group item to show unread counts, activity, and more with the help of some <a href="/docs/4.3/utilities/flex/">utilities</a>.</CardText>
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
 <ListGroup>
<ListGroup.Item variant={"primary"}>Cras justo odio <Badge className="badge badge-primary badge-pill">14</Badge></ListGroup.Item>
<ListGroup.Item variant={"success"}> Dapibus ac facilisis in<Badge className="badge badge-success badge-pill">2</Badge></ListGroup.Item>
<ListGroup.Item variant={"danger"}>Morbi leo risus <Badge
className="badge badge-danger badge-pill">1</Badge></ListGroup.Item>
</ListGroup>
                                                `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                <ListGroup>
                                    <ListGroup.Item variant={"primary"}>Cras justo odio <Badge className="badge badge-primary badge-pill">14</Badge></ListGroup.Item>
                                    <ListGroup.Item variant={"success"}> Dapibus ac facilisis in<Badge className="badge badge-success badge-pill">2</Badge></ListGroup.Item>
                                    <ListGroup.Item variant={"danger"}>Morbi leo risus <Badge
                                        className="badge badge-danger badge-pill">1</Badge></ListGroup.Item>
                                </ListGroup>

                            </CardBody>
                        </Card>
                    </Col>

                    <Col sm={12} lg={6}>
                        <Card className={"iq-card"}>
                            <CardHeader className={"iq-header-title"}>
                                <span className="text-primary float-right" id="collapse7">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                                <CardTitle  className={"card-title"}><h4>List Active</h4></CardTitle>
                            </CardHeader>

                            <CardBody className={"iq-card-body"}>
                                <CardText>Add badges to any list group item to show unread counts, activity, and more with the help of some <a href="/docs/4.3/utilities/flex/">utilities</a>.</CardText>
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
<ListGroup as="ul">
<ListGroup.Item as="li" active>
Cras justo odio
</ListGroup.Item>
<ListGroup.Item as="li">Dapibus ac facilisis in</ListGroup.Item>
<ListGroup.Item as="li" disabled>
Morbi leo risus
</ListGroup.Item>
<ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>
</ListGroup>
                                                `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                <ListGroup as="ul">
                                    <ListGroup.Item as="li" active>
                                        Cras justo odio
                                    </ListGroup.Item>
                                    <ListGroup.Item as="li">Dapibus ac facilisis in</ListGroup.Item>
                                    <ListGroup.Item as="li" disabled>
                                        Morbi leo risus
                                    </ListGroup.Item>
                                    <ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>
                                </ListGroup>
                            </CardBody>
                        </Card>
                        <Card className={"iq-card"}>
                            <CardHeader className={"iq-header-title"}>
                                <span className="text-primary float-right" id="collapse8">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                                <CardTitle  className={"card-title"}><h4>Links and buttons</h4></CardTitle>
                            </CardHeader>

                            <CardBody className={"iq-card-body"}>
                                <CardText>Use <code>&lt;a&gt;</code>s or <code>&lt;button&gt;</code>s to create <em>actionable</em> list group items with hover, disabled, and active states by adding <code>.list-group-item-action</code>. We separate these pseudo-classes to ensure list groups made of non-interactive elements (like <code>&lt;li&gt;</code>s or <code>&lt;div&gt;</code>s) don’t provide a click or tap affordance.
                                    Be sure to <strong>not use the standard <code>.btn</code> classes here</strong>.
                                </CardText>
                                <UncontrolledCollapse toggler="#collapse8">
                                    <Card>
                                        <kbd className="bg-dark">
                                            <span data-copy-target="#progress" title="Copy"
                                                  data-toggle="tooltip" className="text-white float-right"
                                                  data-copy="true">
                                                Copy
                                            </span>
                                            <pre className="text-white">
                                                <code>{`
<ListGroup as="ul">
<ListGroup.Item as="li" active>
Cras justo odio
</ListGroup.Item>
<ListGroup.Item as="li">Dapibus ac facilisis in</ListGroup.Item>
<ListGroup.Item as="li" disabled>
Morbi leo risus
</ListGroup.Item>
<ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>
</ListGroup>
                                                `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                <ListGroup defaultActiveKey="#link1">
                                    <ListGroup.Item action href="#link1">
                                        Link 1
                                    </ListGroup.Item>
                                    <ListGroup.Item action href="#link2" disabled>
                                        Link 2
                                    </ListGroup.Item>
                                    <ListGroup.Item action href={"#link3"}>
                                        This one is a button
                                    </ListGroup.Item>
                                </ListGroup>,
                            </CardBody>
                        </Card>
                        <Card className={"iq-card"}>
                            <CardHeader className={"iq-header-title"}>
                                <span className="text-primary float-right" id="collapse9">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                                <CardTitle  className={"card-title"}><h4>Links and buttons</h4></CardTitle>
                            </CardHeader>

                            <CardBody className={"iq-card-body"}>
                                <CardText>Use <code>&lt;a&gt;</code>s or <code>&lt;button&gt;</code>s to create <em>actionable</em> list group items with hover, disabled, and active states by adding <code>.list-group-item-action</code>. We separate these pseudo-classes to ensure list groups made of non-interactive elements (like <code>&lt;li&gt;</code>s or <code>&lt;div&gt;</code>s) don’t provide a click or tap affordance.
                                    Be sure to <strong>not use the standard <code>.btn</code> classes here</strong>.
                                </CardText>
                                <UncontrolledCollapse toggler="#collapse9">
                                    <Card>
                                        <kbd className="bg-dark">
                                            <span data-copy-target="#progress" title="Copy"
                                                  data-toggle="tooltip" className="text-white float-right"
                                                  data-copy="true">
                                                Copy
                                            </span>
                                            <pre className="text-white">
                                                <code>{`
<ListGroup defaultActiveKey="#link1">
<ListGroup.Item action href="#link1">
Link 1
</ListGroup.Item>
<ListGroup.Item action href="#link2" disabled>
Link 2
</ListGroup.Item>
<ListGroup.Item action href={"#link3"}>
This one is a button
</ListGroup.Item>
</ListGroup>
                                                `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                <ListGroup defaultActiveKey="#link1">
                                    <ListGroup.Item action href="#link1">
                                        Link 1
                                    </ListGroup.Item>
                                    <ListGroup.Item action href="#link2" disabled>
                                        Link 2
                                    </ListGroup.Item>
                                    <ListGroup.Item action href={"#link3"}>
                                        This one is a button
                                    </ListGroup.Item>
                                </ListGroup>,
                            </CardBody>
                        </Card>
                        <Card className={"iq-card"}>
                            <CardHeader className={"iq-header-title"}>
                                <span className="text-primary float-right" id="collapse10">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                                <CardTitle  className={"card-title"}><h4>Horizontal</h4></CardTitle>
                            </CardHeader>

                            <CardBody className={"iq-card-body"}>
                                <CardText>Use <code>&lt;a&gt;</code>s or <code>&lt;button&gt;</code>s to create <em>actionable</em> list group items with hover, disabled, and active states by adding <code>.list-group-item-action</code>. We separate these pseudo-classes to ensure list groups made of non-interactive elements (like <code>&lt;li&gt;</code>s or <code>&lt;div&gt;</code>s) don’t provide a click or tap affordance.
                                    Be sure to <strong>not use the standard <code>.btn</code> classes here</strong>.
                                </CardText>
                                <UncontrolledCollapse toggler="#collapse10">
                                    <Card>
                                        <kbd className="bg-dark">
                                            <span data-copy-target="#progress" title="Copy"
                                                  data-toggle="tooltip" className="text-white float-right"
                                                  data-copy="true">
                                                Copy
                                            </span>
                                            <pre className="text-white">
                                                <code>{`
<ListGroup horizontal>
<ListGroup.Item>This</ListGroup.Item>
<ListGroup.Item>ListGroup</ListGroup.Item>
<ListGroup.Item>renders</ListGroup.Item>
<ListGroup.Item>horizontally!</ListGroup.Item>
</ListGroup>
                                                `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                <ListGroup horizontal>
                                    <ListGroup.Item>This</ListGroup.Item>
                                    <ListGroup.Item>ListGroup</ListGroup.Item>
                                    <ListGroup.Item>renders</ListGroup.Item>
                                    <ListGroup.Item>horizontally!</ListGroup.Item>
                                </ListGroup>
                            </CardBody>
                        </Card>
                        <Card className={"iq-card"}>
                            <CardHeader className={"iq-header-title"}>
                                <span className="text-primary float-right" id="collapse11">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                                <CardTitle  className={"card-title"}><h4>Contextual classes Action</h4></CardTitle>
                            </CardHeader>

                            <CardBody className={"iq-card-body"}>
                                <CardText>
                                    Use contextual classes to style list items with a stateful background and color.
                                </CardText>
                                <UncontrolledCollapse toggler="#collapse11">
                                    <Card>
                                        <kbd className="bg-dark">
                                            <span data-copy-target="#progress" title="Copy"
                                                  data-toggle="tooltip" className="text-white float-right"
                                                  data-copy="true">
                                                Copy
                                            </span>
                                            <pre className="text-white">
                                                <code>{`
<ListGroup>
<ListGroup.Item>No style</ListGroup.Item>
<ListGroup.Item variant="primary">Primary</ListGroup.Item>
<ListGroup.Item action variant="secondary">
Secondary
</ListGroup.Item>
<ListGroup.Item action variant="success">
Success
</ListGroup.Item>
<ListGroup.Item action variant="danger">
Danger
</ListGroup.Item>
<ListGroup.Item action variant="warning">
Warning
</ListGroup.Item>
<ListGroup.Item action variant="info">
Info
</ListGroup.Item>
<ListGroup.Item action variant="light">
Light
</ListGroup.Item>
<ListGroup.Item action variant="dark">
Dark
</ListGroup.Item>
</ListGroup>
                                                `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                <ListGroup>
                                    <ListGroup.Item>No style</ListGroup.Item>
                                    <ListGroup.Item variant="primary">Primary</ListGroup.Item>
                                    <ListGroup.Item action variant="secondary">
                                        Secondary
                                    </ListGroup.Item>
                                    <ListGroup.Item action variant="success">
                                        Success
                                    </ListGroup.Item>
                                    <ListGroup.Item action variant="danger">
                                        Danger
                                    </ListGroup.Item>
                                    <ListGroup.Item action variant="warning">
                                        Warning
                                    </ListGroup.Item>
                                    <ListGroup.Item action variant="info">
                                        Info
                                    </ListGroup.Item>
                                    <ListGroup.Item action variant="light">
                                        Light
                                    </ListGroup.Item>
                                    <ListGroup.Item action variant="dark">
                                        Dark
                                    </ListGroup.Item>
                                </ListGroup>
                            </CardBody>
                        </Card>
                        <Card className={"iq-card"}>
                            <CardHeader className={"iq-header-title"}>
                                <span className="text-primary float-right" id="collapse12">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                                <CardTitle  className={"card-title"}><h4>Custom content</h4></CardTitle>
                            </CardHeader>

                            <CardBody className={"iq-card-body"}>
                                <CardText>
                                    Add nearly any HTML within, even for linked list groups like the one below, with the help of <a href="/docs/4.3/utilities/flex/">flexbox utilities</a>.
                                </CardText>
                                <UncontrolledCollapse toggler="#collapse12">
                                    <Card>
                                        <kbd className="bg-dark">
                                            <span data-copy-target="#progress" title="Copy"
                                                  data-toggle="tooltip" className="text-white float-right"
                                                  data-copy="true">
                                                Copy
                                            </span>
                                            <pre className="text-white">
                                                <code>{`
<ListGroup>
<ListGroupItem active>
<ListGroupItemHeading>List group item heading</ListGroupItemHeading>
<ListGroupItemText>
Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
</ListGroupItemText>
</ListGroupItem>
<ListGroupItem>
<ListGroupItemHeading>List group item heading</ListGroupItemHeading>
<ListGroupItemText>
Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
</ListGroupItemText>
</ListGroupItem>
<ListGroupItem>
<ListGroupItemHeading>List group item heading</ListGroupItemHeading>
<ListGroupItemText>
Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
</ListGroupItemText>
</ListGroupItem>
</ListGroup>
                                                `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                <ListGroup>
                                    <ListGroupItem active>
                                        <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
                                        <ListGroupItemText>
                                            Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                                        </ListGroupItemText>
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
                                        <ListGroupItemText>
                                            Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                                        </ListGroupItemText>
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
                                        <ListGroupItemText>
                                            Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                                        </ListGroupItemText>
                                    </ListGroupItem>
                                </ListGroup>
                            </CardBody>
                        </Card>

                    </Col>
                </Row>
            </>
        );
    }
}

export default Index;
