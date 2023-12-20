import React from 'react';
import { Link } from "react-router-dom";

import { BreadCrumbStyle1 } from '../../index';

const index = (props) => {
    return (
        <>
            <div className="iq-top-navbar">
                <div className="iq-navbar-custom">
                    <div className="iq-sidebar-logo">
                        <Link to={ props.homeUrl }>
                            <img src={ props.logo } className="img-fluid" alt=""/>
                        </Link>
                        <div className="iq-menu-bt">
                            <div className="wrapper-menu">
                                <div className="line-menu half start" />
                                <div className="line-menu" />
                                <div className="line-menu half end" />
                            </div>
                        </div>
                    </div>
                    <div className="navbar-breadcrumb">
                        <h5>{ props.title }</h5>
                        <BreadCrumbStyle1 items={ props.breadCrumb } />
                    </div>
                    <ul className="navbar-list">
                        { props.children }
                    </ul>
                </div>
            </div>
        </>
    );
};

export default index;
