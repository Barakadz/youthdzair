import AddPost from "@/components/AddPost/AddPost"
import Feed from "@/components/Feed/Feed"
import LeftMenu from "@/components/leftMenu/LeftMenu"
import RightMenu from "@/components/rightMenu/RightMenu"

const Homepage = () => {
  return (
    <div className='flex gap-6 pt-6'>
      <div className="hidden xl:block w-[30%] "><LeftMenu/></div>
      <div className="w-full lg:w-[70%] xl:w-[70%]">
        <div className="flex flex-col gap-6"> 
             <AddPost/><Feed/>
        </div>
    
        </div>
    {/**  <div className="hidden lg:block w-[30%] "><RightMenu/></div>
 */}
    </div>
  )
}

export default Homepage