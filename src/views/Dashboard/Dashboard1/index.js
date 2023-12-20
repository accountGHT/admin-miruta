import React from 'react';
import Badge from "reactstrap/lib/Badge";

import {
    ApexChart,
    CardStyle3,
    DropdownStyle1,
    Lottie,
    NavPillStyle1,
    ProgressBarStyle1,
    TableStyle1,
    TitleStyle1
} from "../../../components/sofbox";
import data1Json from '../../../assets/images/small/data1'
import {index} from "../../../config/pluginsInit";
import Progress from "reactstrap/lib/Progress";

class Index extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
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
            paymentCardImage:[
                require('../../../assets/images/booking/03.png'),
                require('../../../assets/images/booking/03.png'),
                require('../../../assets/images/booking/03.png'),
            ],
            paymentCardType:[
                {
                    id:'checkbox1',
                    text:"Debit Card & Credit Card.",
                },
                {
                    id:'checkbox2',
                    text:"Rayzer Pay & Paypal.",
                },


            ],
            performanceNav:[
                {
                    text:'All Time'
                },
                {
                    text: "This Year"
                },
                {
                    text:'This Week'
                },
                {
                    text:'Today'
                },
            ],
            chart11:{
                chart: {
                    height: 407,
                    type: 'line',
                    zoom: {
                        enabled: false
                    },
                    toolbar:{
                        show:false
                    },
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    width: [5, 7, 5],
                    curve: 'straight',
                    dashArray: [0, 8, 5]
                },
                series: [{
                    name: "Session Duration",
                    data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
                },
                    {
                        name: "Page Views",
                        data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
                    },
                    {
                        name: 'Total Visits',
                        data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
                    }
                ],
                legend: {
                    show:false
                },
                markers: {
                    size: 0,

                    hover: {
                        sizeOffset: 6
                    }
                },
                xaxis: {
                    categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan',
                        '10 Jan', '11 Jan', '12 Jan'
                    ]
                },
                yaxis:{
                    labels:{
                        show:false
                    }
                },
                tooltip: {
                    y: [{
                        title: {
                            formatter: function (val) {
                                return val + " (mins)"
                            }
                        }
                    }, {
                        title: {
                            formatter: function (val) {
                                return val + " per session"
                            }
                        }
                    }, {
                        title: {
                            formatter: function (val) {
                                return val;
                            }
                        }
                    }]
                },
                grid: {
                    borderColor: '#f1f1f1',
                }
            },
            chart7:{
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
                    data: [29,48,41,88,55,81,63,77,27,14]
                }],
                markers: {
                    size: 4
                },
                xaxis: {
                    type: 'datetime',
                    categories: [1486771200000,1486857600000,1486944000000,1487030400000,1487116800000,1487203200000,1487289600000,1487376000000,1487462400000,1487548800000],
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
                colors : ['#0084ff'],
            },
            chart8:{
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
                    data: [29,48,41,88,55,81,63,77,27,14]
                }],
                markers: {
                    size: 4
                },
                xaxis: {
                    type: 'datetime',
                    categories: [1486771200000,1486857600000,1486944000000,1487030400000,1487116800000,1487203200000,1487289600000,1487376000000,1487462400000,1487548800000],
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
                colors : ['#00ca00'],
            },
            dash1DonetChart:{
                chart: {
                    height: 235,
                    type: 'donut',
                },
                plotOptions: {
                    pie: {
                        donut: {
                            size: '55%'
                        }
                    }
                },
                series: [44, 55, 41],
                colors: ['#00ca00','#e64141' ,'#0084ff'],
                labels:['Server1','Server2','Server3'],
                legend: {
                    position: 'bottom'
                }
            },
            dash1MultiBarChart:{
                chart: {
                    height: 268,
                    type: 'area',
                    zoom: {
                        enabled: false
                    },
                    toolbar:{
                        show:false
                    },
                    sparkline: {
                        enabled: true
                    },
                    group: 'sparklines',
                },
                colors: ['#0084ff','#00ca00','#ffd400' ],
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    width: [3,2,3],
                    curve: 'straight',
                },
                series: [{
                    name: "Session Duration",
                    data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
                },
                    {
                        name: "Page Views",
                        data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
                    },
                    {
                        name: 'Total Visits',
                        data: [87, 57, 74, 30, 75, 38, 62, 47, 82, 56, 45, 47]
                    }
                ],
                legend: {
                    show:false
                },
                markers: {
                    size: 0,

                    hover: {
                        sizeOffset: 6
                    }
                },
                xaxis: {
                    categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan',
                        '10 Jan', '11 Jan', '12 Jan'
                    ],
                    labels:{
                        show:false
                    }
                },
                yaxis:{
                    labels:{
                        show:false
                    }
                },
                tooltip: {
                    y: [{
                        title: {
                            formatter: function (val) {
                                return val + " (mins)"
                            }
                        }
                    }, {
                        title: {
                            formatter: function (val) {
                                return val + " per session"
                            }
                        }
                    }, {
                        title: {
                            formatter: function (val) {
                                return val;
                            }
                        }
                    }]
                },
                grid: {
                    borderColor: '#f1f1f1',
                }
            },
            projects:[
                {
                    icon:'ri-home-4-line',
                    title:'Sales',
                    description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                    footer:{
                        date:'Tommorow',
                        time:'2:30pm'
                    }
                },
                {
                    icon:'ri-timer-line',
                    title:'Support',
                    description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                    footer:{
                        date:'Tommorow',
                        time:'2:30pm'
                    }
                },
                {
                    icon:'ri-account-box-line',
                    title:'Account',
                    description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                    footer:{
                        date:'Tommorow',
                        time:'2:30pm'
                    }
                }
            ],
            serverHistory:{
                header:[
                    'Server ID',
                    'Up Since',
                    'Last Reboot',
                    'Status',
                    'Host',
                    'Utilization'
                ],
                body:[
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
            }
        };
    }

    componentDidMount() {
        setTimeout(function () {
            index();
        },800);
    }

    render() {
        let { viewAll, paymentCardImage, paymentCardType, performanceNav, chart11, chart7, chart8, dash1DonetChart, dash1MultiBarChart, projects, serverHistory } = this.state;
        return (
            <>
                <div className="row row-eq-height">
                    <div className="col-md-12 col-lg-8">
                        <div className="iq-card bg-primary sb-top-banner-card">
                            <div className="iq-card-body pt-5 pb-5">
                                <div className="row">
                                    <TitleStyle1
                                        divClass="col-md-6 align-self-center"
                                        titleClass="text-white"
                                        title="Congratulations Nik"
                                        descriptionClass="text-white"
                                        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. remaining essentially unchanged."
                                        btnClass="btn iq-bg-primary"
                                        btnText="Read More"
                                    />
                                    <div className="col-md-6 position-relative">
                                        <Lottie className="an-img-two" data={data1Json} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-4">
                        <div className="iq-card">
                            <div className="iq-card-body">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <ProgressBarStyle1
                                            upDown={(<span className="text-success float-right">+3.3%<i className="ri-arrow-up-fill" /></span>)}
                                            title="New Signups"
                                            count="3,897"
                                            progressClass="primary"
                                            percentage="90"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="iq-card">
                            <div className="iq-card-body">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <ProgressBarStyle1
                                            upDown={(<span className="text-danger float-right">+3.3%<i className="ri-arrow-down-fill" /></span>)}
                                            title="Weekly Production"
                                            count="1,874"
                                            progressClass="danger"
                                            percentage="90"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-12 col-lg-4">
                                <div className="iq-card">
                                    <div className="iq-card-header d-flex justify-content-between">
                                        <div className="iq-header-title">
                                            <h4 className="card-title">Payment Options</h4>
                                        </div>
                                        <div className="iq-card-header-toolbar d-flex align-items-center">
                                            <DropdownStyle1
                                                title="View All"
                                                id="dropdownMenuButton1"
                                                arrowClass="ri-arrow-down-s-line ml-1 text-danger"
                                                mainClass="dropdown-bg iq-bg-success"
                                                menuClass="dropdown-menu-right shadow-none"
                                                items={viewAll}
                                            />
                                        </div>
                                    </div>
                                    <div className="iq-card-body">
                                        <div className="owl-carousel" data-autoplay="true" data-loop="true"
                                             data-nav="false" data-dots="true" data-items="1" data-items-laptop="1"
                                             data-items-tab="1" data-items-mobile="1" data-items-mobile-sm="1"
                                             data-margin="30">
                                            {
                                                paymentCardImage.map((item,index) => (
                                                    <div className="item" key={index}>
                                                        <img src={item} className="img-fluid" alt="" />
                                                    </div>
                                                ))
                                            }
                                        </div>
                                        <div className="pay-options">
                                            <h4 className="mb-3">Enabled Payment Options</h4>
                                            {
                                                paymentCardType.map((item,index) => (
                                                    <div key={index} className={"d-flex tasks-card "+(paymentCardType.length === index+1 ? "border-bottom-0 mb-0 pb-0" : '')} role="alert">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id={item.id} />
                                                            <label className="custom-control-label" htmlFor={item.id}>
                                                                {item.text}
                                                            </label>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-8">
                                <div className="iq-card overflow-hidden" data-wow-delay="0.6s">
                                    <div className="iq-card-header d-flex justify-content-between">
                                        <div className="iq-header-title">
                                            <h4 className="card-title">Overall Performance</h4>
                                        </div>
                                        <div className="iq-card-header-toolbar d-flex align-items-center">
                                            <NavPillStyle1
                                                items={performanceNav}
                                            />
                                        </div>
                                    </div>
                                    <div className="iq-card-body p-0">
                                        <ApexChart
                                            element="chart-11"
                                            chartOption={chart11 }
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 col-lg-4">
                                <div className="row">
                                    <div className="col-md-12">
                                        <CardStyle3
                                            title="Servers"
                                            titleClass="text-secondary"
                                            count="1,125"
                                            upDown={(<span className="text-success mt-3 d-inline-block w-100"> <i className="ri-arrow-up-fill mr-1" /> +3.3% </span>)}
                                            chartId="chart-7"
                                            chartOption={chart7}
                                        />
                                    </div>
                                    <div className="col-md-12">
                                        <CardStyle3
                                            title="Utilization"
                                            titleClass="text-secondary"
                                            count="3,897"
                                            upDown={(<span className="text-danger mt-3 d-inline-block w-100"> <i className="ri-arrow-down-fill mr-1" /> +10% </span>)}
                                            chartId="chart-8"
                                            chartOption={chart8}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="iq-card" data-wow-delay="0.6s">
                                    <div className="iq-card-header d-flex justify-content-between">
                                        <div className="iq-header-title">
                                            <h4 className="card-title">Load Distribution</h4>
                                        </div>
                                        <div className="iq-card-header-toolbar d-flex align-items-center">
                                            <DropdownStyle1
                                                id="dropdownMenuButton2"
                                                arrowClass="ri-more-2-fill font-size-20"
                                                mainClass="text-dark bg-transparent"
                                                menuClass="dropdown-menu-right shadow-none"
                                                items={viewAll}
                                            />
                                        </div>
                                    </div>
                                    <div className="iq-card-body">
                                        <ApexChart
                                            element="Dash1DonetChart"
                                            chartOption={dash1DonetChart }
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="iq-card overflow-hidden" data-wow-delay="0.6s">
                                    <div className="iq-card-header d-flex justify-content-between">
                                        <div className="iq-header-title">
                                            <h4 className="card-title">Daily Update Level</h4>
                                        </div>
                                        <div className="iq-card-header-toolbar d-flex align-items-center">
                                            <DropdownStyle1
                                                title="See all"
                                                id="dropdownMenuButton3"
                                                arrowClass="ri-arrow-down-s-line ml-1 text-secondary"
                                                mainClass=" dropdown-bg iq-bg-secondary"
                                                menuClass="dropdown-menu-right shadow-none"
                                                items={viewAll}
                                            />
                                        </div>
                                    </div>
                                    <div className="iq-card-body p-0">
                                        <ApexChart
                                            element="Dash1MultiBarChart"
                                            chartOption={dash1MultiBarChart }
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {
                                projects.map((project,index) => (
                                    <div key={index} className="col-lg-3 col-md-6">
                                        <div className="iq-card dash-hover-gradient">
                                            <div className="iq-card-header d-flex justify-content-between border-0">
                                                <div className="mb-0 font-size-32 text-dark">
                                                    <i className={"font-weight-light "+project.icon} />
                                                </div>
                                                <div className="iq-card-header-toolbar d-flex align-items-center">
                                                    <DropdownStyle1
                                                        id="dropdownMenuButton2"
                                                        arrowClass="ri-more-2-fill font-size-20"
                                                        mainClass="text-dark bg-transparent"
                                                        menuClass="dropdown-menu-right shadow-none"
                                                        items={viewAll}
                                                    />
                                                </div>
                                            </div>
                                            <div className="iq-card-body">
                                                <h3>{project.title}</h3>
                                                <p className="mb-0">{project.description}</p>
                                            </div>
                                            <div className="card-action font-size-14 p-3">
                                                <span className="float-right">{project.footer.date}</span>
                                                <i className="ri-timer-2-line" />
                                                {project.footer.time}
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                            <div className="col-lg-3 col-md-6">
                                <div className="iq-card dash-hover-blank d-flex align-items-center">
                                    <div className="iq-card-body text-center">
                                        <h5 className="">Add New Project</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="iq-card">
                                    <div className="iq-card-header d-flex justify-content-between">
                                        <div className="iq-header-title">
                                            <h4 className="card-title">Server History</h4>
                                        </div>
                                        <div className="iq-card-header-toolbar d-flex align-items-center">
                                            <DropdownStyle1
                                                id="dropdownMenuButton8"
                                                arrowClass="ri-more-2-fill font-size-20"
                                                mainClass="text-dark bg-transparent"
                                                menuClass="dropdown-menu-right shadow-none"
                                                items={viewAll}
                                            />
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
                    </div>
                </div>
            </>
        );
    }
}

export default Index;
