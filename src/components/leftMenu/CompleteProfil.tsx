import Image from "next/image";
import Link from "next/link";
import UpdateUser from "../rightMenu/UpdateUser";

const CompleteProfile = async () => {
 

  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
       <p className="text-xs text-gray-500 text-center">
       Un profil complet offre de nombreuses opportunités,notamment de se faire remarquer et d’établir des connexions authentiques avec les autres membres de la communauté.
</p>
       <div className="flex justify-center relative">
    <Image src="/completeprofile.png" className="" width={100} height={70} alt=""/>
    <Image
          src= "https://images.pexels.com/photos/27797895/pexels-photo-27797895/free-photo-of-paysage-montagnes-nature-femme.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          width={40}
          height={40}
          className="absolute top-4 left-22 transform -translate-x-1/2 -translate-y-1/2 rounded-full object-cover w-11 h-11   right-0 m-auto -bottom-6 ring-1 ring-white z-10"
        />
    
</div>


<center>
      
      <UpdateUser user="gg"/>
</center>
    </div>
  );
};

export default CompleteProfile;
