import React, { useState } from 'react';
import VolunteerForm from './VolunteerForm';
import NgoForm from './NgoForm';

const onSubmitHander = () => {

}

const SignUpForm = () => {
  const [signUpAs, setSignUpAs] = useState(''); // State to track selected option

  const handleSignUpChange = (e) => {
    setSignUpAs(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className="flex flex-auto flex-col items-center">
      <h1 className='font-bold text-2xl pb-5'>Sign Up</h1>
        <div className='flex flex-row flex-auto pb-10'>
          <label className='font-semibold text-lg px-3'>Enter details as:</label>
          <select value={signUpAs} onChange={handleSignUpChange} required style={{ color: 'black'}}>
            <option value="" disabled>Select</option>
            <option value="ngo">NGO</option>
            <option value="volunteer">Volunteer</option>
          </select>
        </div>

      {
        signUpAs === 'volunteer' ? <VolunteerForm /> : <NgoForm />
      }
    </div>
  );
};

export default SignUpForm;
