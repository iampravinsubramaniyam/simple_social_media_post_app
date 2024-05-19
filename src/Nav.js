import React from 'react'
import {Link} from 'react-router-dom';
import './index.css';

const Nav = ({search,setSearch}) => {
    return (
        <nav className = "navBar">
            <form onSubmit = {(e)=>{e.preventDefault()}}>
                <label htmlFor=""></label>

                <input type="text" 
                    onChange = {(e)=>setSearch(e.target.value)}
                    value={search}
                    placeholder = 'search'
                    className = "navInput"
                />

            </form>

            <ul>
                <li><Link to = "/"  className='link'>Home</Link></li>
                <li><Link to = "/newposts" className='link'>Post</Link></li>
                <li><Link to = "/about" className='link'>About</Link></li>
            </ul>
        </nav>
    )
}

export default Nav