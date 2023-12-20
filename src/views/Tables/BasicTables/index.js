import React from "react";
import {Card, CardBody, CardHeader, CardTitle, Col, Row, Table, UncontrolledCollapse} from "reactstrap";
import {index} from "../../../config/pluginsInit";

class Index extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            tableData:{
                header:['#','First','Last','Handle'],
                body:[
                        [ <b>1</b>, "Mark", "Otto", "@mdo", ],
                        [ <b>2</b>, "Jacob", "Thornton", "@fat", ],
                        [ <b>3</b>, "Larry", "the Bird", "@twitter", ],
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
            <Row >
                <Col sm="12" lg="6">
                    <Card className="iq-card">
                        <CardHeader className="iq-card-header d-flex justify-content-between">
                            <CardTitle className="iq-header-title">
                                <h4 className="card-title">Tables</h4>
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
<Table className="table" >
   <thead>
      <tr>
         <th scope="col">#</th>
         <th scope="col">First</th>
         <th scope="col">Last</th>
         <th scope="col">Handle</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <th scope="row">1</th>
         <td>Mark</td>
         <td>Otto</td>
         <td>@mdo</td>
      </tr>
      <tr>
         <th scope="row">2</th>
         <td>Jacob</td>
         <td>Thornton</td>
         <td>@fat</td>
      </tr>
      <tr>
         <th scope="row">3</th>
         <td>Larry</td>
         <td>the Bird</td>
         <td>@twitter</td>
      </tr>
   </tbody>
</Table>


                                                    `}
                                                </code>
                                            </pre>
                                    </kbd>
                                </Card>
                            </UncontrolledCollapse>
                            <Table className="table" >
                                <thead>
                                    <tr>
                                        {
                                            tableData.header.map((item,index) => (
                                                <th scope="col" key={index}>{item}</th>
                                            ))
                                        }
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    tableData.body.map((item,index) => (
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
                            </Table>
                        </CardBody>
                    </Card>
                    <Card className="iq-card">
                        <CardHeader className="iq-card-header d-flex justify-content-between">
                            <CardTitle className="iq-header-title">
                                <h4 className="card-title">Table Head Options</h4>
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
//---------------------------------- dark header table ---------------------------------------------

<Table className="table" >
   <thead className="thead-dark">
      <tr>
         <th scope="col">#</th>
         <th scope="col">First</th>
         <th scope="col">Last</th>
         <th scope="col">Handle</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <th scope="row">1</th>
         <td>Mark</td>
         <td>Otto</td>
         <td>@mdo</td>
      </tr>
      <tr>
         <th scope="row">2</th>
         <td>Jacob</td>
         <td>Thornton</td>
         <td>@fat</td>
      </tr>
      <tr>
         <th scope="row">3</th>
         <td>Larry</td>
         <td>the Bird</td>
         <td>@twitter</td>
      </tr>
   </tbody>
</Table>

//---------------------------------- light header table ---------------------------------------------

<Table className="table" >
   <thead className="thead-light">
      <tr>
         <th scope="col">#</th>
         <th scope="col">First</th>
         <th scope="col">Last</th>
         <th scope="col">Handle</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <th scope="row">1</th>
         <td>Mark</td>
         <td>Otto</td>
         <td>@mdo</td>
      </tr>
      <tr>
         <th scope="row">2</th>
         <td>Jacob</td>
         <td>Thornton</td>
         <td>@fat</td>
      </tr>
      <tr>
         <th scope="row">3</th>
         <td>Larry</td>
         <td>the Bird</td>
         <td>@twitter</td>
      </tr>
   </tbody>
</Table>

                                                    `}
                                                </code>
                                            </pre>
                                    </kbd>
                                </Card>
                            </UncontrolledCollapse>
                            <p>
                                Similar to tables and dark tables, use the modifier classes <code className="highlighter-rouge">.thead-light</code> or <code className="highlighter-rouge">.thead-dark</code> to make <code className="highlighter-rouge">&lt;thead&gt;</code>s appear light or dark gray.
                            </p>
                            <Table className="table" >
                                <thead className="thead-dark">
                                    <tr>
                                        {
                                            tableData.header.map((item,index) => (
                                                <th scope="col" key={index}>{item}</th>
                                            ))
                                        }
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    tableData.body.map((item,index) => (
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
                            </Table>
                            <Table className="table" >
                                <thead className="thead-light">
                                <tr>
                                    {
                                        tableData.header.map((item,index) => (
                                            <th scope="col" key={index}>{item}</th>
                                        ))
                                    }
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    tableData.body.map((item,index) => (
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
                            </Table>
                        </CardBody>
                    </Card>
                    <Card className="iq-card">
                        <CardHeader className="iq-card-header d-flex justify-content-between">
                            <CardTitle className="iq-header-title">
                                <h4 className="card-title">Borderless table</h4>
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

//---------------------------------- borderless table ---------------------------------------------

<Table borderless className="table" >
   <thead>
      <tr>
         <th scope="col">#</th>
         <th scope="col">First</th>
         <th scope="col">Last</th>
         <th scope="col">Handle</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <th scope="row">1</th>
         <td>Mark</td>
         <td>Otto</td>
         <td>@mdo</td>
      </tr>
      <tr>
         <th scope="row">2</th>
         <td>Jacob</td>
         <td>Thornton</td>
         <td>@fat</td>
      </tr>
      <tr>
         <th scope="row">3</th>
         <td>Larry</td>
         <td>the Bird</td>
         <td>@twitter</td>
      </tr>
   </tbody>
</Table>

//---------------------------------- borderless dark table---------------------------------------------

<Table dark borderless className="table" >
   <thead>
      <tr>
         <th scope="col">#</th>
         <th scope="col">First</th>
         <th scope="col">Last</th>
         <th scope="col">Handle</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <th scope="row">1</th>
         <td>Mark</td>
         <td>Otto</td>
         <td>@mdo</td>
      </tr>
      <tr>
         <th scope="row">2</th>
         <td>Jacob</td>
         <td>Thornton</td>
         <td>@fat</td>
      </tr>
      <tr>
         <th scope="row">3</th>
         <td>Larry</td>
         <td>the Bird</td>
         <td>@twitter</td>
      </tr>
   </tbody>
</Table>

                                                    `}
                                                </code>
                                            </pre>
                                    </kbd>
                                </Card>
                            </UncontrolledCollapse>
                            <p>
                                Add <code className="highlighter-rouge">.table-borderless</code> for a table without borders.
                            </p>
                            <Table borderless className="table" >
                                <thead >
                                <tr>
                                    {
                                        tableData.header.map((item,index) => (
                                            <th scope="col" key={index}>{item}</th>
                                        ))
                                    }
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    tableData.body.map((item,index) => (
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
                            </Table>
                            <p>
                                <code className="highlighter-rouge">.table-borderless</code> can also be used on dark tables.
                            </p>
                            <Table dark borderless className="table" >
                                <thead >
                                <tr>
                                    {
                                        tableData.header.map((item,index) => (
                                            <th scope="col" key={index}>{item}</th>
                                        ))
                                    }
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    tableData.body.map((item,index) => (
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
                            </Table>
                        </CardBody>
                    </Card>
                    <Card className="iq-card">
                        <CardHeader className="iq-card-header d-flex justify-content-between">
                            <CardTitle className="iq-header-title">
                                <h4 className="card-title">Small table</h4>
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

//---------------------------------- small table---------------------------------------------

<Table size="sm" className="table" >
   <thead>
      <tr>
         <th scope="col">#</th>
         <th scope="col">First</th>
         <th scope="col">Last</th>
         <th scope="col">Handle</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <th scope="row">1</th>
         <td>Mark</td>
         <td>Otto</td>
         <td>@mdo</td>
      </tr>
      <tr>
         <th scope="row">2</th>
         <td>Jacob</td>
         <td>Thornton</td>
         <td>@fat</td>
      </tr>
      <tr>
         <th scope="row">3</th>
         <td>Larry</td>
         <td>the Bird</td>
         <td>@twitter</td>
      </tr>
   </tbody>
</Table>

//---------------------------------- small dark table---------------------------------------------

<Table dark size="sm" className="table" >
   <thead>
      <tr>
         <th scope="col">#</th>
         <th scope="col">First</th>
         <th scope="col">Last</th>
         <th scope="col">Handle</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <th scope="row">1</th>
         <td>Mark</td>
         <td>Otto</td>
         <td>@mdo</td>
      </tr>
      <tr>
         <th scope="row">2</th>
         <td>Jacob</td>
         <td>Thornton</td>
         <td>@fat</td>
      </tr>
      <tr>
         <th scope="row">3</th>
         <td>Larry</td>
         <td>the Bird</td>
         <td>@twitter</td>
      </tr>
   </tbody>
</Table>


                                                    `}
                                                </code>
                                            </pre>
                                    </kbd>
                                </Card>
                            </UncontrolledCollapse>
                            <p>
                                Add <code className="highlighter-rouge">.table-sm</code> to make tables more compact by cutting cell padding in half.
                            </p>
                            <Table size="sm" className="table " >
                                <thead >
                                <tr>
                                    {
                                        tableData.header.map((item,index) => (
                                            <th scope="col" key={index}>{item}</th>
                                        ))
                                    }
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    tableData.body.map((item,index) => (
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
                            </Table>
                            <Table dark size="sm" className="table " >
                                <thead >
                                <tr>
                                    {
                                        tableData.header.map((item,index) => (
                                            <th scope="col" key={index}>{item}</th>
                                        ))
                                    }
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    tableData.body.map((item,index) => (
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
                            </Table>
                        </CardBody>
                    </Card>
                    <Card className="iq-card">
                        <CardHeader className="iq-card-header d-flex justify-content-between">
                            <CardTitle className="iq-header-title">
                                <h4 className="card-title">Captions</h4>
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

//---------------------------------- caption table---------------------------------------------

<Table className="table" >
   <caption>List of users</caption>
   <thead>
      <tr>
         <th scope="col">#</th>
         <th scope="col">First</th>
         <th scope="col">Last</th>
         <th scope="col">Handle</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <th scope="row">1</th>
         <td>Mark</td>
         <td>Otto</td>
         <td>@mdo</td>
      </tr>
      <tr>
         <th scope="row">2</th>
         <td>Jacob</td>
         <td>Thornton</td>
         <td>@fat</td>
      </tr>
      <tr>
         <th scope="row">3</th>
         <td>Larry</td>
         <td>the Bird</td>
         <td>@twitter</td>
      </tr>
   </tbody>
</Table>

                                                    `}
                                                </code>
                                            </pre>
                                    </kbd>
                                </Card>
                            </UncontrolledCollapse>
                            <p>
                                A <code className="highlighter-rouge">&lt;caption&gt;</code> functions like a heading for a table. It helps users with screen readers to find a table and understand what it’s about and decide if they want to read it.
                            </p>
                            <Table className="table">
                                <caption>List of users</caption>
                                <thead>
                                <tr>
                                    {
                                        tableData.header.map((item,index) => (
                                            <th scope="col" key={index}>{item}</th>
                                        ))
                                    }
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    tableData.body.map((item,index) => (
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
                            </Table>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="12" lg="6">
                    <Card className="iq-card">
                        <CardHeader className="iq-card-header d-flex justify-content-between">
                            <CardTitle className="iq-header-title">
                                <h4 className="card-title">Table Dark</h4>
                            </CardTitle>
                            <span className="text-primary float-right" id="collapse6">
                                <i className="ri-code-s-slash-line" />
                            </span>
                        </CardHeader>
                        <CardBody className="iq-card-body">
                            <UncontrolledCollapse toggler="#collapse6">
                                <Card>
                                    <kbd className="bg-dark">
                                            <span data-copy-target="#basic-table1" title="Copy"
                                                  data-toggle="tooltip" className="float-right"
                                                  data-copy="true">
                                                Copy
                                            </span>
                                        <pre className="text-white">
                                                <code id="basic-table1">{`

//---------------------------------- dark table---------------------------------------------

<Table dark className="table" >
   <thead>
      <tr>
         <th scope="col">#</th>
         <th scope="col">First</th>
         <th scope="col">Last</th>
         <th scope="col">Handle</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <th scope="row">1</th>
         <td>Mark</td>
         <td>Otto</td>
         <td>@mdo</td>
      </tr>
      <tr>
         <th scope="row">2</th>
         <td>Jacob</td>
         <td>Thornton</td>
         <td>@fat</td>
      </tr>
      <tr>
         <th scope="row">3</th>
         <td>Larry</td>
         <td>the Bird</td>
         <td>@twitter</td>
      </tr>
   </tbody>
</Table>

                                                    `}
                                                </code>
                                            </pre>
                                    </kbd>
                                </Card>
                            </UncontrolledCollapse>
                            <p>
                                You can also invert the colors—with light text on dark backgrounds—with <code className="highlighter-rouge">.table-dark</code>.
                            </p>
                            <Table dark className="table" >
                                <thead >
                                <tr>
                                    {
                                        tableData.header.map((item,index) => (
                                            <th scope="col" key={index}>{item}</th>
                                        ))
                                    }
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    tableData.body.map((item,index) => (
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
                            </Table>
                        </CardBody>
                    </Card>
                    <Card className="iq-card">
                        <CardHeader className="iq-card-header d-flex justify-content-between">
                            <CardTitle className="iq-header-title">
                                <h4 className="card-title">Striped Rows</h4>
                            </CardTitle>
                            <span className="text-primary float-right" id="collapse7">
                                <i className="ri-code-s-slash-line" />
                            </span>
                        </CardHeader>
                        <CardBody className="iq-card-body">
                            <UncontrolledCollapse toggler="#collapse7">
                                <Card>
                                    <kbd className="bg-dark">
                                            <span data-copy-target="#basic-table1" title="Copy"
                                                  data-toggle="tooltip" className="float-right"
                                                  data-copy="true">
                                                Copy
                                            </span>
                                        <pre className="text-white">
                                                <code id="basic-table1">{`

//---------------------------------- striped table---------------------------------------------

<Table striped className="table" >
   <thead>
      <tr>
         <th scope="col">#</th>
         <th scope="col">First</th>
         <th scope="col">Last</th>
         <th scope="col">Handle</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <th scope="row">1</th>
         <td>Mark</td>
         <td>Otto</td>
         <td>@mdo</td>
      </tr>
      <tr>
         <th scope="row">2</th>
         <td>Jacob</td>
         <td>Thornton</td>
         <td>@fat</td>
      </tr>
      <tr>
         <th scope="row">3</th>
         <td>Larry</td>
         <td>the Bird</td>
         <td>@twitter</td>
      </tr>
   </tbody>
</Table>

//---------------------------------- striped dark table---------------------------------------------

<Table dark striped className="table" >
   <thead>
      <tr>
         <th scope="col">#</th>
         <th scope="col">First</th>
         <th scope="col">Last</th>
         <th scope="col">Handle</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <th scope="row">1</th>
         <td>Mark</td>
         <td>Otto</td>
         <td>@mdo</td>
      </tr>
      <tr>
         <th scope="row">2</th>
         <td>Jacob</td>
         <td>Thornton</td>
         <td>@fat</td>
      </tr>
      <tr>
         <th scope="row">3</th>
         <td>Larry</td>
         <td>the Bird</td>
         <td>@twitter</td>
      </tr>
   </tbody>
</Table>

                                                    `}
                                                </code>
                                            </pre>
                                    </kbd>
                                </Card>
                            </UncontrolledCollapse>
                            <p>
                                Use <code className="highlighter-rouge">.table-striped</code> to add zebra-striping to any table row within the <code className="highlighter-rouge">&lt;tbody&gt;</code>.
                            </p>
                            <Table striped className="table" >
                                <thead >
                                <tr>
                                    {
                                        tableData.header.map((item,index) => (
                                            <th scope="col" key={index}>{item}</th>
                                        ))
                                    }
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    tableData.body.map((item,index) => (
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
                            </Table>
                            <Table dark striped className="table" >
                                <thead >
                                <tr>
                                    {
                                        tableData.header.map((item,index) => (
                                            <th scope="col" key={index}>{item}</th>
                                        ))
                                    }
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    tableData.body.map((item,index) => (
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
                            </Table>
                        </CardBody>
                    </Card>
                    <Card className="iq-card">
                        <CardHeader className="iq-card-header d-flex justify-content-between">
                            <CardTitle className="iq-header-title">
                                <h4 className="card-title">Hoverable rows</h4>
                            </CardTitle>
                            <span className="text-primary float-right" id="collapse8">
                                <i className="ri-code-s-slash-line" />
                            </span>
                        </CardHeader>
                        <CardBody className="iq-card-body">
                            <UncontrolledCollapse toggler="#collapse8">
                                <Card>
                                    <kbd className="bg-dark">
                                            <span data-copy-target="#basic-table1" title="Copy"
                                                  data-toggle="tooltip" className="float-right"
                                                  data-copy="true">
                                                Copy
                                            </span>
                                        <pre className="text-white">
                                                <code id="basic-table1">{`

//---------------------------------- hover table---------------------------------------------

<Table hover className="table" >
   <thead>
      <tr>
         <th scope="col">#</th>
         <th scope="col">First</th>
         <th scope="col">Last</th>
         <th scope="col">Handle</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <th scope="row">1</th>
         <td>Mark</td>
         <td>Otto</td>
         <td>@mdo</td>
      </tr>
      <tr>
         <th scope="row">2</th>
         <td>Jacob</td>
         <td>Thornton</td>
         <td>@fat</td>
      </tr>
      <tr>
         <th scope="row">3</th>
         <td>Larry</td>
         <td>the Bird</td>
         <td>@twitter</td>
      </tr>
   </tbody>
</Table>

//---------------------------------- hover dark table---------------------------------------------

<Table dark hover className="table" >
   <thead>
      <tr>
         <th scope="col">#</th>
         <th scope="col">First</th>
         <th scope="col">Last</th>
         <th scope="col">Handle</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <th scope="row">1</th>
         <td>Mark</td>
         <td>Otto</td>
         <td>@mdo</td>
      </tr>
      <tr>
         <th scope="row">2</th>
         <td>Jacob</td>
         <td>Thornton</td>
         <td>@fat</td>
      </tr>
      <tr>
         <th scope="row">3</th>
         <td>Larry</td>
         <td>the Bird</td>
         <td>@twitter</td>
      </tr>
   </tbody>
</Table>

                                                    `}
                                                </code>
                                            </pre>
                                    </kbd>
                                </Card>
                            </UncontrolledCollapse>
                            <p>
                                Add <code className="highlighter-rouge">.table-hover</code> to enable a hover state on table rows within a <code className="highlighter-rouge">&lt;tbody&gt;</code>.
                            </p>
                            <Table hover className="table" >
                                <thead >
                                <tr>
                                    {
                                        tableData.header.map((item,index) => (
                                            <th scope="col" key={index}>{item}</th>
                                        ))
                                    }
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    tableData.body.map((item,index) => (
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
                            </Table>
                            <Table dark hover className="table" >
                                <thead >
                                <tr>
                                    {
                                        tableData.header.map((item,index) => (
                                            <th scope="col" key={index}>{item}</th>
                                        ))
                                    }
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    tableData.body.map((item,index) => (
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
                            </Table>
                        </CardBody>
                    </Card>
                    <Card className="iq-card">
                        <CardHeader className="iq-card-header d-flex justify-content-between">
                            <CardTitle className="iq-header-title">
                                <h4 className="card-title">Contextual classes</h4>
                            </CardTitle>
                            <span className="text-primary float-right" id="collapse9">
                                <i className="ri-code-s-slash-line" />
                            </span>
                        </CardHeader>
                        <CardBody className="iq-card-body">
                            <UncontrolledCollapse toggler="#collapse9">
                                <Card>
                                    <kbd className="bg-dark">
                                            <span data-copy-target="#basic-table1" title="Copy"
                                                  data-toggle="tooltip" className="float-right"
                                                  data-copy="true">
                                                Copy
                                            </span>
                                        <pre className="text-white">
                                                <code id="basic-table1">{`

//---------------------------------- contextual table---------------------------------------------

<Table className="table">
   <thead>
      <tr>
         <th scope="col">Class</th>
         <th scope="col">Heading</th>
         <th scope="col">Heading</th>
      </tr>
   </thead>
   <tbody>
      <tr className="table-active">
         <th scope="row">Active</th>
         <td>Cell</td>
         <td>Cell</td>
      </tr>
      <tr>
         <th scope="row">Default</th>
         <td>Cell</td>
         <td>Cell</td>
      </tr>
      <tr className="table-primary">
         <th scope="row">Primary</th>
         <td>Cell</td>
         <td>Cell</td>
      </tr>
      <tr className="table-secondary">
         <th scope="row">Secondary</th>
         <td>Cell</td>
         <td>Cell</td>
      </tr>
      <tr className="table-success">
         <th scope="row">Success</th>
         <td>Cell</td>
         <td>Cell</td>
      </tr>
      <tr className="table-danger">
         <th scope="row">Danger</th>
         <td>Cell</td>
         <td>Cell</td>
      </tr>
      <tr className="table-warning">
         <th scope="row">Warning</th>
         <td>Cell</td>
         <td>Cell</td>
      </tr>
      <tr className="table-info">
         <th scope="row">Info</th>
         <td>Cell</td>
         <td>Cell</td>
      </tr>
   </tbody>
</Table>

//---------------------------------- contextual dark table---------------------------------------------

<Table dark className="table">
   <thead>
      <tr>
         <th scope="col">#</th>
         <th scope="col">Heading</th>
         <th scope="col">Heading</th>
      </tr>
   </thead>
   <tbody>
      <tr className="bg-primary">
         <th scope="row">1</th>
         <td>Cell</td>
         <td>Cell</td>
      </tr>
      <tr>
         <th scope="row">2</th>
         <td>Cell</td>
         <td>Cell</td>
      </tr>
      <tr className="bg-success">
         <th scope="row">3</th>
         <td>Cell</td>
         <td>Cell</td>
      </tr>
      <tr>
         <th scope="row">4</th>
         <td>Cell</td>
         <td>Cell</td>
      </tr>
      <tr className="bg-info">
         <th scope="row">5</th>
         <td>Cell</td>
         <td>Cell</td>
      </tr>
      <tr>
         <th scope="row">6</th>
         <td>Cell</td>
         <td>Cell</td>
      </tr>
      <tr className="bg-warning">
         <th scope="row">7</th>
         <td>Cell</td>
         <td>Cell</td>
      </tr>
      <tr>
         <th scope="row">8</th>
         <td>Cell</td>
         <td>Cell</td>
      </tr>
      <tr className="bg-danger">
         <th scope="row">9</th>
         <td>Cell</td>
         <td>Cell</td>
      </tr>
   </tbody>
</Table>

                                                    `}
                                                </code>
                                            </pre>
                                    </kbd>
                                </Card>
                            </UncontrolledCollapse>
                            <p>
                                Use contextual classes to color table rows or individual cells.
                            </p>
                            <Table className="table">
                                <thead>
                                <tr>
                                    <th scope="col">Class</th>
                                    <th scope="col">Heading</th>
                                    <th scope="col">Heading</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr className="table-active">
                                    <th scope="row">Active</th>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                </tr>
                                <tr>
                                    <th scope="row">Default</th>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                </tr>
                                <tr className="table-primary">
                                    <th scope="row">Primary</th>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                </tr>
                                <tr className="table-secondary">
                                    <th scope="row">Secondary</th>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                </tr>
                                <tr className="table-success">
                                    <th scope="row">Success</th>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                </tr>
                                <tr className="table-danger">
                                    <th scope="row">Danger</th>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                </tr>
                                <tr className="table-warning">
                                    <th scope="row">Warning</th>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                </tr>
                                <tr className="table-info">
                                    <th scope="row">Info</th>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                </tr>
                                </tbody>
                            </Table>
                            <p>
                                Regular table background variants are not available with the dark table, however, you may use <a href="/docs/4.3/utilities/colors/">text or background utilities</a> to achieve similar styles.
                            </p>
                            <Table dark className="table">
                                <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Heading</th>
                                    <th scope="col">Heading</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr className="bg-primary">
                                    <th scope="row">1</th>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                </tr>
                                <tr className="bg-success">
                                    <th scope="row">3</th>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                </tr>
                                <tr className="bg-info">
                                    <th scope="row">5</th>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                </tr>
                                <tr>
                                    <th scope="row">6</th>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                </tr>
                                <tr className="bg-warning">
                                    <th scope="row">7</th>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                </tr>
                                <tr>
                                    <th scope="row">8</th>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                </tr>
                                <tr className="bg-danger">
                                    <th scope="row">9</th>
                                    <td>Cell</td>
                                    <td>Cell</td>
                                </tr>
                                </tbody>
                            </Table>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="12">
                    <Card className="iq-card">
                        <CardHeader className="iq-card-header d-flex justify-content-between">
                            <CardTitle className="iq-header-title">
                                <h4 className="card-title">Responsive tables</h4>
                            </CardTitle>
                            <span className="text-primary float-right" id="collapse10">
                                <i className="ri-code-s-slash-line" />
                            </span>
                        </CardHeader>
                        <CardBody className="iq-card-body">
                            <UncontrolledCollapse toggler="#collapse10">
                                <Card>
                                    <kbd className="bg-dark">
                                            <span data-copy-target="#basic-table1" title="Copy"
                                                  data-toggle="tooltip" className="float-right"
                                                  data-copy="true">
                                                Copy
                                            </span>
                                        <pre className="text-white">
                                                <code id="basic-table1">{`

//---------------------------------- responsive table---------------------------------------------

<Table responsive className="table">
   <thead>
      <tr>
         <th scope="col">#</th>
         <th scope="col">Heading</th>
         <th scope="col">Heading</th>
         <th scope="col">Heading</th>
         <th scope="col">Heading</th>
         <th scope="col">Heading</th>
         <th scope="col">Heading</th>
         <th scope="col">Heading</th>
         <th scope="col">Heading</th>
         <th scope="col">Heading</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <th scope="row">1</th>
         <td>Cell</td>
         <td>Cell</td>
         <td>Cell</td>
         <td>Cell</td>
         <td>Cell</td>
         <td>Cell</td>
         <td>Cell</td>
         <td>Cell</td>
         <td>Cell</td>
      </tr>
      <tr>
         <th scope="row">2</th>
         <td>Cell</td>
         <td>Cell</td>
         <td>Cell</td>
         <td>Cell</td>
         <td>Cell</td>
         <td>Cell</td>
         <td>Cell</td>
         <td>Cell</td>
         <td>Cell</td>
      </tr>
      <tr>
         <th scope="row">3</th>
         <td>Cell</td>
         <td>Cell</td>
         <td>Cell</td>
         <td>Cell</td>
         <td>Cell</td>
         <td>Cell</td>
         <td>Cell</td>
         <td>Cell</td>
         <td>Cell</td>
      </tr>
   </tbody>
</Table>

                                                    `}
                                                </code>
                                            </pre>
                                    </kbd>
                                </Card>
                            </UncontrolledCollapse>
                            <p>
                                Responsive tables allow tables to be scrolled horizontally with ease. Make any table responsive across all viewports by wrapping a <code className="highlighter-rouge"> .table </code> with <code className="highlighter-rouge"> .table-responsive</code>. Or, pick a maximum breakpoint with which to have a responsive table up to by using <code className="highlighter-rouge"> {".table-responsive{-sm | -md | -lg | -xl}"} </code>.
                            </p>
                            <Table responsive className="table">
                                    <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Heading</th>
                                        <th scope="col">Heading</th>
                                        <th scope="col">Heading</th>
                                        <th scope="col">Heading</th>
                                        <th scope="col">Heading</th>
                                        <th scope="col">Heading</th>
                                        <th scope="col">Heading</th>
                                        <th scope="col">Heading</th>
                                        <th scope="col">Heading</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Cell</td>
                                        <td>Cell</td>
                                        <td>Cell</td>
                                        <td>Cell</td>
                                        <td>Cell</td>
                                        <td>Cell</td>
                                        <td>Cell</td>
                                        <td>Cell</td>
                                        <td>Cell</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Cell</td>
                                        <td>Cell</td>
                                        <td>Cell</td>
                                        <td>Cell</td>
                                        <td>Cell</td>
                                        <td>Cell</td>
                                        <td>Cell</td>
                                        <td>Cell</td>
                                        <td>Cell</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Cell</td>
                                        <td>Cell</td>
                                        <td>Cell</td>
                                        <td>Cell</td>
                                        <td>Cell</td>
                                        <td>Cell</td>
                                        <td>Cell</td>
                                        <td>Cell</td>
                                        <td>Cell</td>
                                    </tr>
                                    </tbody>
                                </Table>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        )
    }
}

export default Index;