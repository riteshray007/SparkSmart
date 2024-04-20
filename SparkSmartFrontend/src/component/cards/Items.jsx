import "./Items.css";
import { productsJsonData } from "../../data";
import { StoreContext } from "../../context/StoreContext";
import React, { useContext } from "react";

function Items() {
  const { cartItems, addToCart , removeFromCart } = useContext(StoreContext);
  console.log(cartItems);
  return (
    <>
      <figure class="text-center productsHeader" id="featured" >
        <blockquote class="blockquote">
          <h4 className="h4  "> Our Products </h4>
        </blockquote>
      </figure>
      <div className="album py-5 bg-body-tertiary"  >
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {productsJsonData.products.map((item, index) => {
              return (
                <div className="col" key={index}>
                  <div className="card shadow-sm">
                    <img
                      className="bd-placeholder-img card-img-top"
                      height="350"
                      src={item.product_photo}
                    />
                    <div className="card-body">
                      <p className="card-text">{item.product_title}</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          {cartItems.find((data) => data.asin === item.asin) ? (
                            <div className="ItemCount" >
                              <button
                                type="button"
                                class="btn btn-secondary"
                                onClick={() => addToCart(item)}
                              >
                                {" "}
                                +{" "}
                              </button>
                              <p className="productcount" >
                                <em>{ cartItems.filter((data)=> data.asin === item.asin )[0].count }</em>
                              </p>
                              <button type="button" class="btn btn-secondary"
                              onClick={()=>removeFromCart(item)}
                              >
                                {" "}
                                -{" "}
                              </button>
                            </div>
                          ) : (
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-secondary"
                              onClick={() => addToCart(item)}
                            >
                              Add To Cart
                            </button>
                          )}

                          {/* <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary"
                          >
                            Edit
                          </button> */}
                        </div>
                        <small className="text-body-secondary">
                          {item.product_price}
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Items;
