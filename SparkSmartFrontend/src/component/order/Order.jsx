import React, { useState , useContext } from "react";
import { useEffect } from "react";
import { StoreContext } from "../../context/StoreContext";

const preLoadValue = {
  name: "",
  email: "",
  address: "",
  address2: "",
  country: "",
  state: "",
  pincode: "",
  phoneno:'',
};

export default function Order() {


  const { cartItems } = useContext(StoreContext);
  const [formData, setFormData] = useState(preLoadValue);
  const [formErrors, setFormErrors] = useState({});

  function handleInputChange(event) {
    console.log(event.target);
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleFormSubmit(event) {
    event.stopPropagation();
    event.preventDefault();
    const errors = { ...preLoadValue };
    let haserrors = false;

    if (!formData.name) {
      errors.name = "Please enter your name";
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

    if (!formData.address) {
      errors.address = "Please enter your address";
      haserrors = true;
    }

    if(!formData.phoneno){
      errors.phoneno = 'please enter your mobile no';
      haserrors = true;
    }else if(!isValidPhoneNumber(formData.phoneno)){
      errors.phoneno = 'please enter your mobile no';
      haserrors = true;
    }

    if (!formData.address2) {
      errors.address2 = "";
    }

    if (!formData.country) {
      errors.country = "Please enter your country";
      haserrors = true;
    }

    if (!formData.state) {
      errors.state = "Please enter your state";
      haserrors = true;
    }

    if (!formData.pincode) {
      errors.pincode = "Please enter your pincode";
      haserrors = true;
    }else if(!isValidPincode(formData.pincode)){
      errors.pincode = "Please enter your pincode";
      haserrors = true;
    }

    setFormErrors(errors);
  }

  const isValidEmail = (email) => {
    // Basic email format validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isValidPincode = (pincode) => {
      // India PIN code format validation
      // Pattern: 6 digits (e.g., 400001)
      return /^[1-9][0-9]{5}$/.test(pincode);
    };

    const isValidPhoneNumber = (phoneNumber) => {
      // India phone number format validation
      // Pattern: 10 digits starting with 7, 8, or 9 (e.g., 9876543210)
      return /^[6789]\d{9}$/.test(phoneNumber);
    };
    

  console.log("formdata - ", formData);
  console.log("formerror - ", formErrors);
  let subtotal = 0;
  //   console.log("haserrors - ", hasErrors);

  return (
    <div className="container" style={{ margin: "20px auto" }}>
      <div className="row g-5">
        <div className="col-md-5 col-lg-4 order-md-last">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-primary">Your cart</span>
            <span className="badge bg-primary rounded-pill"> {cartItems.length} </span>
          </h4>
          <ul className="list-group mb-3">
            {
              cartItems.map((items , index )=>{
                
                let pricing = parseFloat(items.product_price.replace('$' , ''));
                pricing = (pricing * items.count).toFixed(2);
                subtotal+= parseInt(pricing);

                return (
                  <li key={index} className="list-group-item d-flex justify-content-between lh-sm">
                  <div>
                    <h6 className="my-0"> {items.product_title} </h6>
                    <small className="text-body-secondary"> Quantity - { items.count }  </small>
                  </div>
                  <span className="text-body-secondary"> &#8377;{ pricing }  </span>
                </li>
                )
              })
            }
            <li className="list-group-item d-flex justify-content-between bg-body-tertiary">
              <div className="text-success">
                <h6 className="my-0">Delivery Fee </h6>
                <small> Free Shiping is Available </small>
              </div>
              <span className="text-success"> &#8377;0 </span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <span>Total (RUPEES)</span>
              <strong>&#8377;{subtotal}</strong>
            </li>
          </ul>

          <form className="card p-2">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Promo code"
              />
              <button type="submit" className="btn btn-secondary">
                Redeem
              </button>
            </div>
          </form>
        </div>
        <div className="col-md-7 col-lg-8">
          <h4 className="mb-3">Billing address</h4>

          <form className={"needs-validation"}>
            <div className="row g-3">
              <div className="col-12">
                <label htmlFor="firstName" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className={`form-control ${
                    formErrors && formErrors.name !== undefined
                      ? formErrors.name === ""
                        ? "is-valid"
                        : "is-invalid"
                      : ""
                  }  `}
                  id="firstName"
                  placeholder=""
                  value={formData.name}
                  name="name"
                  onChange={handleInputChange}
                   
                />
                <div className="invalid-feedback">
                  Valid first name is  .
                </div>
              </div>

              <div className="col-12">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className={`form-control ${
                    formErrors && formErrors.email !== undefined
                      ? formErrors.email === ""
                        ? "is-valid"
                        : "is-invalid"
                      : ""
                  }   `}
                  id="email"
                  placeholder="you@example.com"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <div className="invalid-feedback">
                  Please enter a valid email address for shipping updates.
                </div>
              </div>

              <div className="col-12">
                <label htmlFor="phoneno" className="form-label">
                  Mobile Number
                </label>
                <input
                  type="text"
                  className={`form-control ${
                    formErrors && formErrors.phoneno !== undefined
                      ? formErrors.phoneno === ""
                        ? "is-valid"
                        : "is-invalid"
                      : ""
                  }  `}
                  id="phoneno"
                  placeholder=" 90000 11111"
                  name="phoneno"
                  value={formData.phoneno}
                  onChange={handleInputChange}
                   
                />
                <div className="invalid-feedback">
                  Please enter a valid phone number
                </div>
              </div>

              <div className="col-12">
                <label htmlFor="address" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className={`form-control ${
                    formErrors && formErrors.address !== undefined
                      ? formErrors.address === ""
                        ? "is-valid"
                        : "is-invalid"
                      : ""
                  }  `}
                  id="address"
                  placeholder="1234 Main St"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                   
                />
                <div className="invalid-feedback">
                  Please enter your shipping address.
                </div>
              </div>

              <div className="col-12">
                <label htmlFor="address2" className="form-label">
                  Address 2{" "}
                  <span className="text-body-secondary">(Optional)</span>
                </label>
                <input
                  type="text"
                  className={`form-control ${
                    formErrors && formErrors.address2 !== undefined
                      ? formErrors.address2 === ""
                        ? "is-valid"
                        : "is-invalid"
                      : ""
                  }  `}
                  id="address2"
                  placeholder="Apartment or suite"
                  name="address2"
                  value={formData.address2}
                  onChange={handleInputChange}
                />
              </div>

              <div className="col-md-5">
                <label htmlFor="country" className="form-label">
                  Country
                </label>
                <select
                  className={`form-select ${
                    formErrors && formErrors.country !== undefined
                      ? formErrors.country === ""
                        ? "is-valid"
                        : "is-invalid"
                      : ""
                  }  `}
                  id="country"
                   
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                >
                  <option value=""></option>
                  <option value="United States">United States</option>
                  <option value="India"> India</option>
                </select>
                <div className="invalid-feedback">
                  Please select a valid country.
                </div>
              </div>

              <div className="col-md-4">
                <label htmlFor="state" className="form-label">
                  State
                </label>
                <select
                  className={`form-select ${
                    formErrors && formErrors.state !== undefined
                      ? formErrors.state === ""
                        ? "is-valid"
                        : "is-invalid"
                      : ""
                  }  `}
                  id="state"
                   
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                >
                  <option value=""></option>
                  <option value="California">California</option>
                  <option value="Odisha">Odisha</option>
                </select>
                <div className="invalid-feedback">
                  Please provide a valid state.
                </div>
              </div>

              <div className="col-md-3">
                <label htmlFor="zip" className="form-label">
                  Pincode
                </label>
                <input
                  type="number"
                  className={`form-control ${
                    formErrors && formErrors.pincode !== undefined
                      ? formErrors.pincode === ""
                        ? "is-valid"
                        : "is-invalid"
                      : ""
                  }  `}
                  id="zip"
                  placeholder=""
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleInputChange}
                   
                />
                <div className="invalid-feedback">Pin code  .</div>
              </div>
            </div>

            <hr className="my-4" />

            <button
              className="w-100 btn btn-primary btn-lg"
              onClick={handleFormSubmit}
            >
              Continue to checkout
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
