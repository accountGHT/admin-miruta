import React from 'react';
import {DropdownMenu, DropdownToggle} from "reactstrap";
import {Link} from "react-router-dom";

const Index = (props) => {
    return (
        <>
            <DropdownToggle tag="span" className={"dropdown-toggle "+props.mainClass} id={props.id} data-toggle="dropdown">
                {props.title}
                <i className={props.arrowClass} />
            </DropdownToggle>
            <DropdownMenu className={props.menuClass} aria-labelledby={props.id}>
                {props.items.map((item,index) =>(
                    <Link key={index} to={item.link ? item.link : '#'} className="dropdown-item">
                        {item.text}
                    </Link>
                ))}
            </DropdownMenu>
        </>
    )
};

export default Index;