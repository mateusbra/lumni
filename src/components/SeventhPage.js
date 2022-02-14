import React from "react";
import personalizados from "../assets/personalizados.png";
import styles from "../styles/styles";

function SeventhPage(){
    return(
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",backgroundColor:"#ef6743"}}>
            <div style={{display:"inline-flex",width:1366,height:728}}>
                <img src={personalizados} alt={"Personalizados"} style={{height:728,width:728,float:"left"}} />
            <div style={{marginTop:100,marginRight:70}}>
                <div style={{color:"#07091d",fontWeight:"bolder",fontSize:70}}>Personalizados</div>
                <div style={{marginTop:45,color:"white",fontSize:30,maxWidth:520}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vulputate solicitudin tellus, in interdum sem facilisis ut. Fusce sit amet orci ipsum. Etiam eget convallis mauris. Proin id</div>
                <button style={{...styles.homeButton,marginTop:30}}>VAMOS COMEÇAR</button>
              </div>
            </div>
    </div>
    );
}

export default SeventhPage;