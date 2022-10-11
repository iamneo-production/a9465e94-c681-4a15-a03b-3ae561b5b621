import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { appContext } from '../../App';
import Navbar from '../Navbar';

import '../../Styles/login.css'

function EnrolledCourse(props) {

    const links = [
        ['/viewCourses' , "Courses"] ,
        ['/enrolledCourse' , 'Enrolled Courses'] ,
        ['/signin' , 'logout' ]
    ]

    const userContext = useContext(appContext) ;

    const userId = userContext.studentId ;
    console.log(userContext)

    const [courses , setCourses] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8080/user/getEnrolledCourses/"+userContext.username)
            .then(res => {
                const data = res.data ;
                const courseDiv = [];
                for(let course of data){
                    console.log(course)
                    courseDiv.push(<div>
                            <label>Course Name : </label><input className='inputStyle'  readOnly value = {course.courseName}/> <br/><br/>
                            <label>Course Duration: </label><input className='inputStyle' readOnly value = {course.courseDuration}/> <br/><br/>
                            <label>Course Timings : </label><input className='inputStyle' readOnly value = {course.courseTimings}/> <br/><br/>
                            <label>Course Description</label><input className='inputStyle' readOnly value = {course.courseDescription} /> <br/><br/>
                            <button>My learning</button>
                        </div>);
                }

                setCourses(courseDiv) ;
            }).catch(err => alert(err)) ;
    } , [])
    return (
        <div>
            <Navbar links = {links}/>
            {courses}
        </div>
    );
}

export default EnrolledCourse;