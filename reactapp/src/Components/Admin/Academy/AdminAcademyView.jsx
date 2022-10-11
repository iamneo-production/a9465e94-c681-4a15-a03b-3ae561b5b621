import { getToPathname } from '@remix-run/router';
import axios from 'axios';
import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { appContext } from '../../../App';

function AdminAcademyView(props) {
    const [ academies , setAcademies ] = useState([]) ;
    const [deleteState , setDeleteState] = useState(true)

    const userContext = useContext(appContext);
    const navigate = useNavigate()

    const updateAcademy = (instituteId) => {
        navigate(`/adminAcademy/update/${instituteId}`) ;
    }

    const addAcademy = () => {
        navigate("/adminAcademy/add")
    }

    const deleteAcademy = (instituteId) => {
        axios.delete("http://localhost:8080/admin/deleteInstitute/"+instituteId)
            .then(res => {alert("Institute successfully deleted"); setDeleteState(!deleteState)})
            .catch(err => console.log(err)) ;
    }

    useEffect(() => {

        console.log("UseEffect called")
        axios.get("http://localhost:8080/admin/getAllInstitutes" )
            .then(res => {
                console.log(res.data)
                const newAcademies = [] ;
                for(let academy of res.data){
                    newAcademies.push(
                        <div key = {academy.instituteId} className = 'academyImageStyle'>
                            <span><b>{academy.instituteName}</b></span><br/>
                            <span><b>{academy.instituteAddress}</b></span><br/>
                            <span></span>
                            <div>
                                <button onClick = {() => updateAcademy(academy.instituteId)}>Edit</button>
                            </div>
                            <div>
                                <button onClick = {() => deleteAcademy(academy.instituteId)}>Delete</button>
                            </div>
                        </div> 
                    )
                    
                }
                setAcademies(newAcademies);
            })
            .catch(err => console.log(err)) ;
    } , [deleteState])
    return (
        <div style={{position : 'absolute' , width : '100%' , height : '80%' , justifyContent : 'space-evenly'}}>
            <div style={ {width : '100%' , height : '100%' }}>
                {academies}
            </div>
            <button onClick={addAcademy}>Add Academy</button>
        </div>
    );
}

export default AdminAcademyView;