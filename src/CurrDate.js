
import React from "react";



var CurrDate= ()=>{


    var d=new Date();
    var date=d.toDateString();
    var t=d.getHours()+':'+d.getMinutes();

    return (
        <div className='inpt'>
            <center>
                <input className='inpt1' type="text" value={date} readOnly="true"></input>
                <input className='inpt1' type="text" value={t} readOnly="true"></input>
            </center>
        </div>
    );

}


export default CurrDate;