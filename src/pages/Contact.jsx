import React, { useState } from 'react';
import Images from '../constant/image';

export default function ContactPage() {
  const [inputValues, setInputValues] = useState({
    userName: '',
    userEmail: '',
    userPhone: '',
    userMessage: ''
  });

  const onFieldChange = (e) => {
    const { name, value } = e.target;
    setInputValues(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', inputValues);
    setInputValues({
      userName: '',
      userEmail: '',
      userPhone: '',
      userMessage: ''
    });
  };

  return (
    <div className="bg-white min-h-screen">
     
      <div className="relative h-[300px] bg-black mb-20">
        <div className="absolute inset-0 flex justify-center items-center">
          <h1 className="text-white text-5xl font-bold">Contact</h1>
        </div>
      </div>


      <div className="flex flex-col lg:flex-row min-h-[500px]">
  
        <div className="w-full lg:w-1/2 lg:pl-[88px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6650.837419344313!2d-7.619160707731397!3d33.59256003120042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cdcf42f6c9c9%3A0x78a67edb9985a15c!2sCasablanca%20City%20Center!5e0!3m2!1sen!2sma!4v1751478009999!5m2!1sen!2sma"
            className="w-full h-[500px]"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

       
        <div className="w-full lg:w-1/2 bg-gray-50 px-6 py-10 lg:px-12 flex items-center">
          <div className="w-full max-w-md mx-auto">
            <h2 className="text-2xl font-light text-gray-800 mb-8">Send us your message</h2>
            <form onSubmit={onFormSubmit} className="space-y-6">
              <input
                type="text"
                name="userName"
                placeholder="Name"
                value={inputValues.userName}
                onChange={onFieldChange}
                className="w-full px-4 py-3 border border-gray-300 rounded bg-transparent focus:outline-none focus:border-gray-600"
              />
              <input
                type="email"
                name="userEmail"
                placeholder="Email"
                value={inputValues.userEmail}
                onChange={onFieldChange}
                className="w-full px-4 py-3 border border-gray-300 rounded bg-transparent focus:outline-none focus:border-gray-600"
              />
              <input
                type="tel"
                name="userPhone"
                placeholder="Phone"
                value={inputValues.userPhone}
                onChange={onFieldChange}
                className="w-full px-4 py-3 border border-gray-300 rounded bg-transparent focus:outline-none focus:border-gray-600"
              />
              <textarea
                name="userMessage"
                placeholder="Message"
                rows={4}
                value={inputValues.userMessage}
                onChange={onFieldChange}
                className="w-full px-4 py-3 border border-gray-300 rounded bg-transparent focus:outline-none focus:border-gray-600 resize-none"
              ></textarea>
              <button
                type="submit"
                className="bg-gray-900 text-white py-3 px-8 rounded-full uppercase font-medium tracking-wide hover:bg-gray-800 transition-colors duration-200"
              >
                SEND
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
