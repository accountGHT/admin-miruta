import React from 'react';

const Index = (props) => {
    return (
        <>
            <ul className="list-inline mb-0 d-flex justify-content-between">
                {
                    props.data.map((card,index) => (
                        <li key={index} className="list-inline-item">
                            <h5>{card.title}</h5>
                            <p className={card.dataClass}>{card.data}</p>
                        </li>
                    ))
                }
            </ul>
        </>
    )
};

export default Index;