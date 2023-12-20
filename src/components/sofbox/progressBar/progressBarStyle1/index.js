import React from 'react';
import Progress from "reactstrap/lib/Progress";

const Index = (props) => {
    return (
        <>
            {props.upDown}
            { props.title ? <span className="font-size-14">{props.title}</span> : '' }
            {props.count && props.countTag==="h2" ? <h2>{props.count}</h2> : <h3>{props.count}</h3> }
            <div className="iq-progress-bar-linear d-inline-block w-100 float-left mt-3">
                <Progress className="iq-progress-bar" color={props.progressClass} value={props.percentage} />
            </div>
        </>
    )
};

export default Index;