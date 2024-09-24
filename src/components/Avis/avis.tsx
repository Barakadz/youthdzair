import { FaHandsClapping } from "react-icons/fa6";
import { useState } from "react";
import { TbFileDescription } from "react-icons/tb";
import { FaRegStar } from "react-icons/fa";


const Avis=()=>{
      // State to manage modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to toggle modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const [text, setText] = useState('');
  const maxLength = 200; // Set your maximum character limit here


  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

 // State to keep track of the hovered star index
 const [hoveredStar, setHoveredStar] = useState<number | null>(null);

 // Function to handle mouse enter event
 const handleMouseEnter = (index: number) => {
   setHoveredStar(index);
 };

 // Function to handle mouse leave event
 const handleMouseLeave = () => {
   setHoveredStar(null);
 };

 // Function to determine if a star should have a red background
 const getStarClass = (index: number) => {
   if (hoveredStar !== null && hoveredStar >= 2 && index <= 2) {
     return 'text-red-500';
   }
   return '';
 };
    return(
        <>
          <button         onClick={toggleModal}

className="fixed bottom-80  -rotate-90 -left-20 bg-white text-gray-400 font-semibold py-2 lg:py-4  px-4   rounded-bl-3xl rounded-br-3xl shadow-lg hover:bg-gray-100 hover:text-gray-800 transition duration-300 flex flex-row z-50"
>
Partager votre avis <FaHandsClapping size={22} color="violet" />

</button>
{/* Modal */}
{isModalOpen && (
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
          <h2 className="text-2xl font-bold mb-4">Je donne mon avis            </h2>
          <div className="flex">
          <div className="flex flex-col  w-full">
              <p className="text-sm mb-1 text-gray-700 py-1">Partage ton avis avec nous :<b className="text-gray-400">*</b></p>
              <div className="relative">
                <TbFileDescription className="absolute left-3 top-1/3 transform -translate-y-1/2 text-gray-400" size={25} />
                <textarea
      placeholder="Votre avis..."
      className="ring-1 ring-gray-300 pl-10 pr-3 py-2 rounded-md text-sm w-full h-24 resize-none transition duration-150 ease-in-out focus:ring-2 focus:ring-violet-500 focus:outline-none shadow-sm"
      name="message"
      value={text}
      onChange={handleChange}
      maxLength={maxLength} // Set the maximum length
    />
    <div className="text-right text-xs text-gray-500 mt-1"> 
      {`${text.length}/${maxLength}`} {/* Displaying current count */}
    </div>
              </div>
            </div>
          </div>
          <p className="mb-2">Je note mon expérience :<b className="text-gray-400">*</b>            </p>
          <div className="flex flex-row">
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          className={`p-2 ${getStarClass(index)}`} // Apply dynamic background class
        >
          <FaRegStar size={40} />
        </div>
      ))}
    </div>
          <center><button
            onClick={toggleModal}
            className="mt-4 bg-violet-500 text-white px-4 py-2 rounded hover:bg-violet-600"
          >
            Fermer
          </button></center> 
        </div>
      </div>
    )}
        </>
    );
}

export default Avis;