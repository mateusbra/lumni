import React from "react";
import styles from "../styles/styles";

function StickSocialMedia(){
    return(
    <div class="icon-bar-stick" style={{position: "fixed",top: "40%",right: "0%",zIndex: 9999}}>
        <a style={{...styles.socialMediaBar,background:"#ea4c89"}} href="https://www.instagram.com/studio_lumni/?hl=pt-br"><i class="fa fa-instagram"></i></a> 
        <a style={{...styles.socialMediaBar,background:"black"}} href="https://www.behance.net/studiolumni"><i class="fa fa-behance"></i></a>
        <a style={{...styles.socialMediaBar,background:"green"}} href={"https://api.whatsapp.com/send/?phone=5551999503668&text&app_absent=0"}><i class="fa fa-whatsapp"></i></a>
        <a style={{...styles.socialMediaBar,background:"red"}} href={"mailto:diretoria@studiolumni.com"}><i class="fa fa-envelope"></i></a>
        <a style={{...styles.socialMediaBar,background:"orange"}} href={"https://goo.gl/maps/DQ6dtqN14QADBM9R6"}><i class="fa fa-map-marker"></i></a>
      </div>
    );
}

export default StickSocialMedia;