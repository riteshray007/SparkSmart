import React ,{useState , useEffect} from 'react'

const initialValue = {
      name: "",
      file: "",
      price : '',
      category:'',
    };

    const catogerydata = [
      {
            name:  "Samsung Galaxy A15 (SM-155M/DSN), 128GB 6GB RAM, Dual SIM, Factory Unlocked GSM, International Version (Wall Charger Bundle) (Yellow)",
            file: "https://m.media-amazon.com/images/I/51rK-Be8dxL._AC_SX444_SY639_FMwebp_QL65_.jpg",
            price : '$169.99',
            category:'smartphone',
      },
      {
            name: "Moto G Play 2023 3-Day Battery Unlocked Made for US 3/32GB 16MP Camera Navy Blue",
            file: "https://m.media-amazon.com/images/I/61K1Fz5LxvL._AC_SX444_SY639_FMwebp_QL65_.jpg",
            price : '$99.99',
            category:'smartphone',
      },
    ];

export default function AddProduct() {

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
            Add Product
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
                Product Name
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
                Product Price
              </label>
              <input
                type="text"
                className={`form-control ${
                  formErrors && formErrors.price !== undefined
                    ? formErrors.price === ""
                      ? "is-valid"
                      : "is-invalid"
                    : ""
                }  `}
                id="firstName"
                placeholder=""
                value={formData.price}
                name="price"
                onChange={(e) =>
                  setFormdata((prev) => ({ ...prev, price: e.target.value }))
                }
              />
              <div className="invalid-feedback">Valid first name</div>
            </div>


            
            <div className="col-md-5">
                <label htmlFor="country" className="form-label">
                  Category
                </label>
                <select
                  className={`form-select ${
                    formErrors && formErrors.category !== undefined
                      ? formErrors.category === ""
                        ? "is-valid"
                        : "is-invalid"
                      : ""
                  }  `}
                  id="country"
                   
                  name="category"
                  value={formData.category}
                  onChange={(e) =>
                        setFormdata((prev) => ({ ...prev, category: e.target.value }))
                      }
                >
                  <option value=""></option>
                  <option value="smartphone">smart phone</option>
                  <option value="airconditioner"> AC</option>
                </select>
                <div className="invalid-feedback">
                  Please select a valid country.
                </div>
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
              <th style={{ width: "35%" }}>Image</th>
              <th style={{ width: "15%" }}>Category</th>
              <th style={{ width: "10%" }}>Price</th>
              <th style={{ width: "8%" }}>Action</th>
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
                        {data.category}
                  </td>
                  <td>
                        { data.price}
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


  )
}
