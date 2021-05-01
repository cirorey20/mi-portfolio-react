import React, { Fragment } from 'react';
import ciroDevelop from '../assets/img/logo1.png';

const Nav = () => {



    return (
        <Fragment>
            <nav className="navbar sticky-top navbar-expand-lg navbar-light shadow p-3 mb-5 bg-body color-b-1">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <img className="tamaño-logo-nav" src={ciroDevelop} alt=""/>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item hover-nav">
                                <a className="nav-link" aria-current="page" href="#portfolio">Portfolio</a>
                            </li>
                            <li className="nav-item hover-nav">
                                <a className="nav-link" href="#especialidades">Especialidades</a>
                            </li>
                            <li className="nav-item hover-nav">
                                <a className="nav-link" href="#objetivos">Objetivos</a>
                            </li>
                            <li className="nav-item hover-nav">
                                <a className="nav-link" href="#formulario" tabIndex="-1" aria-disabled="true">Contacto</a>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </nav>
        </Fragment>
    )


}

export default Nav;
