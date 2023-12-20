import React from 'react';
import Calendar from 'react-calendar';

class Index extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
        }
    }
    render() {
        return (
            <Calendar
                value={this.state.date}
            />
        )
    }
}


export default Index;