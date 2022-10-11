import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { appContext } from '../../../App';

function AdminAcademyUpdate(props) {
    const {academyId}  = useParams() ;
    const userContext = useContext(appContext) ;

    const [academyName , setAcademyName] = useState("");
    const [mobile , setMobile] = useState("");
    const [url , setUrl] = useState("");
    const [email , setEmail] = useState("");
    const [location , setLocation] = useState("");
    const [description , setDescription] = useState("");


    const editAcademy = e => {

        const payload = {
            instituteName : academyName ,
	        instituteDescription : description ,
	        instituteAddress : location ,
	        mobile : mobile ,
	        email : email ,
            logo : url ,
            instituteId : academyId
        }

        console.log(payload);

        axios.post(`http://localhost:8080/admin/addInstitute/` , payload )
            .then(res => alert("Academy Successfully updated") )
            .catch(err => alert("Something went wrong , please try again later"))
    }

    useEffect(() => {
        axios.put("http://localhost:8080/admin/editInstitute/"+academyId)
            .then(res => {

                console.log(res.data);
                setAcademyName(res.data.instituteName);
                setMobile(res.data.mobile);
                setDescription(res.data.instituteDescription);
                setLocation(res.data.instituteAddress);
                setEmail(res.data.email);
                setUrl(res.data.logo);
            })
            .catch(err => console.log(err)) ;
    } , [])


    return (
        <div>
             <input placeholder='Enter Academy Name' value={academyName} className='inputStyle' onChange={e => setAcademyName(e.target.value)} /><br/><br/>
            <input placeholder='Enter mobile number' value={mobile} className='inputStyle' onChange={e => setMobile(e.target.value)} /><br/><br/>
            <input placeholder='Enter Academy Image url' value={url} className='inputStyle' onChange={e => setUrl(e.target.value)} /><br/><br/>
            <input placeholder='Enter Academy Email' value={email} className='inputStyle' onChange={e => setEmail(e.target.value)} /><br/><br/>
            <input placeholder='Enter Academy Location' value={location} className='inputStyle' onChange={e => setLocation(e.target.value)} /><br/><br/>

            <textarea className='textAreaStyle' placeholder='Enter Academy Description' value={description} onChange={e => setDescription(e.target.value)}></textarea><br/><br/>

            <button onClick={editAcademy}>Edit Academy</button>
        </div>
    );
}

export default AdminAcademyUpdate;