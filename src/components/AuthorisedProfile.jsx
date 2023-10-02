import React, { useState } from 'react';
import profileIcon from '../../public/profile-1341-svgrepo-com.svg';
import { Link } from 'react-router-dom';
import ProfilePicture from './profile/ProfilePicture';


const AuthorisedProfile = () => {

  const [display, setDisplay] = useState(false); //for displaying profile picture option
  const [profile, setProfile] = useState(profileIcon)

  //Load a profile picture uploader
  const handleDisplay = () =>{
    setDisplay(!display)
  }

  
  return (
    <>
        <figure className="mx-auto max-w-xs text-center">
            <img className='block w-24 xs:w-56  mx-auto border-2 my-4 p-4' src={profile} width='96' alt="" />
            <figcaption className=''>username</figcaption>
        </figure>

        <h2 className='text-xl text-center mx-4 bg-slate-900 text-white'>Profile Details</h2>
          <article className='mx-4'>
            <Link to=''><p className='my-2 border-b-2 py-2 pl-2'>Redeem Tokens   ***</p></Link>
            <Link to='/progress/before&after'><p className='my-2 border-b-2 py-2 pl-2'>Update before and after images ***</p></Link>

            {display ?
              <ProfilePicture 
                    display={handleDisplay}
                    profilePic={setProfile}
              />
              :
              <button  onClick={handleDisplay} className='my-2 border-b-2 py-2 pl-2 cursor-pointer w-full text-left'>Change Profile Picture</button>

            }
          </article>
      
    </>
  )
}

export default AuthorisedProfile
