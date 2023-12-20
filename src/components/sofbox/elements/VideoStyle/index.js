import React from 'react';
/*import { Card, CardImg } from 'reactstrap';*/
/*import { Link } from "react-router-dom";*/

const index = (props) => {
    return (
        <>
            <div className={props.class}>
                <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
                        allowFullScreen title="video" />
            </div>
        </>
    );
};

export default index;
