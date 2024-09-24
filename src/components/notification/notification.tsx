import Image from "next/image";
import Link from "next/link";
 import { CgCloseO } from "react-icons/cg";
import { FaCheckCircle } from "react-icons/fa";
import { CiCircleMore } from "react-icons/ci";

const Notifications=()=>{
    return(<>
        <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
        {/* TOP */}
        <div className="flex justify-between items-center font-medium">
          <span className="text-gray-500">Choisissez un type parmi les options disponibles :</span>
         
        </div>
        <div className="flex flex-row flex-wrap gap-4">
         <button className="bg-violet-500 hover:bg-violet-500  font-semibold text-white py-2 px-4 border border-violet-500 hover:border-transparent rounded">
  Toutes
</button>    
<button className="bg-transparent hover:bg-violet-500 text-violet-700 font-semibold hover:text-white py-2 px-4 border border-violet-500 hover:border-transparent rounded">
Opportunité 
</button> 
<button className="bg-transparent hover:bg-violet-500 text-violet-700 font-semibold hover:text-white py-2 px-4 border border-violet-500 hover:border-transparent rounded">
  Evénements
</button>   
<button className="bg-transparent hover:bg-violet-500 text-violet-700 font-semibold hover:text-white py-2 px-4 border border-violet-500 hover:border-transparent rounded">
  Suivi
</button>  
<button className="bg-transparent hover:bg-violet-500 text-violet-700 font-semibold hover:text-white py-2 px-4 border border-violet-500 hover:border-transparent rounded">
Commentaire 
</button>  
<button className="bg-transparent hover:bg-violet-500 text-violet-700 font-semibold hover:text-white py-2 px-4 border border-violet-500 hover:border-transparent rounded">
Réaction 
</button>  
  
<button className="bg-transparent hover:bg-violet-500 text-violet-700 font-semibold hover:text-white py-2 px-4 border border-violet-500 hover:border-transparent rounded">
  Mention
</button>   
        </div>
       
        </div>

        <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
        {/* TOP */}
        <div className="flex justify-between items-center font-medium">
          <span className="text-gray-500">Notifications :</span>
          
        </div>
        {/* USER */}

            <div className="flex flex-row gap-4 border border-gray-100  bg-violet-100 hover:bg-violet-200 cursor-pointer rounded-lg p-4 shadow-lg">
                <Image
                    src="https://images.pexels.com/photos/16469150/pexels-photo-16469150/free-photo-of-lumineux-leger-femme-porte.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt=""
                    width={60}
                    height={60}
                    className="w-16 h-16 rounded-full object-cover"
                />
                <span>
                    Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500
                </span>
                <div className="flex flex-col gap-1 justify-between">
                    <CiCircleMore
                        size={25}
                        className="cursor-pointer text-gray-400 hover:text-violet-600"
                    />
                    <span className="text-gray-400">3 j</span>

                </div>
            </div>

            <div className="flex flex-row gap-4 border border-gray-100  bg-violet-100 hover:bg-violet-200 cursor-pointer rounded-lg p-4 shadow-lg">
                <Image
                    src="https://images.pexels.com/photos/16469150/pexels-photo-16469150/free-photo-of-lumineux-leger-femme-porte.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt=""
                    width={60}
                    height={60}
                    className="w-16 h-16 rounded-full object-cover"
                />
                <span>
                    Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500
                </span>
                <div className="flex flex-col gap-1 justify-between">
                    <CiCircleMore
                        size={25}
                        className="cursor-pointer text-gray-400 hover:text-violet-600"
                    />
                    <span className="text-gray-400">3 j</span>

                </div>
            </div>
            <div className="flex flex-row gap-4 border border-gray-300  bg-gray-50 hover:bg-violet-200 cursor-pointer rounded-lg p-4 shadow-lg">
                <Image
                    src="https://images.pexels.com/photos/16469150/pexels-photo-16469150/free-photo-of-lumineux-leger-femme-porte.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt=""
                    width={60}
                    height={60}
                    className="w-16 h-16 rounded-full object-cover"
                />
                <span>
                    Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500
                </span>
                <div className="flex flex-col gap-1 justify-between">
                    <CiCircleMore
                        size={25}
                        className="cursor-pointer text-gray-400 hover:text-violet-600"
                    />
                    <span className="text-gray-400">3 j</span>

                </div>
            </div>
            <div className="flex flex-row gap-4 border border-gray-100  bg-violet-100 hover:bg-violet-200 cursor-pointer rounded-lg p-4 shadow-lg">
                <Image
                    src="https://images.pexels.com/photos/16469150/pexels-photo-16469150/free-photo-of-lumineux-leger-femme-porte.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt=""
                    width={60}
                    height={60}
                    className="w-16 h-16 rounded-full object-cover"
                />
                <span>
                    Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500
                </span>
                <div className="flex flex-col gap-1 justify-between">
                    <CiCircleMore
                        size={25}
                        className="cursor-pointer text-gray-400 hover:text-violet-600 " aria-label="More options" // For screen readers
                        title="More options" // Tooltip on hover
                    />
                    <span className="text-gray-400">3 j</span>

                </div>
            </div>
            <div className="flex flex-row gap-4 border border-gray-300  bg-gray-50 hover:bg-violet-100 cursor-pointer rounded-lg p-4 shadow-lg">
                <Image
                    src="https://images.pexels.com/photos/16469150/pexels-photo-16469150/free-photo-of-lumineux-leger-femme-porte.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt=""
                    width={60}
                    height={60}
                    className="w-16 h-16 rounded-full object-cover"
                />
                <span>
                    Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500
                </span>
                <div className="flex flex-col gap-1 justify-between">
                    <CiCircleMore
                        size={25}
                        className="cursor-pointer text-gray-400 hover:text-violet-600"
                    />
                    <span className="text-gray-400">3 j</span>

                </div>
            </div>
            <div className="flex flex-row gap-4 border border-gray-300  bg-gray-50 hover:bg-violet-100 cursor-pointer rounded-lg p-4 shadow-lg">
                <Image
                    src="https://images.pexels.com/photos/16469150/pexels-photo-16469150/free-photo-of-lumineux-leger-femme-porte.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt=""
                    width={60}
                    height={60}
                    className="w-16 h-16 rounded-full object-cover"
                />
                <span>
                    Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500
                </span>
                <div className="flex flex-col gap-1 justify-between">
                    <CiCircleMore
                        size={25}
                        className="cursor-pointer text-gray-400 hover:text-violet-600"
                    />
                    <span className="text-gray-400">3 j</span>

                </div>
            </div>
            <div className="flex flex-row gap-4 border border-gray-300  bg-gray-50 hover:bg-violet-100 cursor-pointer rounded-lg p-4 shadow-lg">
                <Image
                    src="https://images.pexels.com/photos/16469150/pexels-photo-16469150/free-photo-of-lumineux-leger-femme-porte.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt=""
                    width={60}
                    height={60}
                    className="w-16 h-16 rounded-full object-cover"
                />
                <span>
                    Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500
                </span>
                <div className="flex flex-col gap-1 justify-between">
                    <CiCircleMore
                        size={25}
                        className="cursor-pointer text-gray-400 hover:text-violet-600"
                    />
                    <span className="text-gray-400">3 j</span>

                </div>
            </div>
  
      </div></>
    )
}

export default Notifications;