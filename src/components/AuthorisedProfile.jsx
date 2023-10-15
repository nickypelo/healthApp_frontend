import React, { useContext, useEffect, useState } from 'react';
import profileIcon from '../../public/profile-1341-svgrepo-com.svg';
import { Link } from 'react-router-dom';
import ProfilePicture from './profile/ProfilePicture';
import AuthContext from '../context/AuthContext';


const AuthorisedProfile = () => {

  const [display, setDisplay] = useState(false); //for displaying profile picture option
  const [profile, setProfile] = useState(profileIcon)

  const {access, user, setAccess} = useContext(AuthContext);

  //Load a profile picture uploader
  const handleDisplay = () =>{
    setDisplay(!display)
  }

  //get profile picture from backend
  useEffect(()=>{


  }, [])

  // remove restriction
  useEffect(()=>{
    user ? setAccess('') : undefined
    
  },[])
  
  return (
    <>
        {user ? 
              <figure className="mx-auto max-w-xs text-center">
                <img className='block w-24 xs:w-56  mx-auto border-2 my-4 p-4' src={profile} width='96' alt="" />
                <figcaption className=''>username</figcaption>
            </figure>
            :

            <div className="w-40 h-40 mx-auto flex justify-center items-center">
              <button className="px-4 py-2 rounded-xl text-white bg-blue-600 font-bold border-2">
                  <Link to='/login'>Premium</Link>
              </button>
            </div>
        }
        

        <h2 className='text-xl text-center mx-4 bg-slate-900 text-white'>Profile Details</h2>
          <article className='mx-4'>
            <Link to=''><p className={`my-2 border-b-2 py-2 pl-2 ${access}`}>Redeem Tokens</p></Link>
            <Link to='/progress/before&after'><p className={`my-2 border-b-2 py-2 pl-2 ${access}`}>Update before and after images</p></Link>

            {display ?
              <ProfilePicture 
                    display={handleDisplay}
              />
              :
              <button  onClick={handleDisplay} className={`my-2 border-b-2 py-2 pl-2 cursor-pointer w-full text-left ${access}`}>Change Profile Picture</button>

            }
          </article>
      
    </>
  )
}

export default AuthorisedProfile
