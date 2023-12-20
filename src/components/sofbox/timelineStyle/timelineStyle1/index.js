import React from 'react';
import {Link} from "react-router-dom";

const Index = (props) => {
    return (
        <li>
            <div className={"timeline-dots "+ props.timelineDot} />
            { props.title ? <h6 className="float-left mb-1">{ props.title }</h6> : '' }
            { props.subTitle ? <small className="float-right mt-1">{ props.subTitle }</small> : '' }
            { props.description || props.mediaGroup ?
                <div className="d-inline-block w-100">
                    { props.description ? <p>{ props.description }</p> : '' }
                    { props.mediaGroup ?
                    <div className="iq-media-group">
                        {
                            props.mediaGroup.map((item,index) => (
                                <Link key={index} to={item.href ? item.href : '#'} className="iq-media">
                                    <img className={"img-fluid avatar-40 rounded-circle "+item.imgClass} src={item.image} alt="" />
                                </Link>
                            ))
                        }
                    </div>
                    : '' }
                </div>
            : '' }
        </li>
    )
};

export default Index;