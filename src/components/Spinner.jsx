import React from 'react';
import loader from "./infinite-spinner.svg";

const Spinner=()=>{
    return (
        <div>
            <img src={loader} width="200" height="200" alt=""/>
        </div>
    )
}

export default Spinner