import React from 'react';


import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Home from './components/Home/Home';
import Header from './components/Layout/Header/Header';
import Courses from './components/Courses/Courses';
import Footer from './components/Layout/Footer/Footer';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ForgetPassword from './components/Auth/ForgetPassword';
import ResetPassword from './components/Auth/ResetPassword';
import Contact from './components/Contact/Contact';
import Request from './components/Request/Request';
import About from './components/About/About';
import Subscribe from './components/Payments/Subscribe';
import PaymentFail from './components/Payments/PaymentFail';
import PaymentSuccess from './components/Payments/PaymentSuccess';
import NotFound from './components/NotFound/NotFound';
import CoursePage from './components/CoursePage/CoursePage';
import Profile from './components/Profile/Profile';
import UpdateProfile from './components/Profile/UpdateProfile';
import ChangePassword from './components/Profile/ChangePassword';
import Dashboard from './components/Admin/Dashboard/Dashboard';
import AdminCourses from './components/Admin/AdminCourses/AdminCourses';
import CreateCourse from './components/Admin/CreateCourse/CreateCourse';
import Users from './components/Admin/Users/Users';

const contextMenuHandler = (e) => {
  e.preventDefault();
};

export const disableContextMenu = () => {
  window.addEventListener('contextmenu', contextMenuHandler);
};

export const enableContextMenu = () => {
  window.removeEventListener('contextmenu', contextMenuHandler);
};

function App() {

  // disableContextMenu();

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/courses' element={<Courses />}/>
        <Route path='/course/:id' element={<CoursePage />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/profile' element={<Profile />}/>
        <Route path='/changepassword' element={<ChangePassword />}/>
        <Route path='/updateprofile' element={<UpdateProfile />}/>
        <Route path='/request' element={<Request />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/forgetpassword' element={<ForgetPassword />}/>
        <Route path='/resetpassword/:token' element={<ResetPassword />}/>
        <Route path='/subscribe' element={<Subscribe />}/>
        <Route path='/paymentsuccess' element={<PaymentSuccess />}/>
        <Route path='/paymentfail' element={<PaymentFail />}/>
        <Route path='/*' element={<NotFound />}/>

      {/* Admin Routes */}
        <Route path='/admin/dashboard' element={<Dashboard />}/>
        <Route path='/admin/courses' element={<AdminCourses />}/>
        <Route path='/admin/createcourse' element={<CreateCourse />}/>
        <Route path='/admin/users' element={<Users />}/>


      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
