import React from "react";

const Index = props => {
    const { data } = props;
    return (
        <>
            <div className="d-flex align-items-center">
                <div className="avatar mr-3">
                    <img src={ data.userProfile } alt="chatuserimage"
                         className="avatar-50 " />
                    <span className="avatar-status">
                        <i className="ri-checkbox-blank-circle-fill text-success" />
                    </span>
                </div>
                <div className="chat-sidebar-name">
                    <h6 className="mb-0">{ data.username }</h6>
                    <span>{ data.subTitle }</span>
                </div>
                <div className="chat-meta float-right text-center mt-2">

                    { data.messageCount !== undefined && (
                        <div className="chat-msg-counter bg-primary text-white">
                            { data.messageCount }
                        </div>
                    ) }

                    { data.time !== undefined && (
                        <span className="text-nowrap text-primary">
                            { data.time }
                        </span>
                    ) }
                </div>
            </div>
        </>
    )
};

export default Index;
