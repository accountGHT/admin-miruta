import React from 'react';
import {  NavLink } from "react-router-dom";
import { MenuListStyle1 } from "../../index";
import { getActiveLink } from "../../../../config/pluginsInit";

const ListStyle = (props) => {

    const { items, className } = props;

    return (

        <ul className={className} id={props.id} data-parent={props.dataParent}>
            {items.map((subItem, subIndex) => (
                < li key={subIndex + "submenu"} className={(subItem.is_heading) ? "iq-menu-title" : "" + (subItem.is_active === true ? " active show" : "") + (getActiveLink(subItem) ? "active" : "")}>
                    {
                        (subItem.is_heading) ?
                            (
                                <>
                                    {
                                        <span>{subItem.title}</span>
                                    }
                                </>
                            ) :
                            (
                                (subItem.link !== undefined) ? (
                                    <NavLink to={subItem.link} className={"iq-waves-effect  " + getActiveLink(subItem) && subItem.children ? 'active' : getActiveLink(subItem) ? 'active' : ''}>
                                        {subItem.icon && (<i className={subItem.icon} />)}
                                        <span>{subItem.title}</span>
                                    </NavLink>
                                )
                                    :
                                    (
                                        <a href={"!#"} className="iq-waves-effect collapsed" data-toggle="collapse" data-target={"#" + subItem.name} aria-expanded="false">
                                            {subItem.icon && (<i className={subItem.icon} />)}
                                            <span>{subItem.title}</span>

                                            {(subItem.children !== undefined && subItem.children.length > 0) && (<i className="ri-arrow-right-s-line iq-arrow-right" />)}
                                        </a>
                                    )
                            )}
                    {(subItem.children !== undefined && subItem.children.length > 0) && (
                        <MenuListStyle1 items={subItem.children} className={"iq-submenu collapse " + subItem.className ?? ''} id={subItem.name} dataParent={subItem.class_name !== undefined && subItem.class_name !== '' ? '' : '#iq-sidebar-toggle'} />
                    )}
                </li>
            ))
            }
        </ul >
    );
};
export default ListStyle;
