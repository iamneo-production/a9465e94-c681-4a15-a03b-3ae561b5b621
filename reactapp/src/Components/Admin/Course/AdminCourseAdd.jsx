import axios from 'axios';
import React from 'react';
import { useState } from 'react';

function AdminCourseAdd(props) {

    const [courseName , setCourseName] = useState("") ;
    const [courseDuration , setCourseDuration] = useState("") ;
    const [courseTiming , setCourseTiming] = useState("") ;
    const [enrolledStudents , setEnrolledStudents] = useState("") ;
    const [courseDescription , setCourseDescription] = useState("") ;

    const addCourse = () => {
        const payload = {
            courseName : courseName ,
	        courseDescription : courseDescription ,
	        courseDuration : courseDuration ,
            enrolledStudents : enrolledStudents 
        }
        axios.post("http://localhost:8080/admin/addCourse" , payload)
            .then(res => alert("Course successfully added"))
            .catch(err => console.log(err))
    }
    return (
        <div>
            <input placeholder='Enter Course Name' value={courseName} className='inputStyle' onChange={e => setCourseName(e.target.value)} /><br/><br/>
            <input placeholder='Enter  Course Duration' value={courseDuration} className='inputStyle' onChange={e => setCourseDuration(e.target.value)} /><br/><br/>
            <input placeholder='Enter Course Timing' value={courseTiming} className='inputStyle' onChange={e => setCourseTiming(e.target.value)} /><br/><br/>
            <input placeholder='Enter no.of students enrolled for the course' value={enrolledStudents} className='inputStyle' onChange={e => setEnrolledStudents(e.target.value)} /><br/><br/>

            <textarea className='textAreaStyle' placeholder='Enter Course Description' value={courseDescription} onChange={e => setCourseDescription(e.target.value)}></textarea><br/><br/>


            <button onClick={addCourse}>Add Course</button>
        </div>
    );
}

export default AdminCourseAdd;