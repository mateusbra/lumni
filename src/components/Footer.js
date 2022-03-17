import React from "react";
import styles from "../styles/styles";
import Logo from "../assets/logo.png";

function Footer(){
    return(
        <div style={styles.containerFooter}>
            <div style={{marginLeft:"7%"}}>
                <a href={"/"} >
                    <img style={{height:45}} src={Logo} alt={"Logo"}/>
                </a>
            </div>
            <div style={{marginRight:"36%",textAlign:"center"}}>
                <div>Av. Venâncio Aires, 214 Sala 501 Porto Alegre/RS - 90040-190<br/>(51) 99950-3668 / Studio Lumni™ 2022</div>
            </div>
        </div>
    );
}

export default Footer;