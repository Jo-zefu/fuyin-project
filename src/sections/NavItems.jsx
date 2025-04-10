import {navLinks} from "../constants";
import Button from "../components/Button.js";
import React from "react";
import {cn} from "../../lib/utils.js";

function NavItems({setClose}) {
    return (
       <ul className="nav-ul">
         {
           navLinks.map(({id, name, href}) => (
             <li key={id} className="nav-li">{
               name !== "Contact" ?
                 <a href={href} className="nav-li_a" onClick={(e) =>{
                   setClose();
                 }}>{name}</a>:
                 <a href={href} onClick={(e) =>{
                   setClose();
                 }}><Button text="Contact Us" /></a>
             }</li>))}
       </ul>
    )
}

export default NavItems
