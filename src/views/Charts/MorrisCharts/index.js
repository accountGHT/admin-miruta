import React from "react";
import jQuery from "jquery";
import makeMorris from "morris-js-module";
import {Card, CardBody, CardHeader, CardTitle, Col, Row, UncontrolledCollapse} from "reactstrap";
import {index} from "../../../config/pluginsInit";

const Morris = makeMorris(jQuery);

class Index extends React.Component {

    componentDidMount() {
        setTimeout(function () {
            index();
        },800);
        if(jQuery('#morris-line-chart').length){
            Morris.Line({
                element: 'morris-line-chart',
                data: [
                    { year: '2008', value: 20 },
                    { year: '2009', value: 10 },
                    { year: '2010', value: 5 },
                    { year: '2011', value: 5 },
                    { year: '2012', value: 20 }
                ],
                xkey: 'year',
                ykeys: ['value'],
                labels: ['Value'],
                lineColors: ['#0084ff'],
                hoverCallback: function (index, options, content, row) {
                    return '';
                }
            });
        }
        if(jQuery('#morris-area-chart').length){
            Morris.Area({
                element: 'morris-area-chart',
                resize: true,
                data: [
                    {y: '2011 Q1', item1: 2666, item2: 2666},
                    {y: '2011 Q2', item1: 2778, item2: 2294},
                    {y: '2011 Q3', item1: 4912, item2: 1969},
                    {y: '2011 Q4', item1: 3767, item2: 3597},
                    {y: '2012 Q1', item1: 6810, item2: 1914},
                    {y: '2012 Q2', item1: 5670, item2: 4293},
                    {y: '2012 Q3', item1: 4820, item2: 3795},
                    {y: '2012 Q4', item1: 15073, item2: 5967},
                    {y: '2013 Q1', item1: 10687, item2: 4460},
                    {y: '2013 Q2', item1: 8432, item2: 5713}
                ],
                xkey: 'y',
                ykeys: ['item1', 'item2'],
                labels: ['Item 1', 'Item 2'],
                lineColors: ['#75e275', '#75bcff'],
                hoverCallback: function (index, options, content, row) {
                    return '';
                }
            });
        }
        if(jQuery('#morris-bar-chart').length){
            Morris.Bar({
                element: 'morris-bar-chart',
                data: [
                    {x: '2011 Q1', y: 3, z: 2, a: 3},
                    {x: '2011 Q2', y: 2, z: null, a: 1},
                    {x: '2011 Q3', y: 0, z: 2, a: 4},
                    {x: '2011 Q4', y: 2, z: 4, a: 3}
                ],
                xkey: 'x',
                ykeys: ['y', 'z', 'a'],
                labels: ['Y', 'Z', 'A'],
                barColors: ['#0084ff', '#ffd400', '#00ca00'],
                hoverCallback: function (index, options, content, row) {
                    return '';
                }
            }).on('click', function(i, row){
            });
        }
        if(jQuery('#morris-donut-chart').length){
            Morris.Donut({
                element: 'morris-donut-chart',
                resize: true,
                colors: ["#0084ff", "#e64141", "#00ca00"],
                data: [
                    {label: "Download Sales", value: 12},
                    {label: "In-Store Sales", value: 30},
                    {label: "Mail-Order Sales", value: 20}
                ],
                hideHover: 'auto'
            });
        }
    }

