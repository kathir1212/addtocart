import React, { useState } from "react";
import addicon from './assets/cart-icon-16.png';






function Addtocardmodal(props) {




  
  const [isModalOpen, setModalOpen] = useState(false);
  
  const toggleModal = () => {
    setModalOpen(!isModalOpen);
    
  };
  let addcart = props.stores;
  const [cart, setCart] = useState([]);

  let removeCart = (item,index) => {
    addcart.addtocart.splice(index,1)
    setCart([...addcart.addtocart])
    

    setTotal(total - parseInt(item.price))
  }

  const closeModal = () => {
    setModalOpen(false);
  };

  
  

  return (
    <>
      
      <img className="w-[10%]" src={addicon} alt="" onClick={toggleModal} />

      {isModalOpen && (
        <div
          className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-screen bg-black bg-opacity-50"
        >
          <div className="relative p-4 w-full max-w-2xl max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
             
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Add to cart list
                </h3>
                <button
                  onClick={closeModal}
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>

              
              <div className="p-4 md:p-5 space-y-4">
 {addcart.addtocart.map((item, index) => {
  
              return (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-gray-600">Rs.{item.price}</p>
                  </div>
                  <button onClick={() => {
                    removeCart(item,index)
                  }} className="text-red-500 hover:text-red-700">
                    Remove
                  </button>
                </div>
               );
            })}  
              </div>

              <div>
                {/* <h1>{total}</h1> */}
              </div>

              
            
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Addtocardmodal;
