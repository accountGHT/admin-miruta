import React from 'react';
import Progress from "reactstrap/lib/Progress";

const Index = (props) => {
    return (
        <>
            <span className="title text-dark">{props.title}</span>
            <div className={"percentage float-right text-"+props.colour}>{props.percentage} <span>%</span></div>
            <div className="iq-progress-bar-linear d-inline-block w-100">
                <Progress className="iq-progress-bar" color={props.colour} value={props.percentage} />
            </div>
        </>
    )
};

export default Index;