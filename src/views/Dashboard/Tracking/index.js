import React from 'react';
import { index } from '../../../config/pluginsInit';
import {
    DropdownStyle1,
    MapBoxStyle1,
    CardStyle1,
    TableStyle1,
    ProgressBarStyle2,
    ApexChart,
    GroupProgressBarStyle1,
    TaskCardStyle1,
    TimelineStyle1
} from "../../../components/sofbox";

import image_user1 from '../../../assets/images/user/1.jpg';
import image_tagBlue from '../../../assets/images/page-img/tag_blue.svg';
import image_tagRed from '../../../assets/images/page-img/tag_red.svg';
import image_man from '../../../assets/images/page-img/man.svg';

import { Row, Col, Card, CardBody, ButtonGroup, Button, CardHeader, CardTitle, Badge, Progress } from "reactstrap";
import { Nav, Tab } from "react-bootstrap";
import { Link } from "react-router-dom";

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            viewAll: [
                {
                    href: '#',
                    icon: 'ri-eye-fill mr-2',
                    text: 'View'
                },
                {
                    href: '#',
                    icon: 'ri-delete-bin-6-fill mr-2',
                    text: 'Delete'
                },
                {
                    href: '#',
                    icon: 'ri-pencil-fill mr-2',
                    text: 'Edit'
                },
                {
                    href: '#',
                    icon: 'ri-printer-fill mr-2',
                    text: 'Print'
                },
                {
                    href: '#',
                    icon: 'ri-file-download-fill mr-2',
                    text: 'Download'
                },
            ],
            modelCard: [
                {
                    image: require('../../../assets/images/page-img/scoter.png'),
                    title: "Scooter",
                    subTitle: "Total 652"
                },
                {
                    image: require('../../../assets/images/page-img/car.png'),
                    title: "Car",
                    subTitle: "Total 129"
                },
                {
                    image: require('../../../assets/images/page-img/truck.png'),
                    title: "Truck",
                    subTitle: "Total 2459"
                },
            ],
            orderList: [
                {
                    mediaClass: "mb-3",
                    titleTag: "h5",
                    imgClass: "avatar-40 rounded-circle",
                    image: image_user1,
                    descriptionClass: "badge badge-primary font-weight-normal",
                    description: 'ON TIME'
                },
                {
                    mediaClass: "mb-3",
                    title: "Flipkart",
                    imgClass: "avatar-30 align-self-start",
                    image: image_tagBlue,
                    description: <small>10 Items</small>
                },
                {
                    mediaClass: "mb-3",
                    title: "Zomato",
                    imgClass: "avatar-30 align-self-start",
                    image: image_tagRed,
                    description: <small>2 Items</small>
                },
                {
                    mediaClass: "mb-3",
                    title: <span className="text-primary">Warehouse</span>,
                    imgClass: "avatar-30",
                    image: image_man,
                },
                {
                    iconClass: 'icon_empty_class_div',
                    icon: "ri-time-line font-size-24",
                    title: <>Delivered in <b className="text-danger">2HR</b></>
                }
            ],
            productDetails: {
                body: [
                    [
                        <div className="media mt-4">
                            <div className="media-body">
                                <h6 className="mb-0">Order 23578</h6>
                                <p className="mb-0">Iphone 64GB by Amazon</p>
                            </div>
                        </div>,
                        <p className="mb-0 pl-3">07:55</p>,
                        <span className="text-success pl-3">Delivared</span>,
                    ],
                    [
                        <div className="media mt-3">
                            <div className="media-body">
                                <h6 className="mb-0">Order 23578</h6>
                                <p className="mb-0 line-height">Pizza hut cheese burst regular by swiggy</p>
                            </div>
                        </div>,
                        <p className="mb-0 pl-3">07:55</p>,
                        <span className="text-danger pl-3">Return</span>,
                    ],
                    [
                        <div className="media mt-3">
                            <div className="media-body">
                                <h6 className="mb-0">Order 23578</h6>
                                <p className="mb-0 line-height">Thunder Ice Creem by swiggy</p>
                            </div>
                        </div>,
                        <p className="mb-0 pl-3">07:55</p>,
                        <span className="text-warning pl-3">Pending</span>,
                    ]
                ]
            },
            activeUserProgress: [
                {
                    title: 'New Customers',
                    colour: 'primary',
                    percentage: '85',
                },
                {
                    title: 'New Customers',
                    colour: 'warning',
                    percentage: '85',
                },
                {
                    title: 'New Customers',
                    colour: 'success',
                    percentage: '85',
                },
                {
                    title: 'New Customers',
                    colour: 'danger',
                    percentage: '85',
                },
            ],
            chart8: {
                chart: {
                    height: 150,
                    type: 'area',
                    animations: {
                        enabled: true,
                        easing: 'linear',
                        dynamicAnimation: {
                            speed: 1000
                        }
                    },
                    toolbar: {
                        show: false
                    },
                    sparkline: {
                        enabled: true
                    },
                    group: 'sparklines',
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'straight',
                    width: 3
                },
                series: [{
                    data: [16, 37, 45, 34, 46, 86, 33, 87, 41, 69]
                }],
                markers: {
                    size: 4
                },
                xaxis: {
                    type: 'datetime',
                    categories: [1486771200000, 1486857600000, 1486944000000, 1487030400000, 1487116800000, 1487203200000, 1487289600000, 1487376000000, 1487462400000, 1487548800000],
                },
                yaxis: {
                    max: 100
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        shadeIntensity: 1,
                        inverseColors: false,
                        opacityFrom: 0.5,
                        opacityTo: 0,
                        stops: [0, 90, 100]
                    },
                },
                legend: {
                    show: false
                },
                colors: ['#00ca00']
            },
            satisfactions: [
                {
                    colour: "success",
                    percentage: "40"
                },
                {
                    colour: "blue",
                    percentage: "20"
                },
                {
                    colour: "primary",
                    percentage: "10"
                },
                {
                    colour: "info",
                    percentage: "40"
                },
                {
                    colour: "warning",
                    percentage: "20"
                },
                {
                    colour: "danger",
                    percentage: "10"
                },
            ],
            satisfactionsTable: {
                body: [
                    [<div className="iq-profile-avatar status-online mt-4" />, <h4>Excellent</h4>, <span className="text-muted">2400</span>, "60%"],
                    [<div className="iq-profile-avatar status-blue mt-4" />, <h4>Very Good</h4>, <span className="text-muted">1200</span>, "30%"],
                    [<div className="iq-profile-avatar status-primary mt-4" />, <h4>Good</h4>, <span className="text-muted">240</span>, "6%"],
                    [<div className="iq-profile-avatar status-info mt-4" />, <h4>Fair</h4>, <span className="text-muted">80</span>, "2%"],
                    [<div className="iq-profile-avatar status-away mt-4" />, <h4>Poor</h4>, <span className="text-muted">40</span>, "1%"],
                    [<div className="iq-profile-avatar status-danger mt-4" />, <h4>Very Poor</h4>, <span className="text-muted">40</span>, "1%"],
                ]
            },
            deliveryTable: {
                header: ["Delivery No.", "Date", "Delivery", "Status", "Location", "Progress"],
                body: [
                    [
                        '#0879985',
                        '26/12/2019',
                        '30/12/2019',
                        <Badge pill color="success"> Moving </Badge>,
                        'Victoria 8007 Australia',
                        <Progress className="iq-progress-bar" color='success' value="90" />
                    ],
                    [
                        '#0879984',
                        '23/12/2019',
                        '27/12/2019',
                        <Badge color="warning" pill className="text-white"> Pending </Badge>,
                        'Athens 2745 Greece',
                        <Progress className="iq-progress-bar" color='warning' value="70" />
                    ],
                    [
                        '#0879983',
                        '18/12/2019',
                        '21/12/2019',
                        <Badge color="danger" pill> Canceled </Badge>,
                        'Victoria 8007 Australia',
                        <Progress className="iq-progress-bar" color='danger' value="48" />
                    ],
                    [
                        '#0879982',
                        '14/12/2019',
                        '20/12/2019',
                        <Badge color="info" pill> Working </Badge>,
                        'Delhi 0014 India',
                        <Progress className="iq-progress-bar" color='info' value="90" />
                    ],
                    [
                        '#0879981',
                        '10/12/2019',
                        '18/12/2019',
                        <Badge pill color="success"> Moving </Badge>,
                        'Alabama 2741 USA',
                        <Progress className="iq-progress-bar" color='success' value="45" />
                    ],
                    [
                        '#0879985',
                        '26/12/2019',
                        '30/12/2019',
                        <Badge pill color="success"> Moving </Badge>,
                        'Victoria 8007 Australia',
                        <Progress className="iq-progress-bar" color='success' value="90" />
                    ],
                    [
                        '#0879984',
                        '23/12/2019',
                        '27/12/2019',
                        <Badge color="warning" pill className="text-white"> Pending </Badge>,
                        'Athens 2745 Greece',
                        <Progress className="iq-progress-bar" color='warning' value="70" />
                    ],
                    [
                        '#0879983',
                        '18/12/2019',
                        '21/12/2019',
                        <Badge color="danger" pill> Canceled </Badge>,
                        'Victoria 8007 Australia',
                        <Progress className="iq-progress-bar" color='danger' value="48" />
                    ],
                    [
                        '#0879982',
                        '14/12/2019',
                        '20/12/2019',
                        <Badge color="info" pill> Working </Badge>,
                        'Delhi 0014 India',
                        <Progress className="iq-progress-bar" color='info' value="90" />
                    ],
                    [
                        '#0879981',
                        '10/12/2019',
                        '18/12/2019',
                        <Badge pill color="success"> Moving </Badge>,
                        'Alabama 2741 USA',
                        <Progress className="iq-progress-bar" color='success' value="45" />
                    ],
                ]
            },
            taskNav: [
                {
                    eventKey: "taskHome",
                    text: 'Home',
                    closable: true,
                    startId: 100,
                    items: [
                        {
                            text: "You should check in some of below."
                        },
                        {
                            text: "Get the address of customer"
                        },
                        {
                            text: "Contact Vendor for parcel"
                        },
                        {
                            text: "Refule delivery truck"
                        },
                        {
                            text: "Pick up for order no. 334"
                        },
                        {
                            text: "Pay taxes for every bill"
                        },
                        {
                            text: "I am designers & I have no life"
                        },
                        {
                            text: "This is a good product. Buy it :) "
                        },
                    ]
                },
                {
                    eventKey: "taskProfile",
                    text: "Profile",
                    closable: true,
                    startId: 150,
                    items: [
                        {
                            text: "You should check in some of below."
                        },
                        {
                            text: "You should check in some of below."
                        },
                    ]
                },
                {
                    eventKey: "taskContact",
                    text: 'Contact',
                    closable: true,
                    startId: 200,
                    items: [
                        {
                            text: "You should check in some of below."
                        },
                        {
                            text: "You should check in some of below."
                        },
                        {
                            text: "You should check in some of below."
                        },
                    ]
                },
            ],
            recentActivities: [
                {
                    title: "Client Meeting",
                    subTitle: "19 November 2019",
                    description: "Bonbon macaroon jelly beans gummi bears jelly lollipop apple",
                },
                {
                    timelineDot: "border-success",
                    title: "Client Meeting",
                    subTitle: "19 November 2019",
                    description: "Bonbon macaroon jelly beans gummi bears jelly lollipop apple",
                },
                {
                    timelineDot: "border-danger",
                    title: "Client Meeting",
                    subTitle: "19 November 2019",
                    description: <>Bonbon macaroon jelly beans <Link to="#">gummi bears</Link>gummi bears jelly lollipop apple</>,
                    mediaGroup: [
                        {
                            image: require('../../../assets/images/user/05.jpg')
                        },
                        {
                            image: require('../../../assets/images/user/06.jpg')
                        },
                        {
                            image: require('../../../assets/images/user/07.jpg')
                        },
                        {
                            image: require('../../../assets/images/user/08.jpg')
                        },
                        {
                            image: require('../../../assets/images/user/09.jpg')
                        },
                        {
                            image: require('../../../assets/images/user/10.jpg')
                        },
                    ],
                },
                {
                    timelineDot: "border-primary",
                    title: "Client Meeting",
                    subTitle: "19 November 2019",
                    description: "Bonbon macaroon jelly beans gummi bears jelly lollipop apple",
                },
                {
                    timelineDot: "border-warning",
                    title: "Client Meeting",
                    subTitle: "19 November 2019",
                    description: "Bonbon macaroon jelly beans gummi bears jelly lollipop apple",
                },
            ]
        }
    }
    componentDidMount() {
        setTimeout(function () {
            index();
        }, 800);
    }

    render() {
        let { viewAll, modelCard, orderList, productDetails, activeUserProgress, chart8, satisfactions, satisfactionsTable, deliveryTable, taskNav, recentActivities } = this.state;

        return (
            <>
                <Row>
                    {
                        modelCard.map((card, index) => (
                            <Col lg="4" key={index}>
                                <Card className="iq-card ">
                                    <CardBody className="iq-card-body">
                                        <Row className="align-items-center">
                                            <Col lg="6" className="text-center">
                                                <img src={card.image} alt="model" className="img-fluid dash-tracking-icon" />
                                            </Col>
                                            <Col lg="6">
                                                <h3 className="mb-0">{card.title}<small className="d-block font-size-16 text-secondary">{card.subTitle}</small></h3>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                        ))
                    }
                </Row>
                <Row>
                    <Col lg="12">
                        <MapBoxStyle1
                            element="map"
                            className="full-map"
                        />
                    </Col>
                </Row>
                <Row className="row-eq-height mt-4 track-row">
                    <Col lg="12">
                        <Card className="iq-card">
                            <CardBody>
                                <Row>
                                    <Col lg="12" className="d-flex justify-content-md-between">
                                        <div>
                                            <ButtonGroup className="ml-2 bg-white">
                                                <Button outline color="primary"  className="px-5 active">All</Button>
                                                <Button outline color="primary" className="px-5">On Time</Button>
                                                <Button outline color="primary" className="px-5">Delayed</Button>
                                            </ButtonGroup>
                                        </div>
                                        <div>
                                            <input type="text" className="form-control" placeholder="Search" />
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg="12" className="mt-4 track">
                                        <div className="iq-card map-profile-card shadow-none">
                                            <div className="iq-card-body">
                                                {
                                                    orderList.map((card, index) => (
                                                        <CardStyle1
                                                            key={index}
                                                            icon={card.icon}
                                                            iconClass={card.iconClass}
                                                            mediaClass={card.mediaClass}
                                                            titleTag={card.titleTag}
                                                            title={index === 0 ? <b>D-NO-1</b> : card.title}
                                                            imgClass={card.imgClass}
                                                            image={card.image}
                                                            descriptionClass={card.descriptionClass}
                                                            description={card.description}
                                                        />
                                                    ))
                                                }
                                            </div>
                                        </div>
                                        <div className="iq-card map-profile-card shadow-none">
                                            <div className="iq-card-body">
                                                <Row>
                                                    <Col xs="5">
                                                        {
                                                            orderList.map((card, index) => (
                                                                <CardStyle1
                                                                    key={index}
                                                                    icon={card.icon}
                                                                    iconClass={card.iconClass}
                                                                    mediaClass={card.mediaClass}
                                                                    titleTag={card.titleTag}
                                                                    title={index === 0 ? <b>D-NO-2</b> : card.title}
                                                                    imgClass={card.imgClass}
                                                                    image={card.image}
                                                                    descriptionClass={card.descriptionClass}
                                                                    description={card.description}
                                                                />
                                                            ))
                                                        }
                                                    </Col>
                                                    <Col xs="7" className="border-left">
                                                        <h5 className="mb-0">Product delivered by John</h5>
                                                        <TableStyle1
                                                            body={productDetails.body}
                                                        />
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                        <div className="iq-card map-profile-card shadow-none">
                                            <div className="iq-card-body">
                                                {
                                                    orderList.map((card, index) => (
                                                        <CardStyle1
                                                            key={index}
                                                            icon={card.icon}
                                                            iconClass={card.iconClass}
                                                            mediaClass={card.mediaClass}
                                                            titleTag={card.titleTag}
                                                            title={index === 0 ? <b>D-NO-3</b> : card.title}
                                                            imgClass={card.imgClass}
                                                            image={card.image}
                                                            descriptionClass={index === 0 ? "badge badge-danger font-weight-normal" : card.descriptionClass}
                                                            description={index === 0 ? "Delayed" : card.description}
                                                        />
                                                    ))
                                                }
                                            </div>
                                        </div>
                                        <div className="iq-card map-profile-card shadow-none">
                                            <div className="iq-card-body">
                                                {
                                                    orderList.map((card, index) => (
                                                        <CardStyle1
                                                            key={index}
                                                            icon={card.icon}
                                                            iconClass={card.iconClass}
                                                            mediaClass={card.mediaClass}
                                                            titleTag={card.titleTag}
                                                            title={index === 0 ? <b>D-NO-4</b> : card.title}
                                                            imgClass={card.imgClass}
                                                            image={card.image}
                                                            descriptionClass={card.descriptionClass}
                                                            description={card.description}
                                                        />
                                                    ))
                                                }
                                            </div>
                                        </div>
                                        <div className="iq-card map-profile-card shadow-none">
                                            <div className="iq-card-body">
                                                {
                                                    orderList.map((card, index) => (
                                                        <CardStyle1
                                                            key={index}
                                                            icon={card.icon}
                                                            iconClass={card.iconClass}
                                                            mediaClass={card.mediaClass}
                                                            titleTag={card.titleTag}
                                                            title={index === 0 ? <b>D-NO-5</b> : card.title}
                                                            imgClass={card.imgClass}
                                                            image={card.image}
                                                            descriptionClass={index === 0 ? "badge badge-danger font-weight-normal" : card.descriptionClass}
                                                            description={index === 0 ? "Delayed" : card.description}
                                                        />
                                                    ))
                                                }
                                            </div>
                                        </div>
                                        <div className="iq-card map-profile-card shadow-none">
                                            <div className="iq-card-body">
                                                {
                                                    orderList.map((card, index) => (
                                                        <CardStyle1
                                                            key={index}
                                                            icon={card.icon}
                                                            iconClass={card.iconClass}
                                                            mediaClass={card.mediaClass}
                                                            titleTag={card.titleTag}
                                                            title={index === 0 ? <b>D-NO-6</b> : card.title}
                                                            imgClass={card.imgClass}
                                                            image={card.image}
                                                            descriptionClass={card.descriptionClass}
                                                            description={card.description}
                                                        />
                                                    ))
                                                }
                                            </div>
                                        </div>
                                        <div className="iq-card map-profile-card shadow-none">
                                            <div className="iq-card-body">
                                                {
                                                    orderList.map((card, index) => (
                                                        <CardStyle1
                                                            key={index}
                                                            icon={card.icon}
                                                            iconClass={card.iconClass}
                                                            mediaClass={card.mediaClass}
                                                            titleTag={card.titleTag}
                                                            title={index === 0 ? <b>D-NO-7</b> : card.title}
                                                            imgClass={card.imgClass}
                                                            image={card.image}
                                                            descriptionClass={card.descriptionClass}
                                                            description={card.description}
                                                        />
                                                    ))
                                                }
                                            </div>
                                        </div>
                                        <div className="iq-card map-profile-card shadow-none">
                                            <div className="iq-card-body">
                                                {
                                                    orderList.map((card, index) => (
                                                        <CardStyle1
                                                            key={index}
                                                            icon={card.icon}
                                                            iconClass={card.iconClass}
                                                            mediaClass={card.mediaClass}
                                                            titleTag={card.titleTag}
                                                            title={index === 0 ? <b>D-NO-8</b> : card.title}
                                                            imgClass={card.imgClass}
                                                            image={card.image}
                                                            descriptionClass={card.descriptionClass}
                                                            description={card.description}
                                                        />
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row className="row row-eq-height mt-4 track-row">
                    <Col lg="8">
                        <Row>
                            <Col lg="6">
                                <Card className="iq-card" data-wow-delay="0.8s">
                                    <CardHeader className="iq-card-header d-flex justify-content-between">
                                        <CardTitle className="iq-header-title">
                                            <h4 className="card-title">Active Users</h4>
                                        </CardTitle>
                                        <div className="iq-card-header-toolbar d-flex align-items-center">
                                            <DropdownStyle1
                                                id="dropdownMenuButton2"
                                                arrowClass="ri-more-2-fill font-size-20"
                                                mainClass="text-dark bg-transparent"
                                                menuClass="dropdown-menu-right shadow-none"
                                                items={viewAll}
                                            />
                                        </div>
                                    </CardHeader>
                                    <CardBody className="iq-card-body">
                                        <Row>
                                            <Col lg="12">
                                                {
                                                    activeUserProgress.map((progress, index) => (
                                                        <div key={index} className={"iq-details " + (index === 0 ? '' : 'mt-4')}>
                                                            <ProgressBarStyle2
                                                                title={progress.title}
                                                                colour={progress.colour}
                                                                percentage={progress.percentage}
                                                            />
                                                        </div>
                                                    ))
                                                }
                                            </Col>
                                        </Row>
                                    </CardBody>
                                    <ApexChart
                                        element="chart-8"
                                        chartOption={chart8}
                                    />
                                </Card>
                            </Col>
                            <Col lg="6">
                                <div className="iq-card ">
                                    <div className="iq-card-header d-flex justify-content-between">
                                        <div className="iq-header-title">
                                            <h4 className="card-title">Customer Satisfactions</h4>
                                        </div>
                                    </div>
                                    <div className="iq-card-body">
                                        <GroupProgressBarStyle1
                                            countTag="h2"
                                            count={(<> 3,897 <span className="text-success font-size-14 ml-3 mr-3"> <i className="ri-arrow-up-fill mr-2" />+3.3% </span><small className="text-secondary font-size-14">Generated by clients</small></>)}
                                            items={satisfactions}
                                        />
                                        <div className="table-responsive mt-4">
                                            <TableStyle1
                                                tableClass="table mb-0 table-borderless"
                                                body={satisfactionsTable.body}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="12">
                                <Card className="iq-card">
                                    <CardHeader className="iq-card-header d-flex justify-content-between">
                                        <CardTitle className="iq-header-title">
                                            <h4 className="card-title">Delivery History</h4>
                                        </CardTitle>
                                        <div className="iq-card-header-toolbar d-flex align-items-center">
                                            <DropdownStyle1
                                                id="dropdownMenuButton3"
                                                arrowClass="ri-more-2-fill font-size-20"
                                                mainClass="text-dark bg-transparent"
                                                menuClass="dropdown-menu-right shadow-none"
                                                items={viewAll}
                                            />
                                        </div>
                                    </CardHeader>
                                    <CardBody className="iq-card-body">
                                        <div className="table-responsive">
                                            <TableStyle1
                                                tableClass="table mb-0 table-borderless"
                                                header={deliveryTable.header}
                                                body={deliveryTable.body}
                                            />
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg="4">
                        <Tab.Container id="left-tabs-example" defaultActiveKey={taskNav.length ? taskNav[0].eventKey : ''}>
                            <Card className="iq-card ">
                                <CardHeader className="iq-card-header d-flex justify-content-between">
                                    <CardTitle className="iq-header-title">
                                        <h4 className="card-title">Tasks</h4>
                                    </CardTitle>
                                    <div className="iq-card-header-toolbar d-flex align-items-center">
                                        <Nav variant="pills" className="flex-row">
                                            {
                                                taskNav.map((task, index) => (
                                                    <Nav.Item key={index}>
                                                        <Nav.Link eventKey={task.eventKey}>{task.text}</Nav.Link>
                                                    </Nav.Item>
                                                ))
                                            }
                                        </Nav>
                                    </div>
                                </CardHeader>
                                <CardBody className="iq-card-body">
                                    <Tab.Content>
                                        {
                                            taskNav.map((task, index) => (
                                                <Tab.Pane key={index} eventKey={task.eventKey}>
                                                    <TaskCardStyle1
                                                        startId={task.startId}
                                                        closable={task.closable}
                                                        items={task.items}
                                                    />
                                                </Tab.Pane>
                                            ))
                                        }
                                    </Tab.Content>
                                </CardBody>
                            </Card>
                        </Tab.Container>
                        <Card className="iq-card">
                            <CardHeader className="iq-card-header d-flex justify-content-between">
                                <CardTitle className="iq-header-title">
                                    <h4 className="card-title">Recent Activities</h4>
                                </CardTitle>
                                <div className="iq-card-header-toolbar d-flex align-items-center">
                                    <DropdownStyle1
                                        title="View All"
                                        id="dropdownMenuButton6"
                                        mainClass="dropdown-bg bg-transparent"
                                        color="primary"
                                        menuClass="dropdown-menu-right shadow-none"
                                        items={viewAll}
                                    />
                                </div>
                            </CardHeader>
                            <CardBody className="iq-card-body">
                                <ul className="iq-timeline">
                                    {
                                        recentActivities.map((activity, index) => (
                                            <TimelineStyle1
                                                key={index}
                                                timelineDot={activity.timelineDot}
                                                title={activity.title}
                                                subTitle={activity.subTitle}
                                                description={activity.description}
                                                mediaGroup={activity.mediaGroup}
                                            />
                                        ))
                                    }
                                </ul>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </>
        );
    }
}

export default Index;
