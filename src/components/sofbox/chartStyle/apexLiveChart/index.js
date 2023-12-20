import React from 'react';
import ApexCharts from 'apexcharts'

class Index extends React.Component {
    /*constructor(props) {
        super(props);
    }*/

    componentDidMount() {
        const { element, elementType, chartOption, speed} = this.props;
        let selector = '';
        let temp={lastDate:0,data:[]};

        if (elementType === 'class') {
            selector = '.' + element;
        } else {
            selector = '#' + element;
        }

        let chart = new ApexCharts(document.querySelector(selector), chartOption);
        chart.render();

        function getNewData(baseval, yrange,data) {
            let TICKINTERVAL = 86400000;
            let XAXISRANGE = 777600000;
            let newDate = baseval + TICKINTERVAL;
            for (let i = 0; i < data.length - 10; i++) {
                data[i].x = newDate - XAXISRANGE - TICKINTERVAL;
                data[i].y = 0;
            }
            data.push({
                x: newDate,
                y: Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
            });
            return {data:data,lastDate:newDate};
        }

        for(let i=0;i<10;i++){
            temp = getNewData(temp.lastDate, {
                min: 10,
                max: 90
            },temp.data);
        }
        chart.updateSeries([{
            data: temp.data
        }]);

        setInterval(function () {
            temp = getNewData(temp.lastDate, {
                min: 10,
                max: 90
            },temp.data);
            chart.updateSeries([{
                data: temp.data
            }]);
        },parseInt(speed));
    }


    render() {
        return (<div id={this.props.element} />)
    }
}

export default Index;
