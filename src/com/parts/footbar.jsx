import {React} from 'react';
const Foot = ()=>{
    return(
        <footer className="footer p-10 mt-32 text-base text-base-content">
  <div>
<div className="text-[#212121] flex text-xl mb-2">
    <img src='./logo.png' class="mr-2 -mt-1 -ml-2"/>Remind<span className="text-[#2D76F9]">me</span>
</div>
    <p>Task deadlines and scheduling <br/>applications with various benefits and<br/> advantages</p>
  </div> 
  <div>
    <span className="footer-title">Services</span> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </div>
</footer>
    )
}
export default Foot