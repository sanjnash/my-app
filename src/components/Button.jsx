
import React from 'react'; 
import { Button as ButtonPrime } from 'primereact/button';

const Button=()=> {
    return (
        <div className="card flex justify-content-center">
            <ButtonPrime label="Submit" />
        </div>
    )
}
      
export {Button}