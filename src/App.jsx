import React, { useEffect, useState } from "react";
import { Routes,Route} from 'react-router-dom';


//components Imports
import Navigation from "./components/Navigation";
import Tutorial from "./components/Tutorial";
import ProgressPhoto from "./components/profile/ProgressPhoto";
import Profile from "./pages/Profile";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";

//pages Imports
import Home from "./pages/Home";
import Diet from "./pages/Diet";
import Exercise from "./pages/Exercise";
import Progress from "./pages/Progress";

//sub-pages Imports
import Beginner from "./pages/exercisePages/Beginner";
import Intermediate from "./pages/exercisePages/Intermediate";
import Advanced from "./pages/exercisePages/Advanced";


//useContext imports
import { TokensProvider } from "./context/TokensContext";

function App() {

  const [firstUse, setSetUse] = useState('');

  useEffect(()=>{
    setSetUse(localStorage.getItem('entered'));
  }, [])

  return (

    <div className="relative max-w-2xl mx-auto min-h-screen border-black text-white border-2 bg-[url('/back.jpg')] bg-center bg-cover pb-32">

      {!firstUse
          ? <Tutorial yes={setSetUse}/>
          : 
          <TokensProvider>
                <Routes>
                  {/* main pages */}
                  <Route path='/' element={<Home/>}/>
                  <Route path='/profile' element={<Profile/>}/>
                  <Route path='/diet' element={<Diet/>}/>
                  <Route path='/exercise' element={<Exercise/>}/>
                  <Route path='/progress' element={<Progress/>}/>
                  <Route path='/exercise' element={<Exercise/>}/>

                  {/* progress sub-pages */}
                  <Route path='/progress/before&after' element={<ProgressPhoto/>}/>
                  <Route path='/progress' element={<Progress/>}/>

                  {/* exercise sub-pages */}
                  <Route path='/exercise/beginner' element={<Beginner/>}/>
                  <Route path='/exercise/intermediate' element={<Intermediate/>}/>
                  <Route path='/exercise/advanced' element={<Advanced/>}/>

                  {/* Auth Routes */}
                  <Route path="/register" element={<Register/>} />
                  <Route path="/login" element={<Login />} />

                </Routes>
              <Navigation/>              
          </TokensProvider>
      }
    </div>
    
  )
}

export default App;
