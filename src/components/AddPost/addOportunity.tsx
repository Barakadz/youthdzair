import { FaUser } from 'react-icons/fa'; // Import your desired icon
import Select from 'react-select';
import { components } from 'react-select';
import { LuFileType2 } from "react-icons/lu";
import { FaRegCalendarAlt } from "react-icons/fa";
import { useRef, useState } from 'react';
import { LuSend } from "react-icons/lu";
 import { TbFileDescription } from "react-icons/tb";
import { FaLink } from "react-icons/fa6";
import { FiMapPin } from "react-icons/fi";

const optionsTypeOpportunity = [
    { value: 'conference', label: 'Conference' },
    { value: 'training', label: 'Training' },
    { value: 'scholarship', label: 'Scholarship' },
    { value: 'competition', label: 'Competition' },
    { value: 'fellowship(undergraduate)', label: 'Fellowship(undergraduate)' },
    { value: 'fellowship(graduate)', label: 'Fellowship(graduate)' },
    { value: 'fellowship(master/post graduation)', label: 'Fellowship(master/post graduation)' },
    { value: 'fellowship(study abroad)', label: 'Fellowship(study abroad)' },  
    { value: 'job offer', label: 'Job offer' },
    { value: 'intership', label: 'Intership' },
    { value: 'volunteering', label: 'Volunteering' },
    { value: 'mentroship', label: 'Mentroship' }, 
  
  
];

const CustomDropdownIndicator = (props: any) => {
    return (
        <components.DropdownIndicator {...props}>
            <FiMapPin  className="text-gray-400" />
        </components.DropdownIndicator>
    );
};

const options = [
    { value: 'adrar', label: 'Adrar' },
    { value: 'chlef', label: 'Chlef' },
    { value: 'laghouat', label: 'Laghouat' },
    { value: 'oran', label: 'Oran' },
    { value: 'batna', label: 'Batna' },
    { value: 'biskra', label: 'Biskra' },
    { value: 'bejaia', label: 'Bejaia' },
    { value: 'brelk', label: 'Bordj Bou Arréridj' },
    { value: 'tizi-ouzou', label: 'Tizi Ouzou' },
    { value: 'tlemcen', label: 'Tlemcen' },
    { value: 'khenchela', label: 'Khenchela' },
    { value: 'mila', label: 'Mila' },
    { value: 'mascara', label: 'Mascara' },
    { value: 'ain-temouchent', label: 'Ain Temouchent' },
    { value: 'relizane', label: 'Relizane' },
    { value: 'el-oued', label: 'El Oued' },
    { value: 'ouargla', label: 'Ouargla' },
    { value: 'souk-ahras', label: 'Souk Ahras' },
    { value: 'sidi-bel-abbes', label: 'Sidi Bel Abbès' },
    { value: 'tindouf', label: 'Tindouf' },
    { value: 'tamanrasset', label: 'Tamanrasset' },
    { value: 'el-tarf', label: 'El Tarf' },
    { value: 'tipaza', label: 'Tipaza' },
    { value: 'blida', label: 'Blida' },
    { value: 'bjaia', label: 'Béjaïa' },
    { value: 'skikda', label: 'Skikda' },
    { value: 'jijel', label: 'Jijel' },
    { value: 'chlef', label: 'Chlef' },
    { value: 'ghardaia', label: 'Ghardaia' },
    { value: 'ain-defla', label: 'Ain Defla' },
    { value: 'kasserine', label: 'Kasserine' },
    { value: 'setif', label: 'Setif' },
    { value: 'tizi-ouzou', label: 'Tizi Ouzou' },
    { value: 'annaba', label: 'Annaba' },
    { value: 'constantine', label: 'Constantine' },
    { value: 'mascara', label: 'Mascara' },
    { value: 'oudjda', label: 'Oujda' },
    { value: 'el-azzaba', label: 'El Azzaba' },
    { value: 'tlemcen', label: 'Tlemcen' },
    { value: 'guelma', label: 'Guelma' },
    { value: 'ain-sefra', label: 'Ain Sefra' },
    { value: 'ain-maslah', label: 'Ain Maslah' },
    { value: 'souk-ahras', label: 'Souk Ahras' },
    { value: 'bechar', label: 'Bechar' },
    { value: 'el-bayadh', label: 'El Bayadh' },
    { value: 'ain-salah', label: 'Ain Salah' },
    { value: 'naama', label: 'Naama' },
    { value: 'sidi-bel-abbes', label: 'Sidi Bel Abbès' },
    { value: 'ain-temouchent', label: 'Ain Temouchent' },
    { value: 'el-oued', label: 'El Oued' },
    { value: 'ouargla', label: 'Ouargla' },
    { value: 'khenchela', label: 'Khenchela' },
    { value: 'sidi-ali', label: 'Sidi Ali' },
    { value: 'tindouf', label: 'Tindouf' },
    { value: 'tamanrasset', label: 'Tamanrasset' },
    { value: 'el-tarf', label: 'El Tarf' },
    { value: 'tipaza', label: 'Tipaza' },
    { value: 'blida', label: 'Blida' },
    { value: 'biskra', label: 'Biskra' },
    { value: 'souk-ahras', label: 'Souk Ahras' },
    { value: 'laghouat', label: 'Laghouat' },
    { value: 'oran', label: 'Oran' },
];

