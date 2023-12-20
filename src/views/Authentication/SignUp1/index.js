import React from 'react';
import {Link} from "react-router-dom";

class Index extends React.Component {
    render() {
        return (
            <>
                <div className="sign-in-from">
                    <h1 className="mb-0">Sign Up</h1>
                    <p>Enter your email address and password to access admin panel.</p>
                    <form className="mt-4">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Your Full Name</label>
                            <input type="email" className="form-control mb-0" id="exampleInputEmail1"
                                   aria-describedby="emailHelp" placeholder="Your Full Name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control mb-0" id="exampleInputEmail1"
                                   aria-describedby="emailHelp" placeholder="Enter email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control mb-0" id="exampleInputPassword1"
                                   placeholder="Password" />
                        </div>
                        <div className="d-inline-block w-100">
                            <div className="custom-control custom-checkbox d-inline-block mt-2 pt-1">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                    <label className="custom-control-label" htmlFor="customCheck1">
                                        I accept <Link to="/">Terms and Conditions</Link>
                                    </label>
                            </div>
                            <button type="submit" className="btn btn-primary float-right">Sign Up</button>
                        </div>
                        <div className="sign-info">
                            <span className="dark-color d-inline-block line-height-2">
                                Already Have Account ? <Link to="/">Log In</Link></span>
                            <ul className="iq-social-media">
                                <li><Link to="/"><i className="ri-facebook-box-line" /></Link></li>
                                <li><Link to="/"><i className="ri-twitter-line" /></Link></li>
                                <li><Link to="/"><i className="ri-instagram-line" /></Link></li>
                            </ul>
                        </div>
                    </form>
                </div>
            </>
        );
    }
}

export default Index;
