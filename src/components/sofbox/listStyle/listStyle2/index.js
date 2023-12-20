import React from 'react';

const Index = (props) => {
    return (
        <>
            <ul className={props.ulClass}>
                { props.list ?
                    props.list.map((item,index) => (
                        <li key={index} className={props.liClass}>{item}</li>
                    ))
                    : ''
                }
            </ul>
        </>
    )
};

export default Index;