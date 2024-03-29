import React, { useState } from 'react';
import { AWS_URL } from '../const';
import axios from 'axios';

const initialForm = {
  email: '',
  name: '',
  fieldOfInterest: '',
  volunteerDays: '',
  phoneNumber: '',
  address: '',
  pinCode: '',
  description: '',
};

const NgoForm = () => {
  // State to store form data
  const [formData, setFormData] = useState(initialForm);

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your logic for form submission (e.g., API call, state update)
    console.log('Form Data:', formData);
    const volPostEndpoint = AWS_URL + "/add/ngo";
    try {
        const response = await axios.post(volPostEndpoint, JSON.stringify(formData), {
            headers: {
              'Content-Type': 'application/json',
            },
          });
          setFormData(initialForm);
    }
    catch (err) {
        console.log(err);
    }
  };

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <h2 className='font-bold mb-1 md:mb-0 pr-4 py-10'>Enter NGO Information</h2>
      <form onSubmit={handleSubmit} className='w-full max-w-sm'>
        <div className='md:flex md:items-center mb-6'>
          <div className='md:w-1/3'>
            {/*label*/}
            <label className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'>Email:</label>
          </div>
          
          <div className='md:w-2/3'>
            {/*input*/}
            <input
            className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name'
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          </div>
          
        </div>
        <div className='md:flex md:items-center mb-6'>
          <div className='md:w-1/3'>
            {/*label*/}
            <label className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'>Name:</label>
          </div>
          
          <div className='md:w-2/3'>
            {/*input*/}
            <input
            className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name'
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          </div>
          
        </div>
        <div className='md:flex md:items-center mb-6'>
          <div className='md:w-1/3'>
            {/*label*/}
            <label className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'>Field of Work:</label>
          </div>
          
          <div className='md:w-2/3'>
            {/*input*/}
            <input
            className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name'
            type="text"
            name="fieldOfInterest"
            value={formData.fieldOfInterest}
            onChange={handleChange}
          />
          </div>
          
        </div>
        <div className='md:flex md:items-center mb-6'>
          <div className='md:w-1/3'>
            {/*label*/}
            <label className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'>Volunteer Days:</label>
          </div>
          
          <div className='md:w-2/3'>
            {/*input*/}
            <input
            className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name'
            type="text"
            name="volunteerDays"
            value={formData.volunteerDays}
            onChange={handleChange}
          />
          </div>
          
        </div>
        <div className='md:flex md:items-center mb-6'>
          <div className='md:w-1/3'>
            {/*label*/}
            <label className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'>Phone Num:</label>
          </div>
          
          <div className='md:w-2/3'>
            {/*input*/}
            <input
            className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name'
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          </div>
          
        </div>
        <div className='md:flex md:items-center mb-6'>
          <div className='md:w-1/3'>
            {/*label*/}
            <label className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'>Address:</label>
          </div>
          
          <div className='md:w-2/3'>
            {/*input*/}
            <input
            className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name'
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
          </div>
          
        </div>
        <div className='md:flex md:items-center mb-6'>
          <div className='md:w-1/3'>
            {/*label*/}
            <label className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'>PIN Code:</label>
          </div>
          
          <div className='md:w-2/3'>
            {/*input*/}
            <input
            className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name'
            type="text"
            name="pinCode"
            value={formData.pinCode}
            onChange={handleChange}
          />
          </div>
          
        </div>
        <div className='md:flex md:items-center mb-6'>
          <div className='md:w-1/3'>
            {/*label*/}
            <label className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4'>Description:</label>
          </div>
          
          <div className='md:w-2/3'>
            {/*input*/}
            <textarea
            className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name'
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
          </div>
        </div>
        <div className='md:flex md:items-center'>
        <div class="md:w-1/3"></div>
          <div class="md:w-2/3">
          <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">Submit</button>
          </div>
        </div>
        
      </form>
    </div>
  );
};

export default NgoForm;
