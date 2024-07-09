import React from 'react';
import { GiSelfLove } from "react-icons/gi";

function Footer() {
  const year=new Date().getFullYear();
  return (
    <footer  className="bg-gray-900 flex justify-center items-center gap-3 text-white text-center py-4 w-screen md:w-screen lg:w-screen">
      <p className='flex gap-2'>&copy; {year} SK Mishra. 
      <GiSelfLove className='bg-red-400 text-red-800 rounded-xl p-1' size={30}/>Made with Love. </p>
      <GiSelfLove className='bg-red-400 text-red-800 rounded-xl p-1' size={30}/>
    </footer>
  );
}

export default Footer;
