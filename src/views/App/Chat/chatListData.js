let today = new Date();
let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
export const chatListData = [
    {
        username: 'Team Discussions',
        subTitle: 'Lorem Ipsum is',
        userProfile: require("../../../assets/images/user/05.jpg"),
        status: 'success',
        messageCount: 10,
        time: '05 min',
        about: 'It is long established fact that a reader will be distracted bt the readable.',
        chatData: [
            {
                type: "message",
                messageTime: "6:45",
                date: date,
                avatar: require("../../../assets/images/user/1.jpg"),
                message: [
                    "How can we help? We're here for you! 😄"
                ]
            },
            {
                type: "reply",
                time: "6:48",
                date: date,
                avatar: require("../../../assets/images/user/05.jpg"),
                message: [
                    "Hey John, I am looking for the best admin template.",
                    "Could you please help me to find it out? "
                ]
            },
            {
                type: "message",
                time: "6:48",
                date: date,
                avatar: require("../../../assets/images/user/1.jpg"),
                message: [
                    "Absolutely!",
                    "Sofbox Dashboard is the responsive bootstrap 4 admin template."
                ]
            },
            {
                type: "reply",
                time: "6:48",
                date: date,
                avatar: require("../../../assets/images/user/05.jpg"),
                message: [
                    "Looks clean and fresh UI.",
                ]
            },
            {
                type: "message",
                time: "6:50",
                date: date,
                avatar: require("../../../assets/images/user/1.jpg"),
                message: [
                    "Thanks, from ThemeForest.",
                ]
            },
            {
                type: "reply",
                time: "6:53",
                date: date,
                avatar: require("../../../assets/images/user/05.jpg"),
                message: [
                    "I will purchase it for sure. ",
                ]
            },
            {
                type: "message",
                time: "6:55",
                date: date,
                avatar: require("../../../assets/images/user/1.jpg"),
                message: [
                    "Okay Thanks..",
                ]
            },
            {
                type: "reply",
                time: "6:55",
                date: date,
                avatar: require("../../../assets/images/user/05.jpg"),
                message: [
                    "Welcome..",
                ]
            }
        ]
    },
    {
        username: 'Announcement',
        subTitle: 'This Sunday we',
        userProfile: require("../../../assets/images/user/06.jpg"),
        status: 'success',
        messageCount: 8,
        time: '08 min',
        about: 'It is long established fact that a reader will be distracted bt the readable.',
        chatData: [
            {
                type: "message",
                messageTime: "6:45",
                date: date,
                avatar: require("../../../assets/images/user/1.jpg"),
                message: [
                    "How can we help? We're here for you! 😄"
                ]
            },
            {
                type: "reply",
                time: "6:48",
                date: date,
                avatar: require("../../../assets/images/user/06.jpg"),
                message: [
                    "Hey John, I am looking for the best admin template.",
                    "Could you please help me to find it out? "
                ]
            },
            {
                type: "message",
                time: "6:48",
                date: date,
                avatar: require("../../../assets/images/user/1.jpg"),
                message: [
                    "Absolutely!",
                    "Sofbox Dashboard is the responsive bootstrap 4 admin template."
                ]
            },
            {
                type: "reply",
                time: "6:48",
                date: date,
                avatar: require("../../../assets/images/user/06.jpg"),
                message: [
                    "Looks clean and fresh UI.",
                ]
            },
            {
                type: "message",
                time: "6:50",
                date: date,
                avatar: require("../../../assets/images/user/1.jpg"),
                message: [
                    "Thanks, from ThemeForest.",
                ]
            },
            {
                type: "reply",
                time: "6:53",
                date: date,
                avatar: require("../../../assets/images/user/06.jpg"),
                message: [
                    "I will purchase it for sure. ",
                ]
            },
            {
                type: "message",
                time: "6:55",
                date: date,
                avatar: require("../../../assets/images/user/1.jpg"),
                message: [
                    "Okay Thanks..",
                ]
            },
            {
                type: "reply",
                time: "6:55",
                date: date,
                avatar: require("../../../assets/images/user/06.jpg"),
                message: [
                    "Welcome..",
                ]
            }
        ]
    },
    {
        is_heading: true,
        title: 'Private Channels',
    },
    {
        username: 'Designer',
        subTitle: 'There are many',
        userProfile: require("../../../assets/images/user/07.jpg"),
        status: 'warning',
        about: 'It is long established fact that a reader will be distracted bt the readable.',
        chatData: [
            {
                type: "message",
                messageTime: "6:45",
                date: date,
                avatar: require("../../../assets/images/user/1.jpg"),
                message: [
                    "How can we help? We're here for you! 😄"
                ]
            },
            {
                type: "reply",
                time: "6:48",
                date: date,
                avatar: require("../../../assets/images/user/07.jpg"),
                message: [
                    "Hey John, I am looking for the best admin template.",
                    "Could you please help me to find it out? "
                ]
            },
            {
                type: "message",
                time: "6:48",
                date: date,
                avatar: require("../../../assets/images/user/1.jpg"),
                message: [
                    "Absolutely!",
                    "Sofbox Dashboard is the responsive bootstrap 4 admin template."
                ]
            },
            {
                type: "reply",
                time: "6:48",
                date: date,
                avatar: require("../../../assets/images/user/07.jpg"),
                message: [
                    "Looks clean and fresh UI.",
                ]
            },
            {
                type: "message",
                time: "6:50",
                date: date,
                avatar: require("../../../assets/images/user/1.jpg"),
                message: [
                    "Thanks, from ThemeForest.",
                ]
            },
            {
                type: "reply",
                time: "6:53",
                date: date,
                avatar: require("../../../assets/images/user/07.jpg"),
                message: [
                    "I will purchase it for sure. ",
                ]
            },
            {
                type: "message",
                time: "6:55",
                date: date,
                avatar: require("../../../assets/images/user/1.jpg"),
                message: [
                    "Okay Thanks..",
                ]
            },
            {
                type: "reply",
                time: "6:55",
                date: date,
                avatar: require("../../../assets/images/user/07.jpg"),
                message: [
                    "Welcome..",
                ]
            }
        ]
    },
    {
        username: 'Developer',
        subTitle: 'passages of Lorem',
        userProfile: require("../../../assets/images/user/08.jpg"),
        status: 'warning',
        about: 'It is long established fact that a reader will be distracted bt the readable.',
        chatData: [
            {
                type: "message",
                messageTime: "6:45",
                date: date,
                avatar: require("../../../assets/images/user/1.jpg"),
                message: [
                    "How can we help? We're here for you! 😄"
                ]
            },
            {
                type: "reply",
                time: "6:48",
                date: date,
                avatar: require("../../../assets/images/user/08.jpg"),
                message: [
                    "Hey John, I am looking for the best admin template.",
                    "Could you please help me to find it out? "
                ]
            },
            {
                type: "message",
                time: "6:48",
                date: date,
                avatar: require("../../../assets/images/user/1.jpg"),
                message: [
                    "Absolutely!",
                    "Sofbox Dashboard is the responsive bootstrap 4 admin template."
                ]
            },
            {
                type: "reply",
                time: "6:48",
                date: date,
                avatar: require("../../../assets/images/user/08.jpg"),
                message: [
                    "Looks clean and fresh UI.",
                ]
            },
            {
                type: "message",
                time: "6:50",
                date: date,
                avatar: require("../../../assets/images/user/1.jpg"),
                message: [
                    "Thanks, from ThemeForest.",
                ]
            },
            {
                type: "reply",
                time: "6:53",
                date: date,
                avatar: require("../../../assets/images/user/08.jpg"),
                message: [
                    "I will purchase it for sure. ",
                ]
            },
            {
                type: "message",
                time: "6:55",
                date: date,
                avatar: require("../../../assets/images/user/1.jpg"),
                message: [
                    "Okay Thanks..",
                ]
            },
            {
                type: "reply",
                time: "6:55",
                date: date,
                avatar: require("../../../assets/images/user/08.jpg"),
                message: [
                    "Welcome..",
                ]
            }
        ]
    },
    {
        username: 'Testing Team',
        subTitle: 'Lorem Ipsum used',
        userProfile: require("../../../assets/images/user/09.jpg"),
        status: 'warning',
        about: 'It is long established fact that a reader will be distracted bt the readable.',
        chatData: [
            {
                type: "message",
                messageTime: "6:45",
                date: date,
                avatar: require("../../../assets/images/user/1.jpg"),
                message: [
                    "How can we help? We're here for you! 😄"
                ]
            },
            {
                type: "reply",
                time: "6:48",
                date: date,
                avatar: require("../../../assets/images/user/09.jpg"),
                message: [
                    "Hey John, I am looking for the best admin template.",
                    "Could you please help me to find it out? "
                ]
            },
            {
                type: "message",
                time: "6:48",
                date: date,
                avatar: require("../../../assets/images/user/1.jpg"),
                message: [
                    "Absolutely!",
                    "Sofbox Dashboard is the responsive bootstrap 4 admin template."
                ]
            },
            {
                type: "reply",
                time: "6:48",
                date: date,
                avatar: require("../../../assets/images/user/09.jpg"),
                message: [
                    "Looks clean and fresh UI.",
                ]
            },
            {
                type: "message",
                time: "6:50",
                date: date,
                avatar: require("../../../assets/images/user/1.jpg"),
                message: [
                    "Thanks, from ThemeForest.",
                ]
            },
            {
                type: "reply",
                time: "6:53",
                date: date,
                avatar: require("../../../assets/images/user/09.jpg"),
                message: [
                    "I will purchase it for sure. ",
                ]
            },
            {
                type: "message",
                time: "6:55",
                date: date,
                avatar: require("../../../assets/images/user/1.jpg"),
                message: [
                    "Okay Thanks..",
                ]
            },
            {
                type: "reply",
                time: "6:55",
                date: date,
                avatar: require("../../../assets/images/user/09.jpg"),
                message: [
                    "Welcome..",
                ]
            }
        ]
    },
    {
        is_heading: true,
        title: 'Direct Message',
    },
    {
        username: 'Paul Molive',
        subTitle: 'translation by',
        userProfile: require("../../../assets/images/user/10.jpg"),
        status: 'success',
        about: 'It is long established fact that a reader will be distracted bt the readable.',
        chatData: [
            {
                type: "message",
                messageTime: "6:45",
                date: date,
                avatar: require("../../../assets/images/user/1.jpg"),
                message: [
                    "How can we help? We're here for you! 😄"
                ]
            },
            {
                type: "reply",
                time: "6:48",
                date: date,
                avatar: require("../../../assets/images/user/10.jpg"),
                message: [
                    "Hey John, I am looking for the best admin template.",
                    "Could you please help me to find it out? "
                ]
            },
            {
                type: "message",
                time: "6:48",
                date: date,
                avatar: require("../../../assets/images/user/1.jpg"),
                message: [
                    "Absolutely!",
                    "Sofbox Dashboard is the responsive bootstrap 4 admin template."
                ]
            },
            {
                type: "reply",
                time: "6:48",
                date: date,
                avatar: require("../../../assets/images/user/10.jpg"),
                message: [
                    "Looks clean and fresh UI.",
                ]
            },
            {
                type: "message",
                time: "6:50",
                date: date,
                avatar: require("../../../assets/images/user/1.jpg"),
                message: [
                    "Thanks, from ThemeForest.",
                ]
            },
            {
                type: "reply",
                time: "6:53",
                date: date,
                avatar: require("../../../assets/images/user/10.jpg"),
                message: [
                    "I will purchase it for sure. ",
                ]
            },
            {
                type: "message",
                time: "6:55",
                date: date,
                avatar: require("../../../assets/images/user/1.jpg"),
                message: [
                    "Okay Thanks..",
                ]
            },
            {
                type: "reply",
                time: "6:55",
                date: date,
                avatar: require("../../../assets/images/user/10.jpg"),
                message: [
                    "Welcome..",
                ]
            }
        ]
    },
    {
        username: 'Paige Turner',
        subTitle: 'Lorem Ipsum which',
        userProfile: require("../../../assets/images/user/05.jpg"),
        status: 'success',
        about: 'It is long established fact that a reader will be distracted bt the readable.',
        chatData: [
            {
                type: "message",
                messageTime: "6:45",
                date: date,
                avatar: require("../../../assets/images/user/1.jpg"),
                message: [
                    "How can we help? We're here for you! 😄"
                ]
            },
            {
                type: "reply",
                time: "6:48",
                date: date,
                avatar: require("../../../assets/images/user/05.jpg"),
                message: [
                    "Hey John, I am looking for the best admin template.",
                    "Could you please help me to find it out? "
                ]
            },
            {
                type: "message",
                time: "6:48",
                date: date,
                avatar: require("../../../assets/images/user/1.jpg"),
                message: [
                    "Absolutely!",
                    "Sofbox Dashboard is the responsive bootstrap 4 admin template."
                ]
            },
            {
                type: "reply",
                time: "6:48",
                date: date,
                avatar: require("../../../assets/images/user/05.jpg"),
                message: [
                    "Looks clean and fresh UI.",
                ]
            },
            {
                type: "message",
                time: "6:50",
                date: date,
                avatar: require("../../../assets/images/user/1.jpg"),
                message: [
                    "Thanks, from ThemeForest.",
                ]
            },
            {
                type: "reply",
                time: "6:53",
                date: date,
                avatar: require("../../../assets/images/user/05.jpg"),
                message: [
                    "I will purchase it for sure. ",
                ]
            },
            {
                type: "message",
                time: "6:55",
                date: date,
                avatar: require("../../../assets/images/user/1.jpg"),
                message: [
                    "Okay Thanks..",
                ]
            },
            {
                type: "reply",
                time: "6:55",
                date: date,
                avatar: require("../../../assets/images/user/05.jpg"),
                message: [
                    "Welcome..",
                ]
            }
        ]
    },
    {
        username: 'Barb Ackue',
        subTitle: 'simply random text',
        userProfile: require("../../../assets/images/user/06.jpg"),
        status: 'success',
        about: 'It is long established fact that a reader will be distracted bt the readable.',
        chatData: [
            {
                type: "message",
                messageTime: "6:45",
                date: date,
                avatar: require("../../../assets/images/user/1.jpg"),
                message: [
                    "How can we help? We're here for you! 😄"
                ]
            },
            {
                type: "reply",
                time: "6:48",
                date: date,
                avatar: require("../../../assets/images/user/06.jpg"),
                message: [
                    "Hey John, I am looking for the best admin template.",
                    "Could you please help me to find it out? "
                ]
            },
            {
                type: "message",
                time: "6:48",
                date: date,
                avatar: require("../../../assets/images/user/1.jpg"),
                message: [
                    "Absolutely!",
                    "Sofbox Dashboard is the responsive bootstrap 4 admin template."
                ]
            },
            {
                type: "reply",
                time: "6:48",
                date: date,
                avatar: require("../../../assets/images/user/06.jpg"),
                message: [
                    "Looks clean and fresh UI.",
                ]
            },
            {
                type: "message",
                time: "6:50",
                date: date,
                avatar: require("../../../assets/images/user/1.jpg"),
                message: [
                    "Thanks, from ThemeForest.",
                ]
            },
            {
                type: "reply",
                time: "6:53",
                date: date,
                avatar: require("../../../assets/images/user/06.jpg"),
                message: [
                    "I will purchase it for sure. ",
                ]
            },
            {
                type: "message",
                time: "6:55",
                date: date,
                avatar: require("../../../assets/images/user/1.jpg"),
                message: [
                    "Okay Thanks..",
                ]
            },
            {
                type: "reply",
                time: "6:55",
                date: date,
                avatar: require("../../../assets/images/user/06.jpg"),
                message: [
                    "Welcome..",
                ]
            }
        ]
    },
    {
        username: 'Maya Didas',
        subTitle: 'but also the leap',
        userProfile: require("../../../assets/images/user/07.jpg"),
        status: 'success',
        about: 'It is long established fact that a reader will be distracted bt the readable.',
        chatData: [
            {
                type: "message",
                messageTime: "6:45",
                date: date,
                avatar: require("../../../assets/images/user/1.jpg"),
                message: [
                    "How can we help? We're here for you! 😄"
                ]
            },
            {
                type: "reply",
                time: "6:48",
                date: date,
                avatar: require("../../../assets/images/user/07.jpg"),
                message: [
                    "Hey John, I am looking for the best admin template.",
                    "Could you please help me to find it out? "
                ]
            },
            {
                type: "message",
                time: "6:48",
                date: date,
                avatar: require("../../../assets/images/user/1.jpg"),
                message: [
                    "Absolutely!",
                    "Sofbox Dashboard is the responsive bootstrap 4 admin template."
                ]
            },
            {
                type: "reply",
                time: "6:48",
                date: date,
                avatar: require("../../../assets/images/user/07.jpg"),
                message: [
                    "Looks clean and fresh UI.",
                ]
            },
            {
                type: "message",
                time: "6:50",
                date: date,
                avatar: require("../../../assets/images/user/1.jpg"),
                message: [
                    "Thanks, from ThemeForest.",
                ]
            },
            {
                type: "reply",
                time: "6:53",
                date: date,
                avatar: require("../../../assets/images/user/07.jpg"),
                message: [
                    "I will purchase it for sure. ",
                ]
            },
            {
                type: "message",
                time: "6:55",
                date: date,
                avatar: require("../../../assets/images/user/1.jpg"),
                message: [
                    "Okay Thanks..",
                ]
            },
            {
                type: "reply",
                time: "6:55",
                date: date,
                avatar: require("../../../assets/images/user/07.jpg"),
                message: [
                    "Welcome..",
                ]
            }
        ]
    },
    {
        username: 'Monty Carlo',
        subTitle: 'Contrary to popular',
        userProfile: require("../../../assets/images/user/08.jpg"),
        status: 'success',
        about: 'It is long established fact that a reader will be distracted bt the readable.',
        chatData: [
            {
                type: "message",
                messageTime: "6:45",
                date: date,
                avatar: require("../../../assets/images/user/1.jpg"),
                message: [
                    "How can we help? We're here for you! 😄"
                ]
            },
            {
                type: "reply",
                time: "6:48",
                date: date,
                avatar: require("../../../assets/images/user/08.jpg"),
                message: [
                    "Hey John, I am looking for the best admin template.",
                    "Could you please help me to find it out? "
                ]
            },
            {
                type: "message",
                time: "6:48",
                date: date,
                avatar: require("../../../assets/images/user/1.jpg"),
                message: [
                    "Absolutely!",
                    "Sofbox Dashboard is the responsive bootstrap 4 admin template."
                ]
            },
            {
                type: "reply",
                time: "6:48",
                date: date,
                avatar: require("../../../assets/images/user/08.jpg"),
                message: [
                    "Looks clean and fresh UI.",
                ]
            },
            {
                type: "message",
                time: "6:50",
                date: date,
                avatar: require("../../../assets/images/user/1.jpg"),
                message: [
                    "Thanks, from ThemeForest.",
                ]
            },
            {
                type: "reply",
                time: "6:53",
                date: date,
                avatar: require("../../../assets/images/user/08.jpg"),
                message: [
                    "I will purchase it for sure. ",
                ]
            },
            {
                type: "message",
                time: "6:55",
                date: date,
                avatar: require("../../../assets/images/user/1.jpg"),
                message: [
                    "Okay Thanks..",
                ]
            },
            {
                type: "reply",
                time: "6:55",
                date: date,
                avatar: require("../../../assets/images/user/08.jpg"),
                message: [
                    "Welcome..",
                ]
            }
        ]
    },
];


