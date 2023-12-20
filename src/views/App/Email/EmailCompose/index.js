import React, {useEffect} from 'react';

// Import for the View assets...
import {index} from "../../../../config/pluginsInit";
import { ComposeEmailForm } from '../../../../components/sofbox';

// Import for the Reactstrap and plugins components...
import { Card, CardBody, Col, Form, Row} from "reactstrap";

const Index = () => {

    useEffect(() => {
        index();
    });
    return (
        <Row>
            <Col md={12}>
                <Card className="iq-card iq-border-radius-20">
                    <CardBody className={"iq-card-body"}>
                        <Row>
                            <Col md={12} className={"mb-3"}>
                                <h5 className={"text-primary card-title"}>
                                    <i className={"ri-pencil-fill"} /> &nbsp;
                                    Compose Message
                                </h5>
                            </Col>
                        </Row>
                        <Form className={"email-form"}>
                            <ComposeEmailForm />
                        </Form>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    );
};

export default Index;
