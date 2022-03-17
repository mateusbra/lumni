import React from "react";
import idVisual from "../assets/idvisual.png";
import styles from "../styles/styles";
import { useNavigate } from "react-router-dom";

function Services(){

    let navigate = useNavigate();
    const changeToContact = () =>{ 
        let path = `contato`; 
        navigate(path);
    }

    return(
        <div id="Servicos" style={{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",backgroundColor:styles.colors.orange}}>
            <div style={{display:"inline-flex",width:1366,height:728}}>
            <div style={{marginTop:100,marginLeft:70}}>
                <div style={{color:"#07091d",fontWeight:"bolder",fontSize:70,fontFamily:"FFGoodPro-Bold"}}>Identidade Visual</div>
                <div style={{marginTop:45,color:"white",fontSize:30,maxWidth:520,fontFamily:"FFGoodPro-Regular",}}>Assim como as pessoas, empresas possuem uma aparência própria, uma cara que serve como sua apresentação aos clientes. A identidade visual é essencial para aqueles que desejam se destacar no mundo do marketing.</div>
                <button onClick={changeToContact} style={{...styles.homeButton,marginTop:30}}>FAÇA SEU ORÇAMENTO</button>
            </div>
                <img src={idVisual} alt={"Identidade Visual"} style={{height:728,width:728,float:"right"}} />
            </div>
    </div>
    );
}

export default Services;