import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../../Styles/login.css'
import Navbar from '../Navbar';


function ViewAcademy(props) {
    const [search , setSearch ] = useState("")

    const [academy , setAcademy] = useState([]) 

    const links = [
        ['/viewCourses' , "Courses"] ,
        ['/enrolledCourse' , 'Enrolled Courses'] ,
        ['/signin' , 'logout' ]
    ]

    const submitSearch = () =>{

        if(search === "")
            return ;
        axios.get('http://localhost:8080')
            .then(res => alert(res))
            .catch(err => alert(err)) ;
    }

    useEffect(() => {
        const academies = [] ;

        axios.get('http://localhost:8080/user/')
            .then(res => {
                for(const newAcademy of res.data){
                    academies.push(<img src={newAcademy.logo}></img>);
                }

                setAcademy(academies) ;
            })
            .catch(err => console.log(err)) ;
    } , [])



    return (
        <div>

            <Navbar links = {links}/>

            <input style={{borderRadius : '5px' , width:"200px" , height : "25px" , padding : '10px'}} type='text' placeholder='Type here to serach' value = {search} onChange={e => setSearch(e.target.value)} /> <button onClick={submitSearch}>Search</button>

            {academy}

        </div>
    );
}

export default ViewAcademy;