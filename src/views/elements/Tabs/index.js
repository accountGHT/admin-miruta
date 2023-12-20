import React from 'react';
import {Row, Col, Card, CardHeader, CardTitle, CardBody, UncontrolledCollapse, CardText, NavLink, Nav,NavItem,TabContent,TabPane} from 'reactstrap';
/*import {Nav,NavItem,TabContent,TabPane} from 'react-bootstrap';*/
import {index} from "../../../config/pluginsInit";


class Index extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeTab: "home",
            sendTabPane: "home",
            thirdTabPane: "home",
            fourTabPane: "home",
            fiveTabPane: "home",
            sixTabPane: "home",
            sevenTabPane: "home",
            eightTabPane: "home",

        };
    }

    componentDidMount() {
        setTimeout(function () {
            index();
        },800);
    }

    toggle = tab => {
        this.setState({
            activeTab: tab
        })
    };

    secondTabPaneToggle = tab => {
        this.setState({
            sendTabPane: tab
        })
    };
    thirdTabPaneToggle = tab => {
        this.setState({
            thirdTabPane: tab
        })
    };
    fourTabPaneToggle = tab => {
        this.setState({
            fourTabPane: tab
        })
    };
    fiveTabPaneToggle = tab => {
        this.setState({
            fiveTabPane: tab
        })
    };
    sixTabPaneToggle = tab => {
        this.setState({
            sixTabPane: tab
        })
    };
    sevenTabPaneToggle = tab => {
        this.setState({
            sevenTabPane: tab
        })
    };
    eightTabPaneToggle = tab => {
        this.setState({
            eightTabPane: tab
        })
    };


    render() {
        const { activeTab,sendTabPane,thirdTabPane,fourTabPane ,fiveTabPane,sixTabPane,sevenTabPane,eightTabPane} = this.state;
        return (
            <>
                <Row>
                    <Col sm={12} lg={6}>
                        <Card className={"iq-card"}>
                            <CardHeader className={"iq-header-title bg-white"}>
                                <span className="text-primary float-right" id="collapse1">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                                <CardTitle  className={"card-title"}><h4>Basic Tabs</h4></CardTitle>
                            </CardHeader>

                            <CardBody className={"iq-card-body"}>
                                <CardText>Four options are available: top, right, bottom, and left aligned.</CardText>
                                <UncontrolledCollapse toggler="#collapse1">
                                    <Card>
                                        <kbd className="bg-dark">
                                            <span data-copy-target="#badge" title="Copy"
                                                  data-toggle="tooltip" className="text-white float-right"
                                                  data-copy="true">
                                                Copy
                                            </span>
                                            <pre className="text-white">
                                                <code>{`
<Nav className="nav nav-tabs" id="myTab-1" role="tablist">
    <NavItem className="nav-item">
        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Home</a>
    </NavItem>
    <NavItem className="nav-item">
        <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile"
            role="tab" aria-controls="profile" aria-selected="false">Profile</a>
    </NavItem>
    <NavItem className="nav-item">
        <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact"
            role="tab" aria-controls="contact" aria-selected="false">Contact</a>
    </NavItem>
</Nav>
<TabContent className="tab-content" id="myTabContent-2">
    <TabPane className="tab-pane fade show active" id="home" role="tabpanel"
        aria-labelledby="home-tab" active={true} >
        <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled it to
            make a type specimen book.
        </p>
    </TabPane>
    <TabPane className="tab-pane fade" id="profile" role="tabpanel"
        aria-labelledby="profile-tab">
        <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled it to
            make a type specimen book.
        </p>
    </TabPane>
    <TabPane className="tab-pane fade" id="contact" role="tabpanel"
        aria-labelledby="contact-tab">
        <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled it to
            make a type specimen book.
        </p>
    </TabPane>
</TabContent>
                                                `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>

                                <Nav className="nav nav-tabs" id="myTab-1" role="tablist">
                                    <NavItem className="nav-item">
                                        <NavLink
                                            className={(activeTab === "home" ? " active" : "")}
                                            onClick={() => { this.toggle('home'); }}
                                        >
                                            Home
                                        </NavLink>
                                    </NavItem>
                                    <NavItem className="nav-item">
                                        <NavLink
                                            className={(activeTab === "profile" ? " active" : "")}
                                            onClick={() => { this.toggle('profile'); }}
                                        >
                                            Profile
                                        </NavLink>
                                    </NavItem>
                                    <NavItem className="nav-item">
                                        <NavLink
                                            className={(activeTab === "contact" ? " active" : "")}
                                            onClick={() => { this.toggle('contact'); }}
                                        >
                                            Contact
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                                <TabContent activeTab={activeTab} className="tab-content">
                                    <TabPane tabId="home">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the
                                            1500s, when an unknown printer took a galley of type and scrambled it to
                                            make a type specimen book.</p>
                                    </TabPane>
                                    <TabPane tabId="profile">
                                        <p>
                                            industry's standard dummy text ever since the
                                            1500s, when an unknown printer took a galley of type and scrambled it to
                                            make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the
                                        </p>
                                    </TabPane>
                                    <TabPane tabId="contact">
                                        <p>
                                            when an unknown printer took a galley of type and scrambled it to
                                            make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the
                                            1500s,
                                        </p>
                                    </TabPane>
                                </TabContent>
                            </CardBody>
                        </Card>

                        <Card className={"iq-card"}>
                            <CardHeader className={"iq-header-title bg-white"}>
                                <span className="text-primary float-right" id="collapse2">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                                <CardTitle  className={"card-title"}><h4>Basic Tabs Style 3</h4></CardTitle>
                            </CardHeader>

                            <CardBody className={"iq-card-body"}>
                                <CardText>Four options are available: top, right, bottom, and left aligned.</CardText>
                                <UncontrolledCollapse toggler="#collapse2">
                                    <Card>
                                        <kbd className="bg-dark">
                                            <span data-copy-target="#badge" title="Copy"
                                                  data-toggle="tooltip" className="text-white float-right"
                                                  data-copy="true">
                                                Copy
                                            </span>
                                            <pre className="text-white">
                                                <code>{`
<Nav className="nav nav-tabs" id="myTab-2" role="tablist">
<NavItem className="nav-item">
<NavLink
className={(sendTabPane === "home" ? " active" : "")}
onClick={() => { this.secondTabPaneToggle('home'); }}
>
Home
</NavLink>
</NavItem>
<NavItem className="nav-item">
<NavLink
className={(sendTabPane === "profile" ? " active" : "")}
onClick={() => { this.secondTabPaneToggle('profile'); }}
>
Profile
</NavLink>
</NavItem>
<NavItem className="nav-item">
<NavLink
className={(sendTabPane === "contact" ? " active" : "")}
onClick={() => { this.secondTabPaneToggle('contact'); }}
>
Contact
</NavLink>
</NavItem>
</Nav>
<TabContent activeTab={sendTabPane} className="tab-content">
<TabPane tabId="home">
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the industry's standard dummy text ever since the
1500s, when an unknown printer took a galley of type and scrambled it to
make a type specimen book.</p>
</TabPane>
<TabPane tabId="profile">
<p>
industry's standard dummy text ever since the
1500s, when an unknown printer took a galley of type and scrambled it to
make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the
</p>
</TabPane>
<TabPane tabId="contact">
<p>
when an unknown printer took a galley of type and scrambled it to
make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the industry's standard dummy text ever since the
1500s,
</p>
</TabPane>
</TabContent>                           `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>

                                <Nav className="nav nav-tabs" id="myTab-2" role="tablist">
                                    <NavItem className="nav-item">
                                        <NavLink
                                            className={(sendTabPane === "home" ? " active" : "")}
                                            onClick={() => { this.secondTabPaneToggle('home'); }}
                                        >
                                            Home
                                        </NavLink>
                                    </NavItem>
                                    <NavItem className="nav-item">
                                        <NavLink
                                            className={(sendTabPane === "profile" ? " active" : "")}
                                            onClick={() => { this.secondTabPaneToggle('profile'); }}
                                        >
                                            Profile
                                        </NavLink>
                                    </NavItem>
                                    <NavItem className="nav-item">
                                        <NavLink
                                            className={(sendTabPane === "contact" ? " active" : "")}
                                            onClick={() => { this.secondTabPaneToggle('contact'); }}
                                        >
                                            Contact
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                                <TabContent activeTab={sendTabPane} className="tab-content">
                                    <TabPane tabId="home">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the
                                            1500s, when an unknown printer took a galley of type and scrambled it to
                                            make a type specimen book.</p>
                                    </TabPane>
                                    <TabPane tabId="profile">
                                        <p>
                                            industry's standard dummy text ever since the
                                            1500s, when an unknown printer took a galley of type and scrambled it to
                                            make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the
                                        </p>
                                    </TabPane>
                                    <TabPane tabId="contact">
                                        <p>
                                            when an unknown printer took a galley of type and scrambled it to
                                            make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the
                                            1500s,
                                        </p>
                                    </TabPane>
                                </TabContent>
                            </CardBody>
                        </Card>

                        <Card className={"iq-card"}>
                            <CardHeader className={"iq-header-title bg-white"}>
                                <span className="text-primary float-right" id="collapse3">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                                <CardTitle  className={"card-title"}><h4>Tabs Vertical Pills</h4></CardTitle>
                            </CardHeader>

                            <CardBody className={"iq-card-body"}>
                                <CardText>Four options are available: top, right, bottom, and left aligned.</CardText>
                                <UncontrolledCollapse toggler="#collapse3">
                                    <Card>
                                        <kbd className="bg-dark">
                                            <span data-copy-target="#badge" title="Copy"
                                                  data-toggle="tooltip" className="text-white float-right"
                                                  data-copy="true">
                                                Copy
                                            </span>
                                            <pre className="text-white">
                                                <code>{`
<Row>
<Col sm={3}>
<Nav className="nav flex-column nav-pills text-center" id="myTab-3" role="tablist" aria-orientation="vertical">
<NavItem className="nav-item">
<NavLink
className={(thirdTabPane === "home" ? " active" : "")}
onClick={() => { this.thirdTabPaneToggle('home'); }}
>
Home
</NavLink>
</NavItem>
<NavItem className="nav-item">
<NavLink
className={(thirdTabPane === "profile" ? " active" : "")}
onClick={() => { this.thirdTabPaneToggle('profile'); }}
>
Profile
</NavLink>
</NavItem>
<NavItem className="nav-item">
<NavLink
className={(thirdTabPane === "contact" ? " active" : "")}
onClick={() => { this.thirdTabPaneToggle('contact'); }}
>
Message
</NavLink>
</NavItem>

<NavItem className="nav-item">
<NavLink
className={(thirdTabPane === "setting" ? " active" : "")}
onClick={() => { this.thirdTabPaneToggle('setting'); }}
>
Settings
</NavLink>
</NavItem>
</Nav>
</Col>
<Col sm={9}>
<TabContent activeTab={thirdTabPane} className="tab-content">
<TabPane tabId="home">
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the industry's standard dummy text ever since the
1500s, when an unknown printer took a galley of type and scrambled it to
make a type specimen book.</p>
</TabPane>
<TabPane tabId="profile">
<p>
industry's standard dummy text ever since the
1500s, when an unknown printer took a galley of type and scrambled it to
make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the
</p>
</TabPane>
<TabPane tabId="contact">
<p>
when an unknown printer took a galley of type and scrambled it to
make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the industry's standard dummy text ever since the
1500s,
</p>
</TabPane>
<TabPane tabId="setting">
<p>
when an unknown printer took a galley of type and scrambled it to
make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the industry's standard dummy text ever since the
1500s,
</p>
</TabPane>
</TabContent>
</Col>
</Row>
                                `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>
                                <Row>
                                    <Col sm={3}>
                                        <Nav className="nav flex-column nav-pills text-center" id="myTab-3" role="tablist" aria-orientation="vertical">
                                            <NavItem className="nav-item">
                                                <NavLink
                                                    className={(thirdTabPane === "home" ? " active" : "")}
                                                    onClick={() => { this.thirdTabPaneToggle('home'); }}
                                                >
                                                    Home
                                                </NavLink>
                                            </NavItem>
                                            <NavItem className="nav-item">
                                                <NavLink
                                                    className={(thirdTabPane === "profile" ? " active" : "")}
                                                    onClick={() => { this.thirdTabPaneToggle('profile'); }}
                                                >
                                                    Profile
                                                </NavLink>
                                            </NavItem>
                                            <NavItem className="nav-item">
                                                <NavLink
                                                    className={(thirdTabPane === "contact" ? " active" : "")}
                                                    onClick={() => { this.thirdTabPaneToggle('contact'); }}
                                                >
                                                    Message
                                                </NavLink>
                                            </NavItem>

                                            <NavItem className="nav-item">
                                                <NavLink
                                                    className={(thirdTabPane === "setting" ? " active" : "")}
                                                    onClick={() => { this.thirdTabPaneToggle('setting'); }}
                                                >
                                                    Settings
                                                </NavLink>
                                            </NavItem>
                                        </Nav>
                                    </Col>
                                    <Col sm={9}>
                                        <TabContent activeTab={thirdTabPane} className="tab-content">
                                            <TabPane tabId="home">
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                    Lorem Ipsum has been the industry's standard dummy text ever since the
                                                    1500s, when an unknown printer took a galley of type and scrambled it to
                                                    make a type specimen book.</p>
                                            </TabPane>
                                            <TabPane tabId="profile">
                                                <p>
                                                    industry's standard dummy text ever since the
                                                    1500s, when an unknown printer took a galley of type and scrambled it to
                                                    make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                    Lorem Ipsum has been the
                                                </p>
                                            </TabPane>
                                            <TabPane tabId="contact">
                                                <p>
                                                    when an unknown printer took a galley of type and scrambled it to
                                                    make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                    Lorem Ipsum has been the industry's standard dummy text ever since the
                                                    1500s,
                                                </p>
                                            </TabPane>
                                            <TabPane tabId="setting">
                                                <p>
                                                    when an unknown printer took a galley of type and scrambled it to
                                                    make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                    Lorem Ipsum has been the industry's standard dummy text ever since the
                                                    1500s,
                                                </p>
                                            </TabPane>
                                        </TabContent>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>

                        <Card className={"iq-card"}>
                            <CardHeader className={"iq-header-title bg-white"}>
                                <span className="text-primary float-right" id="collapse4">
                                   <i className="ri-code-s-slash-line" />
                                </span>
                                <CardTitle  className={"card-title"}><h4>Tabs Justify Center</h4></CardTitle>
                            </CardHeader>

                            <CardBody className={"iq-card-body"}>
                                <CardText>Four options are available: top, right, bottom, and left aligned.</CardText>
                                <UncontrolledCollapse toggler="#collapse4">
                                    <Card>
                                        <kbd className="bg-dark">
                                            <span data-copy-target="#badge" title="Copy"
                                                  data-toggle="tooltip" className="text-white float-right"
                                                  data-copy="true">
                                                Copy
                                            </span>
                                            <pre className="text-white">
                                                <code>{`
<Nav className="nav nav-tabs justify-content-center" id="myTab-3" role="tablist">
<NavItem className="nav-item">
<NavLink
className={(fourTabPane === "home" ? " active" : "")}
onClick={() => { this.fourTabPaneToggle('home'); }}
>
Home
</NavLink>
</NavItem>
<NavItem className="nav-item">
<NavLink
className={(fourTabPane === "profile" ? " active" : "")}
onClick={() => { this.fourTabPaneToggle('profile'); }}
>
Profile
</NavLink>
</NavItem>
<NavItem className="nav-item">
<NavLink
className={(fourTabPane === "contact" ? " active" : "")}
onClick={() => { this.fourTabPaneToggle('contact'); }}
>
Contact
</NavLink>
</NavItem>
</Nav>
<TabContent activeTab={fourTabPane} className="tab-content">
<TabPane tabId="home">
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the industry's standard dummy text ever since the
1500s, when an unknown printer took a galley of type and scrambled it to
make a type specimen book.</p>
</TabPane>
<TabPane tabId="profile">
<p>
industry's standard dummy text ever since the
1500s, when an unknown printer took a galley of type and scrambled it to
make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the
</p>
</TabPane>
<TabPane tabId="contact">
<p>
when an unknown printer took a galley of type and scrambled it to
make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the industry's standard dummy text ever since the
1500s,
</p>
</TabPane>
</TabContent>
                                `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>

                                <Nav className="nav nav-tabs justify-content-center" id="myTab-3" role="tablist">
                                    <NavItem className="nav-item">
                                        <NavLink
                                            className={(fourTabPane === "home" ? " active" : "")}
                                            onClick={() => { this.fourTabPaneToggle('home'); }}
                                        >
                                            Home
                                        </NavLink>
                                    </NavItem>
                                    <NavItem className="nav-item">
                                        <NavLink
                                            className={(fourTabPane === "profile" ? " active" : "")}
                                            onClick={() => { this.fourTabPaneToggle('profile'); }}
                                        >
                                            Profile
                                        </NavLink>
                                    </NavItem>
                                    <NavItem className="nav-item">
                                        <NavLink
                                            className={(fourTabPane === "contact" ? " active" : "")}
                                            onClick={() => { this.fourTabPaneToggle('contact'); }}
                                        >
                                            Contact
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                                <TabContent activeTab={fourTabPane} className="tab-content">
                                    <TabPane tabId="home">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the
                                            1500s, when an unknown printer took a galley of type and scrambled it to
                                            make a type specimen book.</p>
                                    </TabPane>
                                    <TabPane tabId="profile">
                                        <p>
                                            industry's standard dummy text ever since the
                                            1500s, when an unknown printer took a galley of type and scrambled it to
                                            make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the
                                        </p>
                                    </TabPane>
                                    <TabPane tabId="contact">
                                        <p>
                                            when an unknown printer took a galley of type and scrambled it to
                                            make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the
                                            1500s,
                                        </p>
                                    </TabPane>
                                </TabContent>
                            </CardBody>
                        </Card>

                    </Col>

                    <Col sm={12} lg={6}>
                        <Card className={"iq-card"}>
                            <CardHeader className={"iq-header-title bg-white"}>
                                <span className="text-primary float-right" id="collapse5">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                                <CardTitle  className={"card-title"}><h4>Basic Tabs Style 2</h4></CardTitle>
                            </CardHeader>

                            <CardBody className={"iq-card-body"}>
                                <CardText>Four options are available: top, right, bottom, and left aligned.</CardText>
                                <UncontrolledCollapse toggler="#collapse5">
                                    <Card>
                                        <kbd className="bg-dark">
                                            <span data-copy-target="#badge" title="Copy"
                                                  data-toggle="tooltip" className="text-white float-right"
                                                  data-copy="true">
                                                Copy
                                            </span>
                                            <pre className="text-white">
                                                <code>{`
<Nav className="nav nav-pills mb-3" id="myTab-3" role="tablist">
<NavItem className="nav-item">
<NavLink
className={(fiveTabPane === "home" ? " active" : "")}
onClick={() => { this.fiveTabPaneToggle('home'); }}
>
Home
</NavLink>
</NavItem>
<NavItem className="nav-item">
<NavLink
className={(fiveTabPane === "profile" ? " active" : "")}
onClick={() => { this.fiveTabPaneToggle('profile'); }}
>
Profile
</NavLink>
</NavItem>
<NavItem className="nav-item">
<NavLink
className={(fiveTabPane === "contact" ? " active" : "")}
onClick={() => { this.fiveTabPaneToggle('contact'); }}
>
Contact
</NavLink>
</NavItem>
</Nav>
<TabContent activeTab={fiveTabPane} className="tab-content">
<TabPane tabId="home">
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the industry's standard dummy text ever since the
1500s, when an unknown printer took a galley of type and scrambled it to
make a type specimen book.</p>
</TabPane>
<TabPane tabId="profile">
<p>
industry's standard dummy text ever since the
1500s, when an unknown printer took a galley of type and scrambled it to
make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the
</p>
</TabPane>
<TabPane tabId="contact">
<p>
when an unknown printer took a galley of type and scrambled it to
make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the industry's standard dummy text ever since the
1500s,
</p>
</TabPane>
</TabContent>
                                `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>

                                <Nav className="nav nav-pills mb-3" id="myTab-3" role="tablist">
                                    <NavItem className="nav-item">
                                        <NavLink
                                            className={(fiveTabPane === "home" ? " active" : "")}
                                            onClick={() => { this.fiveTabPaneToggle('home'); }}
                                        >
                                            Home
                                        </NavLink>
                                    </NavItem>
                                    <NavItem className="nav-item">
                                        <NavLink
                                            className={(fiveTabPane === "profile" ? " active" : "")}
                                            onClick={() => { this.fiveTabPaneToggle('profile'); }}
                                        >
                                            Profile
                                        </NavLink>
                                    </NavItem>
                                    <NavItem className="nav-item">
                                        <NavLink
                                            className={(fiveTabPane === "contact" ? " active" : "")}
                                            onClick={() => { this.fiveTabPaneToggle('contact'); }}
                                        >
                                            Contact
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                                <TabContent activeTab={fiveTabPane} className="tab-content">
                                    <TabPane tabId="home">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the
                                            1500s, when an unknown printer took a galley of type and scrambled it to
                                            make a type specimen book.</p>
                                    </TabPane>
                                    <TabPane tabId="profile">
                                        <p>
                                            industry's standard dummy text ever since the
                                            1500s, when an unknown printer took a galley of type and scrambled it to
                                            make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the
                                        </p>
                                    </TabPane>
                                    <TabPane tabId="contact">
                                        <p>
                                            when an unknown printer took a galley of type and scrambled it to
                                            make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the
                                            1500s,
                                        </p>
                                    </TabPane>
                                </TabContent>
                            </CardBody>
                        </Card>

                        <Card className={"iq-card"}>
                            <CardHeader className={"iq-header-title bg-white"}>
                                <span className="text-primary float-right" id="collapse6">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                                <CardTitle  className={"card-title"}><h4>Basic Tabs Style 4</h4></CardTitle>
                            </CardHeader>

                            <CardBody className={"iq-card-body"}>
                                <CardText>Four options are available: top, right, bottom, and left aligned.</CardText>
                                <UncontrolledCollapse toggler="#collapse6">
                                    <Card>
                                        <kbd className="bg-dark">
                                            <span data-copy-target="#badge" title="Copy"
                                                  data-toggle="tooltip" className="text-white float-right"
                                                  data-copy="true">
                                                Copy
                                            </span>
                                            <pre className="text-white">
                                                <code>{`
<Nav className="nav nav-tabs" id="myTab-3" role="tablist">
<NavItem className="nav-item">
<NavLink
className={(sixTabPane === "home" ? " active" : "")}
onClick={() => { this.sixTabPaneToggle('home'); }}
>
Home
</NavLink>
</NavItem>
<NavItem className="nav-item">
<NavLink
className={(sixTabPane === "profile" ? " active" : "")}
onClick={() => { this.sixTabPaneToggle('profile'); }}
>
Profile
</NavLink>
</NavItem>
<NavItem className="nav-item">
<NavLink
className={(sixTabPane === "contact" ? " active" : "")}
onClick={() => { this.sixTabPaneToggle('contact'); }}
>
Contact
</NavLink>
</NavItem>
</Nav>
<TabContent activeTab={sixTabPane} className="tab-content">
<TabPane tabId="home">
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the industry's standard dummy text ever since the
1500s, when an unknown printer took a galley of type and scrambled it to
make a type specimen book.</p>
</TabPane>
<TabPane tabId="profile">
<p>
industry's standard dummy text ever since the
1500s, when an unknown printer took a galley of type and scrambled it to
make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the
</p>
</TabPane>
<TabPane tabId="contact">
<p>
when an unknown printer took a galley of type and scrambled it to
make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the industry's standard dummy text ever since the
1500s,
</p>
</TabPane>
</TabContent>
                                `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>

                                <Nav className="nav nav-tabs" id="myTab-3" role="tablist">
                                    <NavItem className="nav-item">
                                        <NavLink
                                            className={(sixTabPane === "home" ? " active" : "")}
                                            onClick={() => { this.sixTabPaneToggle('home'); }}
                                        >
                                            Home
                                        </NavLink>
                                    </NavItem>
                                    <NavItem className="nav-item">
                                        <NavLink
                                            className={(sixTabPane === "profile" ? " active" : "")}
                                            onClick={() => { this.sixTabPaneToggle('profile'); }}
                                        >
                                            Profile
                                        </NavLink>
                                    </NavItem>
                                    <NavItem className="nav-item">
                                        <NavLink
                                            className={(sixTabPane === "contact" ? " active" : "")}
                                            onClick={() => { this.sixTabPaneToggle('contact'); }}
                                        >
                                            Contact
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                                <TabContent activeTab={sixTabPane} className="tab-content">
                                    <TabPane tabId="home">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the
                                            1500s, when an unknown printer took a galley of type and scrambled it to
                                            make a type specimen book.</p>
                                    </TabPane>
                                    <TabPane tabId="profile">
                                        <p>
                                            industry's standard dummy text ever since the
                                            1500s, when an unknown printer took a galley of type and scrambled it to
                                            make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the
                                        </p>
                                    </TabPane>
                                    <TabPane tabId="contact">
                                        <p>
                                            when an unknown printer took a galley of type and scrambled it to
                                            make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the
                                            1500s,
                                        </p>
                                    </TabPane>
                                </TabContent>
                            </CardBody>
                        </Card>

                        <Card className={"iq-card"}>
                            <CardHeader className={"iq-header-title bg-white"}>
                                <span className="text-primary float-right" id="collapse7">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                                <CardTitle  className={"card-title"}><h4>Tabs Fill and justify</h4></CardTitle>
                            </CardHeader>

                            <CardBody className={"iq-card-body"}>
                                <CardText>Four options are available: top, right, bottom, and left aligned.</CardText>
                                <UncontrolledCollapse toggler="#collapse7">
                                    <Card>
                                        <kbd className="bg-dark">
                                            <span data-copy-target="#badge" title="Copy"
                                                  data-toggle="tooltip" className="text-white float-right"
                                                  data-copy="true">
                                                Copy
                                            </span>
                                            <pre className="text-white">
                                                <code>{`
<Nav className="nav nav-pills mb-3 nav-fill" id="myTab-3" role="tablist">
<NavItem className="nav-item">
<NavLink
className={(sevenTabPane === "home" ? " active" : "")}
onClick={() => { this.sevenTabPaneToggle('home'); }}
>
Home
</NavLink>
</NavItem>
<NavItem className="nav-item">
<NavLink
className={(sevenTabPane === "profile" ? " active" : "")}
onClick={() => { this.sevenTabPaneToggle('profile'); }}
>
Profile
</NavLink>
</NavItem>
<NavItem className="nav-item">
<NavLink
className={(sevenTabPane === "contact" ? " active" : "")}
onClick={() => { this.sevenTabPaneToggle('contact'); }}
>
Contact
</NavLink>
</NavItem>
</Nav>
<TabContent activeTab={sevenTabPane} className="tab-content">
<TabPane tabId="home">
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the industry's standard dummy text ever since the
1500s, when an unknown printer took a galley of type and scrambled it to
make a type specimen book.</p>
</TabPane>
<TabPane tabId="profile">
<p>
industry's standard dummy text ever since the
1500s, when an unknown printer took a galley of type and scrambled it to
make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the
</p>
</TabPane>
<TabPane tabId="contact">
<p>
when an unknown printer took a galley of type and scrambled it to
make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the industry's standard dummy text ever since the
1500s,
</p>
</TabPane>
</TabContent>
                                `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>

                                <Nav className="nav nav-pills mb-3 nav-fill" id="myTab-3" role="tablist">
                                    <NavItem className="nav-item">
                                        <NavLink
                                            className={(sevenTabPane === "home" ? " active" : "")}
                                            onClick={() => { this.sevenTabPaneToggle('home'); }}
                                        >
                                            Home
                                        </NavLink>
                                    </NavItem>
                                    <NavItem className="nav-item">
                                        <NavLink
                                            className={(sevenTabPane === "profile" ? " active" : "")}
                                            onClick={() => { this.sevenTabPaneToggle('profile'); }}
                                        >
                                            Profile
                                        </NavLink>
                                    </NavItem>
                                    <NavItem className="nav-item">
                                        <NavLink
                                            className={(sevenTabPane === "contact" ? " active" : "")}
                                            onClick={() => { this.sevenTabPaneToggle('contact'); }}
                                        >
                                            Contact
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                                <TabContent activeTab={sevenTabPane} className="tab-content">
                                    <TabPane tabId="home">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the
                                            1500s, when an unknown printer took a galley of type and scrambled it to
                                            make a type specimen book.</p>
                                    </TabPane>
                                    <TabPane tabId="profile">
                                        <p>
                                            industry's standard dummy text ever since the
                                            1500s, when an unknown printer took a galley of type and scrambled it to
                                            make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the
                                        </p>
                                    </TabPane>
                                    <TabPane tabId="contact">
                                        <p>
                                            when an unknown printer took a galley of type and scrambled it to
                                            make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the
                                            1500s,
                                        </p>
                                    </TabPane>
                                </TabContent>
                            </CardBody>
                        </Card>

                        <Card className={"iq-card"}>
                            <CardHeader className={"iq-header-title bg-white"}>
                                <span className="text-primary float-right" id="collapse8">
                                    <i className="ri-code-s-slash-line" />
                                </span>
                                <CardTitle  className={"card-title"}><h4>Tabs Justify Right</h4></CardTitle>
                            </CardHeader>

                            <CardBody className={"iq-card-body"}>
                                <CardText>Four options are available: top, right, bottom, and left aligned.</CardText>
                                <UncontrolledCollapse toggler="#collapse8">
                                    <Card>
                                        <kbd className="bg-dark">
                                            <span data-copy-target="#badge" title="Copy"
                                                  data-toggle="tooltip" className="text-white float-right"
                                                  data-copy="true">
                                                Copy
                                            </span>
                                            <pre className="text-white">
                                                <code>{`
<Nav className="nav nav-tabs justify-content-end" id="myTab-3" role="tablist">
<NavItem className="nav-item">
<NavLink
className={(eightTabPane === "home" ? " active" : "")}
onClick={() => { this.eightTabPaneToggle('home'); }}
>
Home
</NavLink>
</NavItem>
<NavItem className="nav-item">
<NavLink
className={(eightTabPane === "profile" ? " active" : "")}
onClick={() => { this.eightTabPaneToggle('profile'); }}
>
Profile
</NavLink>
</NavItem>
<NavItem className="nav-item">
<NavLink
className={(eightTabPane === "contact" ? " active" : "")}
onClick={() => { this.eightTabPaneToggle('contact'); }}
>
Contact
</NavLink>
</NavItem>
</Nav>
<TabContent activeTab={eightTabPane} className="tab-content">
<TabPane tabId="home">
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the industry's standard dummy text ever since the
1500s, when an unknown printer took a galley of type and scrambled it to
make a type specimen book.</p>
</TabPane>
<TabPane tabId="profile">
<p>
industry's standard dummy text ever since the
1500s, when an unknown printer took a galley of type and scrambled it to
make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the
</p>
</TabPane>
<TabPane tabId="contact">
<p>
when an unknown printer took a galley of type and scrambled it to
make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the industry's standard dummy text ever since the
1500s,
</p>
</TabPane>
</TabContent>
                                `}
                                                </code>
                                            </pre>
                                        </kbd>
                                    </Card>
                                </UncontrolledCollapse>

                                <Nav className="nav nav-tabs justify-content-end" id="myTab-3" role="tablist">
                                    <NavItem className="nav-item">
                                        <NavLink
                                            className={(eightTabPane === "home" ? " active" : "")}
                                            onClick={() => { this.eightTabPaneToggle('home'); }}
                                        >
                                            Home
                                        </NavLink>
                                    </NavItem>
                                    <NavItem className="nav-item">
                                        <NavLink
                                            className={(eightTabPane === "profile" ? " active" : "")}
                                            onClick={() => { this.eightTabPaneToggle('profile'); }}
                                        >
                                            Profile
                                        </NavLink>
                                    </NavItem>
                                    <NavItem className="nav-item">
                                        <NavLink
                                            className={(eightTabPane === "contact" ? " active" : "")}
                                            onClick={() => { this.eightTabPaneToggle('contact'); }}
                                        >
                                            Contact
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                                <TabContent activeTab={eightTabPane} className="tab-content">
                                    <TabPane tabId="home">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the
                                            1500s, when an unknown printer took a galley of type and scrambled it to
                                            make a type specimen book.</p>
                                    </TabPane>
                                    <TabPane tabId="profile">
                                        <p>
                                            industry's standard dummy text ever since the
                                            1500s, when an unknown printer took a galley of type and scrambled it to
                                            make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the
                                        </p>
                                    </TabPane>
                                    <TabPane tabId="contact">
                                        <p>
                                            when an unknown printer took a galley of type and scrambled it to
                                            make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the
                                            1500s,
                                        </p>
                                    </TabPane>
                                </TabContent>
                            </CardBody>
                        </Card>
                    </Col>

                </Row>
            </>
        );
    }
}

export default Index;
