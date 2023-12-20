import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';

class Index extends React.Component{
    render() {
        return (
            <FullCalendar defaultView="dayGridMonth" plugins={ [dayGridPlugin] } events={this.props.events}/>
        )
    }
}


export default Index;