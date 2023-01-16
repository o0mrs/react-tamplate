
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NavBar = ()=>{
  const [a, seta] = useState(1);
  const [pfp, setpfp] = useState('./logo.png')
  let navigate = useNavigate();
    return(
      <div className="navbar lg:px-20 md:px-16 sm:px-4  text-white">
  <div className="navbar-start  h-12">
    {/* logo */}
    <div className="Quicksand text-4xl ">
q
    </div>
    {/* <div className="dropdown  text-white">
    <label tabIndex={0} className="btn btn-ghost btn-circle">
    <i class="fa-solid fa-bars-staggered text-xl"></i>      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-300 rounded-box w-52">
        <li onClick={()=>{navigate('/',{replace:false})}}><a>Homepage</a></li>
        <li onClick={()=>{navigate('/',{replace:false})}}><a>About</a></li>
        <li onClick={()=>{navigate('/',{replace:false})}}><a>Projects</a></li>
        <li onClick={()=>{navigate('/',{replace:false})}}><a>contact</a></li>
      </ul>
    </div> */}
  </div>
  <div className="navbar-center">
    {/* <a onClick={()=>{navigate('/go',{replace:false})}} className="btn btn-ghost text-white b normal-case text-2xl">Enigma</a> */}
  </div>
  <div className="navbar-end  h-12  pt-[1.3rem] text-2xl">
  <div className="Quicksand px-4  ">
      {/* <i class="fa-solid fa-bars"></i> */}
      <i class="fa-solid fa-magnifying-glass"></i>
    </div>
    <div className="Quicksand px-4  ">
      {/* <i class="fa-solid fa-bars"></i> */}
      <i class="fa-solid fa-briefcase"></i>
    </div>
  <div className="Quicksand px-4  ">
      {/* <i class="fa-solid fa-bars"></i> */}
      Login
    </div>
    <div className=" hover:bg-white hover:text-black p-4 rounded-full px-5">
      <i class="fa-solid fa-bars"></i>
    </div>

  </div>
</div>

    )
}
export default NavBar;