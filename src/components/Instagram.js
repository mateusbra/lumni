import React from "react";
import Fundo from "../assets/fundo-insta.png";
import LightHouse from "../assets/parte-2.png";
import styles from "../styles/styles";

function Instagram(){
    return(
      <div style={{width:"100%",height:768,backgroundColor:"#000f40",backgroundImage:`url(${Fundo})`}}>   
        <div style={{...styles.lightHouseContainer,alignSelf:"center"}}>
              <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                  <div style={{color:styles.colors.orange,fontWeight:900,fontSize:70,marginTop:50}}>Nos acompanhe no Instagram</div>
                  <div style={{marginTop:30,color:"white",fontSize:50}}>e fique por dentro do mundo do marketing digital</div>
                  <div style={{marginTop:100,display:"flex",flexDirection:"row"}}>
                    <div style={{height:300,width:350,marginRight:50}}>
                        <img alt={"1"} src={LightHouse} style={{width:"100%",height:"100%"}}></img>
                    </div>
                    <div style={{height:300,width:350,marginRight:50,marginLeft:50}}>
                        <img alt={"2"} src={LightHouse} style={{width:"100%",height:"100%"}}></img>
                    </div>
                    <div style={{height:300,width:350,marginLeft:50}}>
                        <img alt={"3"} src={LightHouse} style={{width:"100%",height:"100%"}}></img>
                    </div>
                    </div>
              </div>
          </div>
      </div>
    );
}

export default Instagram;