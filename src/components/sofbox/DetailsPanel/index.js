import React from "react";
import { DetailsPanelContext } from '../DetailsPanelContext';

class Index extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            activePanel: this.props.activePanel
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (prevState.activePanel !== nextProps.activePanel) {
            return {
                activePanel: nextProps.activePanel
            };
        }
        return null;
    }

    render() {
        const { activePanel } = this.state;
        return (
            <DetailsPanelContext.Provider value={{ activePanel: activePanel }}>
                { this.props.children }
            </DetailsPanelContext.Provider>
        )
    }
}

export default Index;


