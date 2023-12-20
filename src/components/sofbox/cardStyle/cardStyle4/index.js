import React from 'react';

const Index = (props) => {
    return(
        <>
            <div className="iq-card ">
                <div className="iq-card-body">
                    <div className="row">
                        <div className="col-lg-12 mb-2 d-flex justify-content-between">
                            <div className={"icon iq-icon-box rounded-circle rounded-circle "+props.iconClass}>
                                <i className={props.icon}></i>
                            </div>
                        </div>
                        <div className="col-lg-12 mt-3">
                            <h6 className="card-title text-uppercase text-secondary mb-0">{props.text}</h6>
                            <span className="h2 text-dark mb-0 counter">{props.counter}</span>
                        </div>
                    </div>
                    {props.updown ? (<p className="mb-0 text-muted mt-3">{props.updown}</p>) : ''}
                </div>
            </div>
        </>
    )
};

export default Index;
