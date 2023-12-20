import React from 'react';
import {
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    CardText,
   UncontrolledCollapse
} from 'reactstrap';
import NotificationStyle from '../../../components/sofbox/elements/NotificationStyle'
import {index} from "../../../config/pluginsInit";

class Index extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data:[
                {
                    tost_header:'Bootstrap',
                    mint:'11 min ago',
                    tost_body:'Hello, world! This is a toast message.',
                    class:"bg-primary text-white"
                },
            ],
            data2:[
                {
                    tost_header:'Bootstrap',
                    mint:'just now',
                    tost_body:'See? Just like this.'
                },
                {
                    tost_header:'Bootstrap',
                    mint:'2 seconds ago',
                    tost_body:' Heads up, toasts will stack automatically'
                }
            ],
            data3:[
               {
                    tost_header:'Bootstrap',
                    mint:'11 min ago',
                    tost_body:'Hello, world! This is} a toast message.',
                    class:"bg-primary text-white",
                    bgcolor:"bg-primary"
               },
                {
                    tost_header:'Bootstrap',
                    mint:'11 min ago',
                    tost_body:'Hello, world! This is} a toast message.',
                    class:"bg-primary text-white",
                    bgcolor:"bg-success"
                }
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
                    <Col sm={12} lg={6} >
                        <Card className="iq-card">
                            <CardHeader className="iq-header-title">
                                        <span className="text-primary float-right" id="collapse1">
                                            <i className="ri-code-s-slash-line" />
                                         </span>
                                <CardTitle><h4 className="card-title">Notifications</h4></CardTitle>
                            </CardHeader>
                            <CardBody className="iq-card-body">
                                <CardText className="mb-4">Toasts are as flexible as you need and have very little required markup. At a minimum, we require a single element to contain your “toasted” content and strongly encourage a dismiss button.</CardText>

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
this.state = {
data:[
{
tost_header:'Bootstrap',
mint:'11 min ago',
tost_body:'Hello, world! This is a toast message.',
class:"bg-primary text-white"
},
],
<div className="toast fade show" role="alert" aria-live="assertive"
aria-atomic="true" key={index}>
<NotificationStyle
tost_header={item.tost_header}
mint={item.mint}
tost_body={item.tost_body}
/>
</div>
<!-- Notification Component --!>
<div className="toast-header">
<svg className="bd-placeholder-img rounded mr-2" width="20" height="20"
xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false"
role="img">
<rect width="100%" height="100%" fill="#007aff"></rect>
</svg>
<strong className="mr-auto">{props.tost_header}</strong>
<small>{props.mint}</small>
<button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
<span aria-hidden="true">×</span>
</button>
</div>
<div className="toast-body">
{props.tost_body}
</div>

                                                `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                    { this.state.data.map((item, index) => (

                                            <div className="toast fade show" role="alert" aria-live="assertive"
                                                 aria-atomic="true" key={index}>
                                                <NotificationStyle
                                                    tost_header={item.tost_header}
                                                    mint={item.mint}
                                                    tost_body={item.tost_body}
                                                />
                                            </div>
                                 )) }
                            </CardBody>
                        </Card>
                        <Card className="iq-card">
                            <CardHeader className="iq-header-title">
                                        <span className="text-primary float-right" id="collapse2">
                                            <i className="ri-code-s-slash-line" />
                                         </span>
                                <CardTitle><h4 className="card-title">Stacking</h4></CardTitle>
                            </CardHeader>
                            <CardBody className="iq-card-body">
                                <CardText className="mb-4">When you have multiple toasts, we default to vertically stacking them in a readable manner.</CardText>

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

                                                `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                { this.state.data2.map((item, index) => (

                                    <div className="toast fade show" role="alert" aria-live="assertive"
                                         aria-atomic="true" key={index}>
                                        <NotificationStyle
                                            tost_header={item.tost_header}
                                            mint={item.mint}
                                            tost_body={item.tost_body}
                                        />
                                    </div>
                                )) }
                            </CardBody>
                        </Card>
                        <Card className="iq-card">
                            <CardHeader className="iq-header-title">
                                        <span className="text-primary float-right" id="collapse3">
                                            <i className="ri-code-s-slash-line" />
                                         </span>
                                <CardTitle><h4 className="card-title">Notifications horizontally and/or vertically</h4></CardTitle>
                            </CardHeader>
                            <CardBody className="iq-card-body">
                                <CardText className="mb-4">You can also get fancy with flexbox utilities to align toasts horizontally and/or vertically.</CardText>

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

                                                `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                <div className="p-3 bg-dark">
                                    <div aria-live="polite" aria-atomic="true"
                                         className="d-flex justify-content-center align-items-center">
                                        { this.state.data.map((item, index) => (

                                            <div className="toast fade show" role="alert" aria-live="assertive"
                                                 aria-atomic="true" key={index}>
                                                <NotificationStyle
                                                    tost_header={item.tost_header}
                                                    mint={item.mint}
                                                    tost_body={item.tost_body}
                                                />
                                            </div>
                                        )) }
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col lg={6}>
                        <Card className="iq-card">
                            <CardHeader className="iq-header-title">
                                        <span className="text-primary float-right" id="collapse4">
                                            <i className="ri-code-s-slash-line" />
                                         </span>
                                <CardTitle><h4 className="card-title">Notifications</h4></CardTitle>
                            </CardHeader>
                            <CardBody className="iq-card-body">
                                <CardText className="mb-4">Toasts are slightly translucent, too, so they blend over whatever they might appear over. For browsers that support the <code>backdrop-filter</code> CSS property, we’ll also attempt to blur the elements under a toast.</CardText>

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

                                                `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                <div className="p-3 bg-dark">
                                        { this.state.data.map((item, index) => (

                                            <div className="toast fade show" role="alert" aria-live="assertive"
                                                 aria-atomic="true" key={index}>
                                                <NotificationStyle
                                                    tost_header={item.tost_header}
                                                    mint={item.mint}
                                                    tost_body={item.tost_body}
                                                />
                                            </div>
                                        )) }
                                </div>
                            </CardBody>
                        </Card>
                        <Card className="iq-card">
                            <CardHeader className="iq-header-title">
                                        <span className="text-primary float-right" id="collapse5">
                                            <i className="ri-code-s-slash-line" />
                                         </span>
                                <CardTitle><h4 className="card-title">Stacking Placement</h4></CardTitle>
                            </CardHeader>
                            <CardBody className="iq-card-body">
                                <CardText className="mb-4">Place toasts with custom CSS as you need them. The top right is often used for notifications, as is the top middle. If you’re only ever going to show one toast at a time, put the positioning styles right on the <code>.toast</code>.</CardText>

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

                                                `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                <div className="p-3 bg-dark">
                                    <div aria-live="polite" aria-atomic="true" style={{position: "relative", minHeight:"200px"}}>
                                        { this.state.data.map((item, index) => (

                                            <div className="toast fade show" role="alert" aria-live="assertive"
                                                 aria-atomic="true" key={index} style={{position: "absolute",top:0,right:0}}>
                                                <NotificationStyle
                                                    tost_header={item.tost_header}
                                                    mint={item.mint}
                                                    tost_body={item.tost_body}
                                                />
                                            </div>
                                        )) }
                                    </div>

                                </div>
                                <CardText className="mt-3">For systems that generate more notifications, consider using
                                    a wrapping element so they can easily stack.</CardText>
                                <div className="bg-dark p-3 mt-3">
                                    <div aria-live="polite" aria-atomic="true"
                                         style={{position:"relative", minHeight: "200px"}}>
                                        <div style={{position: "absolute", top: "0", right: "0"}}>
                                            { this.state.data2.map((i, index) => (

                                                <div className="toast fade show" role="alert" aria-live="assertive"
                                                     aria-atomic="true" key={index}>
                                                    <NotificationStyle
                                                        tost_header={i.tost_header}
                                                        mint={i.mint}
                                                        tost_body={i.tost_body}
                                                    />
                                                </div>
                                            )) }
                                        </div>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col sm={12}>
                        <Card className="iq-card">
                            <CardHeader className="iq-header-title">
                                        <span className="text-primary float-right" id="collapse6">
                                            <i className="ri-code-s-slash-line" />
                                         </span>
                                <CardTitle><h4 className="card-title">Notifications</h4></CardTitle>
                            </CardHeader>
                            <CardBody className="iq-card-body">
                                <CardText className="mb-4">Toasts are as flexible as you need and have very little required markup. At a minimum, we require a single element to contain your “toasted” content and strongly encourage a dismiss button.</CardText>

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

                                                `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                { this.state.data3.map((item, index) => (

                                    <div className={"toast fade show  text-white border-0 "+item.bgcolor} role="alert" aria-live="assertive"
                                         aria-atomic="true" key={index}>
                                        <NotificationStyle
                                            tost_header={item.tost_header}
                                            mint={item.mint}
                                            tost_body={item.tost_body}
                                            class={item.class}
                                        />

                                    </div>
                                )) }
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </>
        );
    }
}

export default Index;
