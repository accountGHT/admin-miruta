import React, {useEffect} from "react";
import {index} from "../../../config/pluginsInit";
import {Button, FormGroup, Input, Label} from "reactstrap";

const Index = props => {

    useEffect(() => {
        index();
    });

    return (
        <>
            <div className={"sign-in-from"}>
                <img src={ require("../../../assets/images/user/1.jpg") } className={"rounded-circle"} alt="user Icon"/>
                <h4 className="mt-3 mb-0">Hi ! Michael Smith</h4>
                <p>Enter your password to access the admin.</p>
                <form className={"mt-4"}>
                    <FormGroup>
                        <Label for={"exampleInputEmail1"}>Password</Label>
                        <Input type={"password"} className={"mb-0"} id={"exampleInputEmail1"} placeholder={"Enter password"} />
                    </FormGroup>
                    <div className={"d-inline-block w-100"}>
                        <Button color={"primary"} className={"float-right"} >Login</Button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Index;