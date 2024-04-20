import React, { useState, useEffect } from "react";
import { Link , useNavigate } from "react-router-dom";
import {RegisterAPI} from '../../api-services/userService'

const intialValue = {
  username: "",
  email: "",
  password: "",
  phoneno: "",
  confirmpassword: "",
};
export default function Signup() {
  const [formData, setFormData] = useState(intialValue);
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();

  
  const showModel = sessionStorage.getItem("USER_TOKEN");

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  useEffect(() => {
    console.log(formErrors);
  }, [formErrors]);

  useEffect(()=>{
    if(showModel){
      navigate('/')
    }
  },[])

  function handleFormSubmit(event) {
    event.stopPropagation();
    event.preventDefault();

    const errors = { ...intialValue };
    let haserrors = false;

    if (!formData.username) {
      errors.username = "please enter your pass";
      haserrors = true;
    }

    // Validate email
    if (!formData.email) {
      errors.email = "Please enter your email";
      haserrors = true;
    } else if (!isValidEmail(formData.email)) {
      errors.email = "Please enter a valid email address";
      haserrors = true;
    }

    if (!formData.password) {
      errors.password = "please enter your pass";
      haserrors = true;
    } else if (!isValidPassword(formData.password)) {
      errors.password = "please enter your pass";
      haserrors = true;
    }

    if (!formData.confirmpassword) {
      errors.confirmpassword = "please enter your pass";
      haserrors = true;
    } else if (formData.confirmpassword !== formData.password) {
      errors.confirmpassword = "please enter your pass";
      haserrors = true;
    }

    if (!formData.phoneno) {
      errors.phoneno = "please enter your mobile no";
      haserrors = true;
    } else if (!isValidPhoneNumber(formData.phoneno)) {
      errors.phoneno = "please enter your mobile no";
      haserrors = true;
    }

    setFormErrors(errors);

    if(!haserrors){

        const payload ={
          ...formData,
          role:'USER'
        }
        RegisterAPI(payload).then((res) => {
          //toast.success(res.message);
          navigate('/signin');
        })
        .catch((err) => {

        });
      
    }

  }

  const isValidEmail = (email) => {
    // Basic email format validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isValidPassword = (password) => {
    return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password);
  };

  const isValidPhoneNumber = (phoneNumber) => {
    // India phone number format validation
    // Pattern: 10 digits starting with 7, 8, or 9 (e.g., 9876543210)
    return /^[6789]\d{9}$/.test(phoneNumber);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="form-signin">
            <form style={{ margin: "10vh auto " }}>
              <h1 className="h3 mb-3 fw-normal">Please sign up </h1>

              <div className="form-floating" style={{ margin: "10px auto " }}>
                <input
                  type="text"
                  id="floatingInput"
                  placeholder="john doe"
                  className={`form-control  ${
                    formErrors && formErrors.username !== undefined
                      ? formErrors.username === ""
                        ? "is-valid"
                        : "is-invalid"
                      : ""
                  }  `}
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                />
                <label htmlFor="floatingInput">User Name</label>
              </div>

              <div className="form-floating" style={{ margin: "10px auto " }}>
                <input
                  type="email"
                  id="floatingInput"
                  placeholder="name@example.com"
                  className={`form-control  ${
                    formErrors && formErrors.email !== undefined
                      ? formErrors.email === ""
                        ? "is-valid"
                        : "is-invalid"
                      : ""
                  }  `}
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <label htmlFor="floatingInput">Email address</label>
              </div>

              <div className="form-floating" style={{ margin: "10px auto " }}>
                <input
                  type="number"
                  id="floatingInput"
                  placeholder="90000 1111"
                  className={`form-control  ${
                    formErrors && formErrors.phoneno !== undefined
                      ? formErrors.phoneno === ""
                        ? "is-valid"
                        : "is-invalid"
                      : ""
                  }  `}
                  name="phoneno"
                  value={formData.phoneno}
                  onChange={handleInputChange}
                />
                <label htmlFor="floatingInput">Phone number</label>
              </div>

              <div className="form-floating" style={{ margin: "10px auto " }}>
                <input
                  type="password"
                  id="floatingPassword"
                  placeholder="Password"
                  className={`form-control  ${
                    formErrors && formErrors.password !== undefined
                      ? formErrors.password === ""
                        ? "is-valid"
                        : "is-invalid"
                      : ""
                  }  `}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>

              <div className="form-floating" style={{ margin: "10px auto " }}>
                <input
                  type="password"
                  id="floatingConfirmPassword"
                  placeholder="confirm Password"
                  className={`form-control  ${
                    formErrors && formErrors.confirmpassword !== undefined
                      ? formErrors.confirmpassword === ""
                        ? "is-valid"
                        : "is-invalid"
                      : ""
                  }  `}
                  name="confirmpassword"
                  value={formData.confirmpassword}
                  onChange={handleInputChange}
                />
                <label htmlFor="floatingConfirmPassword">
                  confirm password
                </label>
              </div>

              <button
                className="btn btn-primary w-100 py-2"
                onClick={handleFormSubmit}
              >
                Sign up
              </button>

              <Link to="/signin">
                <small>
                  {" "}
                  <u> Already have an account? </u>{" "}
                </small>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
