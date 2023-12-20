import React from "react";
import { Link } from "react-router-dom";
import { MenuListStyle1 } from "../../index";
import { useCookies } from "react-cookie";
import logo from "../../../../assets/images/logo.png";

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sideBarItems: [],
    };
  }

  componentDidMount() {
    this.setState({
      sideBarItems: this.props.items,
    });
  }

  render() {
    const { sideBarItems } = this.state;
    const { logo, homeUrl, dark, setDark } = this.props;
    return (
      <div className={"iq-sidebar " + (dark ? "sidebar-dark" : "")}>
        <div className="iq-sidebar-logo d-flex justify-content-between">
          <Link to={homeUrl}>
            <img src={logo} className="img-fluid" alt="" />
            <span>miruta</span>
          </Link>
          <div className="iq-menu-bt align-self-center">
            <div className="wrapper-menu">
              <div className="line-menu half start" />
              <div className="line-menu" />
              <div className="line-menu half end" />
            </div>
          </div>
        </div>
        <div id="sidebar-scrollbar" style={{ height: "87%" }}>
          <nav className="iq-sidebar-menu">
            <MenuListStyle1
              items={sideBarItems}
              className={"iq-menu"}
              visible={true}
              id="iq-sidebar-toggle"
            />
            {/*<ul className="iq-menu">*/}
            {/*    { sideBarItems.map((item, index) => (*/}
            {/*        <li key={index + "menu"} className={ ((item.is_heading) ? "iq-menu-title" : "") + (item.is_active === true ? " active " : "" ) + (getActiveLink(item) ? " menu-open" : ""  )}  >*/}
            {/*            { (item.is_heading) ?*/}
            {/*                item.title : (*/}
            {/*                    <>*/}
            {/*                        { (item.link !== undefined) ? (*/}
            {/*                            <Link to={ item.link } className="iq-waves-effect">*/}
            {/*                                { item.icon && (<i className={ item.icon } />) }*/}
            {/*                                <span>{ item.title }</span>*/}

            {/*                                { (item.children !== undefined && item.children.length > 0) && (<i className="ri-arrow-right-s-line iq-arrow-right" />) }*/}
            {/*                                { (item.coming_soon !== undefined && item.coming_soon === true) && (*/}
            {/*                                    <small className="badge badge-pill badge-primary float-right font-weight-normal ml-auto">Soon</small>*/}
            {/*                                ) }*/}
            {/*                            </Link>*/}
            {/*                        ) : (*/}
            {/*                            <a href={"!#"} className="iq-waves-effect">*/}
            {/*                                { item.icon && (<i className={ item.icon } />) }*/}
            {/*                                <span>{ item.title }</span>*/}

            {/*                                { (item.children !== undefined && item.children.length > 0) && (<i className="ri-arrow-right-s-line iq-arrow-right" />) }*/}
            {/*                            </a>*/}
            {/*                        ) }*/}

            {/*                        /!* Code for the Sub menu *!/*/}
            {/*                        { (item.children !== undefined && item.children.length > 0) && (*/}
            {/*                            <MenuListStyle1 items={item.children} display={getActiveLink(item)} />*/}
            {/*                        ) }*/}
            {/*                    </>*/}
            {/*                ) }*/}
            {/*        </li>*/}
            {/*    )) }*/}
            {/*</ul>*/}
          </nav>
        </div>
        <IconosTema dark={dark} setDark={setDark}></IconosTema>
      </div>
    );
  }
}

const IconosTema = (props) => {
  const { dark, setDark } = props;
  const [cookies, setCookie] = useCookies(["tema"]);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ul className="navbar-list" style={{ flexDirection: "row" }}>
        <li className="nav-item">
          <a
            href="!#"
            className="iq-waves-effect"
            onClick={() => {
              setDark(false);
              const temporal = { ...cookies.tema, dark: false };
              setCookie("tema", temporal, { path: "/" });
            }}
            style={{ lineHeight: "50px", minHeight: "50px" }}
          >
            <i
              className={dark ? "ri-sun-line" : "ri-sun-fill"}
              style={dark ? { color: "white" } : {}}
            />
          </a>
        </li>
        <li className="nav-item">
          <a
            href="!#"
            className="iq-waves-effect"
            onClick={() => {
              setDark(true);
              const temporal = { ...cookies.tema, dark: true };
              setCookie("tema", temporal, { path: "/" });
            }}
            style={{ lineHeight: "50px", minHeight: "50px" }}
          >
            <i
              className={dark ? "ri-moon-fill" : "ri-moon-line"}
              style={dark ? {} : { color: "#374948" }}
            />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Index;
