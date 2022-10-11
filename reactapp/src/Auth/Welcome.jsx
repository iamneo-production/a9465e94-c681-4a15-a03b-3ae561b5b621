import React from 'react';
import Navbar from '../Components/Navbar';
import logo from '../Assets/Logo.jpg'
import { useNavigate } from 'react-router-dom';

function Welcome(props) {

    const navigate = useNavigate();

    const handleSignin = e => {
        navigate("/signin") ;
    }

    const handleSignup = e => {
        navigate("/signup") ;
    }
    
    return (
        <div className='loginBackgroundStyle welcomeBackgroundStyle'>
            {/* <Navbar /> */}
            <div style={{width : window.innerWidth*10/100 , height : window.innerHeight*10/100}} className='logoImage'>
                <img src={logo} width = '100%' height= '100%' />
            </div>
            <h1>Welcome to Abacus Academy</h1>

            <div style={{position : 'absolute' , left : '45%' ,top : '50%'}}>
                <button style = {{width : '100px' , height : '30px' , borderRadius : '5px' , }} onClick = {handleSignin}>login</button>
                <br/><br/>
                <button style = {{width : '100px' , height : '30px' , borderRadius : '5px' , }} onClick = {handleSignup} >signup</button>
                
            </div>
        </div>
    );
}

export default Welcome;