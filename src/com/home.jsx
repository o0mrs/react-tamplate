/* 
Fonts Name (same as the className)
Poppins
roboto

 */
import './css/App.css'
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import NavBar from './parts/navbar';
const Home = ()=>{
let navigate = useNavigate();
let tab = 0
if(tab == 0){
    return(
      
<div className='bga h-[220rem]'>
<div className="dvb-cursor -visible" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate3d(336px, 233px, 0px)'}}><div className="dvb-cursor-text" /><div className="dvb-cursor-ball" /></div>
<NavBar />
</div>
            )
}else{
    return(
        <div>

      </div>
            )
}



}
export default Home;