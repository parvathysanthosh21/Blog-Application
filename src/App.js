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

function App() {
  return (
    <div>
      <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Auth/>}/>
      <Route path='/register' element={<Auth register/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/allblogs' element={<AllBlogs/>}/>
      <Route path='/blogsview' element={<BlogsView/>}/>
      <Route path='/userprofile' element={<UserProfile/>}/>
       </Routes>
       <Footer/>
    </div>
  );
}

export default App;
