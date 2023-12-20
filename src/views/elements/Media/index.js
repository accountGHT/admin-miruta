import React from 'react';
import {Row, Col, Card, CardHeader, CardTitle, CardBody,CardText, UncontrolledCollapse,Media } from 'reactstrap';
/*import {ListGroup} from 'react-bootstrap';*/
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
                                <CardTitle  className={"card-title"}><h4>Equal-width multi-row</h4></CardTitle>
                            </CardHeader>

                            <CardBody className={"iq-card-body"}>
                                <CardText>Create equal-width columns that span multiple rows by inserting a <code>.w-100</code> where you want the columns to break to a new line. Make the breaks responsive by mixing the <code>.w-100</code> with some <a href="/docs/4.3/utilities/display/">responsive display utilities</a>.</CardText>
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
<Media>
<Media left href="#">
<Media object src={require('../../../assets/images/page-img/15.jpg')}  alt="Generic placeholder image" />
</Media>
<Media body>
<Media heading>
Media heading
</Media>
Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.

</Media>
</Media>
<Media>
<Media left href="#">
<Media object src={require('../../../assets/images/page-img/15.jpg')}  alt="Generic placeholder image" />
</Media>
<Media body>
<Media heading>
Media heading
</Media>
Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
<Media>
<Media left href="#">
<Media object src={require('../../../assets/images/page-img/16.jpg')} alt="Generic placeholder image" />
</Media>
<Media body>
<Media heading>
Nested media heading
</Media>
Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
</Media>
</Media>
</Media>
</Media>                     `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                <Media>
                                    <Media left href="#">
                                        <Media object src={require('../../../assets/images/page-img/15.jpg')}  alt="Generic placeholder image" />
                                    </Media>
                                    <Media body>
                                        <Media heading>
                                            Media heading
                                        </Media>
                                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.

                                    </Media>
                                </Media>
                                <Media>
                                    <Media left href="#">
                                        <Media object src={require('../../../assets/images/page-img/15.jpg')}  alt="Generic placeholder image" />
                                    </Media>
                                    <Media body>
                                        <Media heading>
                                            Media heading
                                        </Media>
                                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                        <Media>
                                            <Media left href="#">
                                                <Media object src={require('../../../assets/images/page-img/16.jpg')} alt="Generic placeholder image" />
                                            </Media>
                                            <Media body>
                                                <Media heading>
                                                    Nested media heading
                                                </Media>
                                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                            </Media>
                                        </Media>
                                    </Media>
                                </Media>
                            </CardBody>
                        </Card>

                        <Card className={"iq-card"}>
                            <CardHeader className={"iq-header-title"}>
                                <span className="text-primary float-right" id="collapse2">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                                <CardTitle  className={"card-title"}><h4>Order</h4></CardTitle>
                            </CardHeader>

                            <CardBody className={"iq-card-body"}>
                                <CardText> Change the order of content in media objects by modifying the HTML itself, or by adding some custom flexbox CSS to set the <code>order</code> property (to an integer of your choosing).</CardText>
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
<Media>
<Media left top href="#">
<Media object data-src="holder.js/64x64" alt="Generic placeholder image" />
</Media>
<Media body>
<Media heading>
Top aligned media
</Media>
Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
</Media>
</Media>
<Media className="mt-1">
<Media left middle href="#">
<Media object data-src="holder.js/64x64" alt="Generic placeholder image" />
</Media>
<Media body>
<Media heading>
Middle aligned media
</Media>
Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
</Media>
</Media>
<Media className="mt-1">
<Media left bottom href="#">
<Media object data-src="holder.js/64x64" alt="Generic placeholder image" />
</Media>
<Media body>
<Media heading>
Bottom aligned media
</Media>
Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
</Media>
</Media>             `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                <div>
                                    <Media>
                                        <Media left top href="#">
                                            <Media object src={require('../../../assets/images/page-img/17.jpg')} alt="Generic placeholder image" />
                                        </Media>
                                        <Media body>
                                            <Media heading>
                                                Top aligned media
                                            </Media>
                                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                        </Media>
                                    </Media>
                                    <Media className="mt-1">
                                        <Media left middle href="#">
                                            <Media object src={require('../../../assets/images/page-img/17.jpg')} alt="Generic placeholder image" />
                                        </Media>
                                        <Media body>
                                            <Media heading>
                                                Middle aligned media
                                            </Media>
                                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                        </Media>
                                    </Media>
                                    <Media className="mt-1">
                                        <Media left bottom href="#">
                                            <Media object src={require('../../../assets/images/page-img/18.jpg')} alt="Generic placeholder image" />
                                        </Media>
                                        <Media body>
                                            <Media heading>
                                                Bottom aligned media
                                            </Media>
                                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                        </Media>
                                    </Media>
                                </div>
                            </CardBody>
                        </Card>

                    </Col>
                    <Col sm={12} lg={6}>
                        <Card className={"iq-card"}>
                            <CardHeader className={"iq-header-title"}>
                                <span className="text-primary float-right" id="collapse3">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                                <CardTitle  className={"card-title"}><h4>Media object</h4></CardTitle>
                            </CardHeader>

                            <CardBody className={"iq-card-body"}>
                                <CardText> The images or other media can be aligned top, middle, or bottom. The default is top aligned.</CardText>
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
<Media>
<Media body>
<Media heading>
Top aligned media
</Media>
Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
</Media>
<Media left top href="#">
<Media object data-src="holder.js/64x64" alt="Generic placeholder image" />
</Media>
</Media>
<Media className="mt-1">
<Media body>
<Media heading>
Middle aligned media
</Media>
Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
</Media>
<Media left middle href="#">
<Media object data-src="holder.js/64x64" alt="Generic placeholder image" />
</Media>
</Media>
<Media className="mt-1">
<Media body>
<Media heading>
Bottom aligned media
</Media>
Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
</Media>
<Media left bottom href="#">
<Media object data-src="holder.js/64x64" alt="Generic placeholder image" />
</Media>
</Media>            `}
</code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                <div>
                                    <Media>
                                        <Media body>
                                            <Media heading>
                                                Top aligned media
                                            </Media>
                                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                        </Media>
                                        <Media left top href="#">
                                            <Media object src={require('../../../assets/images/page-img/19.jpg')} alt="Generic placeholder image" />
                                        </Media>
                                    </Media>
                                    <Media className="mt-1">
                                        <Media body>
                                            <Media heading>
                                                Middle aligned media
                                            </Media>
                                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                        </Media>
                                        <Media left middle href="#">
                                            <Media object src={require('../../../assets/images/page-img/18.jpg')} alt="Generic placeholder image" />
                                        </Media>
                                    </Media>
                                    <Media className="mt-1">
                                        <Media body>
                                            <Media heading>
                                                Bottom aligned media
                                            </Media>
                                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                        </Media>
                                        <Media left bottom href="#">
                                            <Media object src={require('../../../assets/images/page-img/20.jpg')} alt="Generic placeholder image" />
                                        </Media>
                                    </Media>
                                </div>
                            </CardBody>
                        </Card>

                        <Card className={"iq-card"}>
                            <CardHeader className={"iq-header-title"}>
                                <span className="text-primary float-right" id="collapse4">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                                <CardTitle  className={"card-title"}><h4>Media list
                                </h4></CardTitle>
                            </CardHeader>

                            <CardBody className={"iq-card-body"}>
                                <CardText> The images or other media can be aligned top, middle, or bottom. The default is top aligned.</CardText>
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
<Media>
<Media body>
<Media heading>
Top aligned media
</Media>
Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
</Media>
<Media left top href="#">
<Media object data-src="holder.js/64x64" alt="Generic placeholder image" />
</Media>
</Media>
<Media className="mt-1">
<Media body>
<Media heading>
Middle aligned media
</Media>
Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
</Media>
<Media left middle href="#">
<Media object data-src="holder.js/64x64" alt="Generic placeholder image" />
</Media>
</Media>
<Media className="mt-1">
<Media body>
<Media heading>
Bottom aligned media
</Media>
Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
</Media>
<Media left bottom href="#">
<Media object data-src="holder.js/64x64" alt="Generic placeholder image" />
</Media>
</Media>            `}
</code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                <div>
                                    <Media>
                                        <Media body>
                                            <Media heading>
                                                Top aligned media
                                            </Media>
                                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                        </Media>
                                        <Media left top href="#">
                                            <Media object src={require('../../../assets/images/page-img/21.jpg')} alt="Generic placeholder image" />
                                        </Media>
                                    </Media>
                                    <Media className="mt-1">
                                        <Media body>
                                            <Media heading>
                                                Middle aligned media
                                            </Media>
                                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                        </Media>
                                        <Media left middle href="#">
                                            <Media object src={require('../../../assets/images/page-img/22.jpg')} alt="Generic placeholder image" />
                                        </Media>
                                    </Media>
                                    <Media className="mt-1">
                                        <Media body>
                                            <Media heading>
                                                Bottom aligned media
                                            </Media>
                                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                        </Media>
                                        <Media left bottom href="#">
                                            <Media object src={require('../../../assets/images/page-img/23.jpg')} alt="Generic placeholder image" />
                                        </Media>
                                    </Media>
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
