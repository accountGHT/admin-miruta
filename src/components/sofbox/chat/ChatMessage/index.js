import React from "react";
import {Link} from "react-router-dom"
const Index = props => {
    const { chatData } = props;
    return (
        <div className={"chat " + (props.chatLeft !== undefined && props.chatLeft === true ? " chat-left" : "")}>
            <div className={"chat-user"}>
                <Link to="#" className={"avatar m-0"}>
                    <img src={ chatData.avatar } alt="Chat avatar" className={"avatar-35 "} />
                </Link>
                <span className={"chat-time mt-1"}>{ chatData.messageTime }</span>
            </div>
            <div className={"chat-detail"}>
                <div className={"chat-message"}>
                    { chatData.message !== undefined && Array.isArray(chatData.message) ? (
                        <>
                            { chatData.message.map((item, index) => (
                                <p key={index}>{ item }</p>
                            )) }
                        </>
                    ) : (<p>{ chatData.message }</p>) }
                </div>
            </div>
        </div>
    );

};
export default Index;
