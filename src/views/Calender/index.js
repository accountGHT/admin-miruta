import React from "react";
import {Card, CardBody, CardHeader, CardTitle, Col, Row} from "reactstrap";
import {index} from "../../config/pluginsInit";
import { CalenderStyle1 } from '../../components/sofbox';
import eventsArray from "../../config/calenderEvent";
import {Link} from 'react-router-dom'
class Index extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            jobClassification:[
                {
                    icon:"ri-check-line bg-danger",
                    text:"Meeting"
                },
                {
                    icon:"ri-check-line bg-success",
                    text:"Business travel"
                },
                {
                    icon:"ri-check-line bg-warning",
                    text:"Personal Work"
                },
                {
                    icon:"ri-check-line bg-info",
                    text:"Team Project"
                },
            ],
            todaySchedule:[
                {
                    icon:"ri-checkbox-blank-circle-fill text-primary",
                    text: [
                        "Web Design",
                        "09:00 to 12:00"
                    ],
                },
                {
                    icon: "ri-checkbox-blank-circle-fill text-success",
                    text: [
                        "Participate in Design",
                        "09:00 to 12:00"
                    ],
                }
            ],
        }
    }

    componentDidMount() {
        setTimeout(function () {
            index();
        },800);
    }

    render() {
        let calenderEvents = eventsArray.calenderEvents;
        let { jobClassification, todaySchedule } = this.state;
        return (
            <Row className="row-eq-height">
                <Col md="3">
                    <Card className="iq-card">
                        <CardHeader className="iq-card-header d-flex justify-content-between">
                            <CardTitle className="iq-header-title">
                                <h4 className="card-title ">Classification</h4>
                            </CardTitle>
                            <div className="iq-card-header-toolbar d-flex align-items-center">
                                <Link to="!#"><i className="fa fa-plus  mr-0" aria-hidden="true" /></Link>
                            </div>
                        </CardHeader>
                        <CardBody className="iq-card-body">
                            <ul className="m-0 p-0 job-classification">
                                {
                                    jobClassification.map((item,index)=>(
                                        <li key={index} className=""><i className={item.icon} />{item.text}</li>
                                    ))
                                }
                            </ul>
                        </CardBody>
                    </Card>
                    <Card className="iq-card">
                        <CardHeader className="iq-card-header d-flex justify-content-between">
                            <CardTitle className="iq-header-title">
                                <h4 className="card-title">Today's Schedule</h4>
                            </CardTitle>
                        </CardHeader>
                        <CardBody className="iq-card-body">
                            <ul className="m-0 p-0 today-schedule">
                                {
                                    todaySchedule.map((item,index)=>(
                                        <li key={index} className="d-flex">
                                            <div className="schedule-icon">
                                                <i className={item.icon} />
                                            </div>
                                            <div className="schedule-text">
                                                {
                                                    item.text.map((element,index) => (
                                                        <span key={index}>{ element }</span>
                                                    ))
                                                }
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                        </CardBody>
                    </Card>
                </Col>
                <Col md="9">
                    <Card className="iq-card">
                        <CardHeader className="iq-card-header d-flex justify-content-between">
                            <CardTitle className="iq-header-title">
                                <h4 className="card-title">Book Appointment</h4>
                            </CardTitle>
                            <div className="iq-card-header-toolbar d-flex align-items-center">
                                <Link to="!#" className="btn btn-primary"><i className="ri-add-line mr-2" />Book Appointment</Link>
                            </div>
                        </CardHeader>
                        <CardBody className="iq-card-body">
                            <CalenderStyle1
                                events={calenderEvents}
                            />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        )
    }
}

export default Index;