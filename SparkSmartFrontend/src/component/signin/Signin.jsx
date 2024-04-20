import React, { useState, useEffect } from "react";
import { Link , Navigate , useNavigate } from "react-router-dom";
import { LoginAPI } from "../../api-services/userService";

const intialValue = {
  email: "",
  password: "",
};

export default function Signin({ showModel }) {
  const [formData, setFormData] = useState(intialValue);
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();

  
  // const showModel = sessionStorage.getItem("USER_TOKEN");

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  useEffect(()=>{
    console.log("cheking auth " , showModel)  
    if(showModel){
      navigate('/')
    }
  },[])

  function handleFormSubmit(event) {
    event.preventDefault();

    const errors = { ...intialValue };
    let haserrors = false;

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
    } 
    // else if (!isValidPassword(formData.password)) {
    //   errors.password = "please enter your pass";
    //   haserrors = true;
    // }

    setFormErrors(errors);

    if(!haserrors){
      LoginAPI(formData)
      .then((res) => {
        // setUserName(res.user.username);
        sessionStorage.setItem("USER_TOKEN", res.token);
        sessionStorage.setItem("USER_NAME", res.user.username);
        // toast.success(res.message);
        // setShowModal(false);

        navigate('/');

      })
      .catch((err) => {
        setShowErrMsg(err.response.data.error);
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

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="form-signin">
            <form style={{ margin: "20vh auto " }}>
              <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

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

              <div className="form-floating">
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

              <div className="form-check text-start my-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="remember-me"
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Remember me
                </label>
              </div>

              <button
                className="btn btn-primary w-100 py-2"
                onClick={handleFormSubmit}
              >
                Sign in
              </button>

              <Link to="/signup">
                <small>
                  {" "}
                  <u> Create a new account? </u>{" "}
                </small>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
