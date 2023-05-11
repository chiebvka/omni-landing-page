import {  useState } from "react";
import omnilogo from './assets/omnigpt.png';
import omin from './assets/omin.png';
import omis from './assets/omis.png';
import phone from './assets/iphone.png';
import star from './assets/star.png';
import stars from './assets/stars.png';
import hand from './assets/hand.png';
// import messe from './assets/messe.png';
import omnipeople from './assets/omnis.png';
import profile from './assets/profile.png';
import './App.css';
import { AiOutlineMenuFold, AiFillStar, AiOutlineWhatsApp, AiOutlineSlack, AiFillChrome, AiOutlineAlipayCircle, AiOutlineGoogle, AiOutlineGithub }  from "react-icons/ai";
import { MdClose, MdVerified }  from "react-icons/md";
import { SiJira, SiNotion }  from "react-icons/si";
import { BsArrowUpLeft, BsArrowUpRight, BsFillChatFill, BsTrello }  from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper";

function App() {
  const [navbar, setNavbar] = useState(false);

  return (
    <>
      <div className=' w-full h-full relative'>
        <div className="flex px-2  md:w-10/12 lg:w-11/12 mt-4 md:mt-9 items-center mx-auto justify-between w-full">
          <div className="w-4/12 h-14 md:h-28 md:w-3/12 ">
            <img src={omnilogo} className="logo h-full w-full object-cover" alt="Vite logo" />
          </div>
          <div className="w-4/12 lg:hidden  flex items-center transition ease-in duration-800 justify-end  ">
            <AiOutlineMenuFold  className='text-white mr-5 transition ease-in duration-800' size={28} onClick={() => {setNavbar(true)}} />
          </div>

          <div className="w-8/12 hidden lg:flex items-center justify-end  ">
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
            <div className="close  flex transition ease-in duration-800 justify-end ">
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
       <div className="flex  lg:w-11/12  mb-[120px] p-3 lg:mx-auto lg:mt-10 w-full  ">
        <div className="flex flex-col lg:h-full w-full   lg:flex-row-reverse">
          <div className="flex lg:block  w-11/12 p-2  lg:h-full lg:mx-auto  lg:w-5/12">
            <div className="flex relative  w-11/12 mx-auto  mt-9">
              <div className=" bg-[#feea00] rounded-tl-full rounded-bl-full rounded-br-full rounded-tr-lg mx-auto lg:ml-3 lg:w-7/12 w-8/12 ">
                <img src={omnipeople} className="w-9/12 lg:h-[180px] object-contain mx-auto bg-transparent -mt-7 mb-0 " alt="" />
              </div>
              <div className="  w-3/12   mx-auto h-12 my-auto">
                <div className="flex bg-[#7f3dd2] w-[60px] mx-auto my-auto h-[60px] justify-center p-3 rounded-full items-center">
                  <BsArrowUpLeft className="text-2xl font-extrabold bg-[#7f3dd2]"  color="white" />
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="flex relative  mt-9">
                <div className="  w-3/12  mx-auto h-12 my-auto">
                  <div className="flex bg-[#1fc77e] w-[60px] mx-auto my-auto h-[60px] justify-center p-3 rounded-full items-center">
                    <BsArrowUpRight className="text-2xl font-extrabold bg-[#1fc77e]"  color="white" />
                  </div>
                </div>
                <div className=" bg-[#f4faff] rounded-tl-full   rounded-bl-full rounded-br-full rounded-tr-full mx-auto w-8/12 ">
                  <img src={omin} className="w-9/12 lg:h-[180px]  object-contain mx-auto bg-transparent -mt-7 mb-0 " alt="" />
                </div>
              </div>
              <div className="flex relative  mt-9">
                <div className=" bg-[#1fc77e] rounded-tl-full rounded-bl-full rounded-br-full rounded-tr-lg mx-auto w-8/12 ">
                  <img src={omis} className="w-9/12 lg:h-[180px] object-contain mx-auto bg-transparent -mt-7 mb-0 " alt="" />
                </div>
                <div className="  w-3/12  mx-auto h-12 my-auto">
                  <div className="flex bg-[#feea00] w-[60px] mx-auto my-auto h-[60px] justify-center p-3 rounded-full items-center">
                    <BsFillChatFill className="text-2xl font-extrabold bg-[#feea00]"  color="white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="title items-center justify-center  lg:w-7/12 w-11/12  lg:mx-auto mx-auto p-2 lg:pl-4 mt-5">
            <h2 className="text-white p-1 lg:text-left lg:text-[60px] md:text-[55px] lg:leading-[85px] md:leading-[65px] lg:mt-9 text-2xl  lords font-bold leading-10 tracking-wider">Seamless Communication <br />  <span className="border-8 lg:mt-9 lg:p-0 my-2 px-1 rounded-tl-3xl rounded-br-3xl rounded-tr-lg border-double border-[#7f3dd2]">with OmniGPT</span> </h2>
            <h6 className="text-white p-1 lg:text-left lg:text-[30px] l lg:leading-[38px] lg:mt-9 lorde leading-8 text-lg my-2 font-medium ">Powered by Chat GPT-4</h6>
            <p className="text-white lg:text-left lg:text-[20px] l lg:leading-[27px] lg:mt-9 text-base font-sans font-thin">Experince the powert of AI Language models with OMNIgpt. Our chat platform provides seamless communixcation across multiple channels.</p>
            <p className="text-white lg:text-left lg:text-[20px] l lg:leading-[38px] lg:mt-9 text-base lorde font-medium my-3">Try the OMNIgpt for free. 15-day trial, no credit card required.</p>
            <button className="rounded flex  text-white bg-[#1FC77E] font-normal text-center p-2">Start your free trial</button>
          </div>
        </div>

       </div>


       {   /** Info Section */}
        <div className=" mt-[100px]  mb-[120px]  lg:w-11/12 lg:flex  lg:flex-row-reverse  p-5 mx-auto">
          <div className="flex flex-col   lg:w-6/12 p-2 mx-auto">
            <div className="flex mx-auto w-11/12 mb-5">
              <h2 className="text-white w-full lg:text-[60px]   md:text-[45px] text-[36px] lords lg:leading-[63px]">The <span className="text-[#1FC77E]">All-in-One</span> <br /> Solution for <br /> Conversational AI  </h2>
            </div>
            <div className="mx-auto w-11/12 mb-5">

              <div className="flex bg-white  mb-3 flex-col p-3 rounded-lg ">
                <div className="bg-transparent">
                  <h2 className="bg-transparent text-base font-bold "> Seamless Collaboration</h2>
                </div>
                <div className="bg-transparent flex items-center ">
                  <p className="bg-transparent text-xs lg:text-sm font-thin mr-2 "> Easily collaborate with team members and onprojects and ideas in real-time, boosting productivity and teamwork </p>
                  <div className="flex w-6/12 md:w-1/12 lg:w-2/12 h-10/12 lg:h-6/12 mx-auto my-auto ">
                    <img src={hand} className="w-full h-full object-cover" alt="" />
                  </div>
                </div>
              </div>
              <div className="flex bg-slate-500 my-2  flex-col px-3 py-6 rounded-lg ">
                <div className="bg-transparent">
                  <h2 className=" text-base bg-transparent text-white font-bold "> Multi-Channel Support </h2>
                </div>
              </div>
              <div className="flex bg-slate-500 my-2  flex-col px-3 py-6 rounded-lg ">
                <div className="bg-transparent">
                  <h2 className=" text-base bg-transparent text-white font-bold "> AI-Powered Assitance</h2>
                </div>
              </div>
              <div className="flex bg-slate-500 my-2  flex-col px-3 py-6 rounded-lg ">
                <div className="bg-transparent">
                  <h2 className=" text-base bg-transparent text-white font-bold "> Easy to use</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="flex  mt-9 lg:mt-0   lg:w-6/12 p-2 mx-auto">
            <div className="flex lg:h-[550px] md:h-[450px] w-11/12 lg:w-9/12  relative">
              <div className="flex w-full">
                <img src={phone} className="w-full h-full object-contain" alt="" />
              </div>
            </div>
          </div>
     
        </div>



        {   /** Pricing Section */}
        <div className="mt-[100px] lg:w-11/12  p-5 mx-auto">
          <div className="flex flex-col md:flex-row ">
            <div className="title w-11/12 text-center  mx-auto ">
              <h2 className="text-white w-full lg:text-[60px]   md:text-[45px] text-[36px] lords lg:leading-[63px]">  <span className="text-[#1FC77E]">Accesible </span> Pricing for all users </h2>
            </div>
          </div>
          <div className="w-full mt-9 grid gap-6 grid-cols-1 md:grid-cols-2  lg:grid-cols-3 ">
            <div className="flex flex-col  p-7  rounded-lg bg-slate-500  ">
              <div className="heading flex items-center bg-transparent">
                <div className="flex items-center justify-center bg-transparent">
                  <p className="bg-slate-600  font-extralight text-white text-[13px]  m-3 p-2 rounded-lg ">Most Popular</p>
                  <p className="bg-amber-200  text-black uppercase text-[12px] m-3 p-1 rounded-lg ">Test Mode</p>
                </div>
              </div>
              <div className="second flex items-center bg-transparent">
                  <div className="flex  flex-col justify-center bg-transparent">
                    <p className="bg-transparent  font-semibold text-white text-[25px]  mx-2  rounded-lg ">Standard</p>
                    <p className="bg-transparent text-white font-extralight  text-[12px] mx-2 my-2  rounded-lg ">Upgrade your productivity with AI-powered technology.</p>
                  </div>
              </div>
              <div className="third flex items-center bg-transparent">
                  <div className="flex   justify-center bg-transparent">
                    <p className="bg-transparent  font-semibold text-white text-[25px]  mx-2  rounded-lg ">$7</p>
                    <p className="bg-transparent text-white font-extralight  text-[15px]  my-2  rounded-lg ">per month</p>
                  </div>
              </div>
              <div className="fourth flex mt-4 items-center bg-transparent">
                  <div className="flex   justify-center bg-transparent">
                    <button className="rounded-lg flex  text-white bg-[#1FC77E] text-[18px] font-normal text-center py-1 px-6">Start Trial</button>
                  </div>
              </div>
              <div className="fifth flex items-center bg-transparent">
                  <div className="flex   justify-center bg-transparent">
                    <p className="bg-transparent text-white font-extralight  text-[15px]  my-2  rounded-lg ">This includes:</p>
                  </div>
              </div>
              <div className="fifth flex flex-col  bg-transparent">
                  <div className="flex   bg-transparent">
                    <MdVerified className="bg-transparent text-white font-extralight  text-[15px]  my-2  rounded-lg " />
                    <p className="bg-transparent text-white font-extralight  text-[15px]  my-1 ml-3 rounded-lg ">Use OmniGPT from your whatsapp</p>
                  </div>
                  <div className="flex    bg-transparent">
                      <MdVerified className="bg-transparent text-white font-extralight  text-[15px]  my-2  rounded-lg " />
                    <p className="bg-transparent text-white font-extralight  text-[15px]  my-1 ml-3 rounded-lg ">Transcribe speech into text</p>
                  </div>
                  <div className="flex    bg-transparent">
                      <MdVerified className="bg-transparent text-white font-extralight  text-[15px]  my-2  rounded-lg " />
                    <p className="bg-transparent text-white font-extralight  text-[15px]  my-1 ml-3 rounded-lg ">Download your chat conversations</p>
                  </div>
                  <div className="flex    bg-transparent">
                      <MdVerified className="bg-transparent text-white font-extralight  text-[15px]  my-2  rounded-lg " />
                    <p className="bg-transparent text-white font-extralight  text-[15px]  my-1 ml-3 rounded-lg ">Upload documents to get better insights</p>
                  </div>
              </div>
            </div>
            <div className="flex flex-col  p-7  rounded-lg bg-slate-500  ">
              <div className="heading flex items-center bg-transparent">
                <div className="flex items-center justify-center bg-transparent">
                  <p className="bg-slate-600  font-extralight text-white text-[13px]  m-3 p-2 rounded-lg ">Most Popular</p>
                  <p className="bg-amber-200  text-black uppercase text-[12px] m-3 p-1 rounded-lg ">Test Mode</p>
                </div>
              </div>
              <div className="second flex items-center bg-transparent">
                  <div className="flex  flex-col justify-center bg-transparent">
                    <p className="bg-transparent  font-semibold text-white text-[25px]  mx-2  rounded-lg ">Standard</p>
                    <p className="bg-transparent text-white font-extralight  text-[12px] mx-2 my-2  rounded-lg ">Upgrade your productivity with AI-powered technology.</p>
                  </div>
              </div>
              <div className="third flex items-center bg-transparent">
                  <div className="flex   justify-center bg-transparent">
                    <p className="bg-transparent  font-semibold text-white text-[25px]  mx-2  rounded-lg ">$7</p>
                    <p className="bg-transparent text-white font-extralight  text-[15px]  my-2  rounded-lg ">per month</p>
                  </div>
              </div>
              <div className="fourth flex mt-4 items-center bg-transparent">
                  <div className="flex   justify-center bg-transparent">
                    <button className="rounded-lg flex  text-white bg-[#1FC77E] text-[18px] font-normal text-center py-1 px-6">Start Trial</button>
                  </div>
              </div>
              <div className="fifth flex items-center bg-transparent">
                  <div className="flex   justify-center bg-transparent">
                    <p className="bg-transparent text-white font-extralight  text-[15px]  my-2  rounded-lg ">This includes:</p>
                  </div>
              </div>
              <div className="fifth flex flex-col  bg-transparent">
                  <div className="flex   bg-transparent">
                    <MdVerified className="bg-transparent text-white font-extralight  text-[15px]  my-2  rounded-lg " />
                    <p className="bg-transparent text-white font-extralight  text-[15px]  my-1 ml-3 rounded-lg ">Use OmniGPT from your whatsapp</p>
                  </div>
                  <div className="flex    bg-transparent">
                      <MdVerified className="bg-transparent text-white font-extralight  text-[15px]  my-2  rounded-lg " />
                    <p className="bg-transparent text-white font-extralight  text-[15px]  my-1 ml-3 rounded-lg ">Transcribe speech into text</p>
                  </div>
                  <div className="flex    bg-transparent">
                      <MdVerified className="bg-transparent text-white font-extralight  text-[15px]  my-2  rounded-lg " />
                    <p className="bg-transparent text-white font-extralight  text-[15px]  my-1 ml-3 rounded-lg ">Download your chat conversations</p>
                  </div>
                  <div className="flex    bg-transparent">
                      <MdVerified className="bg-transparent text-white font-extralight  text-[15px]  my-2  rounded-lg " />
                    <p className="bg-transparent text-white font-extralight  text-[15px]  my-1 ml-3 rounded-lg ">Upload documents to get better insights</p>
                  </div>
              </div>
            </div>
            <div className="flex flex-col  p-7  rounded-lg bg-slate-500  ">
              <div className="heading flex items-center bg-transparent">
                <div className="flex items-center justify-center bg-transparent">
                  <p className="bg-slate-600  font-extralight text-white text-[13px]  m-3 p-2 rounded-lg ">Most Popular</p>
                  <p className="bg-amber-200  text-black uppercase text-[12px] m-3 p-1 rounded-lg ">Test Mode</p>
                </div>
              </div>
              <div className="second flex items-center bg-transparent">
                  <div className="flex  flex-col justify-center bg-transparent">
                    <p className="bg-transparent  font-semibold text-white text-[25px]  mx-2  rounded-lg ">Standard</p>
                    <p className="bg-transparent text-white font-extralight  text-[12px] mx-2 my-2  rounded-lg ">Upgrade your productivity with AI-powered technology.</p>
                  </div>
              </div>
              <div className="third flex items-center bg-transparent">
                  <div className="flex   justify-center bg-transparent">
                    <p className="bg-transparent  font-semibold text-white text-[25px]  mx-2  rounded-lg ">$7</p>
                    <p className="bg-transparent text-white font-extralight  text-[15px]  my-2  rounded-lg ">per month</p>
                  </div>
              </div>
              <div className="fourth flex mt-4 items-center bg-transparent">
                  <div className="flex   justify-center bg-transparent">
                    <button className="rounded-lg flex  text-white bg-[#1FC77E] text-[18px] font-normal text-center py-1 px-6">Start Trial</button>
                  </div>
              </div>
              <div className="fifth flex items-center bg-transparent">
                  <div className="flex   justify-center bg-transparent">
                    <p className="bg-transparent text-white font-extralight  text-[15px]  my-2  rounded-lg ">This includes:</p>
                  </div>
              </div>
              <div className="fifth flex flex-col  bg-transparent">
                  <div className="flex   bg-transparent">
                    <MdVerified className="bg-transparent text-white font-extralight  text-[15px]  my-2  rounded-lg " />
                    <p className="bg-transparent text-white font-extralight  text-[15px]  my-1 ml-3 rounded-lg ">Use OmniGPT from your whatsapp</p>
                  </div>
                  <div className="flex    bg-transparent">
                      <MdVerified className="bg-transparent text-white font-extralight  text-[15px]  my-2  rounded-lg " />
                    <p className="bg-transparent text-white font-extralight  text-[15px]  my-1 ml-3 rounded-lg ">Transcribe speech into text</p>
                  </div>
                  <div className="flex    bg-transparent">
                      <MdVerified className="bg-transparent text-white font-extralight  text-[15px]  my-2  rounded-lg " />
                    <p className="bg-transparent text-white font-extralight  text-[15px]  my-1 ml-3 rounded-lg ">Download your chat conversations</p>
                  </div>
                  <div className="flex    bg-transparent">
                      <MdVerified className="bg-transparent text-white font-extralight  text-[15px]  my-2  rounded-lg " />
                    <p className="bg-transparent text-white font-extralight  text-[15px]  my-1 ml-3 rounded-lg ">Upload documents to get better insights</p>
                  </div>
              </div>
            </div>
          </div>
        </div>


        {   /** Integration Section */}
        <div className="mt-[100px] lg:w-11/12  p-5 mx-auto">
          <div className="flex flex-col md:flex-row ">
            <div className="title w-11/12 text-center  mx-auto ">
              <h2 className="text-white w-full lg:text-[60px]   md:text-[45px] text-[36px] lords lg:leading-[63px]">  <span className="text-[#1FC77E]">Integrations </span> to Boost Your Workflow </h2>
            </div>
          </div>
          <div className="w-full mt-9 grid gap-6 grid-cols-1 md:grid-cols-2  lg:grid-cols-3 ">
            <div className="  p-7  rounded-lg bg-white  ">
              <div className="fifth flex flex-col  bg-transparent">
                <div className="flex   bg-transparent">
                  <AiOutlineWhatsApp className="bg-transparent text-black font-extralight my-1    rounded-lg " size={30} />
                  <p className="bg-transparent text-black font-bold  text-[25px]  ml-3 rounded-lg ">Whatsapp</p>
                </div>
                <div className="flex   justify-center bg-transparent">
                    <p className="bg-transparent text-black font-extralight  text-[15px]  my-2  rounded-lg ">Connect your WhatsApp Account to easily send and receiveb messages directly with OmniGPT</p>
                  </div>
              </div>
            </div>
            <div className="  p-7  rounded-lg bg-white  ">
              <div className="fifth flex flex-col  bg-transparent">
                <div className="flex   bg-transparent">
                  <AiOutlineSlack className="bg-transparent text-black font-extralight my-1    rounded-lg " size={30} />
                  <p className="bg-transparent text-black font-bold  text-[25px]  ml-3 rounded-lg ">Slack</p>
                </div>
                <div className="flex   justify-center bg-transparent">
                    <p className="bg-transparent text-black font-extralight  text-[15px]  my-2  rounded-lg ">Connect your OmniGPT account to Slack and start collaborating with your team right away.</p>
                  </div>
              </div>
            </div>
            <div className="  p-7  rounded-lg bg-white  ">
              <div className="fifth flex flex-col  bg-transparent">
                <div className="flex   bg-transparent">
                  <AiFillChrome className="bg-transparent text-black font-extralight my-1    rounded-lg " size={30} />
                  <p className="bg-transparent text-black font-bold  text-[25px]  ml-3 rounded-lg ">Chrome Extension</p>
                </div>
                <div className="flex   justify-center bg-transparent">
                    <p className="bg-transparent text-black font-extralight  text-[15px]  my-2  rounded-lg ">Install the OmniGPT extension on your Chrome broswer to access our AI right from your browser window </p>
                  </div>
              </div>
            </div>
            <div className="  p-7  rounded-lg bg-white  ">
              <div className="fifth flex flex-col  bg-transparent">
                <div className="flex   bg-transparent">
                  <AiOutlineAlipayCircle className="bg-transparent text-black font-extralight my-1    rounded-lg " size={30} />
                  <p className="bg-transparent text-black font-bold  text-[25px]  ml-3 rounded-lg ">Line</p>
                </div>
                <div className="flex   justify-center bg-transparent">
                    <p className="bg-transparent text-black font-extralight  text-[15px]  my-2  rounded-lg ">Connect OmniGPT with Line to start collaborating with your team and automate your workflow</p>
                  </div>
              </div>
            </div>
            <div className="  p-7  rounded-lg bg-white  ">
              <div className="fifth flex flex-col  bg-transparent">
                <div className="flex   bg-transparent">
                  <BsTrello className="bg-transparent text-black font-extralight my-1    rounded-lg " size={30} />
                  <p className="bg-transparent text-black font-bold  text-[25px]  ml-3 rounded-lg ">Trello</p>
                </div>
                <div className="flex   justify-center bg-transparent">
                    <p className="bg-transparent text-black font-extralight  text-[15px]  my-2  rounded-lg ">Automate your Trello with OmniGPT and manage your team&apos;s tasks more efficiently</p>
                  </div>
              </div>
            </div>
            <div className="  p-7  rounded-lg bg-white  ">
              <div className="fifth flex flex-col  bg-transparent">
                <div className="flex   bg-transparent">
                  <SiJira className="bg-transparent text-black font-extralight my-1    rounded-lg " size={30} />
                  <p className="bg-transparent text-black font-bold  text-[25px]  ml-3 rounded-lg ">Jira</p>
                </div>
                <div className="flex   justify-center bg-transparent">
                    <p className="bg-transparent text-black font-extralight  text-[15px]  my-2  rounded-lg ">Connect OmniGPT with Jira and automate your team&apos;s workflow to imporve effcicncy and productivity</p>
                  </div>
              </div>
            </div>
            <div className="  p-7  rounded-lg bg-white  ">
              <div className="fifth flex flex-col  bg-transparent">
                <div className="flex   bg-transparent">
                  <AiOutlineGoogle className="bg-transparent text-black font-extralight my-1    rounded-lg " size={30} />
                  <p className="bg-transparent text-black font-bold  text-[25px]  ml-3 rounded-lg ">Google Workspace</p>
                </div>
                <div className="flex   justify-center bg-transparent">
                    <p className="bg-transparent text-black font-extralight  text-[15px]  my-2  rounded-lg ">Integrate OmniGPT with your Google Workspace account to streamline your workflow and enhance team collaboration.</p>
                  </div>
              </div>
            </div>
            <div className="  p-7  rounded-lg bg-white  ">
              <div className="fifth flex flex-col  bg-transparent">
                <div className="flex   bg-transparent">
                  <SiNotion className="bg-transparent text-black font-extralight my-1    rounded-lg " size={30} />
                  <p className="bg-transparent text-black font-bold  text-[25px]  ml-3 rounded-lg ">Notion</p>
                </div>
                <div className="flex   justify-center bg-transparent">
                    <p className="bg-transparent text-black font-extralight  text-[15px]  my-2  rounded-lg ">Integrate OmniGPT with Notion to autoimate your workflow and collaborate with your team more effectively</p>
                  </div>
              </div>
            </div>
            <div className="  p-7  rounded-lg bg-white  ">
              <div className="fifth flex flex-col  bg-transparent">
                <div className="flex   bg-transparent">
                  <AiOutlineGithub className="bg-transparent text-black font-extralight my-1    rounded-lg " size={30} />
                  <p className="bg-transparent text-black font-bold  text-[25px]  ml-3 rounded-lg ">Github</p>
                </div>
                <div className="flex   justify-center bg-transparent">
                    <p className="bg-transparent text-black font-extralight  text-[15px]  my-2  rounded-lg ">Use OmniGPT to automate your GitHub workflow and streamline your team&apos;s development process.</p>
                  </div>
              </div>
            </div>
          </div>
        </div>


        {   /** Review Section */}
        <div className="mt-[100px] lg:w-11/12  bg-transparent  p-5 mx-auto">
          <div className="flex flex-col md:flex-row ">
            <div className="title w-full md:w-9/12 mx-auto ">
              <h2 className="text-white w-full lg:text-[60px]   md:text-[45px] text-[36px] lords lg:leading-[63px]">See What People <br /> Are <span className="text-[#1FC77E]">Saying About Us</span> </h2>
            </div>
            <div className="md:w-3/12 w-6/12 -mt-3 mr-0 h-[80px] md:h-auto flex mx-auto">
              <div className="flex  mb-3 ">
                <img src={star} className="w-full" alt="" />
              </div>
              <div className="flex ml-2 mt-6">
                <img src={stars} className="w-full" alt="" />
              </div>
            </div>
          </div>
          <div className=" mt-5  ">
            <Swiper
              slidesPerView={2}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              scrollbar={{ draggable: true }}
              modules={[Pagination]}
              className="mySwiper bg-transparent"
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                400:{
                  slidesPerView:1,
                },
                639: {
                  slidesPerView: 2,
                },
                865:{
                  slidesPerView:3,
                }
              }}
            >
              <SwiperSlide className="bg-slate-500 p-5 rounded-lg">
                <div className="flex bg-transparent flex-col p-2 w-10/12 mx-auto">
                  <div className="rating flex p-2 bg-transparent">
                    <AiFillStar className="bg-transparent" color="#ffb646" />
                    <AiFillStar className="bg-transparent" color="#ffb646" />
                    <AiFillStar className="bg-transparent" color="#ffb646" />
                    <AiFillStar className="bg-transparent" color="#ffb646" />
                    <AiFillStar className="bg-transparent" color="#ffb646" />
                  </div>
                  <div className="title bg-transparent p-2 flex items-start">
                    <h2 className="bg-transparent text-[16px] text-white text-justify">OmniGPT has completely <br /> transformed the way my team works together. </h2>
                  </div>
                  <div className="content bg-transparent my-2 p-2 flex items-start">
                    <p className="bg-transparent flex text-justify text-[14px] text-white font-light "> "With the ability to seamlessly communicate across multiple channels, we are able to to collaborate in real-time and make decisions faster than ever. Plus, the AI-poered chatbot saves us time and resources by handling routine tasks and inquiries. I would highly recommend OmniGPT to any organization looking to impose their productivity and efficincy"</p>
                  </div>
                  <div className="person p-2 flex bg-transparent">
                    <div className="image bg-transparent w-[50px] h-[50px] ">
                      <img src={profile} className="bg-transparent w-full h-full object-contain " alt="" />
                    </div>
                    <div className="name bg-transparent p-4">
                      <p className="bg-transparent text-white text-[13px] font-normal ">Luke John</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="bg-slate-500 p-5 rounded-lg">
                <div className="flex bg-transparent flex-col p-2 w-10/12 mx-auto">
                  <div className="rating flex p-2 bg-transparent">
                    <AiFillStar className="bg-transparent" color="#ffb646" />
                    <AiFillStar className="bg-transparent" color="#ffb646" />
                    <AiFillStar className="bg-transparent" color="#ffb646" />
                    <AiFillStar className="bg-transparent" color="#ffb646" />
                    <AiFillStar className="bg-transparent" color="#ffb646" />
                  </div>
                  <div className="title bg-transparent p-2 flex items-start">
                    <h2 className="bg-transparent text-[16px] text-white text-justify">OmniGPT has completely <br /> transformed the way my team works together. </h2>
                  </div>
                  <div className="content bg-transparent my-2 p-2 flex items-start">
                    <p className="bg-transparent flex text-justify text-[14px] text-white font-light "> "With the ability to seamlessly communicate across multiple channels, we are able to to collaborate in real-time and make decisions faster than ever. Plus, the AI-poered chatbot saves us time and resources by handling routine tasks and inquiries. I would highly recommend OmniGPT to any organization looking to impose their productivity and efficincy"</p>
                  </div>
                  <div className="person p-2 flex bg-transparent">
                    <div className="image bg-transparent w-[50px] h-[50px] ">
                      <img src={profile} className="bg-transparent w-full h-full object-contain " alt="" />
                    </div>
                    <div className="name bg-transparent p-4">
                      <p className="bg-transparent text-white text-[13px] font-normal ">Luke John</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="bg-slate-500 p-5 rounded-lg">
                <div className="flex bg-transparent flex-col p-2 w-10/12 mx-auto">
                  <div className="rating flex p-2 bg-transparent">
                    <AiFillStar className="bg-transparent" color="#ffb646" />
                    <AiFillStar className="bg-transparent" color="#ffb646" />
                    <AiFillStar className="bg-transparent" color="#ffb646" />
                    <AiFillStar className="bg-transparent" color="#ffb646" />
                    <AiFillStar className="bg-transparent" color="#ffb646" />
                  </div>
                  <div className="title bg-transparent p-2 flex items-start">
                    <h2 className="bg-transparent text-[16px] text-white text-justify">OmniGPT has completely <br /> transformed the way my team works together. </h2>
                  </div>
                  <div className="content bg-transparent my-2 p-2 flex items-start">
                    <p className="bg-transparent flex text-justify text-[14px] text-white font-light "> "With the ability to seamlessly communicate across multiple channels, we are able to to collaborate in real-time and make decisions faster than ever. Plus, the AI-poered chatbot saves us time and resources by handling routine tasks and inquiries. I would highly recommend OmniGPT to any organization looking to impose their productivity and efficincy"</p>
                  </div>
                  <div className="person p-2 flex bg-transparent">
                    <div className="image bg-transparent w-[50px] h-[50px] ">
                      <img src={profile} className="bg-transparent w-full h-full object-contain " alt="" />
                    </div>
                    <div className="name bg-transparent p-4">
                      <p className="bg-transparent text-white text-[13px] font-normal ">Luke John</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="bg-slate-500 p-5 rounded-lg">
                <div className="flex bg-transparent flex-col p-2 w-10/12 mx-auto">
                  <div className="rating flex p-2 bg-transparent">
                    <AiFillStar className="bg-transparent" color="#ffb646" />
                    <AiFillStar className="bg-transparent" color="#ffb646" />
                    <AiFillStar className="bg-transparent" color="#ffb646" />
                    <AiFillStar className="bg-transparent" color="#ffb646" />
                    <AiFillStar className="bg-transparent" color="#ffb646" />
                  </div>
                  <div className="title bg-transparent p-2 flex items-start">
                    <h2 className="bg-transparent text-[16px] text-white text-justify">OmniGPT has completely <br /> transformed the way my team works together. </h2>
                  </div>
                  <div className="content bg-transparent my-2 p-2 flex items-start">
                    <p className="bg-transparent flex text-justify text-[14px] text-white font-light "> "With the ability to seamlessly communicate across multiple channels, we are able to to collaborate in real-time and make decisions faster than ever. Plus, the AI-poered chatbot saves us time and resources by handling routine tasks and inquiries. I would highly recommend OmniGPT to any organization looking to impose their productivity and efficincy"</p>
                  </div>
                  <div className="person p-2 flex bg-transparent">
                    <div className="image bg-transparent w-[50px] h-[50px] ">
                      <img src={profile} className="bg-transparent w-full h-full object-contain " alt="" />
                    </div>
                    <div className="name bg-transparent p-4">
                      <p className="bg-transparent text-white text-[13px] font-normal ">Luke John</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

            </Swiper>
          </div>
        </div>



        {   /** Newsletter Section */}
        <div className="mt-[100px] lg:w-11/12   rounded-lg  p-5 mx-auto">
          <div className="flex ">
            <div className="w-full justify-between flex flex-col lg:flex-row rounded-lg bg-[#05E283] p-7 lg:p-[100px]">
              <div className="title  bg-transparent">
                <h2 className="bg-transparent text-4xl mb-5 ">Experience the OnmiGPT <br /> Difference Today!</h2>
                <p className="bg-transparent">Sign up for a 15-Day Free Trial  <br />  and Transform the Way You Collaborate.</p>
              </div>
              <div className="flex my-6 lg:my-12 bg-transparent">
                <button className="rounded flex  text-white  bg-black text-xl font-normal text-center py-3 px-6">Start your free Trial</button>
              </div>
            </div>
          </div>
        </div>


        {   /** Footer Section */}
        <div className="-mt-[130px] lg:w-full bg-black      p-5 mx-auto">
          <div className="w-full mt-[110px]  grid gap-6 bg-transparent grid-cols-1 md:grid-cols-2  lg:grid-cols-4 ">
            <div className="  p-7  bg-transparent rounded-lg  ">
              <img src={omnilogo} className="bg-transparent" alt="" />
            </div>
            <div className="  p-7  bg-transparent rounded-lg   ">
            <p className=" my-3 bg-transparent uppercase text-lg  text-[#05E283]">Lorem, ipsum dolor.</p>
              <ul className=" bg-transparent mt-3 p-2">
                <li className="my-3 bg-transparent"><a className=" cursor-pointer text-lg underline text-white " href="#">Lorem, ipsum.</a></li>
                <li className="my-3 bg-transparent"><a className=" cursor-pointer text-lg underline text-white " href="#">Lorem, ipsum.</a></li>
                <li className="my-3 bg-transparent"><a className=" cursor-pointer text-lg underline text-white " href="#">Lorem, ipsum.</a></li>
                <li className="my-3 bg-transparent"><a className=" cursor-pointer text-lg underline text-white " href="#">Lorem, ipsum.</a></li>
                <li className="my-3 bg-transparent"><a className=" cursor-pointer text-lg underline text-white " href="#">Lorem, ipsum.</a></li>
              </ul>
            </div>
            <div className="  p-7  bg-transparent rounded-lg   ">
              <p className=" my-3 bg-transparent uppercase text-lg  text-[#05E283]">Lorem, ipsum dolor.</p>
              <ul className="  p-3 bg-transparent">
                <li className="my-3 bg-transparent"><a className=" cursor-pointer text-lg underline text-white" href="#">Lorem ipsum</a></li>
                <li className="my-3 bg-transparent"><a className=" cursor-pointer text-lg underline text-white" href="#">Lorem ipsum</a></li>
                <li className="my-3 bg-transparent"><a className=" cursor-pointer text-lg underline text-white" href="#">Lorem ipsum</a></li>
              </ul>             </div>
            <div className="  p-7  bg-transparent rounded-lg  ">
            <p className=" my-3 bg-transparent uppercase text-lg  text-[#05E283]">Lorem, ipsum dolor.</p>
              <p className=" mt-4  bg-transparent cursor-pointer text-lg underline text-white">Lorem Ipsum</p>
            </div>
          </div>
        </div>


      </div>
    </>
  )
}

export default App
