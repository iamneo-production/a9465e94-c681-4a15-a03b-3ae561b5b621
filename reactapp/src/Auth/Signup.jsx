import axios from 'axios';
import React, { useState } from 'react';
import Select from 'react-select' ;
import { Link } from 'react-router-dom';
import logo from '../Assets/Logo.jpg' ;
import '../Styles/login.css'

function Signup(props) {

    // const [signInData , setSignInData] = useState({email : '' , userName : '' , mobile : '' , password : '' , confirmPassword : ''})

    // const setData = (e) => setSignInData({...signInData , [e.target.name] : e.target.value})

    const [type , setType] = useState('')
    const [email , setEmail] = useState('')
    const [mobile , setMobile] = useState('')
    const [userName , setUserName] = useState('')
    const [password , setPassword] = useState('')
    const [confirmPassword , setConfirmPassword] = useState('')

    const [emailError , setEmailError] = useState('')
    const [mobileError , setMobileError] = useState('')
    const [passwordError , setPasswordError] = useState('')
    const [confirmPasswordError , setConfirmPasswordError] = useState('')


 
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

        if(emailError+mobileError+passwordError+confirmPasswordError !== "")
            return ;
        const payload = {
            userRole : type ,
            userName : userName ,
            email : email ,
            password : password ,
            mobileNumber : mobile ,
            confirmPassword : confirmPassword
        }
        console.log(JSON.stringify(payload));
        const uri = (type === 'Admin') ? "admin" : "user";
        axios.post(`http://localhost:8080/${uri}/signup` , payload)
            .then(res => alert("Success "+res.data))
            .catch(err => console.log(JSON.stringify(err))) ;
    }

    const validateEmail = (e) => {
        const newEmail = e.target.value ;
        if(newEmail === ''){
            setEmailError("*Email cannot be empty")
        }
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(newEmail)){
            setEmailError("*Please enter valid email address")
        }
        else{
            setEmailError("");
        }
        
        setEmail(newEmail);

    }

    const validatePassword = e => {
        const newPassword = e.target.value ;

        console.log(newPassword)

        let [containsLower , containsUpper , containsSpecial , containsnumber] = [false , false , false , false]

        for(let char of newPassword){
            if(char >= 'a' && char <= 'z')
                containsLower = true ;
            else if(char >= 'A' && char <= 'Z')
                containsUpper = true 
            else if(char >= '0' && char <= '9')
                containsnumber = true   
            else 
                containsSpecial = true 
        }

        if(!containsLower){
            console.log("uppercase");
            setPasswordError("*password should contain Atleast one LowerCase");
        }
        else if(!containsUpper){
            console.log("lowercase");
            setPasswordError("*password should contain Atleast one Uppercase");
        }
        else if(!containsnumber){
            console.log("number");
            setPasswordError("*password should contain Atleast one number");
        }
        else if(!containsSpecial){
            console.log("special charcater");
            setPasswordError("*password should contain Atleast one special character");
        }
        else if(newPassword.length < 8){
            console.log("length 8");
            setPasswordError("*password should contain Atleast one 8 chars long");
        }
        else{
            setPasswordError("");
        }

        setPassword(newPassword);

    }

    const validateMobile = e => {
        const newMobile = e.target.value;
        for(let char of newMobile){
            if(char < '0' || char > '9'){
                setMobileError("*Mobile Number should only contains number");
                setMobile(newMobile)
                return ;
            }
        }
        if(newMobile.length !== 10){
            setMobileError("*Mobile Number should contain only 10 numbers");
                setMobile(newMobile)
                return ;
        }
        setMobileError("");
        setMobile(newMobile)

    }

    const validateConfirmPassword = e => {
        const newConfirmPassword = e.target.value 
        

        if(newConfirmPassword === password)
            setConfirmPasswordError('')
        else
            setConfirmPasswordError('*Password & Confirm Password should match')

        setConfirmPassword(newConfirmPassword);
    }

    return (
        <div className='loginBackgroundStyle'>
            <div style={{width : window.innerWidth*10/100 , height : window.innerHeight*10/100}} className='logoImage'>
                <img src={logo} width = '100%' height= '100%' />
            </div>

            <h1 style={{color : 'red'}} >Abacus Academy Admission Portal</h1> <br/>
            <h3 style={{color : 'blue'}} ><i>Welcome to the portal</i></h3> <br/>

            <div style={{justifyContent : 'center' , alignContent : 'center' , alignItems : 'center' , display : 'flex' }}>
                <Select placeholder='Admin/User' styles={customStyles} options = {options} onChange = {e => setType(e.value) }  /> 
            </div><br/>

            <p className='errorStyle'>{emailError}</p> 
            <input type='text' className='inputStyle' name  ='email' placeholder='Enter email' value={email} onChange = {e => validateEmail(e)} /> <br/> <br/>

            <input type='text' className='inputStyle' name  ='userName' placeholder='Enter userName' value={userName} onChange = {e => setUserName(e.target.value)} /> <br/> <br/>

            <p className='errorStyle'>{mobileError}</p> 
            <input type='text' className='inputStyle' name = 'mobile' placeholder='Enter mobile' value={mobile} onChange = {e => validateMobile(e)} /> <br/> <br/>
            
            <p className='errorStyle'>{passwordError}</p> 
            <input type='password' className='inputStyle' name = 'password' placeholder='Enter password' value={password} onChange = {e => validatePassword(e)} /> <br/><br/>
            
            <p className='errorStyle'>{confirmPasswordError}</p> 
            <input type='password' className='inputStyle' name = 'confirmPassword' placeholder='Enter confirm password' value={confirmPassword} onChange = {e => validateConfirmPassword(e)} /> <br/> <br/>

            <button onClick={submitForm} style={{borderRadius : '5px' }} >Submit</button><br/> <br/>

            <span>Already a user? </span><Link to='/signin'>Login</Link>
        </div>
    );

}

export default Signup;