import Image from "next/image";
import { MdMoreHoriz } from "react-icons/md";
import { BiLike } from "react-icons/bi";
import CommentOption from "./commentsOption";

const Comments =()=>{
    return(
    <div className="">
        {/* WRITE */}
        <div className="flex items-center gap-4">
            <Image src="https://images.pexels.com/photos/27785412/pexels-photo-27785412/free-photo-of-paysage-desert-sec-randonner.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" width={32} height={32} alt="" className="w-8 h-8 rounded-full"/>
        <div className="flex-1 flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full ">
            <input type="text" placeholder="Write a comment..." className="bg-transparent outline-none flex-1" />
            <Image src="/emoji.png" width={16} height={16} alt="" className="cursor-pointer"/>
         
        </div>
        </div>
        {/* COMMENTS */}
        <div className="">
                    {/* COMMENT*/}
                    <div className="flex gap-4 justify-between mt-6">
                        {/* AVATAR */}
                        <Image src="https://images.pexels.com/photos/27785412/pexels-photo-27785412/free-photo-of-paysage-desert-sec-randonner.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" width={40} height={40} alt="" className="w-10 h-10 rounded-full"/>

                        {/* DESC */}
                        <div className="flex flex-col gap-2 flex-1">
                            <span className="font-medium">Arif Abdeljalil</span>
                            <p>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.</p>
                            <div className="flex items-center gap-8 text-xs text-gray-500">
                                <div className="flex items-center gap-4 ">
                                    <BiLike size={17}  className="text-gray-400 hover:text-violet-600 cursor-pointer" />
                                    <span className="text-gray-300">|</span>
                                    <span className="text-gray-500">123
                                        <span className="hidden md:inline"> Likes</span>
                                    </span>
                                </div>
                                <div className="flex items-center gap-4 ">
                                   
                                         <button className=" "> Répondre</button>
                                 </div>
                            </div>
                        </div>
                        {/* ICON */}
                        <CommentOption/>

                    </div>

        </div>
    </div>
    )
}

export default Comments;