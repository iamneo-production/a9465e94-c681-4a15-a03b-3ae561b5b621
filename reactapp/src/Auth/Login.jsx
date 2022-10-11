import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../Assets/Logo.jpg' ;
import Select from 'react-select' ;
import '../Styles/login.css'
import { useContext } from 'react';
import { appContext } from '../App';


function Login(props) {

    const navigate = useNavigate();

    const userContext = useContext(appContext) ;

    const [email , setEmail] = useState('') ;
    const [password , setPassword] = useState('') ;
    const [type , setType] = useState('')

    const [errorMessage , setErrorMessage] = useState(<></>);


    const options = [
        
        { value : 'Admin' , label : "Admin"} ,
        { value : "User" , label : "User"}


        
    ]
    const customStyles = {
        container : provided => ({
            ...provided ,
            width : 200 ,
            
        })
    };



    const submitForm = () => {

        const payload = {
            email : email ,
            password : password
        }

        const uri = (type === 'Admin') ? "admin" : "user" ;
        console.log(payload);

        axios.post(`http://localhost:8080/${uri}/login` , payload)
            .then(res => {
                alert(JSON.stringify(res.data)) ; userContext.username = email ; userContext.password = password  ;
                if(uri == 'admin'){
                    navigate("/adminAcademy");
                }
                else{
                    userContext.studentId = res.data.studentId ;
                    navigate("/viewCourses");
                }
            })
            .catch(err => {console.log(err);setErrorMessage(<p className='errorStyle'>*Invalid username or password</p>)}) ;
    }

    return (
        <div  className='loginBackgroundStyle'>
            <div style={{width : window.innerWidth*10/100 , height : window.innerHeight*10/100}} className='logoImage'>
                <img src={logo} width = '100%' height= '100%' />
            </div>

            

             <h1 style={{color : 'red'}}>Abacus Academy Admission Portal</h1>
            <h3 style={{color : 'blue'}}><i>Welcome to the portal</i></h3>

            <div style={{justifyContent : 'center' , alignContent : 'center' , alignItems : 'center' , display : 'flex' }}>
                <Select placeholder='Admin/User' styles={customStyles} options = {options} onChange = {e => setType(e.value) }  /> 
            </div><br/>

            <input type='text' className='inputStyle' placeholder='Enter email' value={email} onChange={e => {setEmail(e.target.value) ; }}/> <br/> <br/>
            <input type='password' className='inputStyle' placeholder='Enter password' value={password} onChange={e => {setPassword(e.target.value)}}/> <br/> <br/>

            {errorMessage}
            <button onClick={submitForm} style = {{borderRadius : '5px' , }}><b>Submit</b></button><br/><br/>


            <span >New User? </span><Link to='/signup'>SignUp</Link>
        </div>
    );
}

export default Login;