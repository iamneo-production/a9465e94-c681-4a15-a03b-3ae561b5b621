import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Navbar from '../../Navbar';
import AdminCourseAdd from './AdminCourseAdd';
import AdminCourseEdit from './AdminCourseEdit';
import AdminCourseView from './AdminCourseView';

function AdminCourse(props) {
    const [courseDiv , setCourseDiv] = useState([]);

    const links = [ 
        ['/adminAcademy' , 'AdminAcademy' ] ,
        [ '/adminCourse' , "AdminCourse" ,] , 
        ['/adminStudent' , "AdminStudent"] ,
        [ '/signin' , 'logout' ]
    ]


    if(props.action === 'view' || props.action === '' )
        return (
            <div>
               <Navbar links = {links}/><br/><br/>
               <AdminCourseView />
            </div>
        )

    else if(props.action === 'add')
        return (
            <div>
                <Navbar links = {links}/><br/><br/>
                <AdminCourseAdd/>
            </div>
        ) 
    
    else 
        return (
            <div>
                <Navbar links = {links}/><br/><br/>
                <AdminCourseEdit />
            </div>
        )    

}

export default AdminCourse;