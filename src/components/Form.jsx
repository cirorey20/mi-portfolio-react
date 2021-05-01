import React, { Fragment } from 'react';
import githubLogo from '../assets/img/github-icon.png';

const Form = () => {
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

                            <form name="contact v3" method="post" data-netlify="true" onSubmit="submit">

                                <input type="hidden" name="for-name" value="contact v3" />


                                <div className="mb-3">
                                    <label className="form-label">Nombre</label>
                                    <input type="text" name="name" id="name" className="form-control" required="required"></input>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                    <input type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp" required="required"></input>
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Mensaje</label>
                                    <textarea className="form-control" name="mensaje" id="mensaje" cols="30" rows="4" required="required"></textarea>
                                </div>
                                
                                <div className="mb-4 text-center">
                                    <button type="submit" className="btn btn-outline-light">Enviar</button>
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