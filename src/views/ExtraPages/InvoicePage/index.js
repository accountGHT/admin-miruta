import React, {useEffect} from "react";

// Import for the View assets...
import {index} from "../../../config/pluginsInit";
import {Badge, Button, Card, CardBody, Col, Row, Table} from "reactstrap";

const Index = props => {

    useEffect(() => {
        index();
    });


    return (
        <>
            <Row>
                <Col md={12}>
                    <Card className={"iq-card"}>
                        <CardBody className={"iq-card-body"}>
                            <Row>
                                <Col md={6}>
                                    <img src={ require("../../../assets/images/logo.png")} className="img-fluid" alt="" />
                                </Col>
                                <Col md={6} className={"align-self-center"}>
                                    <h4 className="mb-0 float-right">Invoice</h4>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={12}>
                                    <hr className={"mt-3"}/>
                                    <h5 className={"mb-0"}>Hello, Nik Jones</h5>
                                    <p>
                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                                    </p>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={12}>
                                    <div className={"table-responsive-sm"}>
                                        <Table>
                                            <thead>
                                            <tr>
                                                <th scope="col">Order Date</th>
                                                <th scope="col">Order Status</th>
                                                <th scope="col">Order ID</th>
                                                <th scope="col">Billing Address</th>
                                                <th scope="col">Shipping Address</th>
                                            </tr>
                                            </thead>

                                            <tbody>
                                            <tr>
                                                <td>Jan 17, 2016</td>
                                                <td><Badge color="primary">Unpaid</Badge></td>
                                                <td>250028</td>
                                                <td>
                                                    <p className={"mb-0"}>
                                                        PO Box 16122 Collins Street West <br/>
                                                        Victoria 8007 Australia <br/>
                                                        Phone: +123 456 7890 <br/>
                                                        Email: demo@sofbox.com <br/>
                                                        Web: www.sofbox.com
                                                    </p>
                                                </td>
                                                <td>
                                                    <p className={"mb-0"}>
                                                        PO Box 16122 Collins Street West <br/>
                                                        Victoria 8007 Australia <br/>
                                                        Phone: +123 456 7890 <br/>
                                                        Email: demo@sofbox.com <br/>
                                                        Web: www.sofbox.com
                                                    </p>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={12}>
                                    <h5>Order Summary</h5>
                                    <div className={"table-responsive-sm"}>
                                        <Table striped>
                                            <thead>
                                            <tr>
                                                <th className={"text-center"} scope="col">#</th>
                                                <th scope="col">Item</th>
                                                <th className={"text-center"} scope="col">Quantity</th>
                                                <th className={"text-center"} scope="col">Price</th>
                                                <th className={"text-center"} scope="col">Totals</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            { [1, 2, 3, 4, 5].map((item) => (
                                                <tr key={item}>
                                                    <th className={"text-center"} scope={"row"}>{ item }</th>
                                                    <td>
                                                        <h6 className={"mb-0"}>Web Design</h6>
                                                        <p className={"mb-0"}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                    </td>
                                                    <td className={"text-center"}>5</td>
                                                    <td className={"text-center"}>$120.00</td>
                                                    <td className={"text-center"}>
                                                        <b>$2,880.00</b>
                                                    </td>
                                                </tr>
                                            )) }
                                            </tbody>
                                        </Table>
                                    </div>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={12}>
                                    <h5>Order Details</h5>
                                    <div className={"table-responsive-sm"}>
                                        <Table striped>
                                            <thead>
                                            <tr>
                                                <th scope="col">Bank</th>
                                                <th scope="col">.Acc.No</th>
                                                <th scope="col">Due Date</th>
                                                <th scope="col">Sub-total</th>
                                                <th scope="col">Discount</th>
                                                <th scope="col">Total</th>
                                            </tr>
                                            </thead>

                                            <tbody>
                                            <tr>
                                                <th scope="row">Threadneedle St</th>
                                                <td>12333456789</td>
                                                <td>12 November 2019</td>
                                                <td>$4597.50</td>
                                                <td>10%</td>
                                                <td><b>$4137.75 USD</b></td>
                                            </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </Col>
                                <Col md={12} className={"float-right"}>
                                    <div className={"float-right"}>
                                        <Button type="button" color={"link"} className="mr-3">
                                            <i className="ri-printer-line" /> Download Print
                                        </Button>
                                        <Button type="button" color="primary">Submit</Button>
                                    </div>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={12} className={"mt-5"}>
                                    <b className={"text-danger"}>Notes:</b>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </>
    )
};

export default Index;
