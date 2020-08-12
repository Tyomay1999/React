import React from 'react';
import { Link } from 'react-router-dom';
import { moto } from './data';

const Moto = () => {
    return (
        <>
            <h1>Moto</h1>
            <ul>
                {
                    moto.map(({ id, carName, model }) => {
                        return (
                            <li key={id}>
                                <Link
                                    to={`/moto/${id}`}
                                >
                                    {carName} : {model}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default Moto;