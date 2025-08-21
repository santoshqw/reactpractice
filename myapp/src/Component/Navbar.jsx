import React from "react";
import { useState } from "react";

const Navbar = () => {
  const [islogin, setislogin] = useState(true);
  
   const handleLogin =() =>{
      setislogin( prev=>!prev);
      console.log(islogin)
   }
  return (
    <nav className="h-[10vh] border-b-2  border-gray-400  rounded-xl shadow-xl bg-white flex items-center justify-between px-8 fixed top-1.5 w-full z-10">
      <div className="text-4xl text-pink-400 font-bold">Bookmart</div>
      <div className=" hidden sm:flex gap-9 ">
        <div>about</div>
        <div>contact</div>
        <div>help</div>
      </div>
       <div>
        <input type="text" placeholder="seacrh books" className="border p-2 rounded-xl border-gray-300" />
       </div>
      <div className="flex gap-3">
        <div className="bg-blue-400 w-24 text-center rounded py-1.5 text-white hover:bg-blue-700">
          {" "}
          sign in
        </div>
        <div
          className={`w-24 text-center rounded py-1.5 text-white hover:bg-blue-700 ${
            islogin ? "bg-black" : "bg-blue-400"
          }`}
          onClick={handleLogin}
        >
          {islogin ? "Logout" : "Login"}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
