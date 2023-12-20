import React from 'react';
import { Link } from "react-router-dom";

import { BreadCrumbStyle1 } from '../../index';

const index = (props) => {
    return (
        <>
            <div className="iq-top-navbar" style={props.dark ? { background: "#151b21", color: "#ffffff" } : {}}>
                <div className="iq-navbar-custom">
                    <div className="iq-sidebar-logo">
                        <div className="top-logo">
                            <Link to="/" className="logo">
                                <img src={require("../../../../assets/images/logo.png")} className="img-fluid" alt="" />
                                <span>Sofbox</span>
                            </Link>
                        </div>
                    </div>
                    {/* <div className="navbar-breadcrumb">
                        <h5>{ props.title }</h5>
                        <BreadCrumbStyle1 items={ props.breadCrumb } />
                    </div> */}
                    <ul className="navbar navbar-expand-lg navbar-light p-0 mb-0">
                        {props.children}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default index;

