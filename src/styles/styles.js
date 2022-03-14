const colors = {
    orange:"#F26241",
    salmon:"#F2AA80",
    beige:"#F2C288",
    pink:"#BF455B",
    maroon:"#40061B",
    gray:"#808080",
}

const styles = {
    colors: {
        orange:"#F26241",
        salmon:"#F2AA80",
        beige:"#F2C288",
        pink:"#BF455B",
        maroon:"#40061B",
        gray:"#3F3F3F",
    },
    containerNavBar: {
        display:"flex",
        alignItems:"center",
        width:"100%",
        height:70,
        justifyContent:"space-between",
    },
    containerFooter: {
        display:"flex",
        alignItems:"center",
        width:"100%",
        height:70,
    },
    linkNavBar: {
        marginLeft:20,
        marginRight:20,
        textDecoration:"none",
        color:"#3F3F3F",
    },
    divider: {
        height:20,
        width:"100%",
        backgroundColor:"#002a40",
    },
    homeButton: {
        backgroundColor:colors.beige,
        cursor:"pointer",
        borderRadius:30,
        borderColor:colors.gray,
        border:`1px solid ${colors.gray}`,
        fontSize:25,
        color:"#07091d",
        padding:"9px 28px",
        borderStyle:"solid",
    },
    lightHouseContainer: {
        margin:"auto",
        display:"block",
        height:768,
        width:1366,
    },
    aboutContainer: {
        margin:"auto",
        display:"block",
        height:850,
        width:"100%",
        backgroundSize:"cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition:"center center",
    },
    socialMediaBar: {
        display: "block",
        textAlign: "center",
        padding: 16,
        transition: "all 0.3s ease",
        color: "white",
        fontSize: 20,
    }
};

export default styles;