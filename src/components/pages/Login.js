import React from "react";
import { Form } from "react-bootstrap";
import FormInput from "../common/formInput";
import NavbarComponent from "../common/Navbar";
import { useNavigate } from "react-router-dom";
export default function LoginPage() {
  const navigate = useNavigate();
  return (
    <NavbarComponent>
      <div className="d-flex flex-column justify-content-center align-items-center mt-5 ">
        <h1>Login</h1>
        <div className="formouterDiv">
          <div className="d-flex flex-column">
            <Form.Label>Username</Form.Label>
            <FormInput
              type="text"
              placeholder="Enter Username"
              className="input-class"
            />
          </div>
          <div className="d-flex flex-column">
            <Form.Label>Password</Form.Label>
            <FormInput
              type="password"
              placeholder="Enter Password"
              className="input-class"
            />
          </div>
          <div className="d-flex justify-content-center mt-5 w-80">
            <button
              className="btn btn-primary"
              onClick={() => navigate("/listing")}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </NavbarComponent>
  );
}
