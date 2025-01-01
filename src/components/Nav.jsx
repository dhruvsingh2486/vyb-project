// import React from "react";
import vyblogo from "../assets/vyb-logo.png"
// import searchbar from "../assets/search-bar-icon.png"
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function Nav() {

  const navMenu = ["Fav Creators" , "Merchandise", "Brand", "Digital"]

  return (

    <>
    

<nav className="border-gray-200 dark:bg-#181818 dark:border-gray-700 w-full m-auto lg:w-10/12 xl:10/12 my-3">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  
        <img src={vyblogo} className="h-12" alt="Flowbite Logo" />
        <span className="self-center font-semibold whitespace-nowrap dark:text-white"> 
        <input type="text" placeholder="Search Creator"
        className="rounded-full h-10 w-48 lg:w-64 pl-5 m-1 outline-0 border-none bg-white text-black" >
         </input>       
     </span>


     <ul className=" items-center text-white hidden xl:flex xl:visible lg:flex lg:visible relative z-0">
          {navMenu.map((menu) => <li className="mx-3 text-2xl font-primaryjost font-medium" key={menu}>{menu}</li>)}
     </ul>


     <div className=" border-blue-500 inline-flex lg:visible xl:visible 2xl:visible" >
           


           <Menu as="div">
             <div>
               <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-2xl bg-white px-3 py-2 text-sm font-semibold  shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                 Option
                 <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400 bg-transparent" />
               </MenuButton>
             </div>
       
             <MenuItems
               transition
               className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-black rounded-2xl bg-black shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
             >
               <div className="py-1">
                 <MenuItem>
                   <a
                     href="#"
                     className="block px-4 py-2 text-sm text-gray-100 data-[focus]:bg-gray-700 data-[focus]:text-gray-100 data-[focus]:outline-none"
                   >
                     Profile
                   </a>
                 </MenuItem>
                 <MenuItem>
                   <a
                     href="#"
                     className="block px-4 py-2 text-sm text-gray-100 data-[focus]:bg-gray-700 data-[focus]:text-gray-100 data-[focus]:outline-none"
                   >
                     Dashboard
                   </a>
                 </MenuItem>
               </div>
               <div className="py-1">
                 <MenuItem>
                   <a
                     href="#"
                     className="block px-4 py-2 text-sm text-gray-100 data-[focus]:bg-gray-700 data-[focus]:text-gray-100 data-[focus]:outline-none"
                   >
                     My Score
                   </a>
                 </MenuItem>
               
               </div>
               <div className="py-1">
               
               </div>
             </MenuItems>
           </Menu>
         
       
       
                 </div>

  
    <button data-collapse-toggle="navbar-hamburger" type="button" className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 sm:visible md:visible lg:hidden xl:hidden" aria-controls="navbar-hamburger" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
      </svg>
    </button>
    <div className="hidden w-full" id="navbar-hamburger">
      <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700 sm:object-none">
        <li>
          <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded dark:bg-blue-600" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Services</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white">Pricing</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </>

    // <>
    //   <nav className="bg-##181818 text-white w-10/12 mx-auto border-solid
    //    border-1 border-white-100 h-12 rounded-3xl flex space-x-8 my-6">
    //     <img className="h-11 ml-5 place-content-center pt-1"  src={vyblogo} alt="" />
    //     <input type="text" placeholder="Search Creator/Product"
    //     className="rounded-full h-10 w-64 pl-5 m-1 outline-0 border-none bg-white text-black" >
        
    //        </input>

    //        <ul className="flex items-center">
    //         {navMenu.map((menu) => <li className="mx-3 text-2xl font-primaryjost font-medium" key={menu}>{menu}</li>)}
    //        </ul>

    //         {/* dropdown menu btn  */}

       

    //   </nav>
    // </>
  );
}

export default Nav;
