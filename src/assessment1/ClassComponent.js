import React from 'react';
// import { useState } from 'react';
import "./style.css"

const ClassComponent=()=>{
    return(
        <div className='container' id='functional'>
            <h1>This is created using class Component</h1>
            <p>This is done using External Css</p>
            <p style={{color:'red'}}>This is done using internal Css</p>
            
        </div>
    )
}
export default ClassComponent