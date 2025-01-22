import Addtocardmodal from "./addtocardmodal"


function Header(props) {

 let store = props;
 console.log(store.addtocart.length,">>>>store");
 let addLength = store.addtocart.length;

    return (
      <>
      <div className="flex p-6 shadow-lg grid grid-cols-2 gap-2 place-content-evenly ">
        <div><h1 className="text-2xl">logo</h1></div>
        <div><div className=" flex justify-end .. text-2xl">
        <Addtocardmodal stores = {store}/><sup className="mt-[1%]"><span className="bg-green-500 p-1 rounded-[100%]">{addLength}</span></sup>
            </div></div>
      </div>
      </>
    )
  }
  
  export default Header
  