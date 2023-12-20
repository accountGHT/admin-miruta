let calenderEvents =[], patientCalender =[];
let title = [
    "Birthday Party",
    "Meeting",
    "All Day Event",
    "Google Event",
    "Long Event",
];
let colorArray= [
    "#28a745",
    "#0084ff",
    "#fc9919",
    "#3788d8",
    "#ffc107",
];

function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}
function getRandomArbitrary(min, max) {
    return parseInt(Math.random() * (max - min) + min);
}
for (let i=0;i<200;i++){
    let day =randomDate(new Date(2019, 5, 1), new Date(2020,11,30));
    let index = getRandomArbitrary(0,5);
    calenderEvents.push({
        start: day,
        end: day,
        eventClasses: 'optionalEvent',
        title: title[index],
        color: colorArray[index],
        description: 'This is a test description of an event',
    });
    patientCalender.push({
        start: day,
        end: day,
        eventClasses: 'optionalEvent',
        title: title[index],
        description: 'This is a test description of an event',
    });
 }

const eventsArray={
    calenderEvents:calenderEvents,
    patientCalender:patientCalender,
};

export default eventsArray;