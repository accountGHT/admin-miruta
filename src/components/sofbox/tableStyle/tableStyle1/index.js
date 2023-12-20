import React from 'react';
import {Table} from "reactstrap";

const Thead = (props) => {
    return (
        <thead className={props.theadClass}>
            <tr>
                {
                    props.head.map((item,index) => (
                        <th scope="col" key={index}>{item}</th>
                    ))
                }
            </tr>
        </thead>
    );
};

const Tbody = (props) => {
    return (
        <tbody className={props.tbodyClass}>
        {
            props.body.map((item,index) => (
                <tr key={index}>
                    {
                        item.map((row,indexNew) => (
                            <td key={indexNew}>{row}</td>
                        ))
                    }
                </tr>
            ))
        }
        </tbody>
    )
};

const Tfooter = (props) => {
    return (
        <tfoot className={props.tfootClass}>
            <tr>
                {
                    props.footer.map((item,index) => (
                        <th key={index}>{props.item}</th>
                    ))
                }
            </tr>
        </tfoot>
    )
};

const Index = (props) => {
    return (
        <Table className={props.tableClass} >
            { props.header && <Thead head={props.header} theadClass={props.theadClass} />}
            { props.body && <Tbody body={props.body} tbodyClass={props.tbodyClass} />}
            { props.footer && <Tfooter footer={props.footer} tfootClass={props.tfootClass} />}
        </Table>
    )
};

export default Index;