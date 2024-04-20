import { createContext , useEffect , useState } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = (props)=>{
      const [cartItems , setCartItems ] = useState([]);

      function addToCart (item){
            if(!cartItems.some((data) => data.asin === item.asin )){
                  setCartItems((prev)=> (
                        [...prev , { ...item , count : 1 }]
                  ) );
            }
            else{
                  let updatedCartItems = cartItems.map( (data)=>{
                        return {
                              ...data,
                              count : data.asin === item.asin ? data.count += 1 : data.count
                        }
                  })
                  setCartItems(updatedCartItems);
            }
      } 

      const removeFromCart = (item) => {
            let updateItems = cartItems.map((data)=>{
              return{
               ...data,
               count : data.asin === item.asin ? data.count -=1 : data.count,
              }
             });
             updateItems = updateItems.filter((data)=> data.count > 0)
             setCartItems(updateItems);
          };

          const removeTotalFromCart = (id) => {
            setCartItems((prev) => {
                return prev.filter(data => data.asin !== asin);
            });
        };



      const contextValue = {
            addToCart,
            cartItems,
            removeFromCart,
            removeTotalFromCart
      }


      return (
            <StoreContext.Provider value={contextValue}>
                  {props.children}
            </StoreContext.Provider>
      )

}

export default StoreContextProvider