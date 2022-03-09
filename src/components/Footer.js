import { Link } from 'react-router-dom';


function Footer(props) {
  const navStyle = {
    display: "flex",
    justifyContent: "space-around",
    border: "3px solid black",
    padding: "8px",
    width: "90%",
    margin: "auto",
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
          <Link to="/">
          <div>FAQ</div>
        </Link>
    </div>
    <h3>Designed & Build by Nabila Digourdi</h3>
     </div>
     );
}

export default Footer;