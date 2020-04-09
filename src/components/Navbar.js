import React from "react";
import{ NavLink } from "react-router-dom";


export default function Navbar(){
    return(

        <nav className="container" style={{
            backgroundColor: "#7b79f1",
            height:"50px",
            position:"fixed",
            // marginTop: "1px"
           
            

            

        }}>  <a href="#contact"><button className="btn info" style={{
            marginRight:"1px",
            marginTop:"6px",
             float: "right" }}>Contact</button></a>

            <NavLink to="/" ><button style={{
                marginRight:"1px",
                marginTop:"6px",
                float: "right" 
               }} className="btn info">Portfolio</button></NavLink>
            
            <a href="#story"><button style={{
                 marginRight:"1px",
                marginTop:"6px",
             float: "right"}} className=" btn info">Story</button></a>
            
           
        </nav>
    )
}