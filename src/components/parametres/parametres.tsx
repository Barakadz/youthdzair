"use client";

 import Image from "next/image";
import { useState } from "react";
import { MdMoreHoriz } from "react-icons/md";
import { FaRegSave } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import { GiDirectionSign } from "react-icons/gi";
import { CgCloseO } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { IoHelpCircleOutline } from "react-icons/io5";
import { MdOutlineSecurity } from "react-icons/md";
import { IoLanguage } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";


const Prametres = ( ) => {
  const [open, setOpen] = useState(false);
 
   return (
    <div className="relative">
<button  onClick={() => setOpen((prev) => !prev)}>
<IoSettingsOutline  size={25} className="mx-auto mb-1"  
      
  
      /><span className="text-sm flex flex-row items-center">Paramétres  <IoMdArrowDropdown 
      size={20} 
      className={`transition-transform duration-300 ${open && ('rotate-180')  }`} 
    />
</span></button>
      {open && (
        <div className="absolute  bottom-16  lg:top-16 lg:bottom-auto -left-56 lg:-left-32 bg-white   w-72 border border-gray-200  rounded-lg shadow-xl   flex flex-col gap-2 text-xs  z-30">
  <div className="flex items-center gap-4 p-4 ">
            <Image src="https://images.pexels.com/photos/27133048/pexels-photo-27133048/free-photo-of-boire-verre-the-fenetres.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" width={40} height={40} className="w-10 h-10 rounded-full"/>
          <div className="flex flex-col">
          <span className="font-medium text-xs">Baraka Abbes Ibrahim</span>
          <span className="text-gray-400 text-xs">Développer web et mobile at groupe des sociétés HASNAOUI</span>

          </div>
           
            </div>
<hr className="w-full h-2"/>
<span className="px-2 text-sm ">Paramétres du compte :</span>
<form >
            <button className="text-gray-500 cursor-pointer flex flex-row items-center w-full p-1 lg:p-3 font-medium text-sm gap-4  justify-start hover:text-gray-800 hover:bg-violet-200"><IoHelpCircleOutline size={22}/>
            Aide</button>
          </form>
          <form >
            <button className="text-gray-500 cursor-pointer flex flex-row items-center w-full p-1 lg:p-3 font-medium text-sm gap-4  justify-start hover:text-gray-800 hover:bg-violet-200"><IoLanguage             size={22}/>
            Langue</button>
          </form>
          <form >
            <button className="text-gray-500 cursor-pointer flex flex-row items-center w-full p-1 lg:p-3 font-medium text-sm gap-4  justify-start hover:text-gray-800 hover:bg-violet-200"><MdOutlineSecurity size={22}/>
            Confidentialité et sécurité</button>
          </form>
<hr className="w-full h-2"/>

<form >
            <button className="text-gray-500 cursor-pointer flex flex-row items-center w-full p-1 lg:p-3 font-medium text-sm gap-4  justify-start hover:text-gray-800 hover:bg-violet-200"><RiLogoutBoxRLine size={22}/>
            Déxonexion</button>
          </form>


 
 
           
        </div>
      )}
    </div>
  );
};

export default Prametres;
