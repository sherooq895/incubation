import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import {SidebarData} from '../Sidebar/SidebarData'
import './Navbar.css'
import {IconContext} from 'react-icons'

function Navbar() {
    const [sidebar,setSidebar]=useState(true)

   

  return (
    <div>
       <IconContext.Provider value={{color:'red'}}>
        <div className='navbar'>
            <p className='text-white text-end pt-12 pr-60'>welcome</p>
            <p className='text-white text-end pt-12 pr-40'>Logout</p>
           

           
           
           {/* <Link to="#" className='menu-bars pl-5 '>
          
               <FaIcons.FaBars />
           </Link> */}

        </div>
        <nav className={sidebar ? 'nav-menu active':'nav-menu'}>
            <ul className='nav-menu-items' >
               <li className='navbar-toggle'>
                
                </li> 
                {SidebarData.map((item,index)=>{
                    return(
                        <li key={index} className={item.cName}>
                            <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>

                            </Link>
                        </li>
                    )
                })}


            </ul>
        </nav> 
        </IconContext.Provider>
    </div>
  )
}

export default Navbar