import React from 'react';

const Index = (props) => {
    return (
        <>
            <ul className={"nav nav-pills "+props.menuClass}>
                {
                    props.items.map((item,index) => (
                        <li key={index} className="nav-item">
                            <a href={item.href ? item.href : '#'} className={"nav-link "+item.className+' '+(index===0 ? "active" : '')}>{item.text}</a>
                        </li>
                    ))
                }
            </ul>
        </>
    )
};

export default Index;