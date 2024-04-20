import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes , useNavigate  } from "react-router-dom";

import Signin from '../../SparkSmartFrontend/src/component/signin/Signin';
import Signup from '../../SparkSmartFrontend/src/component/signup/Signup';
import PrivateRoutes from '../../SparkSmartFrontend/src/PrivateRoutes';
import Home from './components/home/Home';
import Sidebar from './components/sidebar/Sidebar';
import AddCategory from './components/addCategory/AddCategory';
import AddProduct from './components/addProduct/AddProduct';
import Orders from './components/orders/Orders';


import 'bootstrap/dist/css/bootstrap.min.css';
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {

  const [token, setToken] = useState(sessionStorage.getItem('USER_TOKEN'));




  useEffect(() => {
    // Function to update state based on sessionStorage changes
    const handleStorageChange = () => {
      setToken(sessionStorage.getItem('USER_TOKEN'));
    };

    // Listen for storage events (e.g., changes to sessionStorage)
    window.addEventListener('storage', handleStorageChange);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);




  
  const logoutHandler = () => {
    sessionStorage.removeItem("USER_TOKEN");
    sessionStorage.removeItem("USER_NAME");
  };





  return (
    <>
    
    {/* <div className="container">
        <div className="row">
          <div className="col-md-3">
            <Sidebar sideBar={sideBar} setSideBar={setSideBar} />
          </div>
          <div className="col-md-9">
            <Routes>
              <Route path="/" element={<AddCategory />} />
              <Route path="/product" element={<AddProduct />} />
              <Route path="/order" element={<Orders />} />
            </Routes>
          </div>
        </div>
      </div> */}


    <Routes>
      <Route path='/' element={< Home />}>
        <Route path='/category'  element={<AddCategory/>}  />
        <Route path='/product'  element={<AddProduct/>}  />
        <Route path='/order'  element={<Orders/>}  />
      </Route>
      <Route path='/signin' element={<Signin  showModel={token} />}/>
      <Route path='/signup' element={<Signup/>}/>

    </Routes>

    </>
  )
}
export default App
