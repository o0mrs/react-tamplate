
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NavBar = ()=>{
  const [a, seta] = useState(1);
  const [pfp, setpfp] = useState('./logo.png')
  let navigate = useNavigate();
    return(
      <>
      <div className="navbar sm:hidden lg:flex  bg-[#FFF] lg:px-20 md:px-16 sm:px-4  text-[#292F36]">
  <div className="navbar-start  h-12">
    {/* logo */}
    <div className="Quicksand text-2xl text-[#212121] tex flex mt-5"><img src='./logo.png' class="mr-2 w-12 h-12 -ml-2"/><div class="mt-1.5 ml-1">Remind<span className="text-[#2D76F9]">me</span></div>
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
<div>
  <button className="text-[#2D76F9] Quicksand   border-[#2D76F9] border-2 text-[1.3rem] px-8 py-2 relative rounded-3xl">
<div>About App</div>
  </button>
</div>
  </div>
</div>
<div className="lg:hidden top-0 sticky">
<div class="navbar bg-white">
  <div class="flex-1">
    <a class="btn btn-ghost normal-case text-xl text-[#212121]"><img src='./logo.png' class="mr-2 -ml-2"/>Remind<span className="text-[#2D76F9]">me</span></a>
  </div>
  <div class="flex-none">
    <div class="dropdown dropdown-end ">


  


      <div tabindex="0" class="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div class="card-body">
          {/* <span class="font-bold text-lg">8 Items</span>
          <span class="text-info">Subtotal: $999</span> */}
          {/* <div class="card-actions"> */}
            {/* <button class="btn btn-primary btn-block">View cart</button> */}
          {/* </div> */}
        </div>
      </div>
    </div>
    <div class="dropdown dropdown-end ">
      <label tabindex="0" class="btn btn-ghost btn-circle avatar">
        <div class="w-10 rounded-full">
        <i class="fa-solid fa-bars text-[#212121] text-xl mt-1"></i>          
        </div>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a class="justify-between">
            Profile
            <span class="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>


</div>
      </>
    

    )
}
export default NavBar;