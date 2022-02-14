import React from "react";
import Lighthouse2 from "../assets/parte-2.png";
import styles from "../styles/styles";

function LightHouse2(){
    return(
      <div style={{width:"100%",height:768,backgroundColor:"#000f40"}}>
        <div style={{...styles.lightHouseContainer,backgroundImage:`url(${Lighthouse2})`,backgroundSize:"cover"}}>
          <div style={{marginRight:100}}>
              <div style={{display:"flex",flexDirection:"column",alignItems:"flex-end"}}>
                <div style={{marginTop:100,maxWidth:700}}>
                  <div style={{color:styles.colors.orange,fontWeight:"bolder",fontSize:70}}>Digitalize seu negócio</div>
                  <div style={{color:"white",fontWeight:"bolder",fontSize:43}}>e veja os resultados acontecerem</div>
                  <div style={{marginTop:45,color:"white",fontSize:30}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vulputate solicitudin tellus, in interdum sem facilisis ut. Fusce sit amet orci ipsum. Etiam eget convallis mauris. Proin id gravida im. Aenean mollis leo ut eros suscipit malesuada. Sed quis augue et valit facilisis semper a nec dolor. Integer consectetur tellus</div>
                </div>
              </div>
          </div>
      </div>
    </div>
    );
}

export default LightHouse2;