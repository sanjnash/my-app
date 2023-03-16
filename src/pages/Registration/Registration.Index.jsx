import React from 'react'; 
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

const RegistrationIndex = () => {
    return (
        <div className="card">
                <div className="flex flex-column align-items-s justify-content-center gap-3 py-5">
                    <div className="flex flex-wrap justify-content-center align-items-center gap-2">
                    <h1>Registration</h1>
                        </div>
                        <div className="flex flex-wrap justify-content-center align-items-center gap-2">
                    
                    <label htmlFor="FirstName" className="w-6rem">
                            First Name
                        </label>
                   
                        <InputText id="FirstName" type="text" />
                    </div>
                    <div className="flex flex-wrap justify-content-center align-items-center gap-2">
                        <label htmlFor="LastName" className="w-6rem">
                         Last Name   
                        </label>
                        <InputText id="LastName" type="text" />
                    </div>
                    <div className="flex flex-wrap justify-content-center align-items-center gap-2">
                        <label htmlFor="EmailAdress" className="w-6rem">
                            Email Address
                        </label>
                        <InputText id="EmailAddress" type="text" />
                    </div>
                    <div className="flex flex-wrap justify-content-center align-items-center gap-2">
                        <label htmlFor="Address" className="w-6rem">
                            Address
                        </label>
                        <InputText id="Address" type="text" />
                    </div>
                    <div className="flex flex-wrap justify-content-center align-items-center gap-2">
                        <label htmlFor="Password" className="w-6rem">
                            Password
                        </label>
                        <InputText id="Password" type="text" />
                    </div>
                    <div className="flex flex-wrap justify-content-center align-items-center gap-2">
                        <label htmlFor="Confirm-Password" className="w-6rem">
                            Confirm-Password
                        </label>
                        <InputText id="Confirm-Password" type="password" />
                    </div>
                    <Button label="Sign Up" icon="pi pi-user-plus" className="p-button-success w-10rem mx-auto" ></Button>
                </div>
            </div>
        
    )
}

export { RegistrationIndex}
    
  

