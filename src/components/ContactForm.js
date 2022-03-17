
import React from "react";
import styles from "../styles/styles";

function ContactForm(){
    return(
        <div style={{display:"flex",flexDirection:"row"}}>
            <a style={{...styles.socialMediaBarContact}} href="https://www.instagram.com/studio_lumni/?hl=pt-br"><i className="fa fa-instagram"></i></a> 
            <a style={{...styles.socialMediaBarContact}} href={"https://api.whatsapp.com/send/?phone=5551999503668&text&app_absent=0"}><i className="fa fa-whatsapp"></i></a>
            <a style={{...styles.socialMediaBarContact}} href={"mailto:diretoria@studiolumni.com"}><i className="fa fa-envelope"></i></a>
        </div>
    );
}

export default ContactForm;