import React from "react";

const Index = props => {
    const { details, show } = props;
    return (
        <>
            <div id="user-detail-popup" className={"scroller " + (show !== undefined && show === true ? " show" : "")}>
                <div className="user-profile">
                    <button type="button" className="close-popup p-3" onClick={() => { }}><i className="ri-close-fill" /></button>
                    <div className="user text-center mb-4">
                        <a href={"!#"} className="avatar m-0">
                            <img src={ details.userProfile } alt="avatar" />
                        </a>
                        <div className="user-name mt-4"><h4>{ details.username }</h4></div>
                        <div className="user-desc"><p>{ details.subTitle }</p></div>
                    </div>

                    <hr />
                    <div className="user-detail text-left mt-4 pl-4 pr-4">
                        <h5 className="mt-4 mb-4">About</h5>
                        <p>{ details.about }</p>
                        <h5 className="mt-3 mb-3">Status</h5>
                        <ul className="user-status p-0">
                            <li className="mb-1">
                                <i className="ri-checkbox-blank-circle-fill text-success pr-1" />
                                <span>Online</span>
                            </li>
                            <li className="mb-1">
                                <i className="ri-checkbox-blank-circle-fill text-warning pr-1" />
                                <span>Away</span>
                            </li>
                            <li className="mb-1">
                                <i className="ri-checkbox-blank-circle-fill text-danger pr-1" />
                                <span>Do Not Disturb</span>
                            </li>
                            <li className="mb-1">
                                <i className="ri-checkbox-blank-circle-fill text-light pr-1" />
                                <span>Offline</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Index;
