import React, {useContext, useState} from 'react';
import {
    FaBars,
    FaSpellCheck,
    FaVideo,
    FaDumbbell, FaDoorClosed, FaDoorOpen, FaQuestionCircle
} from "react-icons/fa";
import { NavLink} from 'react-router-dom';
import "./styles/sidebar.css"
const Sidebar = () => {
    const[isOpen ,setIsOpen] = useState(false);
    const [nickname, setNickname] = useState("Divergent7")
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
                    <h1 style={{display: isOpen ? "block" : "none"}} className="logo">{nickname}</h1>
                    <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                        <FaBars onClick={toggle}/>
                    </div>
                </div>
                {
                    menuItem.map((item, index)=>(
                        <NavLink  to={item.path} key={index} className="link"
                                 activeclassName="active">
                            <div className="icon">{item.icon}</div>
                            <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                        </NavLink>
                    ))

                }
            <div className="last-btn-container">
                <NavLink to={"/info"} className="link exit" activeclassName="active">
                    <div className="icon"> {<FaQuestionCircle/>}</div>
                    <div style={{display: isOpen ? "block" : "none"}} className="link_text">Exit</div>
                </NavLink>
                <NavLink to={"/exit"} className="link exit" activeclassName="active">
                    <div className="icon"> {<FaDoorOpen/>}</div>
                    <div style={{display: isOpen ? "block" : "none"}} className="link_text">Exit</div>
                </NavLink>
            </div>
            </div>
    );
};
export default Sidebar;