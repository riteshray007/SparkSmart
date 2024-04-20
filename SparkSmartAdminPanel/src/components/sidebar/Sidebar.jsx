import React , {useEffect} from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";

export default function Sidebar( { sideBar , setSideBar } ) {

  useEffect(()=>{
    console.log(sideBar)
  },[])

  return (
    <>
      <h1 class="visually-hidden">Spark Smart eCommerce</h1>

      <div
        class="d-flex flex-column flex-shrink-0 p-3 text-bg-dark"
        style={{ width: "280px", height: "100vh" }}
      >
        <a
          href="/"
          class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <svg class="bi pe-none me-2" width="40" height="32">
            <use xlink:href="#bootstrap" />
          </svg>
          <span class="fs-4">Spark Smart eCommerce</span>
        </a>
        <hr />
        <ul class="nav nav-pills flex-column mb-auto">
          <li class="nav-item" onClick={()=>setSideBar('category')} >
            <a href="#" class={`nav-link ${sideBar == 'category' ? 'active' : 'text-white'  } `}  aria-current="page">
              <svg class="bi pe-none me-2" width="16" height="16">
                <use xlink:href="#home" />
              </svg>
              Add Category
            </a>
          </li>
          <li onClick={()=>setSideBar('product')} >
            <a href="#" class={`nav-link ${sideBar == 'product' ? 'active' : 'text-white'  } `}>
              <svg class="bi pe-none me-2" width="16" height="16">
                <use xlink:href="#speedometer2" />
              </svg>
              Add Products
            </a>
          </li>
          <li onClick={()=>setSideBar('order')} >
            <a href="#" class={`nav-link ${sideBar == 'order' ? 'active' : 'text-white'  } `}>
              <svg class="bi pe-none me-2" width="16" height="16">
                <use xlink:href="#table" />
              </svg>
              Orders
            </a>
          </li>
          <li>
            <a href="#" class="nav-link text-white">
              <svg class="bi pe-none me-2" width="16" height="16">
                <use xlink:href="#people-circle" />
              </svg>
              Customers
            </a>
          </li>
        </ul>
        <hr />
        <div class="dropdown">
          <a
            href="#"
            class="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://github.com/mdo.png"
              alt=""
              width="32"
              height="32"
              class="rounded-circle me-2"
            />
            <strong>mdo</strong>
          </a>
          <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
            <li>
              <a class="dropdown-item" href="#">
                New project...
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Settings
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Profile
              </a>
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* <div
      className="d-flex flex-column flex-shrink-0 p-3 text-white"
      style={{
        width: "250px", // Adjust width as needed
        height: "100vh",
        backgroundColor: "#343a40", // Bootstrap dark background color
        marginTop: '55px', // Adjust top margin to accommodate Navbar
      }}
    >
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            <svg className="bi me-2" width="16" height="16">
              <use xlinkHref="#home" />
            </svg>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/dashboard" className="nav-link">
            <svg className="bi me-2" width="16" height="16">
              <use xlinkHref="#speedometer2" />
            </svg>
            Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/orders" className="nav-link">
            <svg className="bi me-2" width="16" height="16">
              <use xlinkHref="#table" />
            </svg>
            Orders
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/products" className="nav-link">
            <svg className="bi me-2" width="16" height="16">
              <use xlinkHref="#grid" />
            </svg>
            Products
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/customers" className="nav-link">
            <svg className="bi me-2" width="16" height="16">
              <use xlinkHref="#people-circle" />
            </svg>
            Customers
          </Link>
        </li>
      </ul>
      <hr className="dropdown-divider" />
      <div className="dropdown">
        <a
          href="#"
          className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
          id="userDropdown"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://github.com/mdo.png"
            alt=""
            width="32"
            height="32"
            className="rounded-circle me-2"
          />
          <strong>mdo</strong>
        </a>
        <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="userDropdown">
          <li>
            <Link to="/new-project" className="dropdown-item">
              New project...
            </Link>
          </li>
          <li>
            <Link to="/settings" className="dropdown-item">
              Settings
            </Link>
          </li>
          <li>
            <Link to="/profile" className="dropdown-item">
              Profile
            </Link>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <Link to="/sign-out" className="dropdown-item">
              Sign out
            </Link>
          </li>
        </ul>
      </div>
    </div> */}
    </>
  );
}
