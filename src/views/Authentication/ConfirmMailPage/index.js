import React, {useEffect} from "react";
import {index} from "../../../config/pluginsInit";
import {Button} from "reactstrap";

const Index = props => {

    useEffect(() => {
        index();
    });

    return (
        <>
            <div className={"sign-in-from"}>
                <img src={ require("../../../assets/images/login/mail.png") } alt="Mail Icon"/>
                <h1 className="mt-3 mb-0">Success !</h1>
                <p>A email has been send to youremail@domain.com. Please check for an email from company and click on the included link to reset your password.</p>
                <div className={"d-inline-block w-100"}>
                    <Button color={"primary"} className={"mt-3"} >Reset Password</Button>
                </div>
            </div>
        </>
    );
};

export default Index;