import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../Header';
import AuthContext from '../../context/AuthContext';


const Login = () => {

    const URL = 'http://localhost:8000/api/token/'

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    //authorization
    const {setUser} = useContext(AuthContext);

    const redirect = useNavigate()
 
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            username: userName,  password:password
        }

        try{
            const response = await axios.post(URL, JSON.stringify(formData),{
                headers: {'Content-Type': 'application/json'},                    
            })
            console.log(response.data)
            setUser(response.data)
            redirect('/profile')
            
        }
        catch(error){
            console.error('Error', 'yeses')
        }
    }

  return (
    <>
        <Header heading='Login' />
        
        <section className=' mt-16 xs:text-xl'>
            <form action="" onSubmit={handleSubmit} className="mx-auto w-4/5 p-4 h-4/5 border-2 rounded-lg text-black bg-white">
                    <div className='grid grid-cols-1 xs:grid-cols-2 xs:mb-6 text-left'>
                        <label htmlFor="name" className=" w-4/5 xs:mx-auto"> Username:</label>
                        <input className="border-2 px-2 border-black block" required
                            type="text"  
                            name={userName}
                            value={userName}
                            onChange={(e)=>setUserName(e.target.value)}
                        />
                    </div>
                    <div className='grid grid-cols-1 xs:grid-cols-2 xs:mb-6 text-left'>
                        <label htmlFor="name" className=" w-4/5 xs:mx-auto"> Password:</label>
                        <input className="border-2 px-2 border-black block" required
                            type="password"  
                            name={password}
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                        />
                    </div>
                    <article>
                        <p>No account?</p>
                        <div className='flex justify-around'>
                            <Link to='/register' className='border-2 p-2 flex-1 text-center rounded-lg m-2 text-sm'>Register</Link>
                            <button type='submit' className='border-2 flex-1 p-2 rounded-lg m-2 text-sm'>Login</button>
                        </div>
                    </article>
            </form>
        </section>
    </>
    
  )
}

export default Login
