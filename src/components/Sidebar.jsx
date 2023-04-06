import React, { useState } from 'react';
import {
    FaBars,
    FaSpellCheck,
    FaVideo,
    FaDumbbell
} from "react-icons/fa";
import {Link, NavLink} from 'react-router-dom';

const Sidebar = () => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/dictionary",
            name:"Dictionary",
            icon:<FaSpellCheck/>
        },
        {
            path:"/trainers",
            name:"Train",
            icon:<FaDumbbell/>
        },
        {
            path:"/videos",
            name:"Videos",
            icon:<FaVideo/>
        },

    ]
    return (
            <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
                <div className="top_section">
                    <h1 style={{display: isOpen ? "block" : "none"}} className="logo">English Trainer</h1>
                    <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                        <FaBars onClick={toggle}/>
                    </div>
                </div>
                {
                    menuItem.map((item, index)=>(
                        <Link to={item.path} key={index} className="link" activeclassName="active">
                            <div className="icon">{item.icon}</div>
                            <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                        </Link>
                    ))
                }
            </div>
    );
};
export default Sidebar;