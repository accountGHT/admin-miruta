import React from 'react';
import {Row, Col, Card, CardHeader, CardTitle, CardBody,CardText, UncontrolledCollapse,Media } from 'reactstrap';
import {Image} from 'react-bootstrap';
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
                                <CardTitle  className={"card-title"}><h4>Responsive images
                                `</h4></CardTitle>
                            </CardHeader>

                            <CardBody className={"iq-card-body"}>
                                <CardText>Images in Bootstrap are made responsive with <code>.img-fluid</code>. <code>max-width: 100%;</code> and <code>height: auto;</code> are applied to the image so that it scales with the parent element..</CardText>
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
 <Image src="holder.js/171x180"  className="img-fluid" />
                                                `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                    <Image src={require('../../../assets/images/small/img-1.jpg')} className="img-fluid"  />
                            </CardBody>
                        </Card>

                        <Card className={"iq-card"}>
                            <CardHeader className={"iq-header-title"}>
                                <span className="text-primary float-right" id="collapse2">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                                <CardTitle  className={"card-title"}><h4>Equal-width multi-row</h4></CardTitle>
                            </CardHeader>

                            <CardBody className={"iq-card-body"}>
                                <CardText>Create equal-width columns that span multiple rows by inserting a <code>.w-100</code> where you want the columns to break to a new line. Make the breaks responsive by mixing the <code>.w-100</code> with some <a href="/docs/4.3/utilities/display/">responsive display utilities</a>.</CardText>
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
 <Image src="holder.js/171x180"  className="img-fluid" />
                                                `}
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
                                        <Media object src={require('../../../assets/images/page-img/16.jpg')}  alt="Generic placeholder image" />
                                    </Media>
                                    <Media body>
                                        <Media heading>
                                            Media heading
                                        </Media>
                                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                        <Media>
                                            <Media left href="#">
                                                <Media object src={require('../../../assets/images/page-img/17.jpg')} alt="Generic placeholder image" />
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
                                <span className="text-primary float-right" id="collapse3">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                                <CardTitle  className={"card-title"}><h4>Order</h4></CardTitle>
                            </CardHeader>

                            <CardBody className={"iq-card-body"}>
                                <CardText> Change the order of content in media objects by modifying the HTML itself, or by adding some custom flexbox CSS to set the <code>order</code> property (to an integer of your choosing).</CardText>
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
 <div>
<Media>

<Media body>
<Media heading>
Top aligned media
</Media>
Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
</Media>
<Media left top href="#">
<Media object src={require('../../../assets/images/page-img/17.jpg')} alt="Generic placeholder image" />
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
<Media object src={require('../../../assets/images/page-img/19.jpg')} alt="Generic placeholder image" />
</Media>
</Media>
</div>          `}
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
                                            <Media object src={require('../../../assets/images/page-img/17.jpg')} alt="Generic placeholder image" />
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
                                            <Media object src={require('../../../assets/images/page-img/19.jpg')} alt="Generic placeholder image" />
                                        </Media>
                                    </Media>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col sm={12} lg={6}>
                        <Card className={"iq-card"}>
                            <CardHeader className={"iq-header-title"}>
                                <span className="text-primary float-right" id="collapse4">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                                <CardTitle  className={"card-title"}><h4>Image thumbnails</h4></CardTitle>
                            </CardHeader>

                            <CardBody className={"iq-card-body"}>
                                <CardText>In addition to our <a href="/docs/4.3/utilities/borders/">border-radius utilities</a>, you can use <code>.img-thumbnail</code> to give an image a rounded 1px border appearance.</CardText>
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
<Image src={require('../../../assets/images/page-img/10.jpg')} className="img-thumbnail ml-3"
alt="Responsive image" thumbnail={true} />
<Image src={require('../../../assets/images/page-img/11.jpg')} className="ml-3"
alt="Responsive image"  rounded={true}/>
<Image src={require('../../../assets/images/page-img/12.jpg')}
alt="Responsive image"  roundedCircle={true} />
         `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                        <Image src={require('../../../assets/images/page-img/10.jpg')} className="img-thumbnail ml-3"
                                             alt="Responsive image" thumbnail={true} />
                                        <Image src={require('../../../assets/images/page-img/11.jpg')} className="ml-3"
                                             alt="Responsive image"  rounded={true}/>
                                        <Image src={require('../../../assets/images/page-img/12.jpg')}
                                             alt="Responsive image"  roundedCircle={true} />
                            </CardBody>
                        </Card>
                        <Card className={"iq-card"}>
                            <CardHeader className={"iq-header-title"}>
                                <span className="text-primary float-right" id="collapse5">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                                <CardTitle  className={"card-title"}><h4>Image</h4></CardTitle>
                            </CardHeader>

                            <CardBody className={"iq-card-body"}>
                                <CardText>In addition to our <a href="/docs/4.3/utilities/borders/">border-radius utilities</a>, you can use <code>.img-thumbnail</code> to give an image a rounded 1px border appearance.</CardText>
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
<Image src={require('../../../assets/images/page-img/13.jpg')}  className="" alt="Responsive image"  />
<Image src={require('../../../assets/images/page-img/14.jpg')}  className="float-right" alt="Responsive image"  />

         `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                    <Image src={require('../../../assets/images/page-img/13.jpg')}  className="" alt="Responsive image"  />
                                    <Image src={require('../../../assets/images/page-img/14.jpg')}  className="float-right" alt="Responsive image"  />
                            </CardBody>
                        </Card>
                        <Card className={"iq-card"}>
                            <CardHeader className={"iq-header-title"}>
                                <span className="text-primary float-right" id="collapse6">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                                <CardTitle  className={"card-title"}><h4>Media object</h4></CardTitle>
                            </CardHeader>

                            <CardBody className={"iq-card-body"}>
                                <CardText>The images or other media can be aligned top, middle, or bottom. The default is top aligned..</CardText>
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
<Media>
<Media left top href="#">
<Media object src={require('../../../assets/images/page-img/21.jpg')} alt="Generic placeholder image" />
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
<Media object src={require('../../../assets/images/page-img/22.jpg')} alt="Generic placeholder image" />
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
<Media object src={require('../../../assets/images/page-img/23.jpg')} alt="Generic placeholder image" />
</Media>
<Media body>
<Media heading>
Bottom aligned media
</Media>
Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
</Media>
</Media>
          `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                <div>
                                    <Media>

                                        <Media left top href="#">
                                            <Media object src={require('../../../assets/images/page-img/21.jpg')} alt="Generic placeholder image" />
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
                                            <Media object src={require('../../../assets/images/page-img/22.jpg')} alt="Generic placeholder image" />
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
                                            <Media object src={require('../../../assets/images/page-img/23.jpg')} alt="Generic placeholder image" />
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
                        <Card className={"iq-card"}>
                            <CardHeader className={"iq-header-title"}>
                                <span className="text-primary float-right" id="collapse7">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                                <CardTitle  className={"card-title"}><h4>Media object</h4></CardTitle>
                            </CardHeader>

                            <CardBody className={"iq-card-body"}>
                                <CardText>The images or other media can be aligned top, middle, or bottom. The default is top aligned..</CardText>
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
 <Media>
<Media left top href="#">
<Media object src={require('../../../assets/images/page-img/21.jpg')} alt="Generic placeholder image" />
</Media>
<Media body>
<Media heading>

List-based media object
</Media>
Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
</Media>
</Media>
<Media className="mt-1">
<Media left middle href="#">
<Media object src={require('../../../assets/images/page-img/22.jpg')} alt="Generic placeholder image" />
</Media>
<Media body>
<Media heading>

List-based media object
</Media>
Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
</Media>
</Media>
<Media className="mt-1">
<Media left bottom href="#">
<Media object src={require('../../../assets/images/page-img/23.jpg')} alt="Generic placeholder image" />
</Media>
<Media body>
<Media heading>

List-based media object
</Media>
Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
</Media>
</Media>
          `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                <div>
                                    <Media>

                                        <Media left top href="#">
                                            <Media object src={require('../../../assets/images/page-img/21.jpg')} alt="Generic placeholder image" />
                                        </Media>
                                        <Media body>
                                            <Media heading>

                                                List-based media object
                                            </Media>
                                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                        </Media>
                                    </Media>
                                    <Media className="mt-1">
                                        <Media left middle href="#">
                                            <Media object src={require('../../../assets/images/page-img/22.jpg')} alt="Generic placeholder image" />
                                        </Media>
                                        <Media body>
                                            <Media heading>

                                                List-based media object
                                            </Media>
                                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                        </Media>
                                    </Media>
                                    <Media className="mt-1">
                                        <Media left bottom href="#">
                                            <Media object src={require('../../../assets/images/page-img/23.jpg')} alt="Generic placeholder image" />
                                        </Media>
                                        <Media body>
                                            <Media heading>

                                                List-based media object
                                            </Media>
                                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
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
