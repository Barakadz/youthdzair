
"use client"
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { LuSend } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { TbFileDescription } from "react-icons/tb";
import { FaLink } from "react-icons/fa6";
import { MdOutlinePostAdd } from "react-icons/md";
import { BiSolidAddToQueue } from "react-icons/bi";
import Oportunity from "./addOportunity";
import EmojiPicker, { EmojiClickData } from 'emoji-picker-react';


const AddPost = () => {
//Emoji
const [input, setInput] = useState<string>('');
const [showPicker, setShowPicker] = useState<boolean>(false);

// Define the type of the emoji parameter as EmojiClickData
const addEmoji = (emojiData: EmojiClickData) => {
  setInput(input + emojiData.emoji); // emojiData.emoji contains the emoji character
};

    // State to control modal visibility
    const [isModalOpen, setIsModalOpen] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null); // Use the HTMLDivElement type for the modal reference

    // Function to open the modal
    const openModal = () => {
        setIsModalOpen(true);
    };

    // Function to close the modal
    const closeModal = () => {
        setIsModalOpen(false);
    };
    // Close modal if clicked outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                closeModal();
            }
        };

        // Add event listener when the modal is open
        if (isModalOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        // Clean up event listener when the modal is closed or component unmounts
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isModalOpen]);

    const fileInputRef = useRef<HTMLInputElement>(null); // Specify the type

    const handleIconClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const [toggle, setToggle] = useState(1);
    function updateToggle(id: number) {
        setToggle(id);
    }

    return (
        <div className="p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm">
            {/* Avatar */}
            <Image src="https://images.pexels.com/photos/27133048/pexels-photo-27133048/free-photo-of-boire-verre-the-fenetres.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" width={48} height={48} className="w-12 h-12 object-cover rounded-full" />
            {/*POST */}
            <div className="flex-1">
                {/* TEXT INPUT */}
                <div className="flex gap-4">

                    <textarea
                        placeholder="Qu'est-ce qui préoccupe votre esprit?"
                        className="flex-1 p-2 bg-slate-100 rounded-lg cursor-pointer"
                        onClick={() => { openModal(); updateToggle(1); }}                    ></textarea>

                    {isModalOpen && (
                        <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50 z-50 ">

                            <div
                                className="bg-white p-5 rounded-lg  w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2"
                                ref={modalRef} // Reference to the modal content
                            >
                                <div className="flex justify-end">  <IoClose
                                    size={30} onClick={closeModal}
                                    className="text-gray-500 hover:text-gray-900 cursor-pointer transition-transform duration-300 transform hover:scale-125"
                                /></div>
                                <div className="flex items-center gap-4 p-4 ">
                                    <Image src="https://images.pexels.com/photos/27133048/pexels-photo-27133048/free-photo-of-boire-verre-the-fenetres.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" width={40} height={40} className="w-12 h-12 rounded-full" />
                                    <div className="flex flex-col">
                                        <span className="font-medium text-xl">Baraka Abbes Ibrahim</span>
                                        <span className="text-gray-400 text-sm">Développer web et mobile at groupe des sociétés HASNAOUI</span>

                                    </div></div>
                                <ul className="flex flex-row space-x-4 border-b border-gray-300 mb-3">
                                    <li
                                        className={`cursor-pointer py-2  px-14 sm:px-14 md:px-16 lg:px-20 xl:px-28 2xl:px-36 text-lg transition duration-300 
                    ${toggle === 1 ? 'text-blue-600 font-semibold border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-500'}`}
                                        onClick={() => updateToggle(1)}
                                    >
                                        Post
                                    </li>
                                    <li
                                        className={`cursor-pointer py-2 px-14 sm:px-14 md:px-16 lg:px-20 xl:px-28 2xl:px-36 text-lg transition duration-300 
                    ${toggle === 2 ? 'text-blue-600 font-semibold border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-500'}`}
                                        onClick={() => updateToggle(2)}
                                    >
                                        Opportunity
                                    </li>
                                </ul>
                                <div className={toggle === 2 ? "flex flex-col" : "hidden"}>
                                            <Oportunity/> 
                                </div>
                                <div className={toggle === 1 ? "flex flex-col" : "hidden"}>
                                    <div className="flex flex-row justify-between">
                                    <span className="text-gray-500 text-xl ">De quoi souhaitez-vous discuter ? <b>*</b></span>
                                      <div className="flex flex-col  items-center">
                                      <button onClick={() => setShowPicker(!showPicker)}>
                                                <Image src="/emoji.png" width={22} height={22} alt=""/>
                                               </button>
                 {showPicker && (
                   <div>
                     <EmojiPicker onEmojiClick={addEmoji} />
                   </div>
                 )}

                                        </div>         
                                               
                                    </div>
                                
                                    <div className="relative mt-2">
                                        <TbFileDescription className="absolute left-3 top-1/3 transform -translate-y-1/2 text-gray-400" size={25} />
                                        <textarea
                                            placeholder="Votre discusion..."
                                            className="ring-1 ring-gray-300 pl-10 pr-3 py-2 rounded-md text-xl w-full h-80 resize-none transition duration-150 ease-in-out focus:ring-2 focus:ring-violet-500 focus:outline-none shadow-sm"
                                            name="message"
 value={input}
        onChange={(e) => setInput(e.target.value)}
                                        /></div>

                                    <div className="flex justify-between  items-center">
                       
                                        <FaLink
                                            size={30}
                                            className="colorIcon"
                                            onClick={handleIconClick}
                                            style={{ cursor: 'pointer' }} // Optional: change cursor on hover
                                        />
                                        <input
                                            type="file"
                                            ref={fileInputRef}
                                            style={{ display: 'none' }} // Hide the file input
                                            onChange={(e) => {
                                                // Handle file selection
                                                console.log(e.target.files);
                                            }}
                                        />      <button
                                            className="bg-violet-600 p-3 mt-2 flex flex-row justify-end align-middle gap-3 font-semibold rounded-md text-white disabled:bg-blue-300 disabled:cursor-not-allowed"
                                        > Post <LuSend size={24} color="white" />
                                        </button></div>

                                </div>
                            </div>
                        </div>
                    )}
                </div>
                {/* POST OPTIONS */}
                <div className="flex justify-evenly items-center gap-4 mt-4 text-gray-500 text-xx flex-wrap">
                    <button onClick={() => { openModal(); updateToggle(1); }} className="flex items-center gap-2 cursor-pointer px-1 sm:px-1 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
                        <MdOutlinePostAdd size={30} color="violet" />
                        <span>Post</span>
                    </button>
                    <div style={{ height: '35px', width: '1px', backgroundColor: '#bcc7cc' }} />

                    <button onClick={() => { openModal(); updateToggle(2); }} className="flex items-center gap-2 cursor-pointer px-1 sm:px-1 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
                        <BiSolidAddToQueue size={30} color="blue" />
                        Opportunity
                    </button>

                </div>
            </div>
        </div>
    )
}

export default AddPost;