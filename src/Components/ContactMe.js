import React from 'react';
import { GrSend } from "react-icons/gr";
import { toast,ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { AppContext } from './AppContextProvider';
function ContactMe() {
  const { contactRef,colorMode} = React.useContext(AppContext);
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch('http://localhost:3008/api/v1/sendMessage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    if (!response.ok) {
      throw new Error('Failed to send message');
      
    }
   toast("message sent successfully")
  
  } catch (error) {
    console.error(error);
    toast("server is not connected");
  }
  setFormData({
    name: '',
    email: '',
    message: ''
  });

};

  return (
    <div ref={contactRef} className='md:w-[768px] lg:w-screen'>
     {/* {window.innerWidth > 412 && (
        <img src='./contact.jpg' alt="Contact" width="400px" />
      )} */}
    <div style={colorMode} className="bg-black text-white p-8 mx-auto  w-[412px]">
      <h2 className="text-2xl font-bold mb-4 text-center font-mono text-pink-400">Leave Your message here !</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-1">Name:</label>
          <input onChange={handleChange} value={formData.name} type="text" id="name" name="name" className="w-full px-3 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:bg-gray-700" />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">Email:</label>
          <input onChange={handleChange} value={formData.email} type="email" id="email" name="email" className="w-full px-3 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:bg-gray-700" />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block mb-1">Message:</label>
          <textarea onChange={handleChange} value={formData.message}  id="message" name="message" rows="4" className="w-full px-3 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:bg-gray-700"></textarea>
        </div>
        <button type="submit" className="bg-green-500 flex  items-center gap-2 text-white px-4 py-2 rounded-lg hover:bg-green-600 focus:outline-none focus:bg-green-600"><span><GrSend/></span>Send</button>
      </form>
    </div>
    
    </div>
    
  );
}
export default ContactMe;
