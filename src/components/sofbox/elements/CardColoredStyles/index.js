import React from 'react';
import { Card, CardBody,CardTitle ,CardText } from 'reactstrap';

const index = (props) => {
    return (
        <>
        <div  className="col-lg-4">
            <Card className={"iq-mb-3"+(props.cardClass ? props.cardClass :'')} color={props.bg} >
                <CardBody>
                    <CardTitle className={props.titleClass}>{props.title}</CardTitle>
                        <blockquote className="blockquote mb-0">
                            <CardText className="font-size-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</CardText>
                            <footer className="blockquote-footer text-white font-size-12">Someone famous in <cite title="Source Title" className="text-white" >Source Title</cite></footer>
                        </blockquote>
                </CardBody>
            </Card>
        </div>

        </>
    );
};

export default index;
