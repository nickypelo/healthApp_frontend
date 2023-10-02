import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import AuthorisedProfile from '../components/AuthorisedProfile';
import StandardProfile from '../components/StandardProfile';

const Profile = () => {

  const URL = '';

  // useEffect(()=>{
  //   axios
  //   .get(URL)
  //   .then(response=>{
  //     if(response.status === 200){
  //       console.log('nah fam');
  //       // setBeforeImage(response.image1)
  //          setAfterImage(response.image2)
  //     }
  //     else{
  //       console.log('Haibo mjita')
  //     }            <button onClick={showBtn} className="border-2 absolute bottom-0 bg-black">john</button>

  //   })

  // },[])

  return (
        <main>
          <Header heading='My Profile'/>

          {/* If User Has Logged In */}
          <section>
            <AuthorisedProfile />
            <StandardProfile />
          </section>
        </main>
  
  )
}

export default Profile
