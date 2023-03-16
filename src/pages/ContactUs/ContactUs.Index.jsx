import React from 'react'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'
import { Card } from 'primereact/card';


const ContactUsIndex = () => {
  return (
    <Card title='Talk with an Advisor' style={{ width: '44rem', height: '26rem' }}>
      <div className="contactUs-body flex flex-column"  >
        <div className='flex flex-column gap-3'>
          <div className='flex flex-row gap-6'>
            <div className="form-container flex flex-column gap-4">
              <span className="p-input-icon-left">
                <InputText type="text" placeholder="Enter Your First Name" style={{ width: "290px", height: '60px' }} />
              </span>
            </div>
            <div>
              <span className="p-input-icon-left">
                <InputText type="password" placeholder="Enter Your Last Name" style={{ width: "290px", height: '60px' }} />
              </span>
            </div>
          </div>
          <div className='contactUs-message-box'>
            <InputText type='text' placeholder='Enter Your Message Here' style={{ width: '35rem', height: '9rem' }} />
          </div>
          <div className='flex flex-column gap-3'>
          <div className="contactUs-message-button">
            <Button style={{ width: '180px' }} type="button" label="Send Message" severity="help" ></Button>
          </div>
          </div>
        </div>

        
      </div>
    </Card>

  )



}


export { ContactUsIndex }