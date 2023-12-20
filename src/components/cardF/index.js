import React from 'react';
import { Card } from 'reactstrap';
// import './style.css';

const TarjetaF = (props) => {

    const { titulo, colorFondo, funcion, ColorIcon } = props;
    return (
        <Card className="iq-card p-3 m-2 sombra" style={{ minWidth: 250, maxWidth: 300, backgroundColor: colorFondo }}>
            <div className="row justify-content-center mr-3">

                {/* <div className="transparente" style={{
                    height: 95, width: 95, padding: 15, marginRight: 15, marginLeft: 10,
                    // backgroundColor: color
                }}><img className="fit-image w-100" src={imagen}></img></div> */}

                <div className="row">
                    <h4 className="jss180 mr-2 mt-2" style={{ color: "#454a42", paddingTop: "15px" }}><b>{titulo}</b></h4>
                    <div>
                        <button style={{ background: "none", border: "none", paddingTop: "19px" }} onClick={funcion}>
                            <i className="ri-shut-down-line mx-2 mt-2" style={{ color: ColorIcon, fontSize: "20px" }}></i>
                        </button>
                    </div>
                </div>
            </div>
        </Card >
    );
}
export default TarjetaF;