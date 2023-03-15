import React from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

const LoginIndex = () => {

	return (

		<div className="login-body flex-container" >
			<div className='flex flex-column gap-3'>
				<div className="form-container flex flex-column gap-3">
					<span className="p-input-icon-left">
						<i className="pi pi-envelope"/>
						<InputText type="text" placeholder="Enter Your Email Here" style={{width:"270px"}}/>
					</span>
					<span className="p-input-icon-left">
						<i className="pi pi-key"></i>
						<InputText type="password" placeholder="Enter Your Password Here" style={{width:"270px"}}/>
					</span>
				</div>
				<div className="button-container">
				<Button type="button" label="Login" severity="success" ></Button>
				</div>
			</div>
			
				<div className='login-'>
				<span>Don’t have an account?<button className="p-link" >Sign-up here</button></span>
			</div>
		</div>

	)
}

export { LoginIndex }