"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import UpdateButton from "./UpdateButton";
import { FaUser } from 'react-icons/fa'; // Import your desired icon
import { TbFileDescription } from "react-icons/tb";
import React from 'react';
import Select from 'react-select';
import { IoClose } from "react-icons/io5";

const companyOptions = [
  { value: 'sonatrach', label: 'Sonatrach' }, // Oil and gas company
  { value: 'sonelgaz', label: 'Sonelgaz' }, // Electricity and gas utility
  { value: 'algerie-telecom', label: 'Algérie Télécom' }, // Telecommunications
  { value: 'sider', label: 'Sider' }, // Steel production
  { value: 'enel', label: 'Enel' }, // Energy company
  { value: 'cogaz', label: 'Cogaz' }, // Gas distribution
  { value: 'sntf', label: 'SNTF' }, // National Railway Company
  { value: 'air-algerie', label: 'Air Algérie' }, // National airline
  { value: 'groupe-siderm', label: 'Groupe Siderm' }, // Steel and metal products
  { value: 'groupe-montagne', label: 'Groupe Montagne' }, // Construction and infrastructure
  { value: 'groupe-elmoudjahid', label: 'Groupe El Moudjahid' }, // Media and publishing
  { value: 'groupe-ecole-superieure', label: 'Groupe École Supérieure' }, // Education
  { value: 'groupe-batiment', label: 'Groupe Bâtiment' }, // Construction
  { value: 'groupe-papeteries', label: 'Groupe Papeteries' }, // Paper production
  { value: 'groupe-algerie', label: 'Groupe Algérie' }, // Diversified business
];

const universityOptions = [
  { value: 'usthb', label: 'University of Science and Technology Houari Boumediene (USTHB)' },
  { value: 'ustor', label: 'University of Science and Technology of Oran (USTO)' },
  { value: 'univ-alger', label: 'University of Algiers' },
  { value: 'univ-blida', label: 'University of Blida' },
  { value: 'univ-constantine', label: 'University of Constantine' },
  { value: 'univ-tlemcen', label: 'University of Tlemcen' },
  { value: 'univ-oran', label: 'University of Oran' },
  { value: 'univ-bejaia', label: 'University of Béjaïa' },
  { value: 'univ-batna', label: 'University of Batna' },
  { value: 'univ-mascara', label: 'University of Mascara' },
  { value: 'univ-tiziouzou', label: 'University of Tizi Ouzou' },
  { value: 'univ-khenchela', label: 'University of Khenchela' },
  { value: 'univ-setif', label: 'University of Sétif' },
  { value: 'univ-guelma', label: 'University of Guelma' },
  { value: 'univ-tamanrasset', label: 'University of Tamanrasset' },
];

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


import { components } from 'react-select';
 
const CustomDropdownIndicator = (props: any) => {
  return (
    <components.DropdownIndicator {...props}>
      <FaUser className="text-gray-400" />
    </components.DropdownIndicator>
  );
};

const UpdateUser = ({ user }: { user: String }) => {
  const handleChangee = (selectedOption: { value: string; label: string } | null) => {
    if (selectedOption) {
      console.log('Selected option:', selectedOption);
    }
  };
  
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [open]);
  const [text, setText] = useState('');
  const maxLength = 200; // Set your maximum character limit here


  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleBackgroundClick = () => {
    handleClose();
  };

  const handleModalClick = (e: { stopPropagation: () => void; }) => {
    e.stopPropagation(); // Prevent click event from bubbling up to the background
  };

  return (
    <div>
      <span
        className="text-blue-500 text-xs cursor-pointer"
        onClick={() => setOpen(true)}
      >
        Update
      </span>
      {open && (
        <div
          className="absolute min-h-screen top-0 left-0 bg-gray-600 bg-opacity-65 flex items-center justify-center z-50"
          onClick={handleBackgroundClick}
        > 
          <form
            className="p-12 bg-white rounded-lg shadow-md flex flex-col gap-2 w-full md:w-1/2 xl:w-1/2 relative m-8"
            onClick={handleModalClick}
          >
            <h1>Update Profile</h1>
            <div className="flex flex-wrap justify-center gap-2 xl:gap-4">
              {/* INPUT FIELDS */}
              <div className="flex flex-col  w-[45%]">
                <label className="text-xs text-gray-500 py-1">First Name:</label>
                <div className="relative">
                  <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Arif"
                    className="ring-1 ring-gray-300 pl-10 pr-3 py-3 rounded-md text-sm w-full transition duration-150 ease-in-out focus:ring-2 focus:ring-violet-600 focus:outline-none shadow-sm hover:ring-2 hover:ring-violet-300"
                    name="name"
                  />
                </div>
              </div>
              <div className="flex flex-col  w-[45%]">
                <label className="text-xs text-gray-500 py-1">Last Name :</label>
                <div className="relative">
                  <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Arif "
                    className="ring-1 ring-gray-300 pl-10 pr-3 py-3 rounded-md text-sm w-full transition duration-150 ease-in-out focus:ring-2 focus:ring-violet-600 focus:outline-none shadow-sm hover:ring-2 hover:ring-violet-300"
                    name="name"
                  /></div>
              </div>
              <div className="flex flex-col  w-[92%]">
                <label className="text-xs text-gray-500 py-1">Description Profile:</label>
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
               

              <div className="flex flex-col w-[45%]">
  <label className="text-xs text-gray-500 py-1">City:</label>
  <div className="relative">
    <Select
      options={options} // Make sure to define your city options
      onChange={handleChangee}
      placeholder="Select a city..."
      components={{ DropdownIndicator: CustomDropdownIndicator }} // Use custom component
      className="react-select-container"
      classNamePrefix="react-select"
    />
  </div>
</div>


<div className="flex flex-col w-[45%]">
  <label className="text-xs text-gray-500 py-1">School or University:</label>
  <div className="relative">
    <Select
      options={universityOptions} // Make sure to define your city options
      onChange={handleChangee}
      placeholder="Select a School or university..."
      components={{ DropdownIndicator: CustomDropdownIndicator }} // Use custom component
      className="react-select-container"
      classNamePrefix="react-select"
    />
  </div>
</div>
<div className="flex flex-col w-[45%]">
  <label className="text-xs text-gray-500 py-1">Work :</label>
  <div className="relative">
    
    <Select
      options={companyOptions} // Make sure to define your city options
      onChange={handleChangee}
      placeholder="Select a School or university..."
      components={{ DropdownIndicator: CustomDropdownIndicator }} // Use custom component
      className="react-select-container"
      classNamePrefix="react-select"
    />
  </div>
</div>
              <div className="flex flex-col  w-[45%]">
                <label className="text-xs text-gray-500 py-1">Website or Portfolio :</label>
                <div className="relative">
                  <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Arif "
                    className="ring-1 ring-gray-300 pl-10 pr-3 py-3 rounded-md text-sm w-full transition duration-150 ease-in-out focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
                    name="name"
                  /></div>
              </div>
            
               </div>
            <UpdateButton />
            <span className="text-green-500">Profile has been updated!</span>
            <span className="text-red-500">Something went wrong!</span>
            
            <IoClose
        size={30} onClick={handleClose}
        className="text-gray-500 absolute text-xl right-2 top-3  hover:text-gray-900 cursor-pointer transition-transform duration-300 transform hover:scale-125"
    />
          </form>
        </div>
      )}
    </div>
  );
};

export default UpdateUser;
