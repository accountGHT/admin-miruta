import React from 'react';
import { Badge } from 'reactstrap';

const index = (props) => {
    return (
        <>
            { (props.status === "pending") && (<Badge color="warning">Pending</Badge>) }
            { (props.status === "closed") && (<Badge color="danger">Closed</Badge>) }
            { (props.status === "open") && (<Badge color="primary">Open</Badge>) }
            { (props.status === "working") && (<Badge color="warning">Working</Badge>) }
        </>
    );
};

export default index;