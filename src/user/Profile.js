import React from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <div>
      <div>
        <h4>My account</h4>
         <img 
         style={{ width:"160px", height:"160px", borderRadius:"80px"}}
          src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg" alt="mybabies" /> 
      </div> 
      <nav  
      // style={navStyle}
      >
        <Link to="/">
          <div>Dashboard</div>
        </Link>
        {/* <Link to="/signup">
          <div>Create account</div>
        </Link> */}
        <Link to="/create">
          <div>New order</div>
        </Link>
        <Link to="/packages">
          <div>Orders</div>
        </Link>
        <Link to="/addresses">
          <div>My addresses</div>
        </Link>
        <Link to="/update">
          <div>profile Update</div>
        </Link>
      </nav>
      <div>
        <Link to="/calculator">Try our calculator</Link>
      </div>

    </div>
  )
}

export default Profile