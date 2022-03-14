import React from "react";
import socialMedia from "../assets/socialmedia.png";
import styles from "../styles/styles";

function SocialMedia(){
    return(
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",backgroundColor:styles.colors.orange}}>
            <div style={{display:"inline-flex",width:1366,height:728}}>
                <img src={socialMedia} alt={"Social Media"} style={{height:728,width:728,float:"left"}} />
            <div style={{marginTop:100,marginRight:70}}>
                <div style={{color:"#07091d",fontWeight:"bolder",fontSize:70}}>Social Media</div>
                <div style={{marginTop:45,color:"white",fontSize:30,maxWidth:520}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vulputate solicitudin tellus, in interdum sem facilisis ut. Fusce sit amet orci ipsum. Etiam eget convallis mauris. Proin id</div>
                <button style={{...styles.homeButton,marginTop:30}}>FAÇA SEU ORÇAMENTO</button>
              </div>
            </div>
    </div>
    );
}

export default SocialMedia;