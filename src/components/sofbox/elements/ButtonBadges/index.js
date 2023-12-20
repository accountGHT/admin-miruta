import React from 'react';
import { Card, CardBody,CardTitle ,CardText } from 'reactstrap';

const index = (props) => {
    return (
        <>
            <Card>
                <CardHeader className="d-flex justify-content-between">{props.headerTitle}</CardHeader>
                <CardBody>
                        <CardText>{props.text}</CardText>
                            <Button color={item.color} className="mb-1">
                                Notifications <Badge className="ml-2" color ="light">{props.value}</Badge>
                            </Button> 
                </CardBody>
            </Card>

        </>
    );
};

export default index;
