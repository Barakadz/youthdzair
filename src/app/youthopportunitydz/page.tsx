import AddPost from "@/components/AddPost/AddPost"
import Feed from "@/components/Feed/Feed"
import LeftMenu from "@/components/leftMenu/LeftMenu"
import MapDz from "@/components/mapdz/mapdz"
import RightMenu from "@/components/rightMenu/RightMenu"

const Youthopportunitydz = () => {
  return (
    <div className='flex gap-6 pt-6'>
      <div className="hidden xl:block w-[30%] "><LeftMenu type="opportunity"/></div>
      <div className="w-full lg:w-[70%] xl:w-[70%]">
        <div className="flex flex-col gap-6"> 
             <MapDz/> 
        </div>
    
        </div>
    {/**  <div className="hidden lg:block w-[30%] "><RightMenu/></div>
 */}
    </div>
  )
}

export default Youthopportunitydz