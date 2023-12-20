import React from 'react';

import {index} from "../../../config/pluginsInit";

import {ApexChart} from "../../../components/sofbox";

import {
    Card,
    CardBody,
    CardHeader,
    Col,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Row,
    Table
} from "reactstrap";

class Index extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            dropdownOpen: false,
            userDropdownOpen: false,
            pageMetricsDropdownOpen: false,
            pageVisitsDropdownOpen: false,
            countriesDropdownOpen: false,
            chart1: {
                chart: {
                    height: 308,
                    type: 'line',
                    toolbar: {
                        show: false
                    }
                },
                series: [{
                    name: 'Website Blog',
                    type: 'column',
                    data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
                }, {
                    name: 'Social Media',
                    type: 'line',
                    data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
                }],
                stroke: {
                    width: [0, 4]
                },
                title: {
                    show: false
                },
                legend: {
                    show: false
                },
                // labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
                colors: ['#0084ff','#00ca00' ],
                xaxis: {
                    labels: {
                        show: false,
                    },
                    type: 'datetime'
                },
                yaxis: [{
                    labels: {
                        show: false,
                    }
                },{
                    labels: {
                        show: false,
                    }
                }],
            },
            chart2: {
                chart: {
                    height: 420,
                    type: 'radialBar',
                    stroke: {
                        show: true,
                        curve: 'smooth',
                        lineCap: 'butt',
                        colors: undefined,
                        width: 3,
                        dashArray: 0,
                    },
                },
                plotOptions: {
                    radialBar: {
                        hollow: {
                            margin: 10,
                            size: '30%',
                            background: 'transparent',
                            image: undefined,
                            imageWidth: 64,
                            imageHeight: 64,
                        },
                        dataLabels: {
                            name: {
                                fontSize: '22px',
                            },
                            value: {
                                fontSize: '16px',
                            },
                            total: {
                                show: true,
                                label: 'Total',
                                formatter: function (w) {
                                    // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                                    return 249
                                }
                            }
                        }
                    }
                },
                fill: {
                    type: 'gradient',
                },
                colors: ['#0084ff','#00ca00','#ffd400' ],
                series: [44, 55, 67],
                stroke: {
                    lineCap: 'round'
                },
                labels: [' Mobile', 'Desktop', 'Tablet', 'Watch'],
            },
            chart3: {
                chart: {
                    height: 310,
                    type: 'line',
                    stacked: false,
                    toolbar: {
                        show: false
                    }
                },
                dataLabels: {
                    enabled: false
                },
                colors: ['#00ca00' ,'#0084ff','#e64141'],
                series: [{
                    name: 'Income',
                    type: 'column',
                    data: [14, 2, 25, 15, 25, 28, 38, 46]
                }, {
                    name: 'Cashflow',
                    type: 'column',
                    data: [11, 3, 31, 4, 41, 49, 65, 85]
                }, {
                    name: 'Revenue',
                    type: 'line',
                    data: [20, 29, 37, 36, 44, 45, 50, 58]
                }],
                stroke: {
                    width: [1, 1, 4]
                },
                xaxis: {
                    categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
                    labels:{
                        show:false
                    }
                },
                yaxis: {
                    show: false
                },
                tooltip: {
                    theme: 'dark',
                    fixed: {
                        enabled: true,
                        position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
                        offsetY: 30,
                        offsetX: 60
                    },
                },
                legend: {
                    show: false,
                }
            },
            chart4: {
                chart: {
                    height: 350,
                    type: 'radialBar',
                },
                plotOptions: {
                    hollow: {
                        margin: 10,
                        size: '30%',
                        background: 'transparent',
                        image: undefined,
                        imageWidth: 64,
                        imageHeight: 64,
                    },
                    radialBar: {
                        startAngle: -135,
                        endAngle: 135,
                        dataLabels: {
                            name: {
                                fontSize: '16px',
                                color: undefined,
                                offsetY: 120
                            },
                            value: {
                                offsetY: 76,
                                fontSize: '22px',
                                color: undefined,
                                formatter: function (val) {
                                    return val + "%";
                                }
                            }
                        }
                    }
                },
                fill: {
                },
                stroke: {
                    dashArray: 5,
                },
                series: [67],
                labels: ['User traffic'],
                colors: ['#0084ff'],

            },
            pageVisits: [
                {
                    pageName: '/Home',
                    visitor: '4,569',
                    uniqueUser: '340',
                    bounceRate: '46,53%',
                    bounceRateStatus: 'up'
                },
                {
                    pageName: '/Home',
                    visitor: '4,569',
                    uniqueUser: '340',
                    bounceRate: '46,53%',
                    bounceRateStatus: 'up'
                }
            ]
        }
    }

    componentDidMount() {
        setTimeout(function () {
            index();
        },800);
    }

    render() {
        const { chart1, chart2, chart3, chart4, pageVisits } = this.state;
        return (
            <>
                <Row className={"row-eq-height"}>
                    <Col lg={4} md={12}>
                        <Row>
                            <Col md={6}>
                                <Card className="iq-card">
                                    <CardBody className="iq-card-body">
                                        <Row>
                                            <Col md={12} className={"mb-2 d-flex justify-content-between"}>
                                                <div
                                                    className="icon iq-icon-box rounded-circle iq-bg-primary rounded-circle"
                                                    data-wow-delay="0.2s">
                                                    <i className="ri-account-box-line" />
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={12} className={"mt-3"}>
                                                <h6 className="card-title text-uppercase text-secondary mb-0">Users</h6>
                                                <span
                                                    className="h2 text-dark mb-0 counter d-inline-block w-100">91,586</span>
                                            </Col>
                                        </Row>
                                        <p className="mb-0 text-muted mt-3">
                                            <span className="text-success mr-2"><i className="ri-arrow-up-fill" /> 3.48%</span>
                                        </p>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={6}>
                                <Card className="iq-card">
                                    <CardBody className="iq-card-body">
                                        <Row>
                                            <Col md={12} className={"mb-2 d-flex justify-content-between"}>
                                                <div
                                                    className="icon iq-icon-box rounded-circle iq-bg-danger rounded-circle"
                                                    data-wow-delay="0.2s">
                                                    <i className="ri-window-line" />
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={12} className={"mt-3"}>
                                                <h6 className="card-title text-uppercase text-secondary mb-0">SESSION</h6>
                                                <span
                                                    className="h2 text-dark mb-0 counter d-inline-block w-100">750,897</span>
                                            </Col>
                                        </Row>
                                        <p className="mb-0 text-muted mt-3">
                                            <span className="text-danger mr-2"><i className="ri-arrow-down-fill" />  10%</span>
                                        </p>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={6}>
                                <Card className="iq-card">
                                    <CardBody className="iq-card-body">
                                        <Row>
                                            <Col md={12} className={"mb-2 d-flex justify-content-between"}>
                                                <div
                                                    className="icon iq-icon-box rounded-circle iq-bg-success rounded-circle"
                                                    data-wow-delay="0.2s">
                                                    <i className="ri-clockwise-2-line" />
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={12} className={"mt-3"}>
                                                <h6 className="card-title text-uppercase text-secondary mb-0">BOUNCE RATE</h6>
                                                <span
                                                    className="h2 text-dark mb-0 counter d-inline-block w-100">45.8</span>
                                            </Col>
                                        </Row>
                                        <p className="mb-0 text-muted mt-3">
                                            <span className="text-success mr-2"><i className="ri-arrow-up-fill" /> 5.18%</span>
                                        </p>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={6}>
                                <Card className="iq-card">
                                    <CardBody className="iq-card-body">
                                        <Row>
                                            <Col md={12} className={"mb-2 d-flex justify-content-between"}>
                                                <div
                                                    className="icon iq-icon-box rounded-circle iq-bg-info rounded-circle"
                                                    data-wow-delay="0.2s">
                                                    <i className="ri-window-line" />
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={12} className={"mt-3"}>
                                                <h6 className="card-title text-uppercase text-secondary mb-0">Duration</h6>
                                                <span
                                                    className="h2 text-dark mb-0 counter d-inline-block w-100">3.21</span>
                                            </Col>
                                        </Row>
                                        <p className="mb-0 text-muted mt-3">
                                            <span className="text-success mr-2"><i className="ri-arrow-up-fill" />  8.48%</span>
                                        </p>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={8} md={12}>
                        <Card className={"iq-card"}>
                            <CardHeader className={"iq-card-header d-flex justify-content-between"}>
                                <div className={"iq-header-title"}>
                                    <h4 className="card-title">Analytics</h4>
                                </div>
                                <div className="iq-card-header-toolbar d-flex align-items-center">
                                    <ul className="nav nav-pills">
                                        <li className="nav-item">
                                            <a href="!#" className="nav-link active">Days</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="!#" className="nav-link">Weeks</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="!#" className="nav-link">Months</a>
                                        </li>
                                    </ul>
                                </div>
                            </CardHeader>
                            <CardBody className={"iq-card-body p-0"}>
                                <div className="d-flex justify-content-around mt-4">
                                    <div className="price-week-box mr-5">
                                        <span>Active Users</span>
                                        <h2>
                                            <span className="counter">380</span>
                                            <i className="ri-funds-line text-success font-size-18" />
                                        </h2>
                                    </div>
                                    <div className="price-week-box">
                                        <span>User retention</span>
                                        <h2>
                                            <span className="counter">52.55</span>
                                            <i className="ri-funds-line text-success font-size-18" />
                                        </h2>
                                    </div>
                                </div>
                                <ApexChart
                                    element="chart-11"
                                    chartOption={chart1}
                                />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

                <Row className={"row-eq-height"}>
                    <Col md={6} lg={3}>
                        <Card className={"iq-card"}>
                            <CardHeader className={"iq-card-header d-flex justify-content-between"}>
                                <div className={"iq-header-title"}>
                                    <h4 className="card-title">Devices</h4>
                                </div>
                                <div className="iq-card-header-toolbar d-flex align-items-center">
                                    <Dropdown isOpen={this.state.userDropdownOpen} toggle={() => {
                                        this.setState({
                                            userDropdownOpen : !this.state.userDropdownOpen
                                        });
                                    }}>
                                        <DropdownToggle tag="span" className="dropdown-toggle text-primary" data-toggle="dropdown">
                                            View all
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
                            </CardHeader>
                            <CardBody className={"iq-card-body p-0"}>
                                <ApexChart
                                    element="chart-13"
                                    chartOption={chart2}
                                />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={6} lg={3}>
                        <Card className={"iq-card"}>
                            <CardHeader className={"iq-card-header d-flex justify-content-between"}>
                                <div className={"iq-header-title"}>
                                    <h4 className="card-title">Users</h4>
                                </div>
                                <div className="iq-card-header-toolbar d-flex align-items-center">
                                    <Dropdown isOpen={this.state.dropdownOpen} toggle={() => {
                                        this.setState({
                                            dropdownOpen : !this.state.dropdownOpen
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
                            </CardHeader>
                            <CardBody className={"iq-card-body"}>
                                <ApexChart
                                    element="chart-15"
                                    chartOption={chart3}
                                />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={6} lg={6}>
                        <Card className={"iq-card"}>
                            <CardHeader className={"iq-card-header d-flex justify-content-between"}>
                                <div className={"iq-header-title"}>
                                    <h4 className="card-title">Page Metrics</h4>
                                </div>
                                <div className="iq-card-header-toolbar d-flex align-items-center">
                                    <Dropdown isOpen={this.state.pageMetricsDropdownOpen} toggle={() => {
                                        this.setState({
                                            pageMetricsDropdownOpen : !this.state.pageMetricsDropdownOpen
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
                            </CardHeader>
                            <CardBody className={"iq-card-body"}>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                <Row>
                                    <Col md={6}>
                                        <ApexChart
                                            element="chart-16"
                                            chartOption={chart4}
                                        />
                                    </Col>
                                    <Col md={6} className={"align-self-center"}>
                                        <Row>
                                            <Col md={12}>
                                                <h5 className="text-dark mb-0">Our goal</h5>
                                                <h2 className="text-primary">85%<small className="ml-3">Traffic</small></h2>
                                            </Col>
                                        </Row>
                                        <hr />
                                        <Row>
                                            <Col md={12}>
                                                <h6 className="d-inline-block w-100 mb-2">Previous scores</h6>
                                                <h5>August<span className="ml-3 font-size-22 text-success">69%</span></h5>
                                                <h5>September<span className="ml-3 font-size-22 text-danger">40%</span></h5>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>

                            </CardBody>
                        </Card>
                    </Col>
                </Row>

                <Row className={"row-eq-height"}>
                    <Col md={12} lg={8} className={"mb-5 mb-xl-0"}>
                        <Card className={"iq-card"}>
                            <CardHeader className={"iq-card-header d-flex justify-content-between"}>
                                <div className={"iq-header-title"}>
                                    <h4 className="card-title">Page visits</h4>
                                </div>
                                <div className="iq-card-header-toolbar d-flex align-items-center">
                                    <Dropdown isOpen={this.state.pageVisitsDropdownOpen} toggle={() => {
                                        this.setState({
                                            pageVisitsDropdownOpen : !this.state.pageVisitsDropdownOpen
                                        });
                                    }}>
                                        <DropdownToggle tag="span" className="dropdown-toggle text-primary" data-toggle="dropdown">
                                            View all
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
                            </CardHeader>
                            <CardBody className={"iq-card-body p-0"}>
                                <div className={"table-responsive"}>
                                    <Table className={"align-items-center table-flush"}>
                                        <thead className="thead-light">
                                        <tr>
                                            <th scope="col">Page name</th>
                                            <th scope="col">Visitors</th>
                                            <th scope="col">Unique users</th>
                                            <th scope="col">Bounce rate</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        { pageVisits.map((page, index) => (
                                            <tr key={index}>
                                                <th scope={"row"}>{ page.pageName }</th>
                                                <th>{ page.visitor }</th>
                                                <th>{ page.uniqueUser }</th>
                                                <th>{ page.bounceRate }</th>
                                            </tr>
                                        )) }
                                        </tbody>
                                    </Table>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col lg={4}>
                        <Card className={"iq-card"}>
                            <CardHeader className={"iq-card-header d-flex justify-content-between"}>
                                <div className={"iq-header-title"}>
                                    <h4 className="card-title">Countries</h4>
                                </div>
                                <div className="iq-card-header-toolbar d-flex align-items-center">
                                    <Dropdown isOpen={this.state.countriesDropdownOpen} toggle={() => {
                                        this.setState({
                                            countriesDropdownOpen : !this.state.countriesDropdownOpen
                                        });
                                    }}>
                                        <DropdownToggle tag="span" className="dropdown-toggle" data-toggle="dropdown">
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
                            </CardHeader>
                            <CardBody className={"iq-card-body"}>

                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </>
        );
    }
}

export default Index;