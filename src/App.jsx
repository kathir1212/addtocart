import Header from "./header"
import Cards from "./cards"
import Footer from "./footer"
import Addtocardmodal from "./addtocardmodal"
import React, { useEffect, useState } from "react";


function App() {



  const [dataFromChild, setDataFromChild] = useState([]);
  const handleDataFromChild = (cart,total) => {
    console.log(total,"data>>>>>");
    
    setDataFromChild(cart,total);
  };
   
  
  return (
    <>
    <div>
    <Header addtocart = {dataFromChild}/>
    <Cards  sendDataToParent={handleDataFromChild} />
    {/* <Footer/> */}
    
    </div>
   
    </>
  )
}

export default App
