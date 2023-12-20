import React from "react";
import {Card, CardBody, CardHeader, CardTitle, Col, Row, UncontrolledCollapse} from "reactstrap";
import {index} from "../../../config/pluginsInit";
import DataTable from "react-data-table-component";

class ExpandedComponent extends React.Component{
    render() {
        return(
            <pre>{JSON.stringify(this.props, null, 2)}</pre>
        )
    }
}

class Index extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            tableData:{
                header:[
                    {
                        name:"Name",
                        selector:"name",
                        sortable:true,
                    },
                    {
                        name:"Position",
                        selector:"position",
                        sortable:true,
                    },
                    {
                        name:"Office",
                        selector:"office",
                        sortable:true,
                    },
                    {
                        name:"Age",
                        selector:"age",
                        sortable:true,
                    },
                    {
                        name:"Start date",
                        selector:"start_date",
                        sortable:true,
                    },
                    {
                        name:"Salary",
                        selector:"salary",
                        sortable:true,
                    },
                ],
                body:[
                    {
                        "name": "Tiger Nixon",
                        "position": "System Architect",
                        "office": "Edinburgh",
                        "age": "61",
                        "start_date": "2011/04/25",
                        "salary": "$320,800"
                    },
                    {
                        "name": "Garrett Winters",
                        "position": "Accountant",
                        "office": "Tokyo",
                        "age": "63",
                        "start_date": "2011/07/25",
                        "salary": "$170,750"
                    },
                    {
                        "name": "Ashton Cox",
                        "position": "Junior Technical Author",
                        "office": "San Francisco",
                        "age": "66",
                        "start_date": "2009/01/12",
                        "salary": "$86,000"
                    },
                    {
                        "name": "Cedric Kelly",
                        "position": "Senior Javascript Developer",
                        "office": "Edinburgh",
                        "age": "22",
                        "start_date": "2012/03/29",
                        "salary": "$433,060"
                    },
                    {
                        "name": "Airi Satou",
                        "position": "Accountant",
                        "office": "Tokyo",
                        "age": "33",
                        "start_date": "2008/11/28",
                        "salary": "$162,700"
                    },
                    {
                        "name": "Brielle Williamson",
                        "position": "Integration Specialist",
                        "office": "New York",
                        "age": "61",
                        "start_date": "2012/12/02",
                        "salary": "$372,000"
                    },
                    {
                        "name": "Herrod Chandler",
                        "position": "Sales Assistant",
                        "office": "San Francisco",
                        "age": "59",
                        "start_date": "2012/08/06",
                        "salary": "$137,500"
                    },
                    {
                        "name": "Rhona Davidson",
                        "position": "Integration Specialist",
                        "office": "Tokyo",
                        "age": "55",
                        "start_date": "2010/10/14",
                        "salary": "$327,900"
                    },
                    {
                        "name": "Colleen Hurst",
                        "position": "Javascript Developer",
                        "office": "San Francisco",
                        "age": "39",
                        "start_date": "2009/09/15",
                        "salary": "$205,500"
                    },
                    {
                        "name": "Sonya Frost",
                        "position": "Software Engineer",
                        "office": "Edinburgh",
                        "age": "23",
                        "start_date": "2008/12/13",
                        "salary": "$103,600"
                    },
                    {
                        "name": "Jena Gaines",
                        "position": "Office Manager",
                        "office": "London",
                        "age": "30",
                        "start_date": "2008/12/19",
                        "salary": "$90,560"
                    },
                    {
                        "name": "Quinn Flynn",
                        "position": "Support Lead",
                        "office": "Edinburgh",
                        "age": "22",
                        "start_date": "2013/03/03",
                        "salary": "$342,000"
                    },
                    {
                        "name": "Charde Marshall",
                        "position": "Regional Director",
                        "office": "San Francisco",
                        "age": "36",
                        "start_date": "2008/10/16",
                        "salary": "$470,600"
                    },
                    {
                        "name": "Haley Kennedy",
                        "position": "Senior Marketing Designer",
                        "office": "London",
                        "age": "43",
                        "start_date": "2012/12/18",
                        "salary": "$313,500"
                    },
                    {
                        "name": "Tatyana Fitzpatrick",
                        "position": "Regional Director",
                        "office": "London",
                        "age": "19",
                        "start_date": "2010/03/17",
                        "salary": "$385,750"
                    },
                    {
                        "name": "Michael Silva",
                        "position": "Marketing Designer",
                        "office": "London",
                        "age": "66",
                        "start_date": "2012/11/27",
                        "salary": "$198,500"
                    },
                    {
                        "name": "Paul Byrd",
                        "position": "Chief Financial Officer (CFO)",
                        "office": "New York",
                        "age": "64",
                        "start_date": "2010/06/09",
                        "salary": "$725,000"
                    },
                    {
                        "name": "Gloria Little",
                        "position": "Systems Administrator",
                        "office": "New York",
                        "age": "59",
                        "start_date": "2009/04/10",
                        "salary": "$237,500"
                    },
                    {
                        "name": "Bradley Greer",
                        "position": "Software Engineer",
                        "office": "London",
                        "age": "41",
                        "start_date": "2012/10/13",
                        "salary": "$132,000"
                    },
                    {
                        "name": "Dai Rios",
                        "position": "Personnel Lead",
                        "office": "Edinburgh",
                        "age": "35",
                        "start_date": "2012/09/26",
                        "salary": "$217,500"
                    },
                    {
                        "name": "Jenette Caldwell",
                        "position": "Development Lead",
                        "office": "New York",
                        "age": "30",
                        "start_date": "2011/09/03",
                        "salary": "$345,000"
                    },
                    {
                        "name": "Yuri Berry",
                        "position": "Chief Marketing Officer (CMO)",
                        "office": "New York",
                        "age": "40",
                        "start_date": "2009/06/25",
                        "salary": "$675,000"
                    },
                    {
                        "name": "Caesar Vance",
                        "position": "Pre-Sales Support",
                        "office": "New York",
                        "age": "21",
                        "start_date": "2011/12/12",
                        "salary": "$106,450"
                    },
                    {
                        "name": "Doris Wilder",
                        "position": "Sales Assistant",
                        "office": "Sydney",
                        "age": "23",
                        "start_date": "2010/09/20",
                        "salary": "$85,600"
                    },
                    {
                        "name": "Angelica Ramos",
                        "position": "Chief Executive Officer (CEO)",
                        "office": "London",
                        "age": "47",
                        "start_date": "2009/10/09",
                        "salary": "$1,200,000"
                    },
                    {
                        "name": "Gavin Joyce",
                        "position": "Developer",
                        "office": "Edinburgh",
                        "age": "42",
                        "start_date": "2010/12/22",
                        "salary": "$92,575"
                    },
                    {
                        "name": "Jennifer Chang",
                        "position": "Regional Director",
                        "office": "Singapore",
                        "age": "28",
                        "start_date": "2010/11/14",
                        "salary": "$357,650"
                    },
                    {
                        "name": "Brenden Wagner",
                        "position": "Software Engineer",
                        "office": "San Francisco",
                        "age": "28",
                        "start_date": "2011/06/07",
                        "salary": "$206,850"
                    },
                    {
                        "name": "Fiona Green",
                        "position": "Chief Operating Officer (COO)",
                        "office": "San Francisco",
                        "age": "48",
                        "start_date": "2010/03/11",
                        "salary": "$850,000"
                    },
                    {
                        "name": "Shou Itou",
                        "position": "Regional Marketing",
                        "office": "Tokyo",
                        "age": "20",
                        "start_date": "2011/08/14",
                        "salary": "$163,000"
                    },
                ],
            }
        };
    }

    componentDidMount() {
        setTimeout(function () {
            index();
        },800);
    }

    render() {
        let { tableData } = this.state;
        return (
            <Row>
                <Col sm="12">
                    <Card className="iq-card">
                        <CardHeader className="iq-card-header d-flex justify-content-between">
                            <CardTitle className="iq-header-title">
                                <h4 className="card-title">React Datatable</h4>
                            </CardTitle>
                            <span className="text-primary float-right" id="collapse1">
                                <i className="ri-code-s-slash-line" />
                            </span>
                        </CardHeader>
                        <CardBody className="iq-card-body">
                            <UncontrolledCollapse toggler="#collapse1">
                                <Card>
                                    <kbd className="bg-dark">
                                            <span data-copy-target="#basic-table1" title="Copy"
                                                  data-toggle="tooltip" className="float-right"
                                                  data-copy="true">
                                                Copy
                                            </span>
                                        <pre className="text-white">
                                                <code id="basic-table1">{`
                                                
//---------------------------------- basic table ---------------------------------------------
<DataTable
    columns={tableData.header}
    data={tableData.body}
    pagination
/>

                                                    `}
                                                </code>
                                            </pre>
                                    </kbd>
                                </Card>
                            </UncontrolledCollapse>
                            <p>
                                React Data Table Component makes it easy to use. It has <code> pagination </code> attribute for adding the pagination. It's also set responsive by default.
                            </p>
                            <DataTable
                                columns={tableData.header}
                                data={tableData.body}
                                pagination
                            />
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="12">
                    <Card className="iq-card">
                        <CardHeader className="iq-card-header d-flex justify-content-between">
                            <CardTitle className="iq-header-title">
                                <h4 className="card-title">Fix Header Datatables</h4>
                            </CardTitle>
                            <span className="text-primary float-right" id="collapse2">
                                <i className="ri-code-s-slash-line" />
                            </span>
                        </CardHeader>
                        <CardBody className="iq-card-body">
                            <UncontrolledCollapse toggler="#collapse2">
                                <Card>
                                    <kbd className="bg-dark">
                                            <span data-copy-target="#basic-table1" title="Copy"
                                                  data-toggle="tooltip" className="float-right"
                                                  data-copy="true">
                                                Copy
                                            </span>
                                        <pre className="text-white">
                                                <code id="basic-table1">{`
                                                
//---------------------------------- basic table ---------------------------------------------
<DataTable
    columns={tableData.header}
    data={tableData.body}
    fixedHeader
    fixedHeaderScrollHeight="450px"
/>

                                                    `}
                                                </code>
                                            </pre>
                                    </kbd>
                                </Card>
                            </UncontrolledCollapse>
                            <p>
                                To fix the header to top it has attribute <code> fixedHeader </code> and for setting up the scrollable portion height it has attribute <code> fixedHeaderScrollHeight="500px" </code> (height in px).
                            </p>
                            <DataTable
                                columns={tableData.header}
                                data={tableData.body}
                                fixedHeader
                                fixedHeaderScrollHeight="450px"
                            />
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="12">
                    <Card className="iq-card">
                        <CardHeader className="iq-card-header d-flex justify-content-between">
                            <CardTitle className="iq-header-title">
                                <h4 className="card-title">Bootstrap Datatables</h4>
                            </CardTitle>
                            <span className="text-primary float-right" id="collapse3">
                                <i className="ri-code-s-slash-line" />
                            </span>
                        </CardHeader>
                        <CardBody className="iq-card-body">
                            <UncontrolledCollapse toggler="#collapse3">
                                <Card>
                                    <kbd className="bg-dark">
                                            <span data-copy-target="#basic-table1" title="Copy"
                                                  data-toggle="tooltip" className="float-right"
                                                  data-copy="true">
                                                Copy
                                            </span>
                                        <pre className="text-white">
                                                <code id="basic-table1">{`
                                                
//---------------------------------- basic table ---------------------------------------------
<DataTable
    columns={tableData.header}
    data={tableData.body}
    pagination
    highlightOnHover
/>

                                                    `}
                                                </code>
                                            </pre>
                                    </kbd>
                                </Card>
                            </UncontrolledCollapse>
                            <p>
                                To show the hover effect to the row we have to add the attribute <code> highlightOnHover </code>.
                            </p>
                            <DataTable
                                columns={tableData.header}
                                data={tableData.body}
                                pagination
                                highlightOnHover
                            />
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="12">
                    <Card className="iq-card">
                        <CardHeader className="iq-card-header d-flex justify-content-between">
                            <CardTitle className="iq-header-title">
                                <h4 className="card-title">Bootstrap Datatables</h4>
                            </CardTitle>
                            <span className="text-primary float-right" id="collapse4">
                                <i className="ri-code-s-slash-line" />
                            </span>
                        </CardHeader>
                        <CardBody className="iq-card-body">
                            <UncontrolledCollapse toggler="#collapse4">
                                <Card>
                                    <kbd className="bg-dark">
                                            <span data-copy-target="#basic-table1" title="Copy"
                                                  data-toggle="tooltip" className="float-right"
                                                  data-copy="true">
                                                Copy
                                            </span>
                                        <pre className="text-white">
                                                <code id="basic-table1">{`
                                                
//---------------------------------- basic table ---------------------------------------------
<DataTable
    columns={tableData.header}
    data={tableData.body}
    pagination
    expandableRows
    expandableRowsComponent={<ExpandedComponent />}
/>

                                                    `}
                                                </code>
                                            </pre>
                                    </kbd>
                                </Card>
                            </UncontrolledCollapse>
                            <p>
                                To make expandable row you need to pass data to the custom component which will render on the expand event. For that, you have to add two attributes, first one is <code> expandableRows </code> and the other one is <code> expandableRowsComponent={<ExpandedComponent />} </code>. You can make custom <code> ExpandedComponent </code> component for it.
                            </p>
                            <DataTable
                                columns={tableData.header}
                                data={tableData.body}
                                pagination
                                expandableRows
                                expandableRowsComponent={<ExpandedComponent />}
                            />
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="12">
                    <Card className="iq-card">
                        <CardHeader className="iq-card-header d-flex justify-content-between">
                            <CardTitle className="iq-header-title">
                                <h4 className="card-title">Bootstrap Datatables</h4>
                            </CardTitle>
                            <span className="text-primary float-right" id="collapse5">
                                <i className="ri-code-s-slash-line" />
                            </span>
                        </CardHeader>
                        <CardBody className="iq-card-body">
                            <UncontrolledCollapse toggler="#collapse5">
                                <Card>
                                    <kbd className="bg-dark">
                                            <span data-copy-target="#basic-table1" title="Copy"
                                                  data-toggle="tooltip" className="float-right"
                                                  data-copy="true">
                                                Copy
                                            </span>
                                        <pre className="text-white">
                                                <code id="basic-table1">{`
                                                
//---------------------------------- basic table ---------------------------------------------
<DataTable
    columns={tableData.header}
    data={tableData.body}
    pagination
    selectableRows
/>

                                                    `}
                                                </code>
                                            </pre>
                                    </kbd>
                                </Card>
                            </UncontrolledCollapse>
                            <p>
                                To add selection checkbox for all row you need to add <code> selectableRows </code> the attribute.
                            </p>
                            <DataTable
                                columns={tableData.header}
                                data={tableData.body}
                                pagination
                                selectableRows
                            />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        )
    }
}

export default Index;