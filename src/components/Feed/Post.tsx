import Image from "next/image";
import { BiLike } from "react-icons/bi";
import { FaRegCommentDots } from "react-icons/fa6";
import { IoMdRepeat } from "react-icons/io";
import Comments from "../comments/comments";
import PostInfo from "./PostInfo";

const Post=()=>{
    return(
      
      <div className="flex flex-col gap-4">
        {/* USER  */}
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
            <Image src="https://images.pexels.com/photos/27133048/pexels-photo-27133048/free-photo-of-boire-verre-the-fenetres.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" width={40} height={40} className="w-10 h-10 rounded-full"/>
          <div className="flex flex-col">
          <span className="font-medium">Baraka Abbes Ibrahim</span>
          <span className="text-gray-400 text-xs">6 h</span>

          </div>
           
            </div>
            <PostInfo/>
        </div>
        {/* DESC */}
        <div className="flex flex-col gap-4">
            <p className="text-sm">Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.</p>

            <div className="w-full min-h-96 relative">
                <Image src="https://images.pexels.com/photos/27785412/pexels-photo-27785412/free-photo-of-paysage-desert-sec-randonner.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" fill className="object-cover rounded-md" alt=""/>
            </div>
        </div>
        {/* INTERACTION */}
        <div className="flex flex-wrap items-center justify-between text-sm ">
            <div className="flex gap-8">
                <div className="flex items-center gap-4 bg-slate-100 p-2 rounded-xl">
                    <BiLike size={22}  className="colorIcon" />
                    <span className="text-gray-300">|</span>
                    <span className="text-gray-500">123
                        <span className="hidden md:inline"> Likes</span>

                    </span>

                </div>
                <div className="flex items-center gap-4 bg-slate-100 p-2 rounded-xl">
                    <FaRegCommentDots size={22}  className="colorIcon"/>
                    <span className="text-gray-300">|</span>
                    <span className="text-gray-500">123
                        <span className="hidden md:inline"> Comments</span>

                    </span>

                </div>
              
            </div>
            <div className="">
              
                <div className="flex flex-row items-center gap-4 bg-slate-100 p-2 rounded-xl">
                <IoMdRepeat  size={22}  className="colorIcon"/>
                <span className="text-gray-300">|</span>

                <span className="text-gray-500"> Repuplier
 
                    </span>

                </div>
            </div>
        </div>
        <Comments/>
      </div>
    )
}

export default Post;