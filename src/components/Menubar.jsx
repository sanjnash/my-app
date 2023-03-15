
import React from 'react';
import { Menubar as Menubarprime } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import { Sidebar } from './Sidebar';
import { Link, NavLink } from 'react-router-dom';


const Menubar = () => {
    // <div>
    //     <Link to='./'>
    //         Home
    //     </Link>
    // </div>
    // const items = 
    // [
       
         // <Link to='/'>
            //     <label
                
                        // </Link>
           
        // {
        //     <Link to
        //     label: 'About',
        //     icon: 'pi pi-fw pi-pencil',
           
        // },
        // {
        //     label: 'Contact Us',
        //     icon: 'pi pi-fw pi-user',
           
        // },
       
        // {
        //     label: 'Quit',
        //     icon: 'pi pi-fw pi-power-off'
        // }
    // ];

   
    // const start = <Link to='/' ><img alt="logo" src="https://primefaces.org/cdn/primereact/images/logo.png" height="40" className="mr-2"></img></Link>;
    // const end = <Sidebar />;


    return (
        <div className="flex conatiner">
            {/* <Menubarprime
                // model={items}
                // icons={Icons}
                start={start} end={end}
                // <div>
                // </div>
            >
                <div>
                    hh
                </div>
                </Menubarprime> */}
                <div style={{width:100}}>
            <Link to='/' >Home </Link>
         </div>
         <div style={{width:100}}>
            <Link to='/contactUs' >Contact Us </Link>
         </div>
         <div style={{width:100}}>
            <Link to='/about' >About Us </Link>
         </div>
         <div style={{width:100}}>
            <Link to='/information' >Information </Link>
         </div>
         
        </div>
    )
}


export { Menubar }