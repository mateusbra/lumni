import React from "react";
import styles from "../styles/styles";
import Logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

function Navbar(){
    //b
    //c
    //d
    return(
        <div style={styles.containerNavBar}>
            <div style={{marginLeft:"7%"}}>
                <a href={"/"} >
                <img style={{height:45}} src={Logo} alt={"Logo"}/>
                </a>
            </div>
            <div style={{marginRight:"7%"}}>
                <NavLink style={styles.linkNavBar} to="/">Home</NavLink>
                <a href="#Servicos" style={styles.linkNavBar}>Serviços</a>
                <a href="#Portfolio" style={styles.linkNavBar}>Portfólio</a>
                <NavLink style={styles.linkNavBar} to="/contato">Contato</NavLink>
                {/*<a href="#Loja" style={styles.linkNavBar}>Loja</a>*/}
            </div>
        </div>
    );
}
//a
export default Navbar;