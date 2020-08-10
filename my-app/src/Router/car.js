import React from 'react';
import {data} from './data';

const Car = () => {
    return(
        <>
            <h1>Car</h1>
            <ul>
                {
                    data.map(({id, carName, model}) => {
                        return(
                            <li key={id}>
                                <a href={`/car/${id}`}>
                                    {carName} : {model}
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default Car;