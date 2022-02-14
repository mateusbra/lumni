import React from "react";
import imagem from "../assets/capa-site.png";
//import background from "../assets/logo512.png";
//import styles from "../styles/styles";

function Category(props) {
  return (
    <>
        <div style={{display:"block",height:768,width:"100%",backgroundColor:"#000f40",backgroundImage:`url(${imagem})`,backgroundSize:"cover"}}>
            <div style={{marginLeft:100,marginRight:100,marginTop:50}}>
                <div style={{display:"flex",flexDirection:"column",alignItems:"flex-end"}}>
                  <div>
                    <div style={{color:"#b34903",fontSize:60}}>{props.title}</div>
                    <div style={{color:"white"}}>{props.subtitle}</div>
                  </div>
                </div>
                  
            </div>
        </div>
        
    </>
  );
}

export default Category;