import React, {Fragment} from 'react';
import htmlCinco from '../assets/img/html-3.png';
import cssLogo from '../assets/img/css3.png';
import jsLogo from '../assets/img/js3.png';
import jqueryLogo from '../assets/img/jquery.png';
import boosLogo from '../assets/img/boos.png';
import reactLogo from '../assets/img/react-logo.png';
import phpLogo from '../assets/img/php3.png';
import mysqlLogo from '../assets/img/mysql.png';
import laravelLogo from '../assets/img/laravel2.png';
import firebaseLogo from '../assets/img/firebase.png';
import gitLogo from '../assets/img/git.png';
import bashLogo from '../assets/img/bash5.png';

const Especialidades = () => {
    return (
        <Fragment>
            <div className="mt-5"></div>
            
            <div id="especialidades" className="color-b-1 text-dark">
                <br/><br/><br/>
                <h3 className="display-4 text-center">Especialidades</h3>
                <hr className="linea"/>

                <div><br/></div>

                <div className="container">
                    
                    <div className="text-center">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
                            <div className="col">
                                <div className="m-2 hover-iconos">
                                    <img className="iconos" data-bs-toggle="tooltip" data-bs-placement="top" title="HTML5" src={htmlCinco} alt=""/>
                                </div>
                            </div>
                            <div className="col">
                                <div className="m-2 hover-iconos">
                                    <img className="iconos" src={cssLogo} data-bs-toggle="tooltip" data-bs-placement="top" title="CSS3" alt=""/>
                                </div>
                            </div>
                            <div className="col">
                                <div className="m-2 hover-iconos">
                                    <img className="iconos" src={jsLogo} data-bs-toggle="tooltip" data-bs-placement="top" title="JavaScript" alt=""/>
                                </div>
                            </div>
                            <div className="col">
                                <div className="m-2 hover-iconos">
                                    <img className="iconos" src={jqueryLogo} data-bs-toggle="tooltip" data-bs-placement="top" title="JQuery" alt=""/>
                                </div>
                            </div>
                            <div className="col">
                                <div className="m-2 hover-iconos">
                                    <img className="iconos" src={boosLogo} data-bs-toggle="tooltip" data-bs-placement="top" title="Bootstrap" alt=""/>
                                </div>
                            </div>
                            <div className="col">
                                <div className="m-2 hover-iconos">
                                    <img className="iconos" src={reactLogo} data-bs-toggle="tooltip" data-bs-placement="top" title="React" alt=""/>
                                </div>
                            </div>
                            <div className="col">
                                <div className="m-2 hover-iconos">
                                    <img className="iconos" src={phpLogo} data-bs-toggle="tooltip" data-bs-placement="top" title="PHP" alt=""/>
                                </div>
                            </div>
                            <div className="col">
                                <div className="m-2 hover-iconos">
                                    <img className="iconos" src={mysqlLogo} data-bs-toggle="tooltip" data-bs-placement="top" title="Mysql" alt=""/>
                                </div>
                            </div>
                            <div className="col">
                                <div className="m-2 hover-iconos">
                                    <img className="iconos" src={laravelLogo} data-bs-toggle="tooltip" data-bs-placement="top" title="Laravel" alt=""/>
                                </div>
                            </div>
                            <div className="col">
                                <div className="m-2 hover-iconos">
                                    <img className="iconos" src={firebaseLogo} data-bs-toggle="tooltip" data-bs-placement="top" title="Firebase" alt=""/>
                                </div>
                            </div>
                            <div className="col">
                                <div className="m-2 hover-iconos">
                                    <img className="iconos" src={gitLogo} data-bs-toggle="tooltip" data-bs-placement="top" title="Git" alt=""/>
                                </div>
                            </div>
                            <div className="col">
                                <div className="m-2 hover-iconos" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-html="true" title="Bash" >
                                    <img className="iconos" src={bashLogo} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br/><br/>
                </div>
            </div>
        </Fragment>
    )
}

export default Especialidades;