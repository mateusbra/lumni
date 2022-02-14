import React from "react";
import idVisual from "../assets/idvisual.png";
import styles from "../styles/styles";

function FourthPage(){
    return(
        <div id="Servicos" style={{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",backgroundColor:styles.colors.orange}}>
            <div style={{display:"inline-flex",width:1366,height:728}}>
            <div style={{marginTop:100,marginLeft:70}}>
                <div style={{color:"#07091d",fontWeight:"bolder",fontSize:70}}>Identidade Visual</div>
                <div style={{marginTop:45,color:"white",fontSize:30,maxWidth:520}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vulputate solicitudin tellus, in interdum sem facilisis ut. Fusce sit amet orci ipsum. Etiam eget convallis mauris. Proin id</div>
                <button style={{...styles.homeButton,marginTop:30}}>VAMOS COMEÇAR</button>
            </div>
                <img src={idVisual} alt={"Identidade Visual"} style={{height:728,width:728,float:"right"}} />
            </div>
    </div>
    );
}

export default FourthPage;