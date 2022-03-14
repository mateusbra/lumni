import React from "react";
import styles from "../styles/styles";
import Logo from "../assets/logo.png";

function Navbar(){
    return(
        <div style={styles.containerNavBar}>
            <div style={{marginLeft:"7%"}}>
                <a href={"/"} >
                <img style={{height:45}} src={Logo} alt={"Logo"}/>
                </a>
            </div>
            <div style={{marginRight:"7%"}}>
                <a href="#Home" style={styles.linkNavBar}>Home</a>
                <a href="#Servicos" style={styles.linkNavBar}>Serviços</a>
                <a href="#Portfolio" style={styles.linkNavBar}>Portfólio</a>
                <a href="#Contato" style={styles.linkNavBar}>Contato</a>
                {/*<a href="#Loja" style={styles.linkNavBar}>Loja</a>*/}
            </div>
        </div>
    );
}
//a
export default Navbar;