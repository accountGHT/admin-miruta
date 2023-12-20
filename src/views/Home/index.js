import React, { useEffect, useState } from 'react';
import { ApexChart, Lottie, StatusBadge, TableStyle1 } from "../../components/sofbox";
import data1Json from "../../assets/images/small/data";
import { Card, CardBody, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Row } from 'reactstrap';
import { dynamicChart, index } from "../../config/pluginsInit";
import Badge from "reactstrap/lib/Badge";
import Progress from "reactstrap/lib/Progress";
import { backend } from '../../config/backend';
import axios from 'axios';

class Index extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            taxi: null,
            interprovincial: null,
            taxiCarga: null,
            chart1: {
                chart: {
                    height: 80,
                    type: 'area',
                    sparkline: {
                        enabled: true
                    },
                    group: 'sparklines',

                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    width: 3,
                    curve: 'smooth'
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        shadeIntensity: 1,
                        opacityFrom: 0.5,
                        opacityTo: 0,
                    }
                },

                series: [{
                    name: 'series1',
                    data: [60, 15, 50, 30, 70]
                },],
                colors: ['#0084ff'],

                xaxis: {
                    type: 'datetime',
                    categories: ["2018-08-19T00:00:00", "2018-09-19T01:30:00", "2018-10-19T02:30:00", "2018-11-19T01:30:00", "2018-12-19T01:30:00"],
                },
                tooltip: {
                    x: {
                        format: 'dd/MM/yy HH:mm'
                    },
                }
            },
            chart2: {
                chart: {
                    height: 80,
                    type: 'area',
                    sparkline: {
                        enabled: true
                    },
                    group: 'sparklines',

                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    width: 3,
                    curve: 'smooth'
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        shadeIntensity: 1,
                        opacityFrom: 0.5,
                        opacityTo: 0,
                    }
                },
                series: [{
                    name: 'series1',
                    data: [70, 40, 60, 30, 60]
                },],
                colors: ['#ffd400'],

                xaxis: {
                    type: 'datetime',
                    categories: ["2018-08-19T00:00:00", "2018-09-19T01:30:00", "2018-10-19T02:30:00", "2018-11-19T01:30:00", "2018-12-19T01:30:00"],
                },
                tooltip: {
                    x: {
                        format: 'dd/MM/yy HH:mm'
                    },
                }
            },
            chart3: {
                chart: {
                    height: 80,
                    type: 'area',
                    sparkline: {
                        enabled: true
                    },
                    group: 'sparklines',

                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    width: 3,
                    curve: 'smooth'
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        shadeIntensity: 1,
                        opacityFrom: 0.5,
                        opacityTo: 0,
                    }
                },
                series: [{
                    name: 'series1',
                    data: [60, 40, 60, 40, 70]
                },],
                colors: ['#00ca00'],

                xaxis: {
                    type: 'datetime',
                    categories: ["2018-08-19T00:00:00", "2018-09-19T01:30:00", "2018-10-19T02:30:00", "2018-11-19T01:30:00", "2018-12-19T01:30:00"],
                },
                tooltip: {
                    x: {
                        format: 'dd/MM/yy HH:mm'
                    },
                }
            },
            chart4: {
                chart: {
                    height: 80,
                    type: 'area',
                    sparkline: {
                        enabled: true
                    },
                    group: 'sparklines',

                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    width: 3,
                    curve: 'smooth'
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        shadeIntensity: 1,
                        opacityFrom: 0.5,
                        opacityTo: 0,
                    }
                },
                series: [{
                    name: 'series1',
                    data: [75, 30, 60, 35, 60]
                },],
                colors: ['#e64141'],

                xaxis: {
                    type: 'datetime',
                    categories: ["2018-08-19T00:00:00", "2018-09-19T01:30:00", "2018-10-19T02:30:00", "2018-11-19T01:30:00", "2018-12-19T01:30:00"],
                },
                tooltip: {
                    x: {
                        format: 'dd/MM/yy HH:mm'
                    },
                }
            },
            chart6: {
                chart: {
                    height: 350,
                    type: 'radar',
                },
                series: [{
                    name: 'Series 1',
                    data: [80, 50, 30, 40, 100, 20],
                }],
                title: {
                    text: 'Basic Radar Chart'
                },
                labels: ['January', 'February', 'March', 'April', 'May', 'June']
            },
            dropdownOpen: false,
            activityTimeLine: false,
            setupStore: false,
            supportTicket: false,
            cashFlow: false,
            serverHistoryDropdown: false,
            topGrossing: [
                {
                    title: 'Android Tablet',
                    description: 'Android 10 supported tablet with best features.',
                    vendor: 'iqonicdesign',
                    image: require("../../assets/images/page-img/01.jpg"),
                    saleCount: 20019,
                },
                {
                    title: 'Apple Watch',
                    description: 'Latest model of apple watch for productivity.',
                    vendor: 'Apple',
                    image: require("../../assets/images/page-img/02.jpg"),
                    saleCount: 56112,
                },
                {
                    title: 'I-Phone & I-Mac',
                    description: 'Best ever combo package for work and personal use.',
                    vendor: 'Iqonic devices',
                    image: require("../../assets/images/page-img/03.jpg"),
                    saleCount: 9895,
                }
            ],
            supportTickets: [
                {
                    name: "Nik Jordan",
                    status: "pending",
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                    days: "2 days ago",
                    profileImage: require('../../assets/images/user/1.jpg')
                },
                {
                    name: "Lily Wozniak",
                    status: "working",
                    description: "It is a long established fact that a reader will be distracted by the readable layout.",
                    days: "2 days ago",
                    profileImage: require('../../assets/images/user/02.jpg')
                },
                {
                    name: "Samuel Path",
                    status: "working",
                    description: "It is a long established fact that a reader will be distracted by the readable layout.",
                    days: "2 days ago",
                    profileImage: require('../../assets/images/user/03.jpg')
                },
                {
                    name: "Mia Mai",
                    status: "closed",
                    description: "It is a long established fact that a reader will be distracted by the readable layout.",
                    days: "2 days ago",
                    profileImage: require('../../assets/images/user/04.jpg')
                }
            ],
            cashFlowChart: {
                chart: {
                    height: 400,
                    type: 'bar',
                    sparkline: {
                        show: false

                    },
                    toolbar: {
                        show: false
                    },
                },
                colors: ['#0084ff', '#ffd400'],
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: '30%',
                        endingShape: 'rounded'
                    },
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    show: false,
                    width: 5,
                    colors: ['#ffffff'],
                },
                series: [{
                    name: 'Mobile',
                    enabled: 'true',
                    data: [44, 90, 90, 60, 115]
                }, {
                    name: 'Desktop',
                    data: [35, 80, 100, 70, 95]
                }],
                fill: {
                    opacity: 1
                },
                tooltip: {
                    y: {
                        formatter: function (val) {
                            return "$ " + val + " thousands"
                        }
                    }
                }
            },
            waveChart7: dynamicChart(),
            serverHistory: {
                header: [
                    'Server ID',
                    'Up Since',
                    'Last Reboot',
                    'Status',
                    'Host',
                    'Utilization'
                ],
                body: [
                    [
                        '#0879985',
                        '26/12/2019',
                        '30/12/2019',
                        <Badge pill color="success"> Running </Badge>,
                        'Victoria 8007 Australia',
                        <Progress className="iq-progress-bar" color='success' value="90" />
                    ],
                    [
                        '#0879984',
                        '23/12/2019',
                        '27/12/2019',
                        <Badge color="warning" pill className="text-white"> Starting </Badge>,
                        'Athens 2745 Greece',
                        <Progress className="iq-progress-bar" color='warning' value="70" />
                    ],
                    [
                        '#0879983',
                        '18/12/2019',
                        '21/12/2019',
                        <Badge color="danger" pill> Stopped </Badge>,
                        'Victoria 8007 Australia',
                        <Progress className="iq-progress-bar" color='danger' value="48" />
                    ],
                    [
                        '#0879982',
                        '14/12/2019',
                        '20/12/2019',
                        <Badge color="info" pill> Maintenance </Badge>,
                        'Delhi 0014 India',
                        <Progress className="iq-progress-bar" color='info' value="90" />
                    ],
                    [
                        '#0879981',
                        '10/12/2019',
                        '18/12/2019',
                        <Badge pill color="success"> Running </Badge>,
                        'Alabama 2741 USA',
                        <Progress className="iq-progress-bar" color='success' value="45" />
                    ],
                ]
            },
            modelCard: [
                {
                    image: require('../../../src/assets/images/page-img/car.png'),
                    title: "Taxi",
                    subTitle: 0 + ' viajes'
                },
                {
                    image: require('../../../src/assets/images/page-img/buss.png'),
                    title: "Interprovincial",
                    subTitle: 0 + ' viajes'
                },
                {
                    image: require('../../../src/assets/images/page-img/truck.png'),
                    title: "CargaPesada",
                    subTitle: 0 + ' viajes'
                },
                {
                    image: require('../../../src/assets/images/page-img/chofer.jpg'),
                    title: "Total Choferes",
                    subTitle: 0
                },
                {
                    image: require('../../../src/assets/images/page-img/soles.png'),
                    title: "Total Rescargas",
                    subTitle: 's/' + 0
                },
            ],
        };
    }


    async UserList() {

        const taxiData = await axios.get(backend + "getViajesTaxi");
        const interprovincialData = await axios.get(backend + "getViajesInterprovincial ");
        const cargaPesadaData = await axios.get(backend + "getViajesCargaPesada");
        const recargas = await axios.get(backend + "getTotalRecargas    ");
        const totalChoferesData = await axios.get(backend + "getTotalChofer");
        this.setState({
            ...this.state, modelCard: [
                {
                    image: require('../../../src/assets/images/page-img/car.png'),
                    title: "Taxi",
                    subTitle: taxiData.data.viaje + ' viajes'
                },
                {
                    image: require('../../../src/assets/images/page-img/buss.png'),
                    title: "Interprovincial",
                    subTitle: interprovincialData.data.viaje + ' viajes'
                },
                {
                    image: require('../../../src/assets/images/page-img/truck.png'),
                    title: "CargaPesada",
                    subTitle: cargaPesadaData.data.viaje + ' viajes'
                },
                {
                    image: require('../../../src/assets/images/page-img/chofer.jpg'),
                    title: "Total Choferes",
                    subTitle: totalChoferesData.data.total
                },
                {
                    image: require('../../../src/assets/images/page-img/soles.png'),
                    title: "Total Rescargas",
                    subTitle: 's/' + recargas.data.totalRecargas
                },
            ],
        });
    }

    componentDidMount() {
        setTimeout(function () {
            index();
        }, 800);
        this.UserList();
    }

    render() {

        const { topGrossing, modelCard, supportTickets, serverHistory } = this.state;

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

                <div className="row">
                    <div className="col-lg-8">
                        <div className="iq-card overflow-hidden">
                            <div className="iq-card-header d-flex justify-content-between">
                                <div className="iq-header-title">
                                    <h4 className="card-title">Comparacion de Recargas y Comisiones </h4>
                                </div>
                                {/* <div className="iq-card-header-toolbar d-flex align-items-center">
                                    <ul className="nav nav-pills">
                                        <li className="nav-item">
                                            <a href="!#" className="nav-link active">Latest</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="!#" className="nav-link">Month</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="!#" className="nav-link">All Time</a>
                                        </li>
                                    </ul>
                                </div> */}
                            </div>


                            <TotalDinero />


                        </div>
                    </div>
                    <div className="col-lg-4" style={{ display: "none" }}>>
                        <div className="iq-card animation-card">
                            <div className="iq-card-body p-0">
                                <div className="an-text">
                                    <span>Quarterly Target </span>
                                    <h2 className="display-4 font-weight-bold">$<span>2M</span></h2>
                                </div>

                                <div className="an-img">
                                    <Lottie className="bodymovin" data={data1Json} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row" style={{ display: "none" }} >
                    <div className="col-lg-8">
                        <div className="iq-card">
                            <div className="iq-card-header d-flex justify-content-between">
                                <div className="iq-header-title">
                                    <h4 className="card-title">Top Grossing</h4>
                                </div>
                                <div className="iq-card-header-toolbar d-flex align-items-center">
                                    <Dropdown isOpen={this.state.dropdownOpen} toggle={() => {
                                        this.setState({
                                            dropdownOpen: !this.state.dropdownOpen
                                        });
                                    }}>
                                        <DropdownToggle tag="span" className="dropdown-toggle" data-toggle="dropdown">
                                            <i className="ri-more-2-fill" />
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem>
                                                <i className="ri-eye-fill mr-2" /> View
                                            </DropdownItem>
                                            <DropdownItem>
                                                <i className="ri-delete-bin-6-fill mr-2" /> Delete
                                            </DropdownItem>
                                            <DropdownItem>
                                                <i className="ri-pencil-fill mr-2" /> Edit
                                            </DropdownItem>
                                            <DropdownItem>
                                                <i className="ri-printer-fill mr-2" /> Print
                                            </DropdownItem>
                                            <DropdownItem>
                                                <i className="ri-file-download-fill mr-2" /> Download
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </div>
                            </div>
                            <div className="iq-card-body">
                                {topGrossing.map((grossing, index) => (
                                    <div key={index} className="row">
                                        <div className={"col-sm-8 " + (index !== (topGrossing.length - 1) ? "mb-4" : "")}>
                                            <div className="media-sellers">
                                                <div className="media-sellers-img">
                                                    <img src={grossing.image} className="mr-3 rounded" alt="" />
                                                </div>
                                                <div className="media-sellers-media-info">
                                                    <h5 className="mb-0">
                                                        <a className="text-dark" href="!#">{grossing.title}</a>
                                                    </h5>
                                                    <p className="mb-1">{grossing.description}</p>
                                                    <div className="sellers-dt">
                                                        <span className="font-size-12">
                                                            Vendor: <a href="!#"> {grossing.vendor}</a>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-2 text-center mt-3">
                                            <h5 className="mb-0">{grossing.saleCount}</h5>
                                            <span>Sales</span>
                                        </div>
                                        <div className="col-sm-2 text-center mt-3">
                                            <ul className="list-inline mb-0 list-star">
                                                <li className="list-inline-item text-warning">
                                                    <i className="ri-star-fill" />
                                                </li>
                                                <li className="list-inline-item text-warning">
                                                    <i className="ri-star-fill" />
                                                </li>
                                                <li className="list-inline-item text-warning">
                                                    <i className="ri-star-fill" />
                                                </li>
                                                <li className="list-inline-item text-warning">
                                                    <i className="ri-star-fill" />
                                                </li>
                                                <li className="list-inline-item text-warning">
                                                    <i className="ri-star-fill" />
                                                </li>
                                            </ul>
                                            <span>Rating</span>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="iq-card">
                                    <div className="iq-card-header d-flex justify-content-between">
                                        <div className="iq-header-title">
                                            <h4 className="card-title">Support Tickets</h4>
                                        </div>
                                        <div className="iq-card-header-toolbar d-flex align-items-center">
                                            <Dropdown isOpen={this.state.supportTicket} toggle={() => {
                                                this.setState({
                                                    supportTicket: !this.state.supportTicket
                                                });
                                            }}>
                                                <DropdownToggle tag="span" className="dropdown-toggle cursor-pointer dropdown-bg" data-toggle="dropdown">
                                                    View All
                                                </DropdownToggle>
                                                <DropdownMenu>
                                                    <DropdownItem>
                                                        <i className="ri-eye-fill mr-2" /> View
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                        <i className="ri-delete-bin-6-fill mr-2" /> Delete
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                        <i className="ri-pencil-fill mr-2" /> Edit
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                        <i className="ri-printer-fill mr-2" /> Print
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                        <i className="ri-file-download-fill mr-2" /> Download
                                                    </DropdownItem>
                                                </DropdownMenu>
                                            </Dropdown>
                                        </div>
                                    </div>

                                    <div className="iq-card-body">
                                        {supportTickets.map((tickets, index) => (
                                            <div key={index}>
                                                <div className="media-support">
                                                    <div className="media-support-header mb-2">
                                                        <div className="media-support-user-img mr-3">
                                                            <img className="rounded-circle" src={tickets.profileImage} alt="" />
                                                        </div>
                                                        <div className="media-support-info mt-2">
                                                            <h6 className="mb-0">
                                                                <a href="!#" className="">{tickets.name}</a>
                                                            </h6>
                                                            <small>2 day ago</small>
                                                        </div>
                                                        <div className="mt-3">
                                                            <StatusBadge status={tickets.status} />
                                                        </div>
                                                    </div>
                                                    <div className="media-support-body">
                                                        <p className="mb-0">{tickets.description}</p>
                                                    </div>
                                                </div>
                                                {(index !== (supportTickets.length - 1)) && (<hr className="mt-4 mb-4" />)}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="iq-card">
                                    <div className="iq-card-header d-flex justify-content-between">
                                        <div className="iq-header-title">
                                            <h4 className="card-title">Cash flow</h4>
                                        </div>
                                        <div className="iq-card-header-toolbar d-flex align-items-center">
                                            <Dropdown isOpen={this.state.cashFlow} toggle={() => {
                                                this.setState({
                                                    cashFlow: !this.state.cashFlow
                                                });
                                            }}>
                                                <DropdownToggle tag="span" className="dropdown-toggle cursor-pointer text-primary" data-toggle="dropdown">
                                                    <i className={"ri-more-2-fill"} />
                                                </DropdownToggle>
                                                <DropdownMenu>
                                                    <DropdownItem>
                                                        <i className="ri-eye-fill mr-2" /> View
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                        <i className="ri-delete-bin-6-fill mr-2" /> Delete
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                        <i className="ri-pencil-fill mr-2" /> Edit
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                        <i className="ri-printer-fill mr-2" /> Print
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                        <i className="ri-file-download-fill mr-2" /> Download
                                                    </DropdownItem>
                                                </DropdownMenu>
                                            </Dropdown>
                                        </div>
                                    </div>
                                    {/* <ApexChart
                                        element={"bar-chart-6"}
                                        chartOption={this.state.cashFlowChart}
                                    /> */}
                                </div>

                                <div className="iq-card">
                                    <div className="iq-card-body p-0">
                                        <div className="row align-items-center no-gutters">
                                            <div className="col-lg-6">
                                                <div className="p-4">
                                                    <div className=" d-flex align-items-center">
                                                        <a href="!#"
                                                            className="iq-icon-box rounded-circle iq-bg-primary">
                                                            <i className="ri-facebook-fill" />
                                                        </a>
                                                        <h4 className="mb-0">
                                                            <span className="counter">200</span>k
                                                            <small className="d-block font-size-14">Posts</small>
                                                        </h4>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                {/* <ApexChart
                                                    element={"wave-chart-7"}
                                                    chartOption={this.state.waveChart7}
                                                /> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="col-md-4">
                        <div className="iq-card">
                            <div className="iq-card-header d-flex justify-content-between">
                                <div className="iq-header-title">
                                    <h4 className="card-title">Activity timeline</h4>
                                </div>
                                <div className="iq-card-header-toolbar d-flex align-items-center">

                                    <Dropdown isOpen={this.state.activityTimeLine} toggle={() => {
                                        this.setState({
                                            activityTimeLine: !this.state.activityTimeLine
                                        });
                                    }}>
                                        <DropdownToggle tag="span" className="dropdown-toggle cursor-pointer text-primary" data-toggle="dropdown">
                                            View All
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem>
                                                <i className="ri-eye-fill mr-2" /> View
                                            </DropdownItem>
                                            <DropdownItem>
                                                <i className="ri-delete-bin-6-fill mr-2" /> Delete
                                            </DropdownItem>
                                            <DropdownItem>
                                                <i className="ri-pencil-fill mr-2" /> Edit
                                            </DropdownItem>
                                            <DropdownItem>
                                                <i className="ri-printer-fill mr-2" /> Print
                                            </DropdownItem>
                                            <DropdownItem>
                                                <i className="ri-file-download-fill mr-2" /> Download
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </div>
                            </div>
                            <div className="iq-card-body">
                                <ul className="iq-timeline">
                                    <li>
                                        <div className="timeline-dots" />
                                        <h6 className="float-left mb-1">Client Login</h6>
                                        <small className="float-right mt-1">24 November 2019</small>
                                        <div className="d-inline-block w-100">
                                            <p>Bonbon macaroon jelly beans gummi bears jelly lollipop apple</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="timeline-dots border-success" />
                                        <h6 className="float-left mb-1">Scheduled Maintenance</h6>
                                        <small className="float-right mt-1">23 November 2019</small>
                                        <div className="d-inline-block w-100">
                                            <p>Bonbon macaroon jelly beans gummi bears jelly lollipop apple</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="timeline-dots border-danger" />
                                        <h6 className="float-left mb-1">Dev Meetup</h6>
                                        <small className="float-right mt-1">20 November 2019</small>
                                        <div className="d-inline-block w-100">
                                            <p>Bonbon macaroon jelly beans <a href="!#">gummi bears</a>gummi bears jelly
                                                lollipop apple</p>
                                            <div className="iq-media-group">
                                                <a href="!#" className="iq-media">
                                                    <img className="img-fluid avatar-40 rounded-circle"
                                                        src={require("../../assets/images/user/05.jpg")} alt="" />
                                                </a>
                                                <a href="!#" className="iq-media">
                                                    <img className="img-fluid avatar-40 rounded-circle"
                                                        src={require("../../assets/images/user/06.jpg")} alt="" />
                                                </a>
                                                <a href="!#" className="iq-media">
                                                    <img className="img-fluid avatar-40 rounded-circle"
                                                        src={require("../../assets/images/user/07.jpg")} alt="" />
                                                </a>
                                                <a href="!#" className="iq-media">
                                                    <img className="img-fluid avatar-40 rounded-circle"
                                                        src={require("../../assets/images/user/08.jpg")} alt="" />
                                                </a>
                                                <a href="!#" className="iq-media">
                                                    <img className="img-fluid avatar-40 rounded-circle"
                                                        src={require("../../assets/images/user/09.jpg")} alt="" />
                                                </a>
                                                <a href="!#" className="iq-media">
                                                    <img className="img-fluid avatar-40 rounded-circle"
                                                        src={require("../../assets/images/user/10.jpg")} alt="" />
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="timeline-dots border-primary" />
                                        <h6 className="float-left mb-1">Client Call</h6>
                                        <small className="float-right mt-1">19 November 2019</small>
                                        <div className="d-inline-block w-100">
                                            <p>Bonbon macaroon jelly beans gummi bears jelly lollipop apple</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="timeline-dots border-warning" />
                                        <h6 className="float-left mb-1">Mega event</h6>
                                        <small className="float-right mt-1">15 November 2019</small>
                                        <div className="d-inline-block w-100">
                                            <p>Bonbon macaroon jelly beans gummi bears jelly lollipop apple</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="iq-card">
                            <img src={require("../../assets/images/small/img-1.jpg")} className="img-fluid w-100 rounded" alt="#" />
                            <div className="iq-card-header d-flex justify-content-between">
                                <div className="iq-header-title">
                                    <h4 className="card-title">How to setup E-store</h4>
                                </div>
                                <div className="iq-card-header-toolbar d-flex align-items-center">
                                    <Dropdown isOpen={this.state.setupStore} toggle={() => {
                                        this.setState({
                                            setupStore: !this.state.setupStore
                                        });
                                    }}>
                                        <DropdownToggle tag="span" className="dropdown-toggle cursor-pointer text-primary" data-toggle="dropdown">
                                            <i className={"ri-settings-5-fill"} />
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem>
                                                <i className="ri-eye-fill mr-2" /> View
                                            </DropdownItem>
                                            <DropdownItem>
                                                <i className="ri-delete-bin-6-fill mr-2" /> Delete
                                            </DropdownItem>
                                            <DropdownItem>
                                                <i className="ri-pencil-fill mr-2" /> Edit
                                            </DropdownItem>
                                            <DropdownItem>
                                                <i className="ri-printer-fill mr-2" /> Print
                                            </DropdownItem>
                                            <DropdownItem>
                                                <i className="ri-file-download-fill mr-2" /> Download
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </div>
                            </div>
                            <div className="iq-card-body">
                                <span className="font-size-16">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                                <small className="text-muted mt-3 d-inline-block w-100">Saturday, 7 December
                                    2019</small>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="row" style={{ display: "none" }}>
                    <div className="col-lg-12">
                        <div className="iq-card">
                            <div className="iq-card-header d-flex justify-content-between">
                                <div className="iq-header-title">
                                    <h4 className="card-title">Server History</h4>
                                </div>
                                <div className="iq-card-header-toolbar d-flex align-items-center">
                                    <div className="dropdown">
                                        <Dropdown isOpen={this.state.serverHistoryDropdown} toggle={() => {
                                            this.setState({
                                                serverHistoryDropdown: !this.state.serverHistoryDropdown
                                            });
                                        }}>
                                            <DropdownToggle tag="span" className="dropdown-toggle cursor-pointer text-primary" data-toggle="dropdown">
                                                View All
                                            </DropdownToggle>
                                            <DropdownMenu>
                                                <DropdownItem>
                                                    <i className="ri-eye-fill mr-2" /> View
                                                </DropdownItem>
                                                <DropdownItem>
                                                    <i className="ri-delete-bin-6-fill mr-2" /> Delete
                                                </DropdownItem>
                                                <DropdownItem>
                                                    <i className="ri-pencil-fill mr-2" /> Edit
                                                </DropdownItem>
                                                <DropdownItem>
                                                    <i className="ri-printer-fill mr-2" /> Print
                                                </DropdownItem>
                                                <DropdownItem>
                                                    <i className="ri-file-download-fill mr-2" /> Download
                                                </DropdownItem>
                                            </DropdownMenu>
                                        </Dropdown>
                                    </div>
                                </div>
                            </div>
                            <div className="iq-card-body">
                                <div className="table-responsive">
                                    <TableStyle1
                                        tableClass="table mb-0 table-borderless"
                                        header={serverHistory.header}
                                        body={serverHistory.body}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

const TotalDinero = (props) => {
    const [total, setTotal] = useState({});
    const [precio, setPrecio] = useState(0);
    const [comision, setComision] = useState(0);
    const [cargando, setCargando] = useState(true);
    const [data, setData] = useState({
        chart: {
            height: 200,
            type: 'line',
            sparkline: {
                enabled: true
            },
            stacked: false,
        },
        stroke: {
            width: [2, 3],
            curve: 'smooth',
            dashArray: [0, 5]
        },
        plotOptions: {
            bar: {
                columnWidth: '50%'
            }
        },
        colors: ['#00ca00', '#007bff'],
        series: [
            {
                name: 'Movimientos',
                type: 'area',
                data: []

            }, {
                name: 'Comision',
                type: 'line',
                data: []
            }
        ],
        fill: {
            opacity: [0.2, 1],
            gradient: {
                inverseColors: false,
                shade: 'light',
                type: "vertical",
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100, 100, 100]
            }
        },
        labels: [],
        markers: {
            size: 0
        },
        xaxis: {
            type: 'datetime'
        },
        yaxis: {
            min: 0
        },
        tooltip: {
            shared: true,
            intersect: false,
            y: {
                formatter: function (y) {
                    if (typeof y !== "undefined") {
                        return y.toFixed(0) + " Soles";
                    }
                    return y;

                }
            }
        },
        legend: {
            labels: {
                useSeriesColors: true
            },
            markers: {
                customHTML: [
                    function () {
                        return ''
                    },
                    function () {
                        return ''
                    },
                    function () {
                        return ''
                    }
                ]
            }
        }
    });


    const traerDatos = async () => {
        const totalData = await axios.get(backend + "getComisionXDinero");
        setTotal(totalData.data);

        dataInicial(totalData);
    }

    const dataInicial = (totalData) => {
        let precio = 0;
        let comision = 0;
        const data1 = { ...data };
        totalData.data.total.forEach(element => {
            precio += parseInt(element.precio);
            comision += parseInt(element.comision);

            data1.series[0].data.push(element.precio);
            data1.series[1].data.push(element.comision);
            data1.labels.push(element.fechaFinal);
        });
        setPrecio(precio);
        setComision(comision);
        setData({ ...data1 });        
        setCargando(false);

    }
    

    console.log(total);
    useEffect(() => {
        traerDatos();
    }, []);

    return (
        <>
            <div className="iq-card-body">
                <div className="d-flex justify-content-around">
                    <div className="price-week-box">
                        <span>Total de Movimientos</span>
                        <h2>
                            s/.<span className="counter">{precio}</span>
                            <i className="ri-funds-line text-danger font-size-18" />
                        </h2>
                    </div>
                    <div className="price-week-box">
                        <span>Total de comisiones</span>
                        <h2>
                            s/.<span className="counter">{comision}</span>
                            <i className="ri-funds-line text-danger font-size-18" />
                        </h2>
                    </div>
                </div>
            </div>
            {cargando ? <div>Cargando...</div>: <ApexChart
                element={"chart-5"}
                chartOption={data}
            />}
        </>
    )
}
export default Index;
