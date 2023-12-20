import React from 'react';
import { Card, CardImg,CardBody, CardFooter} from 'reactstrap';
/*import { Link } from "react-router-dom";*/
const index = (props) => {
    return (
        <>
            <Card>
                <CardImg src={require("../../../../assets/images/page-img/07.jpg")} class="card-img-top" alt="#" />
                <CardBody>
                    <h4 className="card-title">Card title</h4>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </CardBody>
                <CardFooter>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </CardFooter>
             </Card>
        </>
    );
};

export default index;
