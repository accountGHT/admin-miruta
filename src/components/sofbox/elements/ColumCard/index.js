import React from 'react';
import {Card, CardImg, CardBody, CardTitle, CardText, CardFooter, CardColumns} from 'reactstrap';
/*import { Link } from "react-router-dom";*/
const index = (props) => {
    return (
        <>
            <CardColumns>
                <Card className="iq-mb-3">
                    <CardImg variant="top" src={require("../../../../assets/images/page-img/07.jpg")}/>
                    <CardBody>
                        <CardTitle>Card title that wraps to a new line</CardTitle>
                        <CardText>
                            This is a longer card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </CardText>
                    </CardBody>
                </Card>
                <Card className="iq-mb-3">
                    <blockquote className="blockquote mb-0 card-body">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                            erat a ante.
                        </p>
                        <footer className="blockquote-footer">
                            <small className="text-muted">
                                Someone famous in <cite title="Source Title">Source Title</cite>
                            </small>
                        </footer>
                    </blockquote>
                </Card>

                <Card className="iq-mb-3">
                    <CardImg variant="top" src={require("../../../../assets/images/page-img/07.jpg")}/>
                    <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardText>
                            This card has supporting text below as a natural lead-in to additional
                            content.{' '}
                        </CardText>
                    </CardBody>
                    <CardFooter>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </CardFooter>
                </Card>
                <Card color="primary" text="white" className="text-center p-3">
                    <blockquote className="blockquote mb-0 card-body">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                            erat a ante.
                        </p>
                        <footer className="blockquote-footer">
                            <small className="text-muted">
                                Someone famous in <cite title="Source Title">Source Title</cite>
                            </small>
                        </footer>
                    </blockquote>
                </Card>
                <Card className="text-center iq-mb-3">
                    <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardText>
                            This card has supporting text below as a natural lead-in to additional
                            content.{' '}
                        </CardText>
                        <CardText>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </CardText>
                    </CardBody>
                </Card>

                <Card>
                    <CardImg src={require("../../../../assets/images/page-img/07.jpg")}/>
                </Card>
                <Card className="text-right iq-mb-3">
                    <blockquote className="blockquote mb-0 card-body">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                            erat a ante.
                        </p>
                        <footer className="blockquote-footer">
                            <small className="text-muted">
                                Someone famous in <cite title="Source Title">Source Title</cite>
                            </small>
                        </footer>
                    </blockquote>
                </Card>

                <Card className="iq-mb-3">
                    <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardText>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This card has even longer content than the first to
                            show that equal height action.
                        </CardText>
                        <CardText>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </CardText>
                    </CardBody>
                </Card>
            </CardColumns>
        </>
    );
};

export default index;
