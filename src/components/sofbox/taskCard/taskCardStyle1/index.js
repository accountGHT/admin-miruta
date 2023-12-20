import React from 'react';

const Index = (props) => {
    let list=props.items;
    return (
        <>
            {list.map((item,index) => (
                <div key={index} className="d-flex tasks-card" role="alert">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id={"customCheck"+(parseInt(props.startId+index))} />
                        <label className="custom-control-label" htmlFor={"customCheck"+(parseInt(props.startId+index))} >{item.text}</label>
                    </div>
                    {props.closable ? <button type="button" className="close ml-auto" data-dismiss="alert" aria-label="Close"> <i className="ri-close-line" /> </button> : ''}
                </div>
            ))}
        </>
    );
};
export default Index;