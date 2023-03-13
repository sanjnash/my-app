
import React, { useState } from "react";
import { Calendar as Calendarprime } from 'primereact/calendar';

const Calendar=()=>{
    const [date, setDate] = useState(null);
 
    return (
        <div className="card flex justify-content-center">
            <Calendarprime value={date} onChange={(e) => setDate(e.value)} />
        </div>
    )
}
         
export {Calendar}