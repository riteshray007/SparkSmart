import React, { useState, useEffect } from "react";

const initialValue = {
  name: "",
  file: "",
};

const catogerydata = [
  {
    name: "smart phone",
    file: "data:image/jpeg;base64,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",
  },
  {
    name: "air conditioner",
    file: "data:image/jpeg;base64,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",
  },
];

export default function AddCategory() {
  const [formData, setFormdata] = useState({ ...initialValue });
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  function handleFormSubmit(e) {
    e.preventDefault();
    setFormdata({ ...initialValue });
  }

  return (
    <>
      <div style={{ margin: "20px auto " }}>
        <p class="d-inline-flex gap-1">
          <button
            class="btn btn-primary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            Add Category
          </button>
        </p>
        <div
          class="collapse"
          id="collapseExample"
          style={{ backgroundColor: "#9fabaf", padding: "20px" }}
        >
          <form className={"  needs-validation"}>
            <div className="col-12">
              <label htmlFor="firstName" className="form-label">
                Category Name
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
                onChange={(e) =>
                  setFormdata((prev) => ({ ...prev, name: e.target.value }))
                }
              />
              <div className="invalid-feedback">Valid first name</div>
            </div>

            <div className="col-12">
              <label htmlFor="firstName" className="form-label">
                Upload photo
              </label>
              <input
                type="file"
                className={`form-control ${
                  formErrors && formErrors.file !== undefined
                    ? formErrors.file === ""
                      ? "is-valid"
                      : "is-invalid"
                    : ""
                }  `}
                id="firstName"
                placeholder=""
                name="file"
                onChange={(e) =>
                  setFormdata((prev) => ({ ...prev, file: e.target.files[0] }))
                }
              />
              <div className="invalid-feedback">Upload a photo</div>
            </div>

            <hr className="my-4" />

            <button
              className="  btn btn-primary btn-lg"
              onClick={handleFormSubmit}
            >
              Add
            </button>
          </form>
        </div>
      </div>

      <div className="table-responsive ">
        <table className="table text-center">
          <thead>
            <tr>
              <th style={{ width: "10%" }}> Sl.no </th>
              <th style={{ width: "25%" }}> Title </th>
              <th style={{ width: "50%" }}>Image</th>
              <th style={{ width: "15%" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {catogerydata.map((data , index) => {
              return (
                <tr>
                  <td> {index + 1} </td>
                  <th scope="row" className="text-start">
                    {data.name}
                  </th>
                  <td>
                    {" "}
                    <img
                      className="productImage"
                      style={{ maxHeight :'100px' }}
                      src={data.file}
                    />{" "}
                  </td>
                  <td>
                    {" "}
                    <i class="bi bi-x-circle-fill"></i>{" "}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

      </div>
    </>
  );
}