const CustomDropdownIndicatorr = (props: any) => {
    return (
        <components.DropdownIndicator {...props}>
            <LuFileType2  className="text-gray-400" />
        </components.DropdownIndicator>
    );
};
const Oportunity=()=>{
    const [text, setText] = useState('');
    const maxLength = 200; // Set your maximum character limit here


    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value);
    };

    const fileInputRef = useRef<HTMLInputElement>(null); // Specify the type

    const handleIconClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleChangee = (selectedOption: { value: string; label: string } | null) => {
        if (selectedOption) {
            console.log('Selected option:', selectedOption);
        }
    };
    return(
        <>
            <div className="flex flex-row gap-4">
                                        <div className="flex flex-col  w-[45%]">
                                    
                                            <label className="text-xs text-gray-500 py-1">Name of opportunity:</label>
                                            <div className="relative">
                                                <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                                <input
                                                    type="text"
                                                    placeholder="Arif"
                                                    className="ring-1 ring-gray-300 pl-10 pr-3 py-2 rounded-md text-sm w-full transition duration-150 ease-in-out focus:ring-2 focus:ring-violet-600 focus:outline-none shadow-sm hover:ring-2 hover:ring-violet-300"
                                                    name="name"
                                                />
                                            </div>
                                        </div>
                                    <div className="flex flex-col w-[45%]">
                                    <label className="text-xs text-gray-500 py-1">Type of opportunity :</label>
                                        <div className="relative">
                                            <Select
                                                options={optionsTypeOpportunity} // Make sure to define your city options
                                                 placeholder="Select a type..."
                                                components={{ DropdownIndicator: CustomDropdownIndicatorr }} // Use custom component
                                                className="react-select-container   "
                                                 classNamePrefix="react-select"
                                                 isMulti
                                            />
                                        </div>
                                        
                                    </div>
                                    </div>

                                

                                <div className="flex flex-col  w-[92%]">
                                    <label className="text-xs text-gray-500 py-1">Description opportunity:</label>
                                    <div className="relative">
                                        <TbFileDescription size={22} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                        <textarea
                                            placeholder="Description..."
                                            className="ring-1 ring-gray-300 pl-10 pr-3 py-2 rounded-md text-sm w-full h-18 resize-none transition duration-150 ease-in-out focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
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
                                <div className="flex flex-row gap-4">
                                     <div className="flex flex-col  w-[45%]">
                                            <label className="text-xs text-gray-500 py-1">Date de début:</label>
                                            <div className="relative">
                                                <FaRegCalendarAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                                <input
                                                    type="date"
                                                    placeholder="Arif"
                                                    className="ring-1 ring-gray-300 pl-10 pr-3 py-2 rounded-md text-sm w-full transition duration-150 ease-in-out focus:ring-2 focus:ring-violet-600 focus:outline-none shadow-sm hover:ring-2 hover:ring-violet-300"
                                                    name="name"
                                                />
                                            </div>
                                    </div>
                                    <div className="flex flex-col  w-[45%]">
                                            <label className="text-xs text-gray-500 py-1">Date de fin:</label>
                                            <div className="relative">
                                                <FaRegCalendarAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                                <input
                                                    type="date"
                                                    placeholder="Arif"
                                                    className="ring-1 ring-gray-300 pl-10 pr-3 py-2 rounded-md text-sm w-full transition duration-150 ease-in-out focus:ring-2 focus:ring-violet-600 focus:outline-none shadow-sm hover:ring-2 hover:ring-violet-300"
                                                    name="name"
                                                />
                                            </div>
                                    </div>
                                </div>
                                <div className="flex flex-col w-[92%]">
                                       
                                <label className="text-xs text-gray-500 py-1">Place :</label>
                                        <div className="relative">
                                            <Select
                                                options={options} // Make sure to define your city options
                                                onChange={handleChangee}
                                                placeholder="Select a city..."
                                                components={{ DropdownIndicator: CustomDropdownIndicator }} // Use custom component
                                                className="react-select-container   "
                                                 classNamePrefix="react-select"
                                            />
                                        </div>




                                    </div>
                                    <br/>

                                <hr className="h-3 w-full text-gray-500"/>
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

        </>
    )
}

export default Oportunity;