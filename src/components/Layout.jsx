import React from 'react';
import { Menubar } from './Menubar';
import { Divider } from './Divider';
import { SlideMenu } from './SlideMenu';
import {Card} from './Card'

export const Layout = () => {
    return (
        <React.Fragment>
            <div className='layout'>
                <div className='card p-fluid'>
                    <Menubar />
                </div>
                <div class='p-divider'>
                    <Divider />
                </div>
                <div className='slidemenu'>
                    <SlideMenu/>
                </div>
            </div>
                 
            
        </React.Fragment>

    )
}
