import Image from "next/image";
import Link from "next/link";
import { TbSquareRoundedCheckFilled } from "react-icons/tb";
import { CgCloseO } from "react-icons/cg";
import { FaCheckCircle } from "react-icons/fa";

const FriendRequest=()=>{
    return(
        <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
        {/* TOP */}

        <div className="flex justify-between items-center font-medium">
          <span className="text-gray-500">Friend Requests</span>
          <Link href="/" className="text-violet-600 text-xs">
            See all
          </Link>
        </div>
        {/* USER */}

<div className="flex items-center justify-between">
    <div className="flex items-center gap-4">
        <Image src="https://images.pexels.com/photos/16469150/pexels-photo-16469150/free-photo-of-lumineux-leger-femme-porte.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" width={40} height={40} className="w-10 h-10 rounded-full  object-cover "/>
        <span>Boziane Abbes</span>
    </div>
                <div className="flex gap-3 justify-end">
                    <FaCheckCircle
                        size={22}
                        className="colorIcon hover:text-violet-800 cursor-pointer transition-transform duration-300 transform hover:scale-125"
                    />
                    <CgCloseO
                        size={22}
                        className="text-gray-500 hover:text-gray-900 cursor-pointer transition-transform duration-300 transform hover:scale-125"
                    />
                </div>
    </div> 
 
<div className="flex items-center justify-between">
    <div className="flex items-center gap-4">
        <Image src="https://images.pexels.com/photos/16469150/pexels-photo-16469150/free-photo-of-lumineux-leger-femme-porte.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" width={40} height={40} className="w-10 h-10 rounded-full  object-cover "/>
        <span>Boziane Abbes</span>
    </div>
                <div className="flex gap-3 justify-end">
                    <FaCheckCircle
                        size={22}
                        className="colorIcon hover:text-violet-800 cursor-pointer transition-transform duration-300 transform hover:scale-125"
                    />
                    <CgCloseO
                        size={22}
                        className="text-gray-500 hover:text-gray-900 cursor-pointer transition-transform duration-300 transform hover:scale-125"
                    />
                </div>
    </div>        
       
<div className="flex items-center justify-between">
    <div className="flex items-center gap-4">
        <Image src="https://images.pexels.com/photos/16469150/pexels-photo-16469150/free-photo-of-lumineux-leger-femme-porte.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" width={40} height={40} className="w-10 h-10 rounded-full  object-cover "/>
        <span>Boziane Abbes</span>
    </div>
                <div className="flex gap-3 justify-end">
                    <FaCheckCircle
                        size={22}
                        className="colorIcon hover:text-violet-800 cursor-pointer transition-transform duration-300 transform hover:scale-125"
                    />
                    <CgCloseO
                        size={22}
                        className="text-gray-500 hover:text-gray-900 cursor-pointer transition-transform duration-300 transform hover:scale-125"
                    />
                </div>
    </div>        
      </div>
    )
}

export default FriendRequest;