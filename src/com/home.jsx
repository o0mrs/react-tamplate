/* 
Fonts Name (same as the className)
Poppins
roboto

 */
import './css/App.css'
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
const Home = ()=>{
let navigate = useNavigate();
let tab = 0
if(tab == 0){
    return(
<div>
  <div className="Poppins text-5xl h-[90vh]  animate-bounce grid place-items-center">
  OMAR
  </div>
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