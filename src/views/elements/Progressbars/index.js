import React from 'react';
import {Row, Col, Card, CardHeader, CardTitle, CardBody,CardText, UncontrolledCollapse} from 'reactstrap';
import {ProgressBar} from 'react-bootstrap';
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
                                <CardTitle  className={"card-title"}><h4>Examples</h4></CardTitle>
                            </CardHeader>

                            <CardBody className={"iq-card-body"}>
                                <p>Progress components are built with two HTML elements, some CSS to set the width, and a few attributes. We don’t use <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress">the HTML5 <code>&lt;progress&gt;</code> element</a>, ensuring you can stack progress bars, animate them, and place text labels over them.</p>
                                <ul>
                                    <li>We use the <code>.progress</code> as a wrapper to indicate the max value of the progress bar.</li>
                                    <li>We use the inner <code>.progress-bar</code> to indicate the progress so far.</li>
                                    <li>The <code>.progress-bar</code> requires an inline style, utility class, or custom CSS to set their width.</li>
                                    <li>The <code>.progress-bar</code> also requires some <code>role</code> and <code>aria</code> attributes to make it accessible.</li>
                                </ul>
                                <p>Put that all together, and you have the following examples.</p>
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
<Progress className={"progress mb-3"}>
<ProgressBar  variant="primary" now={0} />
</ProgressBar>
<ProgressBar className={"progress mb-3"}>
<ProgressBar  variant="primary" now={10} />
</ProgressBar>
<ProgressBar className={"progress mb-3"}>
<ProgressBar  variant="primary" now={50} />
</ProgressBar>
<ProgressBar className={"progress mb-3"}>
<ProgressBar  variant="primary" now={75} />
</ProgressBar>
<ProgressBar className={"progress mb-3"}>
<ProgressBar  variant="primary" now={100} />
</ProgressBar>
                                                `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                    <ProgressBar className={"progress mb-3"}>
                                        <ProgressBar  variant="primary" now={0} />
                                    </ProgressBar>
                                    <ProgressBar className={"progress mb-3"}>
                                        <ProgressBar  variant="primary" now={10} />
                                    </ProgressBar>
                                    <ProgressBar className={"progress mb-3"}>
                                        <ProgressBar  variant="primary" now={50} />
                                    </ProgressBar>
                                    <ProgressBar className={"progress mb-3"}>
                                        <ProgressBar  variant="primary" now={75} />
                                    </ProgressBar>
                                    <ProgressBar className={"progress mb-3"}>
                                        <ProgressBar  variant="primary" now={100} />
                                    </ProgressBar>
                            </CardBody>
                        </Card>

                        <Card className={"iq-card"}>
                            <CardHeader className={"iq-header-title"}>
                                <span className="text-primary float-right" id="collapse2">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                                <CardTitle  className={"card-title"}><h4>Height</h4></CardTitle>
                            </CardHeader>

                            <CardBody className={"iq-card-body"}>
                                <p>We only set a <code>height</code> value on the <code>.progress</code>, so if you change that value the inner <code>.progress-bar</code> will automatically resize accordingly.</p>
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
<ProgressBar className="progress mb-3">
<ProgressBar now={25} label={25} />;
</ProgressBar>
<ProgressBar className="progress mb-3">
<ProgressBar now={50} label={50} />;
</ProgressBar>
<ProgressBar className="progress mb-3">
<ProgressBar now={75} label={75} />;
</ProgressBar>
<ProgressBar className="progress">
<ProgressBar now={100} label={100} />;
</ProgressBar>
                                                `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                <ProgressBar className="progress mb-3">
                                    <ProgressBar now={25} label={25} />;
                                </ProgressBar>
                                <ProgressBar className="progress mb-3">
                                    <ProgressBar now={50} label={50} />;
                                </ProgressBar>
                                <ProgressBar className="progress mb-3">
                                    <ProgressBar now={75} label={75} />;
                                </ProgressBar>
                                <ProgressBar className="progress">
                                    <ProgressBar now={100} label={100} />;
                                </ProgressBar>
                            </CardBody>
                        </Card>

                        <Card className={"iq-card"}>
                            <CardHeader className={"iq-header-title"}>
                                <span className="text-primary float-right" id="collapse3">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                                <CardTitle  className={"card-title"}><h4>Animated stripes</h4></CardTitle>
                            </CardHeader>

                            <CardBody className={"iq-card-body"}>
                                <p>The striped gradient can also be animated. Add <code>.progress-bar-animated</code> to <code>.progress-bar</code> to animate the stripes right to left via CSS3 animations.</p>
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
<ProgressBar className="progress mb-3">
<ProgressBar className="progress-bar progress-bar-striped progress-bar-animated"
striped color="primary" now={75} >
</ProgressBar>
</ProgressBar>
<ProgressBar className="progress">
<ProgressBar className="progress-bar progress-bar-striped progress-bar-animated"
striped color="success" now={75} >
</ProgressBar>
</ProgressBar>

                                                `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>

                                <ProgressBar className="progress mb-3">
                                    <ProgressBar className="progress-bar progress-bar-striped progress-bar-animated"
                                                 striped color="primary" now={75} >
                                    </ProgressBar>
                                </ProgressBar>
                                <ProgressBar className="progress">
                                    <ProgressBar className="progress-bar progress-bar-striped progress-bar-animated"
                                                 striped color="success" now={75} >
                                    </ProgressBar>
                                </ProgressBar>

                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm={12} lg={6}>
                        <Card className={"iq-card"}>
                            <CardHeader className={"iq-header-title"}>
                                <span className="text-primary float-right" id="collapse4">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                                <CardTitle  className={"card-title"}><h4>Labels</h4></CardTitle>
                            </CardHeader>

                            <CardBody className={"iq-card-body"}>
                                <p>Add labels to your progress bars by placing text within the <code>.progress-bar</code>.</p>

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
<ProgressBar className="progress mb-3">
<ProgressBar now={25} label={25} />;
</ProgressBar>
<ProgressBar className="progress mb-3">
<ProgressBar now={50} label={50} />;
</ProgressBar>
<ProgressBar className="progress mb-3">
<ProgressBar now={75} label={75} />;
</ProgressBar>
<ProgressBar className="progress">
<ProgressBar now={100} label={100} />;
</ProgressBar>

                                                `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                <ProgressBar className="progress mb-3">
                                    <ProgressBar now={25} label={25} />;
                                </ProgressBar>
                                <ProgressBar className="progress mb-3">
                                    <ProgressBar now={50} label={50} />;
                                </ProgressBar>
                                <ProgressBar className="progress mb-3">
                                    <ProgressBar now={75} label={75} />;
                                </ProgressBar>
                                <ProgressBar className="progress">
                                    <ProgressBar now={100} label={100} />;
                                </ProgressBar>
                            </CardBody>
                        </Card>

                        <Card className={"iq-card"}>
                            <CardHeader className={"iq-header-title"}>
                                <span className="text-primary float-right" id="collapse5">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                                <CardTitle  className={"card-title"}><h4>Backgrounds</h4></CardTitle>
                            </CardHeader>

                            <CardBody className={"iq-card-body"}>
                                <CardText>Use background utility classes to change the appearance of individual progress bars.</CardText>

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
<ProgressBar className="progress mb-3">
<ProgressBar className="progress-bar bg-success" color="success" now={25}></ProgressBar>
</ProgressBar>
<ProgressBar className="progress mb-3">
<ProgressBar className="progress-bar bg-info" role="progressbar" color="info" now={50}></ProgressBar>
</ProgressBar>
<ProgressBar className="progress mb-3">
<ProgressBar className="progress-bar bg-warning" role="progressbar" svariant="warning" now={75}></ProgressBar>
</ProgressBar>
<ProgressBar className="progress">
<ProgressBar className="progress-bar bg-danger" role="progressbar" variant="danger" now={100}></ProgressBar>
</ProgressBar>
                                                `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>

                                <ProgressBar className="progress mb-3">
                                    <ProgressBar className="progress-bar bg-success" color="success" now={25}></ProgressBar>
                                </ProgressBar>
                                <ProgressBar className="progress mb-3">
                                    <ProgressBar className="progress-bar bg-info" role="progressbar" color="info" now={50}></ProgressBar>
                                </ProgressBar>
                                <ProgressBar className="progress mb-3">
                                    <ProgressBar className="progress-bar bg-warning" role="progressbar" svariant="warning" now={75}></ProgressBar>
                                </ProgressBar>
                                <ProgressBar className="progress">
                                    <ProgressBar className="progress-bar bg-danger" role="progressbar" variant="danger" now={100}></ProgressBar>
                                </ProgressBar>

                            </CardBody>
                        </Card>

                        <Card className={"iq-card"}>
                            <CardHeader className={"iq-header-title"}>
                                <span className="text-primary float-right" id="collapse6">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                                <CardTitle  className={"card-title"}><h4>Multiple bars</h4></CardTitle>
                            </CardHeader>

                            <CardBody className={"iq-card-body"}>
                                <CardText>Include multiple progress bars in a progress component if you need.</CardText>

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
<ProgressBar>
<ProgressBar  variant="primary" now={35} key={1} />
<ProgressBar variant="success" now={20} key={2} />
<ProgressBar  variant="info" now={10} key={3} />
</ProgressBar>
                                                `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>

                                <ProgressBar>
                                    <ProgressBar  variant="primary" now={35} key={1} />
                                    <ProgressBar variant="success" now={20} key={2} />
                                    <ProgressBar  variant="info" now={10} key={3} />
                                </ProgressBar>

                            </CardBody>
                        </Card>

                        <Card className={"iq-card"}>
                            <CardHeader className={"iq-header-title"}>
                                <span className="text-primary float-right" id="collapse7">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                                <CardTitle  className={"card-title"}><h4>Striped</h4></CardTitle>
                            </CardHeader>

                            <CardBody className={"iq-card-body"}>
                                <CardText>Add <code>.progress-bar-striped</code> to any <code>.progress-bar</code> to apply a stripe via CSS gradient over the progress bar’s background color.</CardText>

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
<ProgressBar className={"progress mb-3"}>
<ProgressBar striped variant="primary" now={10} />
</ProgressBar>
<ProgressBar className={"progress mb-3"}>
<ProgressBar striped variant="success" now={25} />
</ProgressBar>
<ProgressBar className={"progress mb-3"}>
<ProgressBar striped variant="info" now={50} />
</ProgressBar>
<ProgressBar className={"progress mb-3"}>
<ProgressBar striped variant="warning" now={75} />
</ProgressBar>
<ProgressBar className={"progress mb-3"}>
<ProgressBar striped variant="danger" now={100} />
</ProgressBar>
                                                `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>

                                <ProgressBar className={"progress mb-3"}>
                                    <ProgressBar striped variant="primary" now={10} />
                                </ProgressBar>
                                <ProgressBar className={"progress mb-3"}>
                                    <ProgressBar striped variant="success" now={25} />
                                </ProgressBar>
                                <ProgressBar className={"progress mb-3"}>
                                    <ProgressBar striped variant="info" now={50} />
                                </ProgressBar>
                                <ProgressBar className={"progress mb-3"}>
                                    <ProgressBar striped variant="warning" now={75} />
                                </ProgressBar>
                                <ProgressBar className={"progress mb-3"}>
                                    <ProgressBar striped variant="danger" now={100} />
                                </ProgressBar>

                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </>
        );
    }
}

export default Index;
