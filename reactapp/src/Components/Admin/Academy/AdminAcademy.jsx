import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { appContext } from '../../../App';
import '../../../Styles/login.css'
import Navbar from '../../Navbar';
import AdminAcademyAdd from './AdminAcademyAdd';
import AdminAcademyUpdate from './AdminAcademyUpdate';
import AdminAcademyView from './AdminAcademyView';

function AdminAcademy(props) {

    const userContext = useContext(appContext) ;

   
    const links = [ 
        ['/adminAcademy' , 'AdminAcademy' ] ,
        [ '/adminCourse' , "AdminCourse" ,] , 
        ['/adminStudent' , "AdminStudent"] ,
        [ '/signin' , 'logout' ]
    ]
    


    if(props.action === 'add')
    return (
        <div>
            <Navbar links = {links}/><br/><br/>
            <AdminAcademyAdd />
        </div>
    );

    else if(props.action === 'view')
        return (
            <div>
                <Navbar links = {links}/><br/><br/>
                <AdminAcademyView />
            </div>
        );

    else if(props.action === 'update')
        return (
            <div>
                <Navbar links = {links}/><br/><br/>
                <AdminAcademyUpdate />
            </div>
        ) ;

    return (
        <div>
            <Navbar links = {links}/><br/><br/>
            <AdminAcademyView />
        </div>
    );
}

export default AdminAcademy;