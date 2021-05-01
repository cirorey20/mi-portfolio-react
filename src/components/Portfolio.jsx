import React, { Fragment } from 'react';
//import def from '../assets/img/default-img.png';
import proyect1 from '../assets/img/boyar.jpg';
import proyect2 from '../assets/img/iapitos.jpg';
import proyect3 from '../assets/img/agenda.jpg';

const Portfolio = () => {
    return (
        <Fragment>
            <br/>
            <div>
                <h3 className="display-4 text-center" id="portfolio">Portfolio</h3>
                <hr className="linea"/>
            </div>

            <div><br/></div>

            <div className="container-fluid">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <div className="col">
                    <div className="card m-2 hover-img">
                        
                        <img className="card-img-top" src={proyect1} alt="default"/>
                        <div className="card-body">
                            <h5 className="card-title">Ecommerce
                                <a href="https://tiendaboyar.web.app/" className="ml-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-arrow-up-right-square" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"/>
                                </svg>
                                </a> 
                            </h5>
                            <p className="card-text">Boyar es una tienda online de música que cumple con las funcionalidades más importantes de un carrito de compras.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card m-2 hover-img">
                        
                        <img className="card-img-top" src={proyect2} alt="default"/>
                        
                        <div className="card-body">
                            <h5 className="card-title">Iapitos
                                <a href="https://iapitos.netlify.app/" className="ml-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-arrow-up-right-square" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"/>
                                    </svg>
                                </a> 
                            </h5>
                            <p className="card-text">Iapitos es una página de tipo informativa donde se encuentran todos los datos necesarios que el usuario debe saber.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card m-2 hover-img">
                        <img className="card-img-top" src={proyect3} alt="default"/>
                        <div className="card-body">
                            <h5 className="card-title">Agendapp
                                <a href="https://anotadorapp.web.app/" className="ml-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-arrow-up-right-square" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"/>
                                    </svg>
                                </a> 
                            </h5>
                            <p className="card-text">Las funcionalidades de un crud básico las encontrarás en esta aplicación web que te servirá como anotador o agenda de contactos.</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            
        </Fragment>
    )
}

export default Portfolio;