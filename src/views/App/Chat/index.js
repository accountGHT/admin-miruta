import React, {useEffect, useState} from "react";


// Import for the View assets...
import {index} from "../../../config/pluginsInit";
import profileImage from '../../../assets/images/user/1.jpg';
import { UserDetailCard, ChatItem, ChatMessage } from '../../../components/sofbox';
import { chatListData } from './chatListData';

// Import for the Reactstrap and plugins components...
import {Button, Card, CardBody, Col, Form, Input, Row, TabContent, TabPane} from "reactstrap";

const Index = props => {
    const [userProfile] = useState({
        username: 'Nik Jordan',
        subTitle: 'Web Designer',
        userProfile: profileImage,
        status: 'active',
        about: 'It is long established fact that a reader will be distracted bt the readable.'
    });
    const [userDrawer, setUserDrawer] = useState(false);
    const [chatList] = useState(chatListData);
    const [activeTab, setActiveTab] = useState("");

    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    };

    useEffect(() => {
        index();
    });
    
    return (
        <Row>
            <Col md={12}>
                <Card className={"iq-card"}>
                    <CardBody className={"iq-card-body chat-page p-0"}>
                        <div className={"chat-data-block"}>
                            <Row>
                                <Col md={3} className={"chat-data-left scroller"}>
                                    <div className="chat-search pt-3 pl-3">
                                        <div className={"d-flex align-items-center"}>
                                            <div className="chat-profile mr-3">
                                                <img src={ userProfile.userProfile } alt="chat-user" className="avatar-60 " onClick={() => { setUserDrawer(prevState => !prevState) }} />
                                            </div>
                                            <div className="chat-caption">
                                                <h5 className="mb-0">{ userProfile.username }</h5>
                                                <p className="m-0">{ userProfile.subTitle }</p>
                                            </div>
                                        </div>
                                        <UserDetailCard details={userProfile} show={userDrawer} />

                                        <div className="chat-searchbar mt-4">
                                            <div className="form-group chat-search-data m-0">
                                                <input type="text" className="form-control round" id="chat-search"
                                                       placeholder="Search" />
                                                <i className="ri-search-line" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="chat-sidebar-channel scroller mt-4 pl-3">
                                        <h5 className="">Public Channels</h5>
                                        <ul className="iq-chat-ui nav flex-column nav-pills">
                                            { chatList.map((item, index) => (
                                                <li key={index}>
                                                    { item.is_heading !== undefined && item.is_heading === true ? (
                                                        <h5 className="">{ item.title }</h5>
                                                    ) : (
                                                        <a href={"!#"} role="tab" data-toggle="pill" className={"cursor-pointer " + (activeTab === ("panel" + index) ? "active" : "")} onClick={() => { toggle("panel" + index); }}>
                                                            <ChatItem data={item} />
                                                        </a>
                                                    ) }
                                                </li>
                                            )) }
                                        </ul>
                                    </div>
                                </Col>
                                <Col md={9} className={"chat-data p-0 chat-data-right"}>
                                    <TabContent activeTab={activeTab}>
                                        { chatList.map((item, index) => (
                                            <TabPane key={index} tabId={"panel" + index}>
                                                <div className={"chat-head"}>
                                                    <header className={"d-flex justify-content-between align-items-center bg-white pt-3  pl-3 pr-3 pb-3"}>
                                                        <div className={"d-flex align-items-center"}>
                                                            <div id={"sidebar-toggle-" + index} className={"sidebar-toggle d-none"}>
                                                                <i className="ri-menu-3-line" />
                                                            </div>
                                                            <div className="avatar chat-user-profile m-0 mr-3">
                                                                <img src={ item.userProfile } alt="avatar"
                                                                     className="avatar-50 " />
                                                                <span className="avatar-status">
                                                                    <i className="ri-checkbox-blank-circle-fill text-success" />
                                                                </span>
                                                            </div>
                                                            <h5 className="mb-0">{ item.username }</h5>
                                                        </div>
                                                        <div className="chat-header-icons d-flex">
                                                            <span className="chat-icon-phone">
                                                                <i className="ri-phone-line" />
                                                            </span>
                                                            <span className="chat-icon-video">
                                                                <i className="ri-vidicon-line" />
                                                            </span>
                                                            <span className="chat-icon-delete">
                                                                <i className="ri-delete-bin-line" />
                                                            </span>
                                                        </div>
                                                    </header>
                                                </div>
                                                <div className={"chat-content scroller"}>
                                                    { item.chatData !== undefined && item.chatData.length > 0 ? (
                                                        <>
                                                            { item.chatData.map((message, index) => (
                                                                <ChatMessage
                                                                    key={index}
                                                                    chatData={message}
                                                                    chatLeft={message.type === "reply" ? true : false}
                                                                />
                                                            )) }
                                                        </>
                                                    ) : (
                                                        <div>
                                                            <h5 className={"text-primary text-center"}>Start your conversation by sending new message</h5>
                                                        </div>
                                                    ) }
                                                </div>
                                                <div className={"chat-footer p-3 bg-white"}>
                                                    <Form className={"d-flex align-items-center"}>
                                                        <div className={"chat-attagement d-flex"}>
                                                            <i className={"fa fa-smile-o pr-3"} />
                                                            <i className={"fa fa-paperclip pr-3"} />
                                                        </div>
                                                        <Input type="text" className="mr-3"
                                                               placeholder="Type your message" />
                                                        <Button type={"submit"} color={"primary"} className={"d-flex align-items-center p-2"}>
                                                            <i className={"fa fa-paper-plane-o"} />
                                                            <span className={"d-none d-lg-block ml-1"}>Send</span>
                                                        </Button>
                                                    </Form>
                                                </div>
                                            </TabPane>
                                        )) }
                                    </TabContent>
                                </Col>
                            </Row>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    );
};

export default Index;
