import React, {useEffect} from "react";


import {initSelect2} from "../../../../config/pluginsInit";

// Import for the Reactstrap components...
import {Button, Col, FormGroup, Input, Label} from "reactstrap";

const Index = () => {

    useEffect(() => {
        initSelect2();
    });
    return (
        <>
            <FormGroup className={"row"}>
                <Label for="exampleEmail" className={"col-sm-2 col-form-label"}>To:</Label>
                <Col md={10}>
                    <select id="inputEmail3" className="select2jsMultiSelect form-control"
                            multiple="multiple">
                        <option value="Petey Cruiser">Petey Cruiser</option>
                        <option value="Bob Frapples">Bob Frapples</option>
                        <option value="Barb Ackue">Barb Ackue</option>
                        <option value="Greta Life">Greta Life</option>
                    </select>
                </Col>
            </FormGroup>
            <FormGroup className={"row"}>
                <Label for="exampleEmail" className={"col-sm-2 col-form-label"}>CC:</Label>
                <Col md={10}>
                    <select id="cc" className="select2jsMultiSelect form-control" multiple="multiple">
                        <option value="Brock Lee">Brock Lee</option>
                        <option value="Rick O'Shea">Rick O'Shea</option>
                        <option value="Cliff Hanger">Cliff Hanger</option>
                        <option value="Barb Dwyer">Barb Dwyer</option>
                    </select>
                </Col>
            </FormGroup>
            <FormGroup className={"row"}>
                <Label for="submit" className={"col-sm-2 col-form-label"}>Subject:</Label>
                <Col md={10}>
                    <Input type="text" className={""} name="text" id="submit" />
                </Col>
            </FormGroup>
            <FormGroup className={"row"}>
                <Label for="subject" className={"col-sm-2 col-form-label"}>Subject:</Label>
                <Col md={10}>
                    <Input type="textarea" className={"textarea"} rows={5} name="text" id="subject" />
                </Col>
            </FormGroup>
            <FormGroup className={"row align-items-center"}>
                <div className="d-flex flex-grow-1 align-items-center">
                    <div className="send-btn pl-3">
                        <Button type="submit" color={"primary"}>Send</Button>
                    </div>
                    <div className="send-panel">
                        <label className="ml-2 mb-0 iq-bg-primary rounded" htmlFor="file">
                            <Input type="file" className={"d-none"} rows={5} name="file" id="file" />
                            <a href={"!#"}><i className="ri-attachment-line" /> </a>
                        </label>
                        <label className="ml-2 mb-0 iq-bg-primary rounded">
                            <a href="!#">
                                <i className="ri-map-pin-user-line text-primary" />
                            </a>
                        </label>
                        <label className="ml-2 mb-0 iq-bg-primary rounded">
                            <a href="!#">
                                <i className="ri-drive-line text-primary" />
                            </a>
                        </label>
                        <label className="ml-2 mb-0 iq-bg-primary rounded">
                            <a href="!#">
                                <i className="ri-camera-line text-primary" />
                            </a>
                        </label>
                        <label className="ml-2 mb-0 iq-bg-primary rounded">
                            <a href="!#">
                                <i className="ri-user-smile-line text-primary" />
                            </a>
                        </label>
                    </div>
                </div>
                <div className="d-flex mr-3 align-items-center">
                    <div className="send-panel float-right">
                        <label className="ml-2 mb-0 iq-bg-primary rounded">
                            <a href="!#">
                                <i className="ri-settings-2-line text-primary" />
                            </a>
                        </label>
                        <label className="ml-2 mb-0 iq-bg-primary rounded">
                            <a href="!#">
                                <i className="ri-delete-bin-line text-primary" />
                            </a>
                        </label>
                    </div>
                </div>
            </FormGroup>
        </>
    );
};

export default Index;
