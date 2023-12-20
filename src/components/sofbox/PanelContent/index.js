import React from "react";

import { DetailsPanelContext } from '../DetailsPanelContext';

class Index extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    /*handleChildClick = (targetId) => {
        this.props.parentCallback(targetId);
    };*/

    render() {
        return (
            <DetailsPanelContext.Consumer>
                { ({activePanel}) => (
                    <div className={"email-app-details " + (activePanel === this.props.targetId ? " show" : "")}>
                        { this.props.children }
                    </div>
                ) }
            </DetailsPanelContext.Consumer>
        );
    }
}

export default Index;
