import React, {useState} from 'react';

// Import for the Custom sofbox components...
import { DetailsPanel, PanelContent } from '../../../sofbox'

// Import for the Reactstrap components...
import { Dropdown, DropdownMenu, DropdownToggle, UncontrolledTooltip} from "reactstrap";


const Index = (props) => {
    const [ activeDetail, setActiveDetails ] = useState("");
    const [optionDropdown, setOptionDropdown] = useState(false);
    const { emails } = props;

    const handlePanelEvent = () => {
        setActiveDetails(prevState => "");
    };
    return (
        <>
            <ul className={"iq-email-sender-list"}>
                { emails.length !== undefined && emails.length > 0 ? (
                    <>
                        <DetailsPanel activePanel={activeDetail}>
                            { emails.map((item, index) => (
                                <>
                                    <li key={index} onClick={() => { setActiveDetails(prevState => "detail"+index) }} className={(item.is_unread !== undefined && item.is_unread === true ? "iq-unread " : "") + " cursor-pointer"}>
                                        <div className="d-flex align-self-center">
                                            <div className="iq-email-sender-info">
                                                <div className="iq-checkbox-mail">
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id={ index + "mailk"} />
                                                        <label className="custom-control-label" htmlFor={ index + "mailk"} />
                                                    </div>
                                                </div>
                                                <span className={"ri-star-line iq-star-toggle " + (item.favorite !== undefined && item.favorite === true ? "text-warning" : "")} />
                                                <a href={"!#"} className="iq-email-title">{ item.title }</a>
                                            </div>
                                            <div className="iq-email-content">
                                                <a href={"!#"} className={"iq-email-subject"}>{ item.subject }</a>
                                                <div className="iq-email-date">{ item.emailTime }</div>
                                            </div>
                                            <ul className="iq-social-media">
                                                <li><a href="!#"><i className="ri-delete-bin-2-line" /></a></li>
                                                <li><a href="!#"><i className="ri-mail-line" /></a></li>
                                                <li><a href="!#"><i className="ri-file-list-2-line" /></a></li>
                                                <li><a href="!#"><i className="ri-time-line" /></a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <PanelContent targetId={"detail" + index}>
                                        <div className={"iq-card"}>
                                            <div className="iq-card-body p-0">
                                                <div className="iq-email-to-list p-3">
                                                    <div className="d-flex justify-content-between">
                                                        <ul>
                                                            <li className="mr-3">
                                                                <a href="!#" onClick={handlePanelEvent}>
                                                                    <h4 className="m-0">
                                                                        <i className="ri-arrow-left-line" />
                                                                    </h4>
                                                                </a>
                                                            </li>

                                                            <li>
                                                                <a href={"!#"} id={"openToolTip" + index}>
                                                                    <i className={"ri-mail-open-line"} />
                                                                </a>
                                                                <UncontrolledTooltip placement="top" target={"openToolTip" + index}>
                                                                    Tooltip on top
                                                                </UncontrolledTooltip>
                                                            </li>

                                                            <li>
                                                                <a href={"!#"} id={"informationToolTip" + index}>
                                                                    <i className={"ri-information-line"} />
                                                                </a>
                                                                <UncontrolledTooltip placement="top" target={"informationToolTip" + index}>
                                                                    Tooltip on top
                                                                </UncontrolledTooltip>
                                                            </li>

                                                            <li>
                                                                <a href={"!#"} id={"deleteNewToolTip" + index}>
                                                                    <i className={"ri-delete-bin-line"} />
                                                                </a>
                                                                <UncontrolledTooltip placement="top" target={"deleteNewToolTip" + index}>
                                                                    Tooltip on top
                                                                </UncontrolledTooltip>
                                                            </li>

                                                            <li>
                                                                <a href={"!#"} id={"unreadNewToolTip" + index}>
                                                                    <i className={"ri-mail-unread-line"} />
                                                                </a>
                                                                <UncontrolledTooltip placement="top" target={"unreadNewToolTip" + index}>
                                                                    Tooltip on top
                                                                </UncontrolledTooltip>
                                                            </li>

                                                            <li>
                                                                <a href={"!#"} id={"transferToolTip" + index}>
                                                                    <i className={"ri-folder-transfer-line"} />
                                                                </a>
                                                                <UncontrolledTooltip placement="top" target={"transferToolTip" + index}>
                                                                    Tooltip on top
                                                                </UncontrolledTooltip>
                                                            </li>

                                                            <li>
                                                                <a href={"!#"} id={"bookToolTip" + index}>
                                                                    <i className={"ri-bookmark-line"} />
                                                                </a>
                                                                <UncontrolledTooltip placement="top" target={"bookToolTip" + index}>
                                                                    Tooltip on top
                                                                </UncontrolledTooltip>
                                                            </li>
                                                        </ul>
                                                        <div className="iq-email-search d-flex">
                                                            <ul>
                                                                <li className="mr-3">
                                                                    <a href={"!#"} className="font-size-14">1 of 505</a>
                                                                </li>
                                                                <li>
                                                                    <a href={"!#"} id={"arrowLeftToolTip" + index}>
                                                                        <i className={"ri-arrow-left-s-line"} />
                                                                    </a>
                                                                    <UncontrolledTooltip placement="top" target={"arrowLeftToolTip" + index}>
                                                                        Tooltip on top
                                                                    </UncontrolledTooltip>
                                                                </li>

                                                                <li>
                                                                    <a href={"!#"} id={"arrowRightTip" + index}>
                                                                        <i className={"ri-arrow-right-s-line"} />
                                                                    </a>
                                                                    <UncontrolledTooltip placement="top" target={"arrowRightTip" + index}>
                                                                        Tooltip on top
                                                                    </UncontrolledTooltip>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr className="mt-0" />
                                                <div className="iq-inbox-subject p-3">
                                                    <h5 className="mt-0">
                                                        Your elite author Graphic Optimization reward is ready!
                                                    </h5>

                                                    <div className="iq-inbox-subject-info">
                                                        <div className="iq-subject-info">
                                                            <img src={ item.profileImage }
                                                                 className="img-fluid rounded-circle" alt="#" />
                                                            <div className="iq-subject-status align-self-center">
                                                                <h6 className="mb-0">
                                                                    Sofbox team
                                                                    <a href="emailTo::dummy@sofbox.com">
                                                                        &nbsp; &lt; dummy@sofbox.com &gt;
                                                                    </a>
                                                                </h6>

                                                                <Dropdown isOpen={optionDropdown} toggle={() => setOptionDropdown(prevState => !prevState)}>
                                                                    <DropdownToggle tag="a" className="text-primary cursor-pointer" data-toggle="dropdown">
                                                                        to Me
                                                                        <i className="ri-arrow-down-s-line" />
                                                                    </DropdownToggle>
                                                                    <DropdownMenu>
                                                                        <table className="iq-inbox-details">
                                                                            <tbody>
                                                                            <tr>
                                                                                <td>from:</td>
                                                                                <td>Medium Daily Digest</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>reply-to:</td>
                                                                                <td>noreply@gmail.com</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>to:</td>
                                                                                <td>iqonicdesigns@gmail.com</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>date:</td>
                                                                                <td>13 Dec 2019, 08:30</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>subject:</td>
                                                                                <td>The Golden Rule</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td>security:</td>
                                                                                <td>Standard encryption</td>
                                                                            </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </DropdownMenu>
                                                                </Dropdown>
                                                            </div>
                                                            <span className="float-right align-self-center">Jan 15, 2029, 10:20AM</span>
                                                        </div>

                                                        <div className="iq-inbox-body mt-5">
                                                            <p>Hi { item.title },</p>
                                                            <p>It is a long established fact that a reader will be
                                                                distracted by the readable content of a page when
                                                                looking at its layout. The point of using Lorem Ipsum is
                                                                that it has a more-or-less normal distribution of
                                                                letters, as opposed to using 'Content here, content
                                                                here', making it look like readable English. Many
                                                                desktop publishing packages and web page editors now use
                                                                Lorem Ipsum as their default model text, and a search
                                                                for 'lorem ipsum' will uncover many web sites still in
                                                                their infancy. </p>
                                                            <p>Various versions have evolved over the years, sometimes
                                                                by accident, sometimes on purpose (injected humour and
                                                                the like).</p>
                                                            <p className="mt-5 mb-0">Regards,<span
                                                                className="d-inline-block w-100">John Deo</span></p>
                                                        </div>
                                                        <hr />

                                                        <div className="attegement">
                                                            <h6 className="mb-2">ATTACHED FILES:</h6>
                                                            <ul>
                                                                <li className="icon icon-attegment">
                                                                    <i className="fa fa-file-text-o" aria-hidden="true" />
                                                                    <span className="ml-1">mydoc.doc</span>
                                                                </li>
                                                                <li className="icon icon-attegment">
                                                                    <i className="fa fa-file-text-o" aria-hidden="true" />
                                                                    <span className="ml-1">mydoc.pdf</span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </PanelContent>
                                </>
                            )) }
                        </DetailsPanel>
                    </>
                ) : (
                    <li>
                        <h4 className={"text-primary text-center mt-2"}>No Emails found</h4>
                    </li>
                ) }
            </ul>
        </>
    );
};

export default Index;
