import React from 'react';

const Index = (props) => {
    return (
        <div className={props.divClass}>
            {(props.title || props.titleClass) ? (<h2 className={props.titleClass}>{props.title}</h2>) : ''}
            {(props.description || props.descriptionClass) ? (<p className={props.descriptionClass}>{props.description}</p>) : ''}
            {(props.btnText || props.btnClass) ? (<button type="button" className={props.btnClass}>{props.btnText}</button>) : ''}
        </div>
    )
};

export default Index;