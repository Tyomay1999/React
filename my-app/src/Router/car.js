import React from 'react';
import { Link } from 'react-router-dom';
import { data } from './data';

const Car = () => {
    return (
        <>
            <h1>Car</h1>
            <ul>
                {
                    data.map(({ id, carName, model }) => {
                        return (
                            <li key={id}>
                                <Link
                                    to={`/car/${id}`}
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

export default Car;