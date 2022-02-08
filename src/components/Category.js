import React from "react";
import styles from "../styles/styles";

function Category(props) {
  return (
    <>
        <div style={{display:"inline-block",height:800,width:"100%",backgroundColor:"#000f40",boxSizing:"border-box",border:"1px solid aqua"}}>
            <div style={{marginLeft:100,marginRight:100,marginTop:50}}>
                <h1 style={{color:"#b34903"}}>{props.title}</h1>
                <h4 style={{color:"white",maxWidth:400}}>{props.subtitle}</h4>
                <h6 style={{color:"white"}}>{props.content}</h6>
            </div>
        </div>
        
    </>
  );
}

export default Category;