import React from 'react';
import {index} from '../../../config/pluginsInit';
import Row from "reactstrap/lib/Row";
import Col from "reactstrap/lib/Col";
import Card from "reactstrap/lib/Card";
import CardBody from "reactstrap/lib/CardBody";
import data2Json from "../../../assets/images/small/data2";
import days from "../../../config/days";
import screenSheets from "../../../config/screenSheet";
import {Lottie, SlickSliderStyle1} from "../../../components/sofbox";
import BlackSheet from '../../../assets/images/small/04.svg';
import WhiteSheet from '../../../assets/images/small/05.svg';

class CinemaSheet extends React.Component{
    render() {
        let panelElements = [], statusElements = [], sheetElements = [];
        for(let i=0;i<screenSheets.panel.length;i++){
            if(screenSheets.panel[i].titleClass !== ''){
                panelElements.push(<li key={i} className={screenSheets.panel[i].titleClass} />);
            }else{
                panelElements.push(<li key={i}>{screenSheets.panel[i].title}</li>);
            }
        }
        for(let i=0;i<screenSheets.status.length;i++){
            statusElements.push(<div key={i} className="iq-booking-status"><span className={screenSheets.status[i].color} />{screenSheets.status[i].title} </div>);
        }
        for(let i=0;i<screenSheets.sheet.length;i++){
            sheetElements.push(<span key={i} className={"d-inline-block w-100 pb-3 "+(i===0 ? '' : 'mt-4 pt-1 border-top')}>{screenSheets.sheet[i].title}</span>);
            for(let j=0;j<screenSheets.sheet[i].row.length;j++){
                let row=[];
                let currentRow=screenSheets.sheet[i].row[j];
                if(currentRow.isIndexRow){
                    for(let k=0;k<19;k++){
                        if(currentRow.empty[0]===k){
                            row.push(<li key={i+'-'+j+'-'+k} className="list-inline-item li-blank" />);
                        }else if(currentRow.empty[0]<k){
                            row.push(<li key={i+'-'+j+'-'+k} className="list-inline-item">{k}</li>);
                        }else{
                            row.push(<li key={i+'-'+j+'-'+k} className="list-inline-item">{k+1}</li>);
                        }
                    }
                }else{
                    for(let k=0;k<19;k++){
                        if(currentRow.empty.indexOf(k) !== -1){
                            row.push(<li key={i+'-'+j+'-'+k} className="list-inline-item li-blank" />);
                        }
                        else if (currentRow.disable.indexOf(k) !== -1){
                            row.push(<li key={i+'-'+j+'-'+k} className="list-inline-item">
                                    <span className="iq-seat bg-secondary">
                                       <img src={BlackSheet} alt="" className="default" />
                                        <img src={WhiteSheet} alt="" className="active-seat" />
                                    </span>
                            </li>);
                        }else{
                            row.push(<li key={i+'-'+j+'-'+k} className="list-inline-item">
                                <a href={"!#"} className="iq-seat">
                                    <img src={BlackSheet} alt="" className="default" />
                                    <img src={WhiteSheet} alt="" className="active-seat" />
                                </a>
                            </li>);
                        }
                    }
                }
                sheetElements.push(<ul key={i+'-'+j} className={"list-inline iq-booking-no "+((i===0 && j===0)||(i===screenSheets.status.length-1 && j===screenSheets.sheet[i].row.length-1) ? '' : 'mt-3')}>{row}</ul>);
            }
        }

        return (
            <>
                <div className="row mt-5 pt-3 seat-booking">
                    <div className="col-lg-1 col-md-1 col-sm-1 text-right">
                        <ul className="list-unstyled iq-booking-ab">
                            {panelElements}
                        </ul>
                    </div>
                    <div className="col-lg-10 col-md-10 col-sm-10 text-center">
                        {sheetElements}
                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-1 text-left">
                        <ul className="list-unstyled iq-booking-ab">
                            {panelElements}
                        </ul>
                    </div>
                    <div className="col-lg-12 col-md-10 col-sm-10 text-center mt-3">
                        {statusElements}
                    </div>
                </div>
            </>
        );
    }
}

class Index extends React.Component {

    componentDidMount() {
        setTimeout(function () {
            index();
        },800);
    }

    render() {
        return (
            <>
                <Row>
                    <Col lg="12">
                        <Card className="iq-card">
                            <CardBody className="iq-card-body">
                                <div className="iq-booking-index">
                                    <div className="iq-booking-offer iq-bg-primary">
                                        <Row className="justify-content-between">
                                            <Col lg="6" className="position-relative">
                                                <Lottie className="offer-an-img" data={data2Json} />
                                            </Col>
                                            <Col lg="6">
                                                <h2>30% Discount For 5 Tickets!</h2>
                                                <p className="text-secondary">
                                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, type and it to make a type specimen book.
                                                </p>
                                                <a href="!#" className="btn btn-primary mt-3">
                                                    Learn more <i className="ri-arrow-right-line ml-2" />
                                                </a>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="pt-4">
                                        <SlickSliderStyle1
                                            slidesToShow="9"
                                        >
                                            {
                                                days.map((item,index) => (
                                                    <div key={index}>
                                                        <a href="!#" className="iq-booking-date">
                                                            <div className="iq-booking-dot" />
                                                            <h3>{item.date}<small className="d-inline-block w-100">{item.day}</small></h3>
                                                        </a>
                                                    </div>
                                                ))
                                            }
                                        </SlickSliderStyle1>
                                    </div>
                                    <div className="iq-booking-screen">
                                        <div className="text-center">
                                            <img src={require('../../../assets/images/screen.png')} className="w-100" alt="" />
                                            <span>All eyes this way please!</span>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <CinemaSheet />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <div className="iq-sidebar-right-menu hide">
                    <div id="right-sidebar-scrollbar">
                        <div className="iq-sidebar-booking bg-primary">
                            <h4 className="text-white d-inline-block mb-4">Booking Summary</h4>
                            <a href="!#" className="float-right text-white font-size-18"><i className="ri-close-circle-line" /></a>
                            <div className="iq-booking-ticket">
                                <dl className="row line-height-4">
                                    <dt className="col-sm-4 font-weight-normal font-size-16 text-dark">Nioking</dt>
                                    <dd className="col-sm-8 mb-0">20th jan, 20:00</dd>
                                    <dt className="col-sm-4 font-weight-normal text-dark">Avengers</dt>
                                    <dd className="col-sm-8 mb-0">HK5894J</dd>
                                    <dt className="col-sm-4 font-weight-normal text-dark">SCREEN2</dt>
                                    <dd className="col-sm-8 mb-0">D17, D18, D19 (3 Tickets)</dd>
                                </dl>
                                <hr className="mt-4 d-inline-block w-100" />
                                <img src={require('../../../assets/images/booking/02.jpg')} className="w-100" alt="" />
                            </div>
                            <span className="font-size-12 text-white mt-2 d-inline-block w-100">Your current state is Maharashtra</span>
                        </div>
                        <div className="iq-sidebar-payment">
                            <h4 className="mb-4">Payment Method</h4>
                            <img src={require('../../../assets/images/booking/03.png')} className="w-100" alt="" />
                            <div className="custom-control custom-checkbox mt-4 ml-1">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <label className="custom-control-label" htmlFor="customCheck1">Pay With Cash</label>
                            </div>
                            <div className="mb-5 d-inline-block w-100">
                                <a className="btn btn-primary btn-lg btn-block mt-3 mb-5" href="!#"
                                   role="button">Checkout</a>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Index;