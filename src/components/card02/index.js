import React from 'react';
import { Card } from 'reactstrap';
import './style.css';

const Tarjeta2 = (props) => {

    const { imagen, titulo, colorFondo, funcion, datos, ColorIcon } = props;
    // console.log(datos);
    return (
        <Card className="iq-card p-3 m-2 sombra" style={{ minWidth: 250, maxWidth: 300, backgroundColor: colorFondo }}>
            <div className="row justify-content-between mr-3">
                <div className="transparente" style={{
                    height: 95, width: 95, padding: 15, marginRight: 15, marginLeft: 10,
                    // backgroundColor: color
                }}><img className="fit-image w-100" src={imagen}></img></div>
                <div className="row">
                    <h4 className="jss180 mr-2 mt-2" style={{ color: "#454a42", paddingTop: "25px" }}><b>{titulo}</b></h4>
                    <div>
                        <button style={{ background: "none", border: "none", paddingTop: "29px" }} onClick={funcion}>
                            <i className="ri-shut-down-line mx-2 mt-2" style={{ color: ColorIcon, fontSize: "20px" }}></i>
                        </button>
                    </div>
                </div>
            </div>
        </Card >
    );
}
export default Tarjeta2;