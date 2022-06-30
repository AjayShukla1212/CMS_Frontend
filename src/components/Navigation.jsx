import React, { useState} from 'react'
import "../css/navigation.css";
import { Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
function Navigation (props){
  const navigate = useNavigate();
  return (    
    <nav className="navbar">
              
       <h1 className="navbarTitle">Zaggle Prepaid CMS Portal</h1>
       
          <button className={props.status ? "logout": "hide"}>Logout</button>
          
    </nav>  
    
  )
}

export default Navigation
