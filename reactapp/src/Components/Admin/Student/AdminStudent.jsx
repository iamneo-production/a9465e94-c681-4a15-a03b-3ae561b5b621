import axios from 'axios';
import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../Navbar';
import AdminStudentAdd from './AdminStudentAdd';
import AdminStudentEdit from './AdminStudentEdit';
import AdminStudentView from './AdminStudentView';



function AdminStudent(props) {


    const links = [ 
        ['/adminAcademy' , 'AdminAcademy' ] ,
        [ '/adminCourse' , "AdminCourse" ,] , 
        ['/adminStudent' , "AdminStudent"] ,
        [ '/signin' , 'logout' ]
    ]

   if(props.action === '' || props.action === "view")
        return (
            <>
                <Navbar links = {links}/>
                <AdminStudentView />
            </>
    )

    else if(props.action === "update")
        return (
            <>
                <Navbar links = {links} />
                <AdminStudentEdit />
            </>
    )

    else
        return (
            <>
                <Navbar links = {links} />
                <AdminStudentAdd />
            </>
    )
}

export default AdminStudent;