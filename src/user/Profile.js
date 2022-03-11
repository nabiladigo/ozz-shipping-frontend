import React from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <div>
      <div>
        <h4>My account</h4>
         <img 
         style={{ width:"160px", height:"160px", borderRadius:"80px"}}
          src="https://i.imgur.com/dnLRgDE.jpg" alt="mybabies" /> 
      </div> 
      <nav  
      // style={navStyle}
      >
        <Link to="/">
          <div>Dashboard</div>
        </Link>
        <Link to="/signup">
          <div>Create account</div>
        </Link>
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
        <p>
          <h1>Got a question?</h1>
          To ask a question about an order click the ‘Discuss this order’ link from your orders page. You’ll also find answers to many common questions on our FAQs page.
        </p>
        <Link to="/FAQ">
            <button>Got a question</button>
        </Link>
      </div>
      <div>
        <Link to="/calculator">Try our calculator</Link>
      </div>

    </div>
  )
}

export default Profile