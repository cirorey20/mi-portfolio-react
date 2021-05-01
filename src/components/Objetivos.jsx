import React, {Fragment} from 'react';

const Objetivos = () => {

    return (
        <Fragment>

            <br/><br/><br/>
            <div id="objetivos">
                <h1 className="display-4 text-center">Objetivos Profesionales</h1>
                <hr className="linea"/>
            </div>

            <div><br/></div>

            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-size">
                        <p className="text-center">
                            Seguir capacitandome en diferentes tecnogías de desarrollo y aprender de programadores con más experiencia 
                            para poder convertirme en un desarrollador web de alto nivel.
                        </p>
                            <div className="container">
                            <ul className="list-unstyled">                                
                                <li>Actualmente puedo:
                                    <ul>
                                        <li><em>Maquetar sitios webs sencillos de manera responsive</em></li>
                                        <li><em>Single page de tipo informativa con un formulario de contacto</em></li>
                                        <li><em>Funcionalidades para un ecommerce</em></li>
                                        <li><em>Realizar un sistema de crud con login</em></li>
                                    </ul>
                                </li>                                
                            </ul>
                            </div>
                    </div>
                </div>

            </div>

            
        </Fragment>
    )

}

export default Objetivos;