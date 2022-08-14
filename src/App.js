import React from 'react'
import './App.css'
import Home from './Pages/Home';

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Series from './Pages/Series'
import Movies from './Pages/Movies';
import MyList from './Pages/MyList';
import Popular from './Pages/Popular';
import Profile from './Pages/Profile';
import Preview from './Pages/Preview';
import Index from './Pages/Index';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';



function App() {
  return (

    <BrowserRouter>

      <div>

        <Routes>
          <Route path='/Home' element= {<Home/>}/>
          <Route path="/Series" element= {<Series/>}/>
          <Route path="/Movies" element= {<Movies/>}/>
          <Route path="/MyList" element= {<MyList/>}/>
          <Route path="/Popular" element= {<Popular/>}/>
          <Route path="/Profile" element= {<Profile/>}/>
          <Route path='/Preview' element={<Preview/>}/>
          <Route path='/' element={<Index/>}/>
          <Route path='/Signin' element={<Signin/>}/>
          <Route path='/Signup' element={<Signup/>}/>
        </Routes>   
        
      </div>
    
    </BrowserRouter>
    
  );
}

export default App;
