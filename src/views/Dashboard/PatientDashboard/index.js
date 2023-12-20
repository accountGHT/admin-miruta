import React from 'react';
import {index} from '../../../config/pluginsInit';
import { ApexChart, CalenderStyle1, CardStyle1, DropdownStyle1, ListStyle1, ListStyle2, ProgressBarStyle1 } from "../../../components/sofbox";
import Row from "reactstrap/lib/Row";
import Col from "reactstrap/lib/Col";
import Card from "reactstrap/lib/Card";
import CardBody from "reactstrap/lib/CardBody";
import {Link} from "react-router-dom";
import CardHeader from "reactstrap/lib/CardHeader";
import CardTitle from "reactstrap/lib/CardTitle";
import eventsArray  from "../../../config/calenderEvent";

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            viewAll:[
                {
                    href:'#',
                    icon:'ri-eye-fill mr-2',
                    text:'View'
                },
                {
                    href:'#',
                    icon:'ri-delete-bin-6-fill mr-2',
                    text:'Delete'
                },
                {
                    href:'#',
                    icon:'ri-pencil-fill mr-2',
                    text:'Edit'
                },
                {
                    href:'#',
                    icon:'ri-printer-fill mr-2',
                    text:'Print'
                },
                {
                    href:'#',
                    icon:'ri-file-download-fill mr-2',
                    text:'Download'
                },
            ],
            userCard:[
                {
                    title:'Blood',
                    data:'AB+',
                    dataClass:'text-success'
                },
                {
                    title:'Height',
                    data:'161cm',
                    dataClass:'text-success'
                },
                {
                    title:'Weight',
                    data:'64kg',
                    dataClass:'text-success'
                },
            ],
            notificationList:[
                {
                    image:require('../../../assets/images/user/01.jpg'),
                    imgClass:'mr-3 rounded-circle',
                    title:<>Dr. Jay <small className="text-muted font-size-12">Yesterday</small></>,
                    bodyIcon:'ri-close-line float-right',
                    description:'Lorem Ipsum is simply dummy text.'
                },
                {
                    image:require('../../../assets/images/user/02.jpg'),
                    imgClass:'mr-3 rounded-circle',
                    title:<>Dr. Lilly <small className="text-muted font-size-12">Yesterday</small></>,
                    bodyIcon:'ri-close-line float-right',
                    description:'Lorem Ipsum is simply dummy text.'
                },
                {
                    image:require('../../../assets/images/user/03.jpg'),
                    imgClass:'mr-3 rounded-circle',
                    title:<>Dr. Steve <small className="text-muted font-size-12">Yesterday</small></>,
                    bodyIcon:'ri-close-line float-right',
                    description:'Lorem Ipsum is simply dummy text.'
                },
                {
                    image:require('../../../assets/images/user/04.jpg'),
                    imgClass:'mr-3 rounded-circle',
                    title:<>Dr. Mia <small className="text-muted font-size-12">Yesterday</small></>,
                    bodyIcon:'ri-close-line float-right',
                    description:'Lorem Ipsum is simply dummy text.'
                },
            ],
            pricingCard:[
                "Lorem ipsum dolor sit amet",
                "Consectetur adipiscing elit",
                "Integer molestie lorem at massa",
                "Facilisis in pretium nisl aliquet",
                "Nulla volutpat aliquam velit",
            ],
            summary:[
                {
                    upDown:<span className="text-dark float-right"><i className="ri-arrow-up-fill mr-1" />+30%</span>,
                    title:'Blood pressure',
                    count:<>75 <img className="float-right summary-image-top mt-1" src={require('../../../assets/images/page-img/04.png')} alt="summary"/></>,
                    progressClass:'primary',
                    percentage:'90'
                },
                {
                    upDown:<span className="text-dark float-right"><i className="ri-arrow-up-fill mr-1" />+30%</span>,
                    title:'Temperature',
                    count:<>28.6 <img className="float-right summary-image-top mt-1" src={require('../../../assets/images/page-img/06.png')} alt="summary"/></>,
                    progressClass:'success',
                    percentage:'90'
                },
                {
                    upDown:<span className="text-dark float-right"><i className="ri-arrow-down-fill mr-1" />+30%</span>,
                    title:'Heart Rate',
                    count:<>60 <img className="float-right summary-image-top mt-1" src={require('../../../assets/images/page-img/05.png')} alt="summary"/></>,
                    progressClass:'danger',
                    percentage:'90'
                },
            ],
            chart20:{
                chart: {
                    height: 387,
                    type: 'line',
                    stacked: false,
                    toolbar: {
                        show: false
                    },
                    sparkline: {
                        enabled: true
                    },
                    group: 'sparklines',
                },
                stroke: {
                    width: [ 2, 3],
                    curve: 'smooth'
                },
                plotOptions: {
                    bar: {
                        columnWidth: '20%'
                    }
                },
                colors: ['#00ca00', '#0084ff' ],
                series: [ {
                    name: 'Vine',
                    type: 'area',
                    data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
                }, {
                    name: 'Dribbble',
                    type: 'line',
                    data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
                }],
                fill: {
                    opacity: [0.25,1],
                    gradient: {
                        inverseColors: false,
                        shade: 'light',
                        type: "vertical",
                        opacityFrom: 0.85,
                        opacityTo: 0.55,
                        stops: [0, 100, 100, 100]
                    }
                },
                labels: ['01/01/2003', '02/01/2003','03/01/2003','04/01/2003','05/01/2003','06/01/2003','07/01/2003','08/01/2003','09/01/2003','10/01/2003','11/01/2003'],

                xaxis: {
                    type:'datetime',
                    labels:{
                        show:false
                    }
                },
                yaxis: {
                    min: 0,
                    labels:{
                        show:false
                    }
                },
                tooltip: {
                    shared: true,
                    intersect: false,
                    y: {
                        formatter: function (y) {
                            if(typeof y !== "undefined") {
                                return  y.toFixed(0) + " views";
                            }
                            return y;

                        }
                    }
                },
                legend: {
                    show: false
                }
            },
        };
    }

    componentDidMount() {
        setTimeout(function () {
            index();
        },800);
    }

    render() {
        let { viewAll, userCard, notificationList, pricingCard, summary, chart20} = this.state;
        let patientCalender = eventsArray.patientCalender;
        return (
            <>
                <Row className="row-eq-height">
                    <Col lg="3">
                        <Card className="iq-card iq-profile-card text-center">
                            <CardBody className="iq-card-body">
                                <div className="iq-team text-center p-0">
                                    <img src={require('../../../assets/images/user/1.jpg')} className="img-fluid mb-3 avatar-120 rounded-circle" alt="" />
                                    <h4 className="mb-0">Nik Jordan</h4>
                                    <Link to="#" className="d-inline-block w-100">nik@sofboxadmin.com</Link>
                                    <p className="mt-1">1234 North Avenue Luke Lane, South Bend, IN 360001</p>
                                    <hr />
                                    <ListStyle1
                                        data={userCard}
                                    />
                                </div>
                            </CardBody>
                        </Card>
                        <Card className="iq-card " data-wow-delay="0.6s">
                            <CardHeader className="iq-card-header d-flex justify-content-between">
                                <CardTitle className="iq-header-title">
                                    <h4 className="card-title">Notifications</h4>
                                </CardTitle>
                                <div className="iq-card-header-toolbar d-flex align-items-center">
                                    <Link to="#">See all</Link>
                                </div>
                            </CardHeader>
                            <CardBody className="iq-card-body">
                                {
                                    notificationList.map((card,index) => (
                                        <div key={index}>
                                            <CardStyle1
                                                image={card.image}
                                                imgClass={card.imgClass}
                                                titleTag="h5"
                                                title={card.title}
                                                bodyIcon={card.bodyIcon}
                                                description={card.description}
                                            />
                                            { index !== notificationList.length-1  ? (<hr />) : '' }
                                        </div>
                                    ))
                                }
                            </CardBody>
                        </Card>
                        <Card>
                            <CardBody className="iq-card-body border-0 border text-center">
                                <span className="font-size-20 font-weight-bold text-uppercase">Pro</span>
                                <h2 className="mb-4 display-3 font-weight-bolder">
                                    <small className="font-size-16 align-text-top">$ </small>19
                                    <small className="font-size-14 text-muted">USD / month</small>
                                </h2>
                                <ListStyle2
                                    ulClass="list-unstyled line-height-4 mb-0"
                                    list={pricingCard}
                                />
                                <Link to="#" className="btn btn-primary mt-5">Start Starter</Link>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg="9">
                        <Row>
                            <Col md="12">
                                <Card className="iq-card " data-wow-delay="0.6s">
                                    <CardHeader className="iq-card-header d-flex justify-content-between">
                                        <CardTitle className="iq-header-title">
                                            <h4 className="card-title">Summary</h4>
                                        </CardTitle>
                                        <div className="iq-card-header-toolbar d-flex align-items-center">
                                            <DropdownStyle1
                                                title="View All"
                                                id="dropdownMenuButton1"
                                                mainClass="dropdown-bg bg-transparent"
                                                color="primary"
                                                menuClass="dropdown-menu-right shadow-none"
                                                items={viewAll}
                                            />
                                        </div>
                                    </CardHeader>
                                    <CardBody className="iq-card-body">
                                        <Row>
                                            {
                                                summary.map((card, index) => (
                                                    <Col md="4" key={index}>
                                                        <Card className="iq-card shadow-none mb-0">
                                                            <CardBody className="iq-card-body p-1">
                                                                <ProgressBarStyle1
                                                                    upDown={card.upDown}
                                                                    title={card.title}
                                                                    count={card.count}
                                                                    progressClass={card.progressClass}
                                                                    percentage={card.percentage}
                                                                />
                                                            </CardBody>
                                                        </Card>
                                                    </Col>
                                                ))
                                            }
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg="8">
                                <Card className="iq-card overflow-hidden " data-wow-delay="0.6s">
                                    <CardHeader className="iq-card-header d-flex justify-content-between">
                                        <CardTitle className="iq-header-title">
                                            <h4 className="card-title">Statistics</h4>
                                        </CardTitle>
                                        <div className="iq-card-header-toolbar d-flex align-items-center">
                                            <DropdownStyle1
                                                title="26 Aug 2019"
                                                id="dropdownMenuButton1"
                                                mainClass="dropdown-bg bg-transparent"
                                                color="primary"
                                                menuClass="dropdown-menu-right shadow-none"
                                                items={viewAll}
                                            />
                                        </div>
                                    </CardHeader>
                                    <CardBody className="iq-card-body p-0">
                                        <ApexChart
                                            element="chart-20"
                                            chartOption={ chart20 }
                                        />
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg="4">
                                <Card className="iq-card " data-wow-delay="0.6s">
                                    <CardHeader className="iq-card-header d-flex justify-content-between">
                                        <CardTitle className="iq-header-title">
                                            <h4 className="card-title">Diet Plan</h4>
                                        </CardTitle>
                                        <div className="iq-card-header-toolbar d-flex align-items-center">
                                            <Link to="#" >See all</Link>
                                        </div>
                                    </CardHeader>
                                    <CardBody className="iq-card-body">
                                        <div className="owl-carousel"
                                             data-autoplay="true" data-loop="true" data-nav="false" data-dots="true" data-margin="30"
                                             data-items="1" data-items-laptop="1" data-items-tab="1" data-items-mobile="1" data-items-mobile-sm="1">
                                            <div className="item">
                                                <div className="">
                                                    <Link className="mb-3 d-block font-size-16" to="#">
                                                        <i className="ri-pencil-ruler-2-line mr-1" />Breakfast
                                                    </Link>
                                                    <h5 className="mb-2">
                                                        Meal plan is for a person aged 19-50 years.
                                                    </h5>
                                                    <p>
                                                        Wholegrain toast with polyunsaturated margarine
                                                        2 slices toast.
                                                        2 teaspoon margarine.
                                                        20g cheese2 teaspoon margarine.
                                                        1 cup mixed salad vegetables.Unsalted nuts 30g 1 meat.
                                                    </p>
                                                    <button type="button" className="btn btn-primary mt-3">Read More </button>
                                                </div>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="12">
                                <Card className="iq-card " data-wow-delay="0.6s">
                                    <CardHeader className="iq-card-header d-flex justify-content-between">
                                        <CardTitle className="iq-header-title">
                                            <h4 className="card-title">Appointments</h4>
                                        </CardTitle>
                                        <div className="iq-card-header-toolbar d-flex align-items-center">
                                            <Link to="#" className="dropdown-bg"><i className="ri-add-line mr-2" />Book Appointment</Link>
                                        </div>
                                    </CardHeader>
                                    <CardBody className="iq-card-body">
                                        <CalenderStyle1
                                            events={patientCalender}
                                        />
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </>
        );
    }
}

export default Index;
