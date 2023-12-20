import React from 'react';
import Ingresar from './login';


const Index = () => {

    // const [email, setEmail] = useState("");
    // const [pass, setPass] = useState("");

    const formPreventDefault = (e) => {
        e.preventDefault();
    }

    const refEmail = React.createRef();
    const refPass = React.createRef();

    return (
        <>
            <div className="sign-in-from">
                <h1 className="mb-0">Ingresar</h1>
                <p>Ingrese su dirección de correo electrónico y contraseña para acceder al panel de administración.</p>
                <form className="mt-4" onSubmit={formPreventDefault}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Correo electronico</label>
                        <input type="email" className="form-control mb-0" id="exampleInputEmail1"
                            aria-describedby="emailHelp" placeholder="Ingrese su Correo" ref={refEmail} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Contraseña</label>
                        {/* <Link to="/" className="float-right">Forgot password?</Link> */}
                        <input type="password" className="form-control mb-0" id="exampleInputPassword1"
                            placeholder="Ingrese su contraseña" ref={refPass} />
                    </div>
                    <div className="d-inline-block w-100">
                        <Ingresar email={refEmail} pass={refPass}></Ingresar>
                    </div>

                </form>
            </div>
        </>

    );
}




export default Index;
