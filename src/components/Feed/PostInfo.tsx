"use client";

 import Image from "next/image";
import { useState } from "react";
import { MdMoreHoriz } from "react-icons/md";
import { BiBookmarkAlt } from "react-icons/bi";
import { FaLink } from "react-icons/fa6";
import { GiDirectionSign } from "react-icons/gi";
import { CgCloseO } from "react-icons/cg";

const PostInfo = ( ) => {
  const [open, setOpen] = useState(false);

   return (
    <div className="relative">
      <MdMoreHoriz size={25} className="text-gray-400 hover:text-violet-600 cursor-pointer"

        onClick={() => setOpen((prev) => !prev)}
  
      />
      {open && (
        <div className="absolute top-6 right-0 bg-white   w-72 border border-gray-200  rounded-lg shadow-xl   flex flex-col gap-2 text-xs  z-30">
 <form >
            <button className="text-gray-500 cursor-pointer flex flex-row items-center w-full p-1 lg:p-3 font-medium text-sm gap-4  justify-start hover:text-gray-800 hover:bg-violet-200"><BiBookmarkAlt size={22}/>
            Enregistrer</button>
          </form>
          <form >
            <button className="text-gray-500 cursor-pointer flex flex-row items-center w-full p-1 lg:p-3 font-medium text-sm gap-4  justify-start hover:text-gray-800 hover:bg-violet-200"><CgCloseO size={22}/>
            Ne plus suivre Baraka abbes..</button>
          </form>  
          <form >
            <button className="text-gray-500 cursor-pointer flex flex-row items-center w-full p-1 lg:p-3 font-medium text-sm gap-4  justify-start hover:text-gray-800 hover:bg-violet-200"><FaLink size={22}/>
            Copier le lien vers le post</button>
          </form> 
          <form >
            <button className="text-gray-500 cursor-pointer flex flex-row items-center w-full p-1 lg:p-3 font-medium text-sm gap-4  justify-start hover:text-gray-800 hover:bg-violet-200"><GiDirectionSign size={22}/>
            Signaler le post</button>
          </form> 
       
           
        </div>
      )}
    </div>
  );
};

export default PostInfo;
