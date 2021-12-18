import React, { useContext } from "react";
import "./signUp.css";

const Register = () => {
  

  const handleSubmit = (e) => {
   
  };

  return (
    <>
      <div className="sign-up-body">
        <div className="sign-up">
          <form onSubmit={handleSubmit} className="sign-up-form">
            <input
              className="input"
              type="text"
              placeholder="Name"
            //   onChange={(e) => {
                
            //   }}
            ></input>
            <input
              className="input"
              type="email"
              placeholder="E-mail"
            //   onChange={(e) => {
               
            //   }}
            ></input>
            <input
              className="input"
              type="password"
              placeholder="Password"
            //   onChange={(e) => {
               
            //   }}
            ></input>
            <input
              className="input"
              type="password"
              placeholder="Confirm Password"
            //   onChange={(e) => {
                
            //   }}
            ></input>
            <button
              className="done-button"
            >
              Sign-Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;