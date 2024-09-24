import Feed from "@/components/Feed/Feed";
import LeftMenu from "@/components/leftMenu/LeftMenu";
import RightMenu from "@/components/rightMenu/RightMenu";
import Image from "next/image";

const Profile=()=>{
    return(
        <>
<div className="flex gap-6 pt-6">
     
      <div className="w-full lg:w-[70%] xl:w-[60%]">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center justify-center">
            <div className="w-full h-64 relative">
              <Image
                src="/noCover.png"
                alt=""
                fill
                className="rounded-md object-cover"
              />
              <Image
                src="/noAvatar.png"
                alt=""
                width={128}
                height={128}
                className="w-32 h-32 rounded-full absolute left-0 right-0 m-auto -bottom-16 ring-4 ring-white object-cover"
              />
            </div>
            <h1 className="mt-20 mb-4 text-2xl font-medium">
            BARAKA ABBES IBRAHIM
            </h1>
            <div className="flex items-center justify-center gap-12 mb-4">
              <div className="flex flex-col items-center">
                <span className="font-medium">12</span>
                <span className="text-sm">Posts</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-medium">6</span>
                <span className="text-sm">Followers</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-medium">8</span>
                <span className="text-sm">Following</span>
              </div>
            </div>
          </div>
          <Feed  />
        </div>
      </div>
      <div className="hidden lg:block w-[40%]">
        <RightMenu user="Arif abdeljalil" />
      </div>
    </div>
            </>
    )
}

export default Profile;