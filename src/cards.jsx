import { useEffect } from "react";
import { useState } from "react";
import shirtImage from './assets/download.jpg';



function Cards({ sendDataToParent } ) {



  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  let fetchProducts = async () => {
    const productsData = await fetch(
      "https://67825d58c51d092c3dcf37cf.mockapi.io/addtocart"
    );
    const productResponse = await productsData.json();
    setProducts(productResponse);
  };

  

  

  let addToCart = (product) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, product];
      console.log(updatedCart, ">>> Updated Cart");
      sendDataToParent(updatedCart, total + parseInt(product.price));
      return updatedCart; // Update the cart state
    });
  
    setTotal((prevTotal) => {
      const updatedTotal = prevTotal + parseInt(product.price);
      console.log(updatedTotal, ">>> Updated Total");
      return updatedTotal; // Update the total state
    });
  
  };
 


  let removeCart = (item,index) => {
    cart.splice(index,1)
    setCart([...cart])
    setTotal(total - parseInt(item.price))
  }

  useEffect(() => {
    fetchProducts();
  }, []);

        
 
  return (
    <>



      

   <div class="flex h-screen bg-gray-100">
 
 <div className="w-[100%] p-6  overflow-y-auto">

 <div className="grid grid-cols-5 gap-6 md:grid-cols-3 lg:grid-cols-5 sm:grid-cols-2 ">
  

 

{products.map((product, index) => {
              return (
 
                <div key={index} className=" w-[100%] p-[4%] shadow-lg">
                <img  className="w-[100%]" src={shirtImage}/>

        <div>
        <h1>{product.name}</h1>
         <div className="flex">
             <div className="flex-[1] flex items-center">
             <h1>{product.price}</h1>
             </div>
         <div className="flex-[1] flex items-center">
         <button className=" bg-blue-500 px-[2%] py-[4%] text-white w-[100%]" onClick={()=>{
           addToCart(product)
         }}>Add to Cart</button>


 
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
  )
}

export default Cards
