import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Login from './Auth/Login';
import Signup from './Auth/Signup';
import Welcome from './Auth/Welcome';

import React from 'react';
import ViewAcademy from './Components/User/ViewAcademy';
import EnrolledCourse from './Components/User/EnrolledCourse';
import AdminAcademy from './Components/Admin/Academy/AdminAcademy';
import AdminCourse from './Components/Admin/Course/AdminCourse';
import AdminStudent from './Components/Admin/Student/AdminStudent';
import AdminStudentAdd from './Components/Admin/Student/AdminStudentAdd';
import UserCourseView from './Components/User/UserCourseView';



export const appContext = React.createContext({});
const initialState = {
  isLoggedIn : false 
}

function App() {
  return (
    <div className="App">
      <appContext.Provider value={initialState} >
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element = {<Signup />}/>
          <Route path='/signin' element = {<Login/>}/>
          <Route path = "/" element = {<Welcome />} />

          <Route path = "/adminAcademy" element={<AdminAcademy action = 'view'/>} />
          <Route path = "/adminAcademy/add" element={<AdminAcademy action = 'add'/>} />
          <Route path = "/adminAcademy/view" element={<AdminAcademy action = 'view' />} />
          <Route path = "/adminAcademy/update/:academyId" element={<AdminAcademy action = 'update' />} />
          <Route path = "/adminCourse" element={<AdminCourse action = "view"/>} />
          <Route path = "/adminCourse/add" element={<AdminCourse action = 'add'/>} />
          <Route path = "/adminCourse/view" element={<AdminCourse action = 'view' />} />
          <Route path = "/adminCourse/update/:courseId" element={<AdminCourse action = 'update' />} />
          <Route path = "/AdminStudent" element={<AdminStudent action = "view"/>} />
          <Route path = "/AdminStudent/add" element={<AdminStudent action = 'add'/>} />
          <Route path = "/AdminStudent/view" element={<AdminStudent action = 'view' />} />
          <Route path = "/AdminStudent/update/:courseId" element={<AdminStudent action = 'update' />} />

          <Route path = "/viewAcademy" element={<ViewAcademy/>} />
          <Route path = '/enrolledCourse' element={< EnrolledCourse/>} />
          <Route path='/viewCourses' element={<UserCourseView />} />
        </Routes>
      </BrowserRouter>
      </appContext.Provider> 
    </div>
  );
}

export default App;
