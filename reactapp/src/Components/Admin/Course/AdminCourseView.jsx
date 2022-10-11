import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';



function AdminCourseView(props) {


    const [deleteFlag , setDeleteFlag] = useState(true) ;
    const [courses , setCourses] = useState([])
    const navigate = useNavigate()
    

    const updateCourse = (courseId) => {
        navigate(`/adminCourse/update/${courseId}`) ;
    }

    const deleteCourse = (courseId) => {
        axios.delete(`http://localhost:8080/admin/deleteCourse/${courseId}`)
            .then(res => setDeleteFlag(!deleteFlag))
            .catch(console.log) ;
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

                            <button onClick={() => updateCourse(course.courseId)}>Edit</button> <br/>
                            <button onClick={() => deleteCourse(course.courseId)}>delete</button> <br/>
                        </div>
                    )
                }

                setCourses(newCourses)
            })
            .catch(err => console.log(err))
    } , [deleteFlag])

    const addCourse = () => {
        navigate("/adminCourse/add");
    }

    return (
        <div style={{position : 'absolute' , width : '100%' , height : '90%' , justifyContent : 'space-evenly'}}>
            <div style={ {width : '100%' , height : '100%' }}>
                {courses}
            </div>
            <button onClick={addCourse}>Add Course</button>
        </div>
    );
}

export default AdminCourseView;