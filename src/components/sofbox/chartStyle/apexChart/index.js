import React from 'react';
import ApexCharts from 'apexcharts'

class Index extends React.Component {

    componentDidMount() {
        const { element, elementType, chartOption } = this.props;
        let selector = '';
    
        if (elementType === 'class') {
            selector = '.' + element;
        } else {
            selector = '#' + element;
        }
    
        let chart = new ApexCharts(document.querySelector(selector), chartOption);
    
        chart.render();
    }

    render() {
        return (<div id={this.props.element} />)
    }
}

export default Index;
