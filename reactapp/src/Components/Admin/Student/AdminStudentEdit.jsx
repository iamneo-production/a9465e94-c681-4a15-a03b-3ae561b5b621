import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

function AdminStudentEdit(props) {

        const [firstName , setFirstName] = useState("");
        const [lastName , setLastName] = useState("");
        const [fatherName , setFatherName] = useState("");
        const [motherName , setMotherName] = useState("");
        const [email , setEmail] = useState("");
        const [age , setAge] = useState("");
        const [gender , setGender] = useState("");
        const [mobile , setMobile] = useState("");
        const [alternateMobile , setAlternameMobile] = useState("");
        const [address , setAddress] = useState("");

        const [isUpdated , setIsUpdated] = useState(true)

        const {courseId} = useParams() ;

        //console.log(JSON.stringify(studentId))

    
        const updateStudent = () => {
            const payload = {
                studentId : courseId ,
                studentName : firstName+" "+lastName ,
                motherName : motherName ,
                fatherName : fatherName ,
                email : email ,
                mobile : mobile ,
                address : address ,
                alternateMobile : alternateMobile ,
                gender : gender
            }
    
            axios.post("http://localhost:8080/admin/addStudent" , payload)
                .then(res => {
                    alert("student successfully updated");
                    setIsUpdated(!isUpdated);
                })
                .catch(console.log)
        }

        useEffect(() => {

            axios.get("http://localhost:8080/admin/getStudent/"+courseId)
                .then(res => {
                    console.log(res.data)
                    setFirstName(res.data.studentName.split(' ')[0])
                    setLastName(res.data.studentName.split(' ')[1])
                    setAddress(res.data.address)
                    setMobile(res.data.mobile)
                    setFatherName(res.data.fatherName)
                    setMotherName(res.data.motherName)
                    setAlternameMobile(res.data.alternateMobile)
                    setGender(res.data.gender)
                    setEmail(res.data.email)
                    setAge(res.data.age) 
                })
        } , [isUpdated])
    
        return (
            <div>
    
                <div>
                    <input type = 'text' placeholder='Enter your first name' value={firstName} onChange={e => setFirstName(e.target.value)}/><br/>
                    <input type = 'text' placeholder='Enter your father name' value={fatherName} onChange={e => setFatherName(e.target.value)}/><br/>
                    <input type = 'text' placeholder='Enter your mother name' value={motherName} onChange={e => setMotherName(e.target.value)} /><br/>
                    <input type = 'text' placeholder='enter email Id' value={email} onChange={e => setEmail(e.target.value)} /><br/>
                    <input type = 'text' placeholder='enter your age' value={age} onChange={e => setAge(e.target.value)} /><br/>
                </div>
    
                <div>
                    <input type = 'text' placeholder='Enter your last name' value={lastName} onChange={e => setLastName(e.target.value)} /><br/>
                    <input type = 'text' placeholder='Enter male or female' value={gender} onChange={e => setGender(e.target.value)}  /><br/>
                    <input type = 'text' placeholder='Enter phone number' value={mobile} onChange={e => setMobile(e.target.value)} /><br/>
                    <input type = 'text' placeholder='Enter alternate number' value={alternateMobile} onChange={e => setAlternameMobile(e.target.value)} /><br/>
                </div>
    
                <div>
                    <p>Address Information</p>
                    <textarea>{address}</textarea>
                </div>
    
                <button onClick={updateStudent}>Enroll Course</button>
    
            </div>
        );
}

export default AdminStudentEdit;