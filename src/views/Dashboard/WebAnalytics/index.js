import React from 'react';
import {index} from '../../../config/pluginsInit';
import {
    DropdownStyle1,
    ApexLiveChart,
    CardStyle4,
    NavPillStyle1,
    ApexChart,
    MapAmChart,
    ProgressBarStyle2,
    TableStyle1
} from "../../../components/sofbox";

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            dropdownAction:[
                {text:"Action"},
                {text:"Another action"},
                {text:"Something else here"},
            ],
            activeUser:[
                {
                    image:require('../../../assets/images/user/01.jpg'),
                    title:'Anna Sthesia',
                    role:'Admin',
                    statusClass:'status-online'
                },
                {
                    image:require('../../../assets/images/user/02.jpg'),
                    title:'Paul Molive',
                    role:'Admin',
                    statusClass:'status-online'
                },
                {
                    image:require('../../../assets/images/user/03.jpg'),
                    title:'Anna Mull',
                    role:'Admin',
                    statusClass:'status-online'
                },
                {
                    image:require('../../../assets/images/user/04.jpg'),
                    title:'Paige Turner',
                    role:'Admin',
                    statusClass:'status-online'
                },
                {
                    image:require('../../../assets/images/user/01.jpg'),
                    title:'Bob Frapples',
                    role:'Admin',
                    statusClass:'status-online'
                },
                {
                    image:require('../../../assets/images/user/02.jpg'),
                    title:'Barb Ackue',
                    role:'Admin',
                    statusClass:'status-online'
                },
                {
                    image:require('../../../assets/images/user/03.jpg'),
                    title:'Greta Life',
                    role:'Admin',
                    statusClass:'status-online'
                },
                {
                    image:require('../../../assets/images/user/04.jpg'),
                    title:'Ira Membrit',
                    role:'Admin',
                    statusClass:'status-away'
                },
                {
                    image:require('../../../assets/images/user/01.jpg'),
                    title:'Pete Sariya',
                    role:'Admin',
                    statusClass:'status-away'
                },
                {
                    image:require('../../../assets/images/user/02.jpg'),
                    title:'Monty Carlo',
                    role:'Admin',
                },
            ],
            chart9:{
                chart: {
                    height: 112,
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
                    curve: 'smooth',
                    width: 3
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
                    data: []
                }],
                markers: {
                    size: 0
                },
                xaxis: {
                    type: 'datetime',
                    range: 777600000,
                },
                colors : ['#0084ff'],
                yaxis: {
                    max: 100
                },
                legend: {
                    show: false
                },
            },
            overViewCards:[
                {
                    icon:'ri-account-box-line',
                    iconClass:'iq-bg-warning',
                    text:'USERS',
                    counter:'850,789',
                    updown:(<span className="text-success mr-2"><i className="ri-arrow-up-fill" /> 3.48%</span>),
                },
                {
                    icon:'ri-account-box-line',
                    iconClass:'iq-bg-danger',
                    text:'SESSIONS',
                    counter:'810,084',
                    updown:(<span className="text-danger mr-2"><i className="ri-arrow-down-fill" /> 10%</span>),
                },
                {
                    icon:'ri-timer-2-line',
                    iconClass:'iq-bg-success',
                    text:'BOUNCE RATE',
                    counter:'47.6',
                    updown:(<span className="text-success mr-2"><i className="ri-arrow-up-fill" /> 6.48%</span>),
                },
                {
                    icon:'ri-timer-2-line',
                    iconClass:'iq-bg-primary',
                    text:'DURATION',
                    counter:'3.25',
                    updown:(<span className="text-success mr-2"><i className="ri-arrow-up-fill" /> 5.48%</span>),
                },
            ],
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
            analyticsNav:[
                {
                    text:'Days'
                },
                {
                    text: "Weeks"
                },
                {
                    text:'Months'
                },
            ],
            chart6:{
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
                        formatter: function(val) {
                            return "$ " + val + " thousands"
                        }
                    }
                }
            },
            countriesProgress:[
                {
                    title:'United States',
                    colour:'primary',
                    percentage:95
                },
                {
                    title:'India',
                    colour:'warning',
                    percentage:85
                },
                {
                    title:'Austrialia',
                    colour:'success',
                    percentage:65
                },
                {
                    title:'Brazil',
                    colour:'danger',
                    percentage:45
                },
            ],
            chart12:{
                chart: {
                    height: 140,
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
                    width: 5,
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
                }, ],
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
            pageVisitTable:{
                header:[
                    'Page name',
                    'Visitors',
                    'Unique users',
                    'Bounce rate'
                ],
                body:[
                    [<span className='font-weight-bold'>/Home</span>,'4,569','340',<i className="ri-arrow-up-fill text-success mr-3"><span className="text-dark pl-1">46,53%</span></i>],
                    [<span className='font-weight-bold'>/Dashboard1/index.html</span>,'3,985','319', <i className="ri-arrow-down-fill text-warning mr-3"><span className="text-dark pl-1">46,53%</span></i>],
                    [<span className='font-weight-bold'>/Dashboard1/charts.html</span>,'3,513','294', <i className="ri-arrow-down-fill text-warning mr-3"><span className="text-dark pl-1">36,49%</span></i>],
                    [<span className='font-weight-bold'>/Dashboard1/tables.html</span>,'2,050','147', <i className="ri-arrow-up-fill text-success mr-3"><span className="text-dark pl-1">50,87%</span></i>],
                    [<span className='font-weight-bold'>/Dashboard1/profile.html</span>,'1,795','190',<i className="ri-arrow-down-fill text-danger mr-3"><span className="text-dark pl-1">46,53%</span></i>],
                    [<span className='font-weight-bold'>/Dashboard1/profile.html</span>,'1,795','190',<i className="ri-arrow-down-fill text-danger mr-3"><span className="text-dark pl-1">46,53%</span></i>],
                    [<span className='font-weight-bold'>/Dashboard1/profile.html </span>,'1,795','190',<i className="ri-arrow-down-fill text-danger mr-3"><span className="text-dark pl-1">46,53%</span></i>],
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
        let { dropdownAction, activeUser, chart9, overViewCards, viewAll, analyticsNav, chart6, countriesProgress, chart12, pageVisitTable} = this.state;
        return (
            <>
                <div className="right-sidebar-mini">
                    <div className="right-sidebar-toggle">
                        <i className="ri-arrow-left-line side-left-icon" />
                        <i className="ri-arrow-right-line side-right-icon" />
                    </div>
                    <div className="right-sidebar-panel p-0">
                        <div className="iq-card shadow-none">
                            <div className="iq-card-header d-flex justify-content-between">
                                <div className="iq-header-title">
                                    <h6 className="card-title">Active Users</h6>
                                </div>
                                <div className="iq-card-header-toolbar d-flex align-items-center">
                                    <DropdownStyle1
                                        id="dropdownMenuButton"
                                        arrowClass="ri-more-2-fill font-size-20"
                                        menuClass="dropdown-menu-right"
                                        items={dropdownAction}
                                    />
                                </div>
                            </div>
                            <div className="iq-card-body">
                                {
                                    activeUser.map((item,index) => (
                                        <div key={index} className={"media align-items-center"+ (activeUser.length-1 === index ? " mb-4" : '')}>
                                            <div className={"iq-profile-avatar "+activeUser.statusClass}>
                                                <img className="rounded-circle avatar-60" src={activeUser.image} alt="" />
                                            </div>
                                            <div className="media-body ml-3">
                                                <h6 className="mb-0">
                                                    <a href='!#'>{activeUser.title}</a>
                                                </h6>
                                                <p className="mb-0">{activeUser.role}</p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row row-eq-height">
                    <div className="col-lg-4">
                        <div className="iq-card">
                            <div className="iq-card-body">
                                <div className="row">
                                    <div className="col">
                                        <h5 className="card-title text-uppercase text-secondary mb-0 d-block"> Live Users </h5>
                                        <h2 className="mb-0 d-block">350</h2>
                                    </div>
                                    <div className="col-auto">
                                        <div className="icon iq-icon-box rounded-circle iq-bg-primary rounded-circle">
                                            <i className="ri-add-box-line" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ApexLiveChart
                                element="chart-9"
                                chartOption={chart9}
                                speed='1000'
                            />
                        </div>
                    </div>
                    {
                        overViewCards.map((card,index) => (
                            <div key={index} className="col-lg-2 col-md-6">
                                <CardStyle4
                                    icon={card.icon}
                                    iconClass={card.iconClass}
                                    text={card.text}
                                    counter={card.counter}
                                    updown={card.updown}
                                />
                            </div>
                        ))
                    }
                </div>

                <div className="row row-eq-height">
                    <div className="col-lg-8 col-md-12">
                        <div className="iq-card" data-wow-delay="0.8s">
                            <div className="iq-card-header d-flex justify-content-between">
                                <div className="iq-header-title">
                                    <h4 className="card-title">Analytics</h4>
                                </div>
                                <div className="iq-card-header-toolbar d-flex align-items-center">
                                    <NavPillStyle1
                                        items={analyticsNav}
                                    />
                                </div>
                            </div>
                            <div className="iq-card-body p-0">
                                <MapAmChart
                                    element="amchart-1"
                                    height="500px"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <div className="iq-card " data-wow-delay="0.6s">
                            <div className="iq-card-header d-flex justify-content-between">
                                <div className="iq-header-title">
                                    <h4 className="card-title">Devices</h4>
                                </div>
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
                            </div>
                            <div className="iq-card-body">
                                <ApexChart
                                    element="chart-6"
                                    chartOption={chart6 }
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row row-eq-height">
                    <div className="col-md-12 col-lg-8 mb-5 mb-xl-0">
                        <div className="iq-card " data-wow-delay="0.8s">
                            <div className="iq-card-header d-flex justify-content-between">
                                <div className="iq-header-title">
                                    <h4 className="card-title">Page visits</h4>
                                </div>
                                <div className="iq-card-header-toolbar d-flex align-items-center">
                                    <DropdownStyle1
                                        title="See All"
                                        id="dropdownMenuButton1"
                                        arrowClass="ri-arrow-down-s-line ml-1 text-primary"
                                        mainClass="dropdown-bg"
                                        color="primary"
                                        menuClass="dropdown-menu-right shadow-none"
                                        items={viewAll}
                                    />
                                </div>
                            </div>
                            <div className="iq-card-body">
                                <div className="table-responsive">
                                    <TableStyle1
                                        tableClass="table align-items-center table-flush"
                                        header={pageVisitTable.header}
                                        body={pageVisitTable.body}
                                        theadClass="thead-light"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="iq-card " data-wow-delay="0.8s">
                            <div className="iq-card-header d-flex justify-content-between">
                                <div className="iq-header-title">
                                    <h4 className="card-title">COUNTRIES</h4>
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
                                <div className="row">
                                    <div className="col-lg-12">
                                        {
                                            countriesProgress.map((progress,index) => (
                                                <div key={index} className={"iq-details "+(index === 0 ? '' : 'mt-4')}>
                                                    <ProgressBarStyle2
                                                        title={progress.title}
                                                        colour={progress.colour}
                                                        percentage={progress.percentage}
                                                    />
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                            <ApexChart
                                element="chart-12"
                                chartOption={chart12}
                            />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Index;
