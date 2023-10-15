import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../Header';

const Register = () => {

    const URL = 'http://localhost:8000/api/register/'
    
    //form data
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    // const [pass, setPass] = useState('');
    const [email, setEmail] = useState('');

    const redirect = useNavigate()

    const direct = () =>{
        redirect('/profile')
    }

   

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            firstName, lastName, userName, email, password
        }
        try{
            const response = await axios.post(URL, JSON.stringify(formData),{
                headers: {'Content-Type': 'application/json'},                    
            })
            console.log(response.data)
            direct()
        }
        catch(error){
            console.error('Error', 'yeses')
        }
    }


  return (
    <>
        <Header heading='Registration' />

        <section className=' mt-8 xs:mt-20 xs:text-xl'>
        <form action="" onSubmit={handleSubmit} className="mx-auto w-4/5 p-4 h-4/5 border-2 rounded-lg text-black bg-white">
            <div className='grid grid-cols-1 xs:grid-cols-2 xs:mb-6 text-left'>
                <label htmlFor="firstName" className=" w-4/5 xs:mx-auto block"> Firstname:</label>
                <input className="border-2 px-2 border-black block" required 
                        type="text"  
                        name={firstName}
                        value={firstName}
                        onChange={(e)=>setFirstName(e.target.value)} 
                />
            </div>
            <div className='grid grid-cols-1 xs:grid-cols-2 xs:mb-6 text-left'>
                <label htmlFor="lastName" className=" w-4/5 xs:mx-auto block"> Lastname:</label>
                <input className="border-2 px-2 border-black block" required
                        type="text"  
                        name={lastName}
                        value={lastName}
                        onChange={(e)=>setLastName(e.target.value)}
                />
            </div>
            <div className='grid grid-cols-1 xs:grid-cols-2 xs:mb-6 text-left'>
                <label htmlFor="name" className=" w-4/5 xs:mx-auto block"> Username:</label>
                <input className="border-2 px-2 border-black block" required
                        type="text"  
                        name={userName}
                        value={userName}
                        onChange={(e)=>setUserName(e.target.value)}
                />
            </div>
            <div className='grid grid-cols-1 xs:grid-cols-2 xs:mb-6 text-left'>
                <label htmlFor="name" className=" w-4/5 xs:mx-auto block"> Email:</label>
                <input className="border-2 px-2 border-black block" required
                        type="email"  
                        name={email}
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                />
            </div>
            <div className='grid grid-cols-1 xs:grid-cols-2 xs:mb-6 text-left'>
                <label htmlFor="name" className=" w-4/5 xs:mx-auto block"> Password:</label>
                <input className="border-2 px-2 border-black block" required
                        type="password"  
                        name={password}
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                />
            </div>
            {/* <div>
                <label htmlFor="name" className=" w-4/5 mx-auto"> Password again:</label>
                <input className="border-2 border-black block" required
                        type="password"  
                        name={pass}
                        value={pass}
                        onChange={(e)=>setPass(e.target.value)}   
                />
            </div> */}
            <article>
                <p>Have account?</p>
                <div className='flex justify-around'>
                    <Link to='/login' className='border-2 p-2 flex-1 text-center rounded-lg m-2 text-sm'>Login</Link>
                    <button type='submit' className='border-2 flex-1 p-2 rounded-lg m-2 text-sm'>Register</button>
                </div>
            </article>
            
        </form>
    </section>
    </>
  )
}

export default Register
