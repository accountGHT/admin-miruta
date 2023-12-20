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
                <h1 className={"mb-0"}>Reset Password</h1>
                <p>Enter your email address and we'll send you an email with instructions to reset your password.</p>
                <form className={"mt-4"}>
                    <FormGroup>
                        <Label for={"exampleInputEmail1"}>Email address</Label>
                        <Input type={"email"} className={"mb-0"} id={"exampleInputEmail1"} placeholder={"Enter email"} />
                    </FormGroup>
                    <div className={"d-inline-block w-100"}>
                        <Button color={"primary"} className={"float-right"} >Reset Password</Button>
                    </div>
                </form>
            </div>
        </>
    )
};

export default Index;