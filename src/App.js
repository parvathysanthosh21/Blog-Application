import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home'
import Dashboard from './Pages/Dashboard'
import AllBlogs from './Pages/AllBlogs'
import UserProfile from './Pages/UserProfile'
import Footer from './Components/Footer';
import Header from './Components/Header';
import BlogsView from './Pages/BlogsView';
import Auth from './Components/Auth';
import { useContext, useState } from 'react';
import { tokenAuthorisationContext } from './context/TokenAuth';
import Profile from './Pages/Profile';

function App() {
  const {isAuthorised, setAuthorised} = useContext(tokenAuthorisationContext)

  const [loginResponse,setLoginResponse] = useState(false)
  return (
    <div>
      <Header loginResponse={loginResponse}/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Auth setLoginResponse={setLoginResponse}/>}/>
      <Route path='/register' element={<Auth register/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/blogsview/:_id' element={<BlogsView/>}/>
      <Route path='/allblogs' element={ isAuthorised? <AllBlogs/>:<Home/>}/>
      <Route path='/userprofile' element={ isAuthorised? <UserProfile/>:<Home/>}/>
      <Route path='/profile/:userId' element={<Profile/>}/>
       </Routes>
       <Footer/>
    </div>
  );
}

export default App;
