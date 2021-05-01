import React, {Fragment} from 'react';

const Foot = () => {
    return (
        <Fragment>
            <ul className="nav justify-content-center bg-dark tamaño-foot">
                <li className="nav-item m-3">
                    <span className="nav-link active text-color" aria-current="page" href="#">© 2021 Ciro Rey</span>
                </li>
            </ul>
        </Fragment>
    )
}

export default Foot;