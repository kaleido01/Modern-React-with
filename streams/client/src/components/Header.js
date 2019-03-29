import React from 'react';
import { Link } from 'react-router-dom'


const Header=()=>{
  return (
    <div className="ui secondary pointing menu">
    
    <div className="ui container">
      <Link to="/">
        Streamy
      </Link>
      <div className="right menu">
      <Link to="/">
        AllStreaming
      </Link>
      
      </div>
      
    </div>
    </div>

  )
}


export default Header