/* 
Fonts Name (same as the className)
Poppins
roboto

 */
import './css/App.css'
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import ProgressiveImage from "react-progressive-image-loading";
import NavBar from './parts/navbar';
import Foot from './parts/footbar';
const Home = ()=>{
let navigate = useNavigate();
let tab = 0
if(tab == 0){
    return(
      
<div className='bg-white h-[220rem]'>
<NavBar />
<div className='lg:mt-3'>
<div class="lg:flex sm:grid  lg:pl-10">
  <div class="lg:w-1/2 lg:pr-4 mt-12 px-5">
    <div class="Poppins sm:text-5xl lg:text-7xl text-[#212121] sm:leading-[4rem] lg:leading-[6rem]">Manage <br class="sm:hidden lg:block"/> Schedule and <br class="sm:hidden lg:block"/>Task Easy </div>
    <div class="Poppins sm:text-md lg:text-lg text-[#747474] mt-4 Quicksand lg:leading-[2rem] sm:leading-[1.8rem]">
  Create and organize schedule and task deadline become <br class="sm:hidden lg:block"/> better, easy manage and certainly no longer lagging <br class="sm:hidden lg:block"/> behind schedule of activities and task
  </div>
  <div>
    <button class="bg-[#2D76F9] Quicksand sm:px-8 lg:px-14 sm:py-4 lg:py-5 text-white rounded-full mt-7">Download App</button>
    </div>
    </div>
  <div class="lg:w-1/2 lg:pl-4 mt-7 sm:flex   w-full lg:hidden">
  <ProgressiveImage
    preview="/images/tiny-preview.png"
    src="./main2.png"
    render={(src, style) => <img src={src} style={style} className='rounded-3xl  ' />}
/>
    </div>
    <div class="lg:w-1/2 lg:pl-4 mt-3 sm:hidden lg:flex">

<img src={'./main2.png'}  className='rounded-bl-[10rem]  w-[50vw] h-[100vh] -mt-32 ' />
    </div>
</div>
<div className='text-black sm:grid mt-16 lg:flex justify-center sm:px-5'>
    {/* 1 */}
<div className='grid sm:text-center lg:text-left px-7 mt-16 sm:place-items-center lg:place-items-left'>
<div className='bg-[#EEF4FF]  p-4 rounded-full'>
{/* logo */}
<img src='./uim_schedule.png' className='w-16 h-16'></img>
</div>
<div className='text-black Poppins mt-9 text-2xl px-1'>
Set a better deadline tasks
</div>
<div className='text-[#747474] Quicksand mt-7 text-lg px-1'>
You can make your duty deadlines better and more orderly
</div>

</div>
    {/* 2 */}
    <div className='grid text-center mt-16 place-items-center'>
<div className='bg-[#EEF4FF] p-4 rounded-full'>
{/* logo */}
<img src='./uim_layer-group.png' className='w-16 h-16'></img>
</div>
<div className='text-black Poppins mt-9 text-2xl px-1'>
Manage the tasks so easily
</div>
<div className='text-[#747474] Quicksand mt-7 text-lg px-1'>
You can manage the deadlines and the schedule becomes easy
</div>

</div>
    {/* 3 */}
    <div className='grid text-center mt-16 place-items-center'>
<div className='bg-[#EEF4FF] p-4 rounded-full'>
{/* logo */}
<img src='./ri_notification-fill.png' className='w-16 h-16'></img>
</div>
<div className='text-black Poppins mt-9 text-2xl px-1'>
Wouldn’t miss notifications</div>
<div className='text-[#747474] Quicksand mt-7 text-lg px-1'>
Of course you will always get the tasks and schedule notifications
</div>

</div>
</div>
<div class="lg:flex sm:grid mt-32">

  <div class="lg:w-1/2 pr-4"> 
  <ProgressiveImage
    preview="/images/tiny-preview.png"
    src="./main3.png"
    render={(src, style) => <img src={src} style={style} className='rounded-5xl  ' />}
/></div>
  <div class="lg:w-1/2 lg:pl-20 sm:px-5 gird place-items-center h-full text-left">
    <div className='text-[#212121] Poppins lg:text-5xl sm:mt-12 sm:leading-[2rem] sm:text-2xl lg:leading-[4rem]'>Set up task and schedule<br /> with a best features</div>
    <div className='text-[#747474] lg:w-[70%] lg:text-2xl lg:mt-12 sm:mt-10 sm:text-xl sm:px-2'>
    The best feature makes you better, with the latest technology to meet your needs. Of course, with such features as organizing schedules and leading assignments, it will make you easier, So get the application now !
    </div></div>
</div>
<div class="lg:flex sm:grid mt-32">

  <div class="lg:w-1/2 sm:px-6 lg:pl-10 sm:order-2 lg:order-1"> 
  <div className='text-[#212121] text-left Poppins lg:text-5xl sm:mt-12 sm:leading-[2rem] sm:text-2xl lg:leading-[4rem]'>Get the highest priority<br /> application notification</div>
    <div className='text-[#747474] lg:w-[70%] lg:text-2xl lg:mt-12 sm:mt-10 sm:text-xl sm:px-2'>
    The best feature makes you better, with the latest technology to meet your needs. Of course, with such features as organizing schedules and leading assignments, it will make you easier, So get the application now !
    </div>
</div>
  <div class="lg:w-1/2 lg:pl-20 sm:order-1 lg:order-2 sm:px-5 text-left">
  <ProgressiveImage
    preview="/images/tiny-preview.png"
    src="./main4.png"
    render={(src, style) => <img src={src} style={style} className='rounded-5xl  ' />}
/>
    </div>
</div>

<div className="grid mt-16 place-items-center">
    <div style={{backgroundImage: "url('bg.png')"}} className="bg-[#2170FF] lg:max-w-[80vw] lg:rounded-3xl sm:w-screen mt-12 text-center px-5 py-7">
<div className='Quicksand text-3xl lg:text-4xl text-white lg:mt-10 lg:leading-[3.4rem] sm:leading-[2.6rem]'>
Download an app now<br className='lg:hidden'/> and the various<br /> benefits you will get immediately
</div>
<div>
    {/* button */}
    <div className="sm:grid lg:flex lg:justify-center lg:mt-12 mb-12">
        <button className="btn lg:btn-lg text-[#2D76F9] sm:mt-5  lg:mr-10 bg-white border-0 rounded-full hover:bg-white">Download App</button>
        <button className="btn lg:btn-lg text-white sm:mt-5 bg-transparent border-1 border-white  rounded-full hover:bg-transparent">About app</button>
    </div>
</div>

    </div>
</div>
<div class="lg:flex sm:grid mt-32">

  <div class="lg:w-1/2 pr-4 sm:hidden lg:block"> 
  <ProgressiveImage
    preview="/images/tiny-preview.png"
    src="./main5.png"
    render={(src, style) => <img src={src} style={style} className='rounded-5xl  ' />}
/></div>
  <div class="lg:w-1/2 lg:pl-20 sm:px-5 gird place-items-center h-full text-left">
    <div className='text-[#212121] Poppins lg:text-5xl sm:mt-12 sm:leading-[2rem] sm:text-2xl lg:leading-[4rem]'>What do they think</div>
    <div className='text-[#747474] lg:w-[70%] lg:text-2xl lg:mt-12 sm:mt-10 sm:text-xl sm:px-2'>
<div className="flex">
<div className="mr-10 ">
<ProgressiveImage
    preview="/images/tiny-preview.png"
    src="./Profile.png"
    render={(src, style) => <img src={src} style={style} className='rounded-5xl w-16 h-16 ' />}
/>
</div>
<div className="grid">
<div className='text-[#212121]'>
Samantha Sench
</div>
<div className='text-[#747474] text-sm'>
Student at University
</div>
</div>
</div>
<div className='mt-12'>
“ Hi, it’s Samantha. After using it made me a lot of benefits, starting with convenience of setting a deadline of tasks and schedule after that the app is very simple using. “ 
</div>
    </div></div>
</div>
</div>
<Foot />
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