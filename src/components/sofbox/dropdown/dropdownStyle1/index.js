import React, { useState } from 'react';
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from "reactstrap";

const Index = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);
    return (
        <>
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle color={props.color ? props.color : 'success'} className={"border-0 "+props.mainClass} id={props.id}>
                    {props.title}
                    { props.arrowClass ? (<i className={props.arrowClass} />) : '' }
                </DropdownToggle>
                <DropdownMenu>
                    {props.items.map((item,index) =>(
                        <DropdownItem key={index}>
                            {item.icon ? (<i className={item.icon} />) : '' } {item.text}
                        </DropdownItem>
                    ))}
                </DropdownMenu>
            </Dropdown>
        </>
    )
};

export default Index;