import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from "react-router-dom";

const index = (props) => {
    return (
        <>
            <Breadcrumb>
                { props.items.map((item, index) => (
                    <BreadcrumbItem key={index}>
                        { item.active ? (
                            <> { item.text } </>
                        ) : (
                            <Link to={ item.href }>{ item.text }</Link>
                        ) }
                    </BreadcrumbItem>
                )) }
            </Breadcrumb>


        </>
    );
};

export default index;
