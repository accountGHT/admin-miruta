let screenSheets = {
    panel: [
        {
            title: '',
            titleClass: "friest-booking-blank",
        },
        {
            title: 'A',
            titleClass: "",
        },
        {
            title: 'B',
            titleClass: "",
        },
        {
            title: 'C',
            titleClass: "",
        },
        {
            title: '',
            titleClass: "secondary-booking-blank",
        },
        {
            title: 'D',
            titleClass: "",
        },
        {
            title: 'E',
            titleClass: "",
        },
        {
            title: 'F',
            titleClass: "",
        },
        {
            title: '',
            titleClass: "three-booking-blank",
        },
        {
            title: 'G',
            titleClass: "",
        },
        {
            title: 'H',
            titleClass: "",
        },
    ],
    status:[
        {
            title:'Selected',
            color:'bg-success'
        },
        {
            title:'Available',
            color:''
        },
        {
            title:'Sold',
            color:'bg-secondary'
        },
    ],
    sheet:[
        {
            title:'Recliner.  $150.00',
            row:[
                {
                    isIndexRow:false,
                    empty:[0,1,2,9,16,17,18],
                    disable:[12]
                },
                {
                    isIndexRow:false,
                    empty:[0,9,18],
                    disable:[3,6,10,14,15,16,17]
                },
                {
                    isIndexRow:false,
                    empty:[9],
                    disable:[]
                }
            ]
        },
        {
            title:'Recliner. $250.00',
            row:[
                {
                    isIndexRow:false,
                    empty:[9],
                    disable:[]
                },
                {
                    isIndexRow:false,
                    empty:[9],
                    disable:[]
                },
                {
                    isIndexRow:false,
                    empty:[9],
                    disable:[11,12,13,14,15,16]
                }
            ]
        },
        {
            title:'Recliner. $350.00',
            row:[
                {
                    isIndexRow:false,
                    empty:[9],
                    disable:[3,5,6,7,8,10,11,12,13,14,15,18]
                },
                {
                    isIndexRow:false,
                    empty:[9],
                    disable:[1,2,3,4,5,6,7,8,10,11,12,13,14,15,16,17,18]
                },
                {
                    isIndexRow:true,
                    empty:[9],
                    disable:[]
                }
            ]
        }
    ],
};

export default screenSheets;