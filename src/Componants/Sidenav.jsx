import { useState } from "react"
import { NavLink } from "react-router-dom"

function Sidenav ({children}){

   const[IsOpen , setIsOpen]= useState(false)
   const handleIsOpen=()=>{
    setIsOpen(true)
   }

  const handClose=()=>{
    setIsOpen(false)
  }
  
  return <div>

<div style={{ width: IsOpen === true ? "100px" : "" }}  className="bg-blue-500 h-screen  overflow-hidden w-[20%] fixed transition-all duration-500 border-r-4 border-gray-500">
<i style={{display: IsOpen=== true ? "none": "flex"}} onClick={handleIsOpen} className="fa-solid fa-xmark text-4xl text-white ml-[205px] mt-2"></i>
<i style={{display: IsOpen=== true ? "block": "none"}} onClick={handClose} className="fa-solid fa-bars text-4xl text-white ml-[1.2em] hidden"></i>
          <div style={{ display: IsOpen === true ? "none" : "flex" }} className="gap-12 ml-12 mt-10 text-white text-2xl flex flex-col">
            <NavLink to="/Dashbord"><i class="fa-solid fa-table-columns"></i>Dashbord</NavLink>
            <NavLink to="/Product"><i class="fa-brands fa-product-hunt"></i>Product</NavLink>
            <NavLink to="/Services"><i class="fa-solid fa-briefcase"></i>Services</NavLink>
            <NavLink to="/Parent"><i class="fa-solid fa-user"></i>Parent</NavLink>
            <NavLink to ="/Attendence"><i class="fa-solid fa-clipboard-user"></i>Attendence</NavLink>
            <NavLink to="/Help"> <i class="fa-solid fa-headphones"></i>Help</NavLink>
          </div>

    <div style={{display: IsOpen === true ? "flex" : "none" }} className="ml-12 mt-10 text-2xl  flex-col gap-12 text-white  hidden">
    <i onClick={handleIsOpen} class="fa-solid fa-table-columns"></i>
    <i class="fa-brands fa-product-hunt"></i>
    <i class="fa-solid fa-briefcase"></i>
    <i class="fa-solid fa-clipboard-user"></i>
    <i class="fa-solid fa-user"></i>
    
    <i class="fa-solid fa-headphones"></i>
    </div>  
    </div>
    <div style={{marginLeft : IsOpen=== true ? "100px" : ""}} id="main" className="ml-[21%] transition-all duration-500">
      {children}
    </div>

  </div>


}
export default Sidenav