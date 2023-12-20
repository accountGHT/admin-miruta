import React from 'react';
import { Card, CardImg } from 'reactstrap';
/*import { Link } from "react-router-dom";*/

const index = (props) => {
    return (
        <>
           <div className="col-lg-6">
               <Card className={"iq-mb-3"+(props.cardClass ? props.cardClass :'')} >
                   <div className={"row "+ props.rowClass}>
                        <div className="col-md-4">
                             <CardImg src={props.img} className="card-img" />
                        </div>
                        {props.children}
                   </div>
               </Card>
           </div>
        </>
    );
};

export default index;
