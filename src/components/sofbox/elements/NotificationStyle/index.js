import React from 'react';
/*import { Card, CardImg } from 'reactstrap';*/
/*import { Link } from "react-router-dom";*/

const index = (props) => {
    return (
        <>
            <div className="toast-header">
                <svg className="bd-placeholder-img rounded mr-2" width="20" height="20"
                     xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false"
                     role="img">
                    <rect width="100%" height="100%" fill="#007aff"/>
                </svg>
                <strong className="mr-auto">{props.tost_header}</strong>
                <small>{props.mint}</small>
                <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </div>
            <div className="toast-body">
                {props.tost_body}
            </div>
        </>
    );
};

export default index;
