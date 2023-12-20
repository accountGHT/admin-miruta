import React from 'react';
import {Row, Col, Card, CardHeader, CardTitle, CardBody,CardText, UncontrolledCollapse} from 'reactstrap';
import {index} from "../../../config/pluginsInit";
import VideoStyle from "../../../components/sofbox/elements/VideoStyle";

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
                                <CardTitle  className={"card-title"}><h4>Embeds Video</h4></CardTitle>
                            </CardHeader>

                            <CardBody className={"iq-card-body"}>
                                <CardText>Wrap any embed like an <code class="highlighter-rouge">&lt;iframe&gt;</code> in a parent element with <code class="highlighter-rouge">.embed-responsive</code> and an aspect ratio. The <code class="highlighter-rouge">.embed-responsive-item</code> isn’t strictly required, but we encourage it.</CardText>

                                <UncontrolledCollapse toggler="#collapse1">
                                    <Card>
                                        <kbd className="bg-dark">
                                            <span data-copy-target="#display-heading" title="Copy"
                                                  data-toggle="tooltip" className="text-white float-right"
                                                  data-copy="true">
                                                Copy
                                            </span>
                                            <pre className="text-white">
                                                <code>{`
<!--React Component --!>
<VideoStyle
    class={"embed-responsive embed-responsive-16by9"}
/>
<div className={props.class}>
<iframe className="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
allowFullScreen></iframe>
</div>
                                                `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                     <VideoStyle
                                        class={"embed-responsive embed-responsive-16by9"}
                                     />
                            </CardBody>
                        </Card>
                        <Card className={"iq-card"}>
                            <CardHeader className={"iq-header-title"}>
                                <span className="text-primary float-right" id="collapse2">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                                <CardTitle  className={"card-title"}><h4>Responsive Aspect ratios 4:3</h4></CardTitle>
                            </CardHeader>

                            <CardBody className={"iq-card-body"}>
                                <CardText>Progress components are built with two HTML elements, some CSS to set the width, and a few attributes.</CardText>

                                <UncontrolledCollapse toggler="#collapse2">
                                    <Card>
                                        <kbd className="bg-dark">
                                            <span data-copy-target="#display-heading" title="Copy"
                                                  data-toggle="tooltip" className="text-white float-right"
                                                  data-copy="true">
                                                Copy
                                            </span>
                                            <pre className="text-white">
                                                <code>{`
<!--React Component --!>
<VideoStyle
    class={"embed-responsive embed-responsive-4by3""}
/>
<div className={props.class}>
<iframe className="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
allowFullScreen></iframe>
</div>
           
                                `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                <VideoStyle
                                    class={"embed-responsive embed-responsive-4by3"}
                                />
                            </CardBody>
                        </Card>
                    </Col>

                    <Col sm={12} lg={6}>
                        <Card className={"iq-card"}>
                            <CardHeader className={"iq-header-title"}>
                                <span className="text-primary float-right" id="collapse3">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                                <CardTitle  className={"card-title"}><h4>Responsive Aspect ratios 21:9</h4></CardTitle>
                            </CardHeader>

                            <CardBody className={"iq-card-body"}>
                                <CardText>Progress components are built with two HTML elements, some CSS to set the width, and a few attributes.</CardText>

                                <UncontrolledCollapse toggler="#collapse4">
                                    <Card>
                                        <kbd className="bg-dark">
                                            <span data-copy-target="#display-heading" title="Copy"
                                                  data-toggle="tooltip" className="text-white float-right"
                                                  data-copy="true">
                                                Copy
                                            </span>
                                            <pre className="text-white">
                                                <code>{`
<!--React Component --!>
<VideoStyle
    class={"embed-responsive embed-responsive-21by9"}
/>
<div className={props.class}>
<iframe className="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
allowFullScreen></iframe>
</div>
                                                `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                <VideoStyle
                                    class={"embed-responsive embed-responsive-21by9"}
                                />
                            </CardBody>
                        </Card>
                        <Card className={"iq-card"}>
                            <CardHeader className={"iq-header-title"}>
                                <span className="text-primary float-right" id="collapse4">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                                <CardTitle  className={"card-title"}><h4>Responsive Aspect ratios 1:1</h4></CardTitle>
                            </CardHeader>

                            <CardBody className={"iq-card-body"}>
                                <CardText>Progress components are built with two HTML elements, some CSS to set the width, and a few attributes.</CardText>

                                <UncontrolledCollapse toggler="#collapse2">
                                    <Card>
                                        <kbd className="bg-dark">
                                            <span data-copy-target="#display-heading" title="Copy"
                                                  data-toggle="tooltip" className="text-white float-right"
                                                  data-copy="true">
                                                Copy
                                            </span>
                                            <pre className="text-white">
                                                <code>{`
<!--React Component --!>
<VideoStyle
    class={"embed-responsive embed-responsive-4by3""}
/>
<div className={props.class}>
<iframe className="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
allowFullScreen></iframe>
</div>
           
                                `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                <VideoStyle
                                    class={"embed-responsive embed-responsive-1by1"}
                                />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </>
        );
    }
}

export default Index;
