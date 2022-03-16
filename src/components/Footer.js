import { Link } from 'react-router-dom';


function Footer(props) {
  const navStyle = {
    display: "flex",
    // position: "fixed",
    justifyContent: "space-around",
    // border: "3px solid black",
    padding: "8px",
    width: "100%",
    margin: "auto",
    backgroundColor: "#e3eaf3",
    // color: "white",
  };
  
  return (
  <div   className="footer">
    
    <div style={navStyle}>

     <Link to="/">
          <div>Home</div>
        </Link>
        <Link to="/about">
          <div>About Us</div>
        </Link>
          <Link to="/">
          <div>Tracking</div>
        </Link>
          <Link to="/faq">
          <div>FAQ</div>
        </Link>
    </div>
    <h3 >Designed & Build by Nabila Digourdi</h3>
     </div>
     );
}

export default Footer;