import Image from "next/image";
import Link from "next/link";
import { IoHomeOutline } from "react-icons/io5";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { IoSearch } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { RiMessage2Line } from "react-icons/ri";

import { usePathname } from "next/navigation"; // Ensure this is imported
import Prametres from "../parametres/parametres";

const Navbar = () => {
  const pathname = usePathname(); // Get the current route

    return (
      <div className="fixed   bottom-0  lg:top-0 lg:bottom-auto left-0 w-full h-20 flex items-center justify-between bg-white shadow-md z-50">
        {/* Left */}
        <div className="hidden sm:hidden md:hidden w-[40%] lg:flex xl:flex 2xl:flex flex-row justify-center items-center gap-4">
          <Link href="/">
            <Image src="/logo.png" width={100} alt="dzairyouth" height={70} />
          </Link>
          <div className="xl:flex p-2 bg-slate-100 items-center rounded-xl h-12">
            <input
              type="text"
              placeholder="Rechercher sur dzairyouth"
              className="bg-transparent outline-none transition-all duration-300 ease-in-out w-60 focus:w-72"
            />
            <IoSearch size={20} />
          </div>
        </div>
        {/* Center */}
        <div className="w-[50%] flex flex-row gap-2 lg:gap-6   mx-auto sm:mx-0 justify-center sm:justify-start  ">
          {/* Links */}
          <Link href="/" className={` hover:text-violet-600 flex flex-col items-center gap-1 ${pathname === "/" ? "colorIcon font-semibold" : ""}`}>

             <IoHomeOutline size={25} className="mx-auto" />
            <span className="text-sm   ">Accueil</span>
            
          </Link>
  
          <Link href="/mynetwork" className={`hover:text-violet-600 flex flex-col items-center gap-1 ${pathname === "/mynetwork" ? "colorIcon font-semibold" : ""}`}>
            <LiaUserFriendsSolid size={25} className="mx-auto" />
            <span className="text-sm">Friends</span>
          </Link>
          <Link href="/messaging" className={`hover:text-violet-600 flex flex-col items-center gap-1 ${pathname === "/messaging" ? "colorIcon font-semibold" : ""}`}>
            <RiMessage2Line size={25} className="mx-auto" />
            <span className="text-sm">Messagerie</span>
          </Link>
  
          <Link href="/notification" className={`hover:text-violet-600 flex flex-col items-center gap-1 ${pathname === "/notification" ? "colorIcon font-semibold" : ""}`}>
            <IoNotificationsOutline size={25} className="mx-auto" />
            <span className="text-sm">Notifications</span>
          </Link>
          <Link  href="#" className={`hover:text-violet-600 flex flex-col items-center gap-1 ${pathname === "/notification" ? "colorIcon font-semibold" : ""}`}>
            
            <Prametres/>
          </Link>
        </div>
  
        <div className="hidden sm:hidden md:hidden   lg:flex xl:flex 2xl:flex w-[20%]   flex-row gap-6">
        <Link href="/youthopportunitydz" className={`hover:text-violet-600 flex flex-row items-center gap-1 ${pathname === "/youthopportunitydz" ? "colorIcon font-semibold" : ""}`}>

             <Image src="/dzyouthmap.png" alt="" width={74} height={74}/>
            <div style={{ height: '60px', width: '1px', backgroundColor: '#bcc7cc', margin: '0 10px' }} />
            <span className="text-sm text-center">DzairYouth GPS</span>

           </Link>
        </div>
      </div>
    );
  };
  
  export default Navbar;
  