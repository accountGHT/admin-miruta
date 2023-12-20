import React from "react";

const Index = props => {
    const { timeData, color } = props;
    return (
        <>
            <div className={"timeline-dots " + (color !== undefined ?  ("border-" + color) : "")} />
            <h6 className={"float-left mb-1"}>{ timeData.title }</h6>
            <small className={"float-right mt-1"}>{ timeData.date }</small>
            <div className={"d-inline-block w-100"}>
                <p>{ timeData.description }</p>
                { props.children }
            </div>
        </>
    )
};

export default Index;
