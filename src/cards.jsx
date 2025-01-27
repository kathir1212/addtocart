import { useEffect } from "react";
import { useState } from "react";


function Cards({ sendDataToParent } ) {



  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [cartStatus, setCartStatus] = useState({});




  let fetchProducts = async () => {
    const productsData = await fetch(
      "https://fakestoreapi.com/products"
    );



    const productResponse = await productsData.json();

    
    setProducts(productResponse);
  };

  

  

  let addToCart = (product , index) => {
    
    setCart((prevCart) => {
      
     
      const updatedCart = [...prevCart, product];
      sendDataToParent(updatedCart, total + parseInt(product.price));

      
      return updatedCart; 
    });
  
    setTotal((prevTotal) => {
      const updatedTotal = prevTotal + parseInt(product.price);
      return updatedTotal; 
    });

    setCartStatus((prevState) => ({
      ...prevState,
      [index]: true,
    }));
  
  };

  let added = () => {
alert("card already added please check")
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
                <img  className="w-[100%]" src={product.image}/>

        <div>
        <h1>{product.title}</h1>
         <div className="flex">
             <div className="flex-[1] flex items-center">
             <h1>{product.price}</h1>
             </div>
         <div className="flex-[1] flex items-center">
         <button  className={` px-[2%] py-[4%] text-white w-[100%] ${cartStatus[index] ? "bg-green-500" : "bg-blue-500"}`}
          onClick={()=>{
          
          
          cartStatus[index] ? added() : addToCart(product , index)
         }}>
         
         {cartStatus[index] ? 'added' : 'add to cart'}
         </button>


          
 
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