    render() {
        return (
            <>
                <Row>
                    <Col sm="12" lg="6">
                        <Card className="iq-card">
                            <CardHeader className="iq-card-header d-flex justify-content-between">
                                <CardTitle className="iq-header-title">
                                    <h4 className="card-title">Line Chart</h4>
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
                                                <code id="morris-line-chart-code">{`
                                                
//---------------------- Morris Line Chart -------------------------------
<div id="morris-line-chart" />

<script>
    Morris.Line({
        element: 'morris-line-chart',
        data: [
            { year: '2008', value: 20 },
            { year: '2009', value: 10 },
            { year: '2010', value: 5 },
            { year: '2011', value: 5 },
            { year: '2012', value: 20 }
        ],
        xkey: 'year',
        ykeys: ['value'],
        labels: ['Value'],
        lineColors: ['#0084ff'],
        hoverCallback: function (index, options, content, row) {
            return '';
        }
    });
</script>
                                                    `}
                                                </code>
                                            </pre>
                                    </kbd>
                                </Card>
                            </UncontrolledCollapse>
                                <div id="morris-line-chart" />
                            </CardBody>
                        </Card>
                        <Card className="iq-card">
                            <CardHeader className="iq-card-header d-flex justify-content-between">
                                <CardTitle className="iq-header-title">
                                    <h4 className="card-title">Area Chart</h4>
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
                                                <code id="morris-area-chart-code">{`
                                                
//---------------------- Morris Area Chart -------------------------------
<div id="morris-area-chart" />

<script>
    Morris.Area({
                element: 'morris-area-chart',
                resize: true,
                data: [
                    {y: '2011 Q1', item1: 2666, item2: 2666},
                    {y: '2011 Q2', item1: 2778, item2: 2294},
                    {y: '2011 Q3', item1: 4912, item2: 1969},
                    {y: '2011 Q4', item1: 3767, item2: 3597},
                    {y: '2012 Q1', item1: 6810, item2: 1914},
                    {y: '2012 Q2', item1: 5670, item2: 4293},
                    {y: '2012 Q3', item1: 4820, item2: 3795},
                    {y: '2012 Q4', item1: 15073, item2: 5967},
                    {y: '2013 Q1', item1: 10687, item2: 4460},
                    {y: '2013 Q2', item1: 8432, item2: 5713}
                ],
                xkey: 'y',
                ykeys: ['item1', 'item2'],
                labels: ['Item 1', 'Item 2'],
                lineColors: ['#75e275', '#75bcff'],
                hoverCallback: function (index, options, content, row) {
                    return '';
                }
            });
</script>
                                                    `}
                                                </code>
                                            </pre>
                                    </kbd>
                                </Card>
                            </UncontrolledCollapse>
                                <div id="morris-area-chart" />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="12" lg="6">
                        <Card className="iq-card">
                            <CardHeader className="iq-card-header d-flex justify-content-between">
                                <CardTitle className="iq-header-title">
                                    <h4 className="card-title">Bar Chart</h4>
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
                                                <code id="morris-bar-chart-code">{`
                                                
//---------------------- Morris Bar Chart -------------------------------
<div id="morris-bar-chart" />

<script>
    Morris.Bar({
        element: 'morris-bar-chart',
        data: [
            {x: '2011 Q1', y: 3, z: 2, a: 3},
            {x: '2011 Q2', y: 2, z: null, a: 1},
            {x: '2011 Q3', y: 0, z: 2, a: 4},
            {x: '2011 Q4', y: 2, z: 4, a: 3}
        ],
        xkey: 'x',
        ykeys: ['y', 'z', 'a'],
        labels: ['Y', 'Z', 'A'],
        barColors: ['#0084ff', '#ffd400', '#00ca00'],
        hoverCallback: function (index, options, content, row) {
            return '';
        }
    }).on('click', function(i, row){
    });
</script>
                                                    `}
                                                </code>
                                            </pre>
                                    </kbd>
                                </Card>
                            </UncontrolledCollapse>
                                <div id="morris-bar-chart" />
                            </CardBody>
                        </Card>
                        <Card className="iq-card">
                            <CardHeader className="iq-card-header d-flex justify-content-between">
                                <CardTitle className="iq-header-title">
                                    <h4 className="card-title">Donut Chart</h4>
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
                                                <code id="morris-donut-chart-code">{`
                                                
//---------------------- Morris Donut Chart -------------------------------
<div id="morris-donut-chart" />

<script>
    Morris.Donut({
                element: 'morris-donut-chart',
                resize: true,
                colors: ["#0084ff", "#e64141", "#00ca00"],
                data: [
                    {label: "Download Sales", value: 12},
                    {label: "In-Store Sales", value: 30},
                    {label: "Mail-Order Sales", value: 20}
                ],
                hideHover: 'auto'
            });
</script>
                                                    `}
                                                </code>
                                            </pre>
                                    </kbd>
                                </Card>
                            </UncontrolledCollapse>
                                <div id="morris-donut-chart" />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </>
        )
    }

}

export default Index;