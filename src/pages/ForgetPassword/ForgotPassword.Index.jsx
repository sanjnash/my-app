import React from 'react'

import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import {Card} from 'primereact/card'


const ForgotPasswordIndex = () => {
  return (
    <div className="card flex justify-content-center">
    <Card >
         <div className="flex flex-column align-items-center justify-content-center  gap-2 px-5 py-5">

         <div className="flex flex-wrap justify-content-center align-items-center gap-2">
               <h1>Forgot Password</h1></div>
            
            <div className="flex flex-wrap justify-content-center align-items-center gap-2">
                <label htmlFor="Enter Your Email Address" className="w-15rem"> Enter Your Email Address</label>
            </div>
                <div className="flex flex-wrap justify-content-center align-items-center gap-2">
                <InputText id="FirstName" type="text" />
                </div>
                <div className="login-button-container">
				<Button  style={{width:'180px'}} type="button" label="Send Reset Code"  ></Button>
				</div>
				
        </div>
        </Card>
    </div>

  )
}

export{ForgotPasswordIndex}