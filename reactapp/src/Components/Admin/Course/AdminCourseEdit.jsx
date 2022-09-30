import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function AdminCourseEdit(props) {
    const [courseName , setCourseName] = useState("") ;
    const [courseDuration , setCourseDuration] = useState("") ;
    const [courseTiming , setCourseTiming] = useState("") ;
    const [enrolledStudents , setEnrolledStudents] = useState("") ;
    const [courseDescription , setCourseDescription] = useState("") ;

    const {courseId} = useParams()
    const addCourse = () => {
        const payload = {
            courseId : courseId ,
            courseName : courseName ,
	        courseDescription : courseDescription ,
	        courseDuration : courseDuration ,
            courseTimings : courseTiming ,
            enrolledStudents : enrolledStudents 
        }
        axios.post("http://localhost:8080/admin/addCourse" , payload)
            .then(res => alert("Course successfully updated"))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        axios.get(`http://localhost:8080/admin/viewCourse/${courseId}`)
            .then(res => {
                console.log(res.data);
                setCourseName(res.data.courseName) ;
                setCourseDescription(res.data.courseDescription);
                setCourseDuration(res.data.courseDuration);
                setEnrolledStudents(res.data.enrolledStudents) ;
                setCourseTiming(res.data.courseTimings);
            })
            .catch(err => console.log(err)) 
    } , [])
    return (
        <div>
            <input placeholder='Enter Course Name' value={courseName} className='inputStyle' onChange={e => setCourseName(e.target.value)} /><br/><br/>
            <input placeholder='Enter  Course Duration' value={courseDuration} className='inputStyle' onChange={e => setCourseDuration(e.target.value)} /><br/><br/>
            <input placeholder='Enter Course Timing' value={courseTiming} className='inputStyle' onChange={e => setCourseTiming(e.target.value)} /><br/><br/>
            <input placeholder='Enter no.of students enrolled for the course' value={enrolledStudents} className='inputStyle' onChange={e => setEnrolledStudents(e.target.value)} /><br/><br/>

            <textarea className='textAreaStyle' placeholder='Enter Course Description' value={courseDescription} onChange={e => setCourseDescription(e.target.value)}></textarea><br/><br/>


            <button onClick={addCourse}>Edit Course</button>
        
        </div>
    );
}

export default AdminCourseEdit;