
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import TokensContext from '../context/TokensContext';

const Header = ({redirect, heading}) => {

  const {points} = useContext(TokensContext);

  return (
    <header className="flex text-white justify-between items-center bg-pink-700 rounded-b-3xl sticky top-0 z-20 h-10v">
      {redirect ?
        <Link className='px-4 block w-1/4 font-bold text-xl xs:text-2xl' to={redirect}><p>{'<'}</p></Link>
        :
        <p className='w-1/4'></p>
      }
      <h1 className='w-2/4 text-center text-2xl font-semibold xs:text-3xl'>{heading}</h1>
      <p className='w-1/4 font-bold'>{points}</p>
    </header>
  )
}

export default Header;
