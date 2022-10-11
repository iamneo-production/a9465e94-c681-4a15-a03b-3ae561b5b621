import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { appContext } from '../../App';
import Navbar from '../Navbar';

function UserCourseView(props) {
    const [courses , setCourses] = useState([])
    const navigate = useNavigate()

    const links = [
        ['/viewCourses' , "Courses"] ,
        ['/enrolledCourse' , 'Enrolled Courses'] ,
        ['/signin' , 'logout' ]
    ]

    const userContext = useContext(appContext) ;

    const enrollCourse = (courseId) => {
        const payload = {
            studentId : userContext.username ,
            courseId : courseId
        }

        axios.post("http://localhost:8080/user/enrollCourse" , payload)
            .then(res => alert("Enrolled course"))
            .catch(console.log)
    }
    


    useEffect(() => {
        axios.get("http://localhost:8080/admin/getAllCourses")
            .then(res => {
                console.log(res)
                const newCourses = []
                for(let course of res.data){
                    newCourses.push(
                        <div key = {course.courseId}>
                            Course Name : {course.courseName} <br/>
                            Description : {course.courseDescription} <br/>
                            Duration : {course.courseDuration} <br/>
                            CourseTimings : {course.courseTimings} <br/>
                            enrolledStudents : {course.enrolledStudents} <br/>

                            <button onClick={() => enrollCourse(course.courseId)}>Enroll</button> <br/>
                        </div>
                    )
                }

                setCourses(newCourses)
            })
            .catch(err => console.log(err))
    } , [])


    return (
        <div style={{position : 'absolute' , width : '100%' , height : '90%' , justifyContent : 'space-evenly'}}>
            <Navbar links = {links}/>
            <div style={ {width : '100%' , height : '100%' }}>
                {courses}
            </div>
        </div>
    );
}

export default UserCourseView;