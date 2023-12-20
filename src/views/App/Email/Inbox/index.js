import React,{ useState, useEffect } from 'react';

// Import for the View assets...
import {index} from "../../../../config/pluginsInit";

import {
    deletedEmailsData,
    draftEmailsData,
    inboxEmailData,
    sendEmailData,
    spamEmailsData,
    starredEmailsData
} from "./emailData";

// Import for the custom Sofbox component...
import { EmailListItem, ComposeEmailForm } from '../../../../components/sofbox';

// Import for the bootstrap components...
import {
    Badge,
    Button,
    Card,
    CardBody,
    Col,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle, Modal, ModalBody, ModalHeader,
    Nav,
    Row, TabContent, TabPane, UncontrolledTooltip
} from "reactstrap";

const Index = props => {

    useEffect(() => {
        index();
    });

    const [activeTab, setActiveTab] = useState('inboxPanel');
    const [optionDropdown, setOptionDropdown] = useState(false);
    const [paginationDropdown, setPaginationDropdown] = useState(false);
    const [modal, setModal] = useState(false);

    const [inboxEmails] = useState(inboxEmailData);
    const [starredEmails] = useState(starredEmailsData);
    const [deletedEmails] = useState(deletedEmailsData);
    const [spamEmails] = useState(spamEmailsData);
    const [draftEmails] = useState(draftEmailsData);
    const [sendEmails] = useState(sendEmailData);

    const [sideBarTabs] = useState([
        {
            title: "Inbox",
            iconClass: "ri-mail-line",
            is_active: true,
            badge: "primary",
            badgeCount: 3,
            targetPanel: "inboxPanel",
        },
        {
            title: "Starred",
            iconClass: "ri-star-line",
            is_active: false,
            targetPanel: "starredPanel"
        },
        {
            title: "Snoozed",
            iconClass: "ri-time-line",
            is_active: false,
            targetPanel: "snoozedPanel"
        },
        {
            title: "Draft",
            iconClass: "ri-file-list-2-line",
            is_active: false,
            targetPanel: "draftPanel"
        },
        {
            title: "Sent Mail",
            iconClass: "ri-mail-send-line",
            is_active: false,
            targetPanel: "sendMailPanel"
        },
        {
            title: "Trash",
            iconClass: "ri-delete-bin-line",
            is_active: false,
            targetPanel: "trashPanel"
        },
        {
            title: "Important",
            iconClass: "ri-bookmark-line",
            is_active: false,
            targetPanel: "importantPanel"
        },
        {
            title: "Spam",
            iconClass: "ri-spam-line",
            is_active: false,
            targetPanel: "spanPanel"
        }
    ]);

    const [sideBarLabels] = useState([
        {
            title: "Personal",
            iconClass: "ri-focus-fill text-primary"
        },
        {
            title: "Company",
            iconClass: "ri-focus-fill text-danger"
        },
        {
            title: "Important",
            iconClass: "ri-focus-fill text-success"
        },
        {
            title: "Private",
            iconClass: "ri-focus-fill text-info"
        },
        {
            title: "Private",
            iconClass: "ri-focus-fill text-warning"
        },
        {
            title: "Add New Labels",
            iconClass: "ri-add-circle-line"
        }
    ]);

    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    };
    const toggleModal = () => setModal(!modal);


    const handleEmailItemClick = () => {
        console.log("It's Working");
    };

    return (
        <Row>
            <Col lg={3}>
                <Card className={"iq-card"}>
                    <CardBody className={"iq-card-body"}>
                        <div className={"iq-email-list"}>
                            <Button color="primary" size="lg" block onClick={toggleModal} className={"mb-3 font-size-16 p-3"}>
                                <i className={"ri-send-plane-line mr-2"} />
                                New Message
                            </Button>

                            <Nav className={"iq-email-ui nav flex-column nav-pills"}>
                                { sideBarTabs.map((item, index) => (
                                    <li key={index} className={"nav-link " + ( activeTab === item.targetPanel ? " active" : "" )} onClick={() => { toggle(item.targetPanel); }}>
                                        <a href={"!#"} className={"cursor-pointer"}>
                                            <i className={item.iconClass} />
                                            { item.title }
                                            { item.badge !== undefined && (<Badge color={item.badge}>{ item.badgeCount }</Badge>) }
                                        </a>
                                    </li>
                                )) }
                            </Nav>

                            <h6 className={"mt-4 mb-3"}>Labels</h6>
                            <ul className="iq-email-ui iq-email-label">
                                { sideBarLabels.map((item, index) => (
                                    <li key={index}>
                                        <a href={"!#"}>
                                            <i className={item.iconClass} />
                                            { item.title }
                                        </a>
                                    </li>
                                )) }
                            </ul>

                            <div className={"iq-progress-bar-linear d-inline-block w-100"}>
                                <h6 className={"mt-4 mb-3"}>Storage</h6>
                                <div className={"iq-progress-bar"}>
                                    <span className={"bg-danger"} data-percent={90} style={{ transition: "width 2s ease 0s", width: "90%" }} />
                                </div>
                                <span className={"mt-1 d-inline-block w-100"}>7.02 GB (46%) of 15 GB used</span>
                            </div>

                        </div>
                    </CardBody>
                </Card>
            </Col>
            <Col lg={9}>
                <Card className={"iq-card"}>
                    <CardBody className={"iq-card-body p-0"}>
                        {/* Inbox header */}
                        <div className={"iq-email-to-list p-3"}>
                            <div className={"d-flex justify-content-between"}>
                                <ul>
                                    <li>
                                        <Dropdown isOpen={optionDropdown} toggle={() => setOptionDropdown(prevState => !prevState)}>
                                            <DropdownToggle tag="div" className="custom-control custom-checkbox" data-toggle="dropdown">
                                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                                <label className="custom-control-label" htmlFor="customCheck1">
                                                    <i className="ri-arrow-down-s-line" />
                                                </label>
                                            </DropdownToggle>
                                            <DropdownMenu>
                                                <DropdownItem>
                                                    Action
                                                </DropdownItem>
                                                <DropdownItem>
                                                    Another action
                                                </DropdownItem>
                                                <DropdownItem divider/>
                                                <DropdownItem>
                                                    Something else here
                                                </DropdownItem>
                                            </DropdownMenu>
                                        </Dropdown>
                                    </li>

                                    <li>
                                        <a href={"!#"} id="reloadToolTip">
                                            <i className={"ri-restart-line"} />
                                        </a>
                                        <UncontrolledTooltip placement="top" target="reloadToolTip">
                                            Reload
                                        </UncontrolledTooltip>
                                    </li>

                                    <li>
                                        <a href={"!#"} id="archiveToolTip">
                                            <i className={"ri-mail-open-line"} />
                                        </a>
                                        <UncontrolledTooltip placement="top" target="archiveToolTip">
                                            Archive
                                        </UncontrolledTooltip>
                                    </li>

                                    <li>
                                        <a href={"!#"} id="spamToolTip">
                                            <i className={"ri-information-line"} />
                                        </a>
                                        <UncontrolledTooltip placement="top" target="spamToolTip">
                                            Spam
                                        </UncontrolledTooltip>
                                    </li>

                                    <li>
                                        <a href={"!#"} id="deleteToolTip">
                                            <i className={"ri-delete-bin-line"} />
                                        </a>
                                        <UncontrolledTooltip placement="top" target="deleteToolTip">
                                            Delete
                                        </UncontrolledTooltip>
                                    </li>

                                    <li>
                                        <a href={"!#"} id="inboxToolTip">
                                            <i className={"ri-mail-unread-line"} />
                                        </a>
                                        <UncontrolledTooltip placement="top" target="inboxToolTip">
                                            Inbox
                                        </UncontrolledTooltip>
                                    </li>

                                    <li>
                                        <a href={"!#"} id="zoomToolTip">
                                            <i className={"ri-drag-move-2-line"} />
                                        </a>
                                        <UncontrolledTooltip placement="top" target="zoomToolTip">
                                            Zoom
                                        </UncontrolledTooltip>
                                    </li>
                                </ul>

                                <div className="iq-email-search d-flex">
                                    <form className="mr-3 position-relative">
                                        <div className="form-group mb-0">
                                            <input type="email" className="form-control" id="exampleInputEmail1"
                                                   aria-describedby="emailHelp" placeholder="Search" />
                                            <a className="search-link" href="!#">
                                                <i className="ri-search-line" />
                                            </a>
                                        </div>
                                    </form>
                                </div>

                                <ul>
                                    <li className="mr-3">
                                        <Dropdown isOpen={paginationDropdown} toggle={() => setPaginationDropdown(prevState => !prevState)}>
                                            <DropdownToggle tag="a" className="font-size-14" data-toggle="dropdown">
                                                1 - 50 of 505
                                            </DropdownToggle>
                                            <DropdownMenu>
                                                <DropdownItem>
                                                    Action
                                                </DropdownItem>
                                                <DropdownItem>
                                                    Another action
                                                </DropdownItem>
                                                <DropdownItem divider/>
                                                <DropdownItem>
                                                    Something else here
                                                </DropdownItem>
                                            </DropdownMenu>
                                        </Dropdown>
                                    </li>

                                    <li>
                                        <a href={"!#"} id="previousToolTip">
                                            <i className={"ri-arrow-left-s-line"} />
                                        </a>
                                        <UncontrolledTooltip placement="top" target="previousToolTip">
                                            Previous
                                        </UncontrolledTooltip>
                                    </li>

                                    <li>
                                        <a href={"!#"} id="nextToolTip">
                                            <i className={"ri-arrow-right-s-line"} />
                                        </a>
                                        <UncontrolledTooltip placement="top" target="nextToolTip">
                                            Next
                                        </UncontrolledTooltip>
                                    </li>

                                    <li className="mr-0">
                                        <a href={"!#"} id="settingToolTip">
                                            <i className={"ri-list-settings-line"} />
                                        </a>
                                        <UncontrolledTooltip placement="top" target="settingToolTip">
                                            Setting
                                        </UncontrolledTooltip>
                                    </li>
                                </ul>

                            </div>
                        </div>

                        <div className={"iq-email-listbox"}>
                            <TabContent activeTab={activeTab}>
                                <TabPane tabId={"inboxPanel"}>
                                    <EmailListItem onClick={handleEmailItemClick} emails={inboxEmails} />
                                </TabPane>
                                <TabPane tabId={"starredPanel"}>
                                    <EmailListItem onClick={handleEmailItemClick} emails={starredEmails} />
                                </TabPane>
                                <TabPane tabId={"snoozedPanel"}>
                                    <EmailListItem onClick={handleEmailItemClick} emails={deletedEmails} />
                                </TabPane>
                                <TabPane tabId={"draftPanel"}>
                                    <EmailListItem onClick={handleEmailItemClick} emails={draftEmails} />
                                </TabPane>
                                <TabPane tabId={"sendMailPanel"}>
                                    <EmailListItem onClick={handleEmailItemClick} emails={sendEmails} />
                                </TabPane>
                                <TabPane tabId={"trashPanel"}>
                                    <EmailListItem onClick={handleEmailItemClick} emails={deletedEmails} />
                                </TabPane>
                                <TabPane tabId={"importantPanel"}>
                                    <EmailListItem onClick={handleEmailItemClick} emails={starredEmails} />
                                </TabPane>
                                <TabPane tabId={"spanPanel"}>
                                    <EmailListItem onClick={handleEmailItemClick} emails={spamEmails} />
                                </TabPane>
                            </TabContent>
                        </div>
                    </CardBody>
                </Card>
            </Col>

            <Modal id={"compose-email-popup"} isOpen={modal} fade={false} toggle={toggleModal} className={"compose-popup mb-0"}>
                <ModalHeader toggle={toggleModal} className={"border-0"}>
                    <h5 className={"text-primary card-title"}>
                        <i className={"ri-pencil-fill"} /> &nbsp;
                        Compose Message
                    </h5>
                </ModalHeader>
                <ModalBody>
                    <ComposeEmailForm />
                </ModalBody>
            </Modal>
        </Row>
    );
};

export default Index;
