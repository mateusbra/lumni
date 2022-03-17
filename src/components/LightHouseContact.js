import React from "react";
import Lighthouse from "../assets/capa-site.png";
import styles from "../styles/styles";
import ContactForm from "./ContactForm";

function LightHouseContact(){
    return(
      <div style={{width:"100%",height:768,backgroundColor:"#00112c"}}>
        <div id="Home" style={{...styles.lightHouseContainer,backgroundImage:`url(${Lighthouse})`,backgroundSize:"cover"}}>
          <div style={{marginLeft:100}}>
              <div style={{display:"flex",flexDirection:"column"}}>
                <div style={{marginTop:200,width:440}}>
                  <div style={{color:styles.colors.orange,fontSize:70,fontFamily:"FFGoodPro-Bold"}}>FALE CONOSCO</div>
                  <ContactForm />
                  <div style={{color:styles.colors.orange,fontSize:35,fontFamily:"FFGoodPro-Bold"}}>OU, SE PREFERIR, VISITE-NOS</div>
                  <div style={{marginTop:70,textAlign:"center"}}>
                    <div style={{color:"white",fontSize:22,fontFamily:"FFGoodPro-Regular"}}>Av. Venâncio Aires, 214 Sala 501 Porto Alegre/RS 90040-190<br/>(51) 99950-3668 / Studio Lumni™ 2022</div>
                  </div>
                </div>
              </div> 
          </div>
      </div>
    </div>
    );
}

export default LightHouseContact;