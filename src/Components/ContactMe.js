import React, { useRef } from "react";
import { GrSend } from "react-icons/gr";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ContactMe.css";
import { AppContext } from "./AppContextProvider";
import emailjs from '@emailjs/browser';



function ContactMe() {
  const form = useRef();

  const sendEmail = (e) => {
    
    e.preventDefault();

    emailjs
      .sendForm(`${process.env.REACT_APP_service_id}`, `${process.env.REACT_APP_template_id}`, form.current, {
        publicKey: `${process.env.REACT_APP_public_key}`,
      })
      .then(
        () => {
          toast.success("Message sent successfully");
        },
        (error) => {
           toast.error("Failed");
        },
      );
      form.current.reset();
  };

  const { contactRef, colorMode,darkMode } = React.useContext(AppContext);

  return (
    <div className="w-full flex flex-col justify-center items-center mt-10">
      <h1 className="font-mono font-semibold text-4xl text-[#FFBD39] mt-5 tracking-[10px] luckiest-guy-regular underline decoration-orange-500 underline-offset-8 decoration-8">
        CONTACT ME
      </h1>
      <div
        ref={contactRef}
        className="w-full max-w-6xl flex flex-col md:flex-row items-center p-4 md:p-10 justify-around"
      >
        <img
          src="./contact1.png"
          alt="Contact"
          className="hidden md:block lg:w-[650px] md:w-[300px] contact-im"
        />
        <div style={colorMode} className="bg-gray-800 text-white p-8 w-full max-w-md md:mx-4">
          <h2 className="text-2xl font-bold mb-4 text-center font-mono text-orange-400">
            Leave Your message here!
          </h2>
          <form onSubmit={sendEmail} className="flex flex-col gap-4" ref={form} >
            <div>
              <label htmlFor="name" className="block mb-1 font-bold">
              <span className={`${darkMode? "text-black": ""}`}>Name:</span> 
              </label>
              <input
                type="text"
                id="name"
                name="from_name"
                className="w-full px-3 py-2 rounded-lg bg-gray-100 text-black   focus:outline-[#FFBD39]"
                placeholder="enter your name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 font-bold">
              <span className={`${darkMode? "text-black": ""}`}>Email:</span> 
              </label>
              <input
                type="email"
                id="email"
                name="from_email"
                className="w-full px-3 py-2 rounded-lg bg-gray-100 text-black focus:outline-[#FFBD39] f"
                placeholder="enter email"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1 font-bold">
               <span className={`${darkMode? "text-black": ""}`}>Message:</span> 
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full px-3 py-2 rounded-lg bg-gray-100 text-black focus:outline-[#FFBD39]"
                placeholder="Enter Your Message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="button flex justify-center items-center   text-white py-2 px-4 rounded-full focus:outline-none z-10"
            >
              <GrSend className="inline text-xl mr-2 " />
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
