import React, {useEffect, useState} from "react";

// Import for the View assets...
import {index} from "../../../config/pluginsInit";
import { TimeLineCard } from "../../../components/sofbox";
import {Card, CardBody, CardHeader, Col, Row} from "reactstrap";

const Index = props => {

    const [ timeLineData ] = useState([
        {
            title: "Client Meeting",
            description: "Bonbon macaroon jelly beans gummi bears jelly lollipop apple",
            color: "primary",
            date: "19 November 2019"
        },
        {
            title: "Client Meeting",
            description: "Bonbon macaroon jelly beans gummi bears jelly lollipop apple",
            color: "success",
            date: "19 November 2019"
        },
        {
            title: "Client Meeting",
            description: "Bonbon macaroon jelly beans gummi bearsgummi bears jelly lollipop apple",
            color: "danger",
            date: "19 November 2019"
        },
        {
            title: "Client Meeting",
            description: "Bonbon macaroon jelly beans gummi bears jelly lollipop apple",
            color: "primary",
            date: "19 November 2019"
        },
        {
            title: "Client Meeting",
            description: "Bonbon macaroon jelly beans gummi bears jelly lollipop apple",
            color: "info",
            date: "19 November 2019"
        },
        {
            title: "Client Meeting",
            description: "Bonbon macaroon jelly beans gummi bears jelly lollipop apple",
            color: "info",
            date: "19 November 2019"
        },
        {
            title: "Client Meeting",
            description: "Bonbon macaroon jelly beans gummi bears jelly lollipop apple",
            color: "warning",
            date: "19 November 2019"
        },
        {
            title: "Client Meeting",
            description: "Bonbon macaroon jelly beans gummi bears jelly lollipop apple",
            color: "info",
            date: "19 November 2019"
        }
    ]);

    useEffect(() => {
        index();
    });


    return (
        <>
            <Row className={"justify-content-center"}>
                <Col md={6}>
                    <Card className={"iq-card"}>
                        <CardHeader className={"iq-card-header d-flex justify-content-between"}>
                            <h4 className={"card-title"}>Product Orders</h4>
                        </CardHeader>
                        <CardBody className={"iq-card-body"}>
                            <ul className={"iq-timeline"}>
                                { timeLineData.map((item, index) => (
                                    <li key={index}>
                                        <TimeLineCard timeData={item} color={item.color}  />
                                    </li>
                                )) }
                            </ul>
                        </CardBody>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card className={"iq-card"}>
                        <CardHeader className={"iq-card-header d-flex justify-content-between"}>
                            <h4 className={"card-title"}>Product Orders</h4>
                        </CardHeader>
                        <CardBody className={"iq-card-body"}>
                            <ul className={"iq-timeline"}>
                                { timeLineData.map((item, index) => (
                                    <li key={index}>
                                        <TimeLineCard timeData={item} color={item.color}  />
                                    </li>
                                )) }
                            </ul>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </>
    )
};

export default Index;
