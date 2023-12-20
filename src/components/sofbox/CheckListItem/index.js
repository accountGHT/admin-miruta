import React from 'react';

const Index = (props) => {
    let list=props.items;
    return (
        <>
            {list.map((item,index) => (
                <li key={index}><i className="fa fa-check-square-o"></i> <span>{item}</span></li>
            ))}
        </>
    );
};
export default Index;