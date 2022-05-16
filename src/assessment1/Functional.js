import React from 'react';
 //import { useState } from 'react';
import "./style.css"


const Functional=()=>{
    return(
        <div className='container' id='component'>
        <h1>This is created using Functional Component</h1>
        <p>This is done using External Css</p>
        <p style={{color:'blue'}}>This is done using internal Css</p>
        </div>
    )
}

export default Functional