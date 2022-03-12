import React from "react";
import Sobre from "../assets/sobre.png";
import styles from "../styles/styles";

function About(){
    return(
      <div style={{width:"100%",height:768,backgroundColor:"#000f40"}}>
        <div style={{...styles.aboutContainer,backgroundImage:`url(${Sobre})`}}>
          <div style={{display:"flex",alignItems:"center",justifyContent:"center",marginLeft:340}}>
              <div style={{display:"flex",flexDirection:"column",alignItems:"flex-end"}}>
                <div style={{marginTop:100,maxWidth:700}}>
                  <div style={{color:"#07091d",fontWeight:"bolder",fontSize:70}}>Sobre a Lumni</div>
                  <div style={{marginTop:45,color:"white",fontSize:30}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vulputate solicitudin tellus, in interdum sem facilisis ut. Fusce sit amet orci ipsum. Etiam eget convallis mauris. Proin id gravida im. Aenean mollis leo ut eros suscipit malesuada. Sed quis augue et valit facilisis semper a nec dolor. Integer consectetur tellus vel lacus fermentum,</div>
                  </div>
              </div>
          </div>
      </div>
    </div>
    );
}

export default About;