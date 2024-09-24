 
 import Link from "next/link";
import { LuMapPin } from "react-icons/lu";
import { FaGraduationCap } from "react-icons/fa6";
import { MdWork } from "react-icons/md";
import { FaLink } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import UpdateUser from "./UpdateUser";

 
const UserInfoCard = async ({ user }: { user: String }) => {
 
 
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* TOP */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">User Information</span>
       
        <UpdateUser user={user}/>

        
      </div>
      {/* BOTTOM */}
      <div className="flex flex-col gap-4 text-gray-500">
        <div className="flex items-center gap-2">
          <span className="text-xl text-black">
          Arif Abdeljalil
          </span>
          <span className="text-sm">@arif_abdeljalil</span>
        </div>
        <p>Un pionnier des programmes d'engagement des jeunes</p> 
       
          <div className="flex items-center gap-2">
           <LuMapPin size={22}   className="colorIcon"/>
            <span>
              Living in <b>Sidi Bel Abbes </b>
            </span>
          </div>
       
       
          <div className="flex items-center gap-2">
            <FaGraduationCap size={22}   className="colorIcon"/>
          <span>
              Went to <b>Université Djilali liabes</b>
            </span>
          </div>
       
      
          <div className="flex items-center gap-2">
            <MdWork size={22}   className="colorIcon"/>
             <span>
              Works at <b>Groupe des sociétés HASNAOUI</b>
            </span>
          </div>
      
        <div className="flex items-center justify-between">
         
            <div className="flex gap-1 items-center">
             <FaLink size={22}   className="colorIcon"/>

              <Link href="" className="text-blue-500 font-medium">
                arifabdeljalil.com
              </Link>
            </div>
         
          <div className="flex gap-1 items-center">
           <FaCalendarAlt size={22}   className="colorIcon"/>

             <span>Joined 21/09/2024</span>
          </div>
        </div>
      
      
      </div>
    </div>
  );
};

export default UserInfoCard;
