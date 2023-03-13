
import React, { useState } from 'react';
import { Sidebar as Sidebarprime } from 'primereact/sidebar';
import { Button } from 'primereact/button';

const Sidebar=()=> {
    const [visible, setVisible] = useState(false);

    return (
        <div className='card'>
            <Sidebarprime visible={visible} onHide={() => setVisible(false)} position="right">
                <h2>Sidebar</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </Sidebarprime>
            <Button
             className="icon-sidebar" 
            icon="pi pi-arrow-left"
             onClick={() => setVisible(true)}  
             />
        </div>
    )
}

export {Sidebar}
        