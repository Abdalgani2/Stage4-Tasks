import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./login.css";


const Login = () => {
  
//   const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();

    }

  const redirect = () => {
    
  };
  return (
    <div className="login-body">
      <div className="login">
        <form onSubmit={handleSubmit} className="login-form">
          <input
            className="input"
            type="email"
            placeholder="E-mail"
            // onChange={(e) => }
          />
          <input
            className="input"
            type="password"
            placeholder="Password"
            // onChange={(e) => }
          />
          <button >Sign-In</button>
        </form>

        <p style={{ color: "black" }}>
          if you don't have an account, click&nbsp;
          {/* <Link className="register-button" to="/register">
            here
          </Link> */}
        </p>
        
        
      </div>
    </div>
  );
};

export default Login;