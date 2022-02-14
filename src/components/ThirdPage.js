import React from "react";
import Lighthouse3 from "../assets/parte-3.png";
import styles from "../styles/styles";

function ThirdPage(){
    return(
        <div style={{display:"block",height:768,width:"100%",backgroundColor:"#000f40",backgroundImage:`url(${Lighthouse3})`,backgroundSize:"cover"}}>
            <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                <div style={{marginTop:100,maxWidth:1040}}>
                    <div style={{color:"white",textAlign:"center",fontSize:30}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vulputate solicitudin tellus, in interdum sem facilisis ut. Fusce sit amet orci ipsum. Etiam eget convallis mauris. Proin id gravida im. Aenean mollis leo ut eros suscipit malesuada. Sed quis augue et valit facilisis semper a nec dolor. Integer</div>
                    <button style={{...styles.homeButton,display:"flex",margin:"210px auto 0"}}>VAMOS COMEÇAR</button>
              </div>
            </div>
    </div>
    );
}

export default ThirdPage;