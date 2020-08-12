import React from 'react';
import { data } from './data';


const Detail = (prop) => {
    console.log("Detail -> prop", prop)
    const paramsId = prop.match.params.id;
    const result = data.find(({id}) => paramsId === id)
    const {carName, model} = result;
    return (
        <div>
            <h1>Detail</h1>
            <p>
                {carName} : {model}
            </p>
        </div>
    )
}

export default Detail;