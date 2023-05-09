import { useState } from "react";
import omnilogo from './assets/omnigpt.png';
import omnipeople from './assets/omnis.png';
import './App.css';
import { AiOutlineMenuFold }  from "react-icons/ai";
import { MdClose }  from "react-icons/md";
import { BsArrowUpLeft }  from "react-icons/bs";

function App() {
  const [navbar, setNavbar] = useState(false)
  

  return (
    <>
      <div className=' w-full h-full relative'>
        <div className="flex px-2  md:w-10/12 border-2 mt-4 md:mt-9 border-red-600 items-center mx-auto justify-between w-full">
          <div className="w-4/12 h-14 md:h-28 md:w-3/12 border-2 border-green-600">
            <img src={omnilogo} className="logo h-full w-full object-cover" alt="Vite logo" />
          </div>
          <div className="w-4/12 md:hidden border-2 flex items-center transition ease-in duration-800 justify-end  border-green-600">
            <AiOutlineMenuFold  className='text-white mr-5 transition ease-in duration-800' size={28} onClick={() => {setNavbar(true)}} />
          </div>

          <div className="w-8/12 hidden border-2 md:flex items-center justify-end  border-green-600">
            <ul className='flex items-center justify-between p-3'>
              <li className='text-white text-xl mx-5 p-4'><a href="#">Blog</a></li>
              <li className='text-white text-xl mx-5 p-4'><a href="#">Contact Us</a></li>
              <li className='text-white text-xl mx-5 p-4'><a href="#">Sign In</a></li>
            </ul>
          </div>
        </div>
        {navbar ? 
        <div className="fixed  top-0 z-10  w-full h-full">
          <div className="flex flex-col">
            <div className="close border-2 border-green-500 flex transition ease-in duration-800 justify-end ">
              <MdClose className='text-white mr-7 mt-6 transition ease-in duration-800' size={30} onClick={() => {setNavbar(false)}} />
            </div>
            <div className="flex items-center justify-center my-7 py-7">
              <ul className='flex-col h-full '>
                <li className='text-white text-2xl font-semibold text-center items-center my-8 p-4'><a href="#">Blog</a></li>
                <li className='text-white text-2xl font-semibold text-center items-center my-8 p-4'><a href="#">Contact Us</a></li>
                <li className='text-white text-2xl font-semibold text-center items-center my-8 p-4'><a href="#">Sign In</a></li>
              </ul>
            </div>
          </div>
        </div> : <></>
        }
          {/* <img src={omnilogo} className="logo" alt="Vite logo" /> */}
       {   /** Hero Section */}
       <div className="flex border-2 border-white w-full h-[70vh]">
        <div className="flex flex-col">
          <div className="flex relative  mt-9">
            <div className=" bg-[#feea00] rounded-tl-full rounded-bl-full rounded-br-full rounded-tr-lg mx-auto w-8/12 border-2 border-yellow-700">
              <img src={omnipeople} className="w-9/12 mx-auto bg-transparent -mt-11 mb-0 " alt="" />
            </div>
            <div className="  w-3/12  mx-auto h-12 my-auto">
              <div className="flex bg-[#7f3dd2] w-[60px] mx-auto my-auto h-[60px] justify-center p-3 rounded-full items-center">
                <BsArrowUpLeft className="text-2xl font-extrabold bg-[#7f3dd2]"  color="white" />
              </div>
            </div>
            <div className="relative"></div>
          </div>
          <div className="title">
            <h2 className="text-white">Bring the power of AI to your Conversations</h2>
            <h6 className="text-white">Work Faster, Smarter and Better Together</h6>
            <p className="text-white">Experince the powert of AI Language models with OMNIgpt.</p>
            <p className="text-white">Our chat platform provides seamless communixcation across multiple channels.</p>
            <p className="text-white">Try the OMNIgpt for free. 15-day trial, no credit card required.</p>
            <button className="rounded text-white bg-[#1FC77E] fs-[16px] texct-center p-2">Start uour free trial</button>
          </div>
        </div>






        <div className="flex"></div>
       </div>
      </div>
    </>
  )
}

export default App
