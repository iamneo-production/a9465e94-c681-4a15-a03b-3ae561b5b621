import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/login.css'

function Navbar(props) {
    const [links , setLinks] = useState([])
    useEffect(() => {
        const newLinks = [] ; 
        let count = 0 ;

        for(let [link , text] of props.links){
            newLinks.push(<div key = {count++} className='navbarLinkStyle' ><Link to = {link} >{text}</Link></div>);
        }

        //console.log(props.links);
 
        setLinks(newLinks);
    } , [])
    return (
        <div className='navbarStyle'>
            {links}
        </div>
    );
}

export default Navbar;