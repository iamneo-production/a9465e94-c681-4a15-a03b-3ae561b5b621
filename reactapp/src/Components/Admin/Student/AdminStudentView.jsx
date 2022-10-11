import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../../Styles/login.css'

function AdminStudentView(props) {
    const navigate = useNavigate() ;
    const [isDeleted , setIsDeleted] = useState(true)


    const [studentsDiv , setStudentsDiv] = useState([])
    const tableRef = useRef('')


    const addStudent = () =>{
        navigate("/adminStudent/add")
    } 

    const updateStudent = (studentId) => {
        console.log(studentId)
        navigate("/adminStudent/update/"+studentId)
    }

    const deleteStudent = (studentId) => {
        axios.delete("http://localhost:8080/admin/deleteStudent/"+studentId)
            .then(res => {alert("Successfully deleted student"); setIsDeleted(isDeleted)})
            .catch(console.log)
    }

    useEffect(() => {
        const newStudents = [] ;
        axios.get("http://localhost:8080/admin/getAllStudents/")
            .then(res => {
                for(let student of res.data){
                    newStudents.push(
                        <tr>
                            <td className='tableStyles'>{student.studentId}</td>
                            <td className='tableStyles'>{student.studentName}</td>
                            <td className='tableStyles'>{student.email}</td>
                            <td className='tableStyles'>{student.mobile}</td>
                            <td className='tableStyles'>{student.gender}</td>
                            <td className='tableStyles'><button onClick={() => updateStudent(student.studentId)}>Update</button></td>
                            <td className='tableStyles'><button onClick={() => deleteStudent(student.studentId)}>Delete</button></td>
                        </tr>
                    );
                }
        
                setStudentsDiv(newStudents);
            } )
            .catch(err => console.log(err)) ;
    } , [isDeleted])
    return (
        <div style={{position:'absolute' , top : '10%' , left : '25%' }}>
            <table ref={tableRef}  className='tableStyles'>
                <tbody className='tableStyles'>
                <tr className='tableStyles'>
                    <th className='tableStyles'>Student ID</th>
                    <th className='tableStyles'>Student name</th>
                    <th className='tableStyles' >Student Email</th>
                    <th className='tableStyles' >Mobile number</th>
                    <th className='tableStyles'>Gender</th>
                    <th className='tableStyles' colSpan='2'>Actions</th> 
                </tr>
                {studentsDiv}

                </tbody>
            </table>

            <button onClick={addStudent}>+ Add Student</button>
        </div>
    );
}

export default AdminStudentView;