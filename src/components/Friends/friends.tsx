import Image from "next/image";
import Link from "next/link";
import { TbSquareRoundedCheckFilled } from "react-icons/tb";
import { CgCloseO } from "react-icons/cg";
import { FaCheckCircle } from "react-icons/fa";
import ProfileCard from "../leftMenu/ProfileCard";
import CardFriends from "../cardFriends/cardFriend";

const Friends=()=>{
    return(
        <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
        {/* TOP */}
        <div className="flex justify-between items-center font-medium">
          <span className="text-gray-500">Personnes à <b className="text-sm">Sidi Bel Abbes</b>  que vous pourriez connaître</span>
          <Link href="/" className="text-violet-600 text-xs">
            Voir tout
          </Link>
        </div>
        {/* USER */}
        <div className="flex flex-wrap">
  <div className="w-full md:w-1/2 lg:w-1/3 p-2  "><CardFriends/></div>
  <div className="w-full md:w-1/2 lg:w-1/3 p-2 "><CardFriends/></div>
  <div className="w-full md:w-1/2 lg:w-1/3 p-2 "><CardFriends/></div>
  <div className="w-full md:w-1/2 lg:w-1/3 p-2 "><CardFriends/></div>
  <div className="w-full md:w-1/2 lg:w-1/3 p-2 "><CardFriends/></div>
  <div className="w-full md:w-1/2 lg:w-1/3 p-2 "><CardFriends/></div>
</div>

 
      </div>
    )
}

export default Friends;