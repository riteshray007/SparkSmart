import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import "./Cart.css";
import { Link } from "react-router-dom";


export default function Cart() {
  const { cartItems } = useContext(StoreContext);

  let subtotal = 0; 

  return (
    <>
      <h2 className="display-6 text-center mb-4">Cart</h2>

      <div className="table-responsive "  >
        <table className="table text-center">
          <thead>
            <tr>
              <th style={{ width: "20%" }}> Title</th>
              <th style={{ width: "40%" }}> Image</th>
              <th style={{ width: "10%" }}>Price</th>
              <th style={{ width: "10%" }}>Quantity</th>
              <th style={{ width: "10%" }}>Total</th>
              <th style={{ width: "10%" }}>Remove</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((data) => {
                  let pricing = parseFloat(data.product_price.replace('$' , ''));
                  pricing = (pricing * data.count).toFixed(2);
                  subtotal+= parseInt(pricing);
                  
                  return(
                    <tr>
                  <th scope="row" className="text-start">
                    {data.product_title}
                  </th>
                  <td> <img className="productImage"  src={data.product_photo}/> </td>
                  <td> {data.product_price} </td>
                  <td> {data.count} </td>
                  <td> {pricing } </td>
                  <td> <i class="bi bi-x-circle-fill"></i> </td>
                </tr>
                  )
                
              
            })}
          </tbody>
        </table>
            <h2 className="display-6 text-center mb-4">Cart Total</h2>
            <table className="table text-center" style={{width:'60%', margin: '0 auto' }} >
            <thead>
                  <tr>
                        <th style={{ width: "70%" }} > SubTotal </th>
                        <th> {subtotal} </th>
                  </tr>
                  <tr>
                        <th> Delivery Fee </th>
                        <th> {subtotal > 0 ? 20 : 0  } </th>
                  </tr>
                  <tr>
                        <th> Total </th>
                        <th> {subtotal > 0 ? subtotal+20 : 0  } </th>
                  </tr>
                  </thead>                  

            </table>

            <Link to="/order" >
            <button type="button" class=" btn btn-lg btn-primary" id="checkoutBtn" > Proceed Checkout </button>
            </Link>            



      </div>
    </>
  );
}
