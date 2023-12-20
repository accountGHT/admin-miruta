import React from 'react';
import {
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardText,
    Button,
    CardHeader,
    CardLink,
    ListGroup,
    ListGroupItem,
    CardFooter
} from 'reactstrap';
/*import { Link } from "react-router-dom";
import { isTemplateElement } from '@babel/types';*/

const index = (props) => {
    return (
        <>
            <div className={props.colClass}>

                <Card className={"iq-mb-3" + (props.cardClass ? props.cardClass : '')} color={props.bg} outline
                      /*color={props.border}*/>
                    {
                        props.cardHeader ? (
                                <CardHeader>{props.cardHeader}</CardHeader>
                            ) :
                            (
                                <CardImg src={props.img} className={props.imgClass} />
                            )

                    }
                    <CardBody className={props.bodyClasss ? props.bodyClasss : ''}>
                        {
                            props.title ? (
                                <CardTitle tag="h4" className={props.titleClass}>{props.title}</CardTitle>
                            ) : ''
                        }

                        {
                            props.quote ? (
                                <blockquote className="blockquote">
                                    <p className="mb-0">
                                        {' '}
                                        {props.quote}{' '}
                                    </p>
                                    <footer className="blockquote-footer">
                                        Someone famous in <cite title="Source Title">Source Title</cite>
                                    </footer>
                                </blockquote>
                            ) : ''
                        }
                        {
                            props.text ? (
                                <CardText className={props.pclass}>{props.text}</CardText>
                            ) : ''
                        }

                        {
                            props.btnName ? (
                                <Button color="primary">{props.btnName}</Button>
                            ) : ''
                        }
                        {props.cardlink && props.cardlink1 ? (
                            <CardLink>
                                {props.cardlink} {' '}
                                {props.cardlink1}
                            </CardLink>
                        ) : ''
                        }
                        {
                            props.list1 || props.list2 ? (
                                <ListGroup flush>
                                    <ListGroupItem>{props.list1}</ListGroupItem>
                                    <ListGroupItem>{props.list2}</ListGroupItem>
                                </ListGroup>
                            ) : ''
                        }
                    </CardBody>
                    {
                        props.footer ? (
                            <CardFooter className="text-muted">{props.footer}</CardFooter>
                        ) : ''
                    }

                </Card>
            </div>

        </>
    );
};

export default index;
