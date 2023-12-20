import React from 'react';
import Progress from "reactstrap/lib/Progress";

const Index = (props) => {
    return (
        <>
            {props.upDown}
            { props.title ? <span className="font-size-14">{props.title}</span> : '' }
            {props.count && props.countTag==="h2" ? <h2>{props.count}</h2> : <h3>{props.count}</h3> }
            <Progress multi className="mt-3">
                {
                    props.items.map((progress,index) => (
                        <Progress key={index} bar color={progress.colour} value={progress.percentage}  max={progress.max ? progress.max : 100}/>
                    ))
                }
            </Progress>
        </>
    )
};

export default Index;