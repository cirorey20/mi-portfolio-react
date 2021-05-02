import React, { Fragment, useState } from 'react';
import githubLogo from '../assets/img/github-icon.png';
import sweetalert from 'sweetalert';
import {store} from '../firebaseconfig';

const Form = () => {

    const[nombre, setNombre] = useState('');
    const[email, setEmail] = useState('');
    const[mesagge, setMesagge] = useState('');

    const enviarMensaje = (e) => {
        e.preventDefault()

        const correo = {
            name: nombre,
            email: email,
            content: mesagge
        }

        try{
            store.collection('mensajes').add(correo)
            
        }catch(e){
            console.log(e)
        }

        sweetalert({
            icon: "success",
            title: "Tu mensaje se envió correctamente"
        });

        setEmail('')
        setMesagge('')
        setNombre('')
    }
    

    return (
        <Fragment>
            <div className="mt-5"></div>
            
            <div className="color-b-1 text-dark">
                <br/><br/>
                <h3 className="display-4 text-center">Contacto</h3>
                <hr className="linea"/>

                <div><br/></div>

                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div>   

                            <form method="post" onSubmit={enviarMensaje}>

                                <div className="mb-3">
                                    <label className="form-label">Nombre</label>
                                    <input
                                        value={nombre}
                                        onChange={(e)=> { setNombre(e.target.value) }}
                                        type="text" 
                                        name="name" id="name" 
                                        className="form-control" 
                                        required="required">
                                    </input>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                    <input
                                        value={email}
                                        onChange={(e)=> { setEmail(e.target.value) }}
                                        type="email" 
                                        name="email" 
                                        className="form-control" 
                                        id="email" 
                                        aria-describedby="emailHelp" 
                                        required="required">
                                    </input>
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Mensaje</label>
                                    <textarea 
                                        value={mesagge}
                                        onChange={(e)=> { setMesagge(e.target.value) }}
                                        className="form-control" 
                                        name="mensaje" 
                                        id="mensaje" 
                                        cols="30" 
                                        rows="4" 
                                        required="required">
                                    </textarea>
                                </div>
                                
                                <div className="mb-4 text-center">
                                    <input type="submit" value="Enviar" className="btn btn-outline-light"/>
                                </div>
                                
                            </form>

                            <ul className="nav justify-content-center tamaño-foot">
                                <li className="nav-item m-1">
                                    <a className="nav-link hover-red" href="https://github.com/cirorey20">
                                        <img className="red-icon" src={githubLogo} alt=""/>
                                    </a>
                                </li>
                            </ul>

                            <br/><br/>
                        </div>
                    </div>
                </div>

            </div>
        </Fragment>
    )
}

export default Form;