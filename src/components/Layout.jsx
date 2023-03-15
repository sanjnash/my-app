import React from 'react';
import { Divider } from 'primereact/divider';
import { Menubar } from './Menubar';
// import { SlideMenu } from './SlideMenu';
import { Splitter } from './Splitter';

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
                <Splitter/>
                {/* <div className='container'>
                    <div className='flex flex-row'>
                        <div className='slidemenu'>
                        <SlideMenu/>
                        </div>

                    <div className='divider'>
                    <Divider layout='vertical'/>
                    </div>
                     </div>                   
                </div> */}
            </div>
                            
        </React.Fragment>

    )
}
