import React from 'react';


// Import Custom components...
import { Loader } from '../../components/sofbox';
import { index } from "../../config/pluginsInit";

import '../../assets/scss/style.scss';
import '../../assets/css/style.css';

import { Route, Switch} from "react-router-dom";
import {CSSTransition, TransitionGroup} from "react-transition-group";

import ErrorPage from "../../views/ExtraPages/ErrorPage";
import Error500 from "../../views/ExtraPages/Error500";
import MaintenancePage from "../../views/ExtraPages/MaintenancePage";
import ComingSoonPage from "../../views/ExtraPages/ComingSoonPage";

class Index extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    componentDidMount() {
        index();
    }

    render() {
        return (
            <>
                {/* Loader component */}
                <Loader />

                <div className="wrapper">
                    <TransitionGroup>
                        <CSSTransition
                            key={this.props.location.key}
                            classNames="dialog"
                            timeout={300}
                        >
                            <Switch location={this.props.location}>
                                <Route path="/pages/error-page" component={ErrorPage} />
                                <Route path="/pages/error-500" component={Error500} />
                                <Route path="/pages/maintenance-page" component={MaintenancePage} />
                                <Route path="/pages/comingsoon-page" component={ComingSoonPage} />
                            </Switch>
                        </CSSTransition>
                    </TransitionGroup>
                </div>
            </>
        );
    }

}

export default Index;
