import Ad from "./Ad";
import Birthdays from "./Birthdays";
import FriendRequest from "./FriendRequest";
import { Suspense } from "react";
import UserInfoCard from "./UserInfoCard";
import UserMediaCard from "./UserMediaCard";

const RightMenu=({user}:{user?:string})=>{
    return(
       
       <div className="flex flex-col gap-6">
        {user ? (
        <>
        {//suspence to make loading
        }
          <Suspense fallback="loading...">
            <UserInfoCard user={user} />
          </Suspense>
          <Suspense fallback="loading...">
            <UserMediaCard user={user}/>
           </Suspense>
        </>
      ) : null}
        {/** <FriendRequest/> */}
         <Birthdays/>
         <Ad/>
       </div>
    )
}

export default RightMenu;