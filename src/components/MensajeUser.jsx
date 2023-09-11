import { View, StyleSheet, Text } from "react-native";


const MensajeUser = ({text, fecha} ) =>{
    return(
        <View style={styles.msgText}>
            <Text style={{color:"#ffffff", padding:2, fontSize: 12, fontWeight: "bold", marginRight: 8}}>YOU:</Text>
            <Text style={styles.text}> {text} </Text>
            <Text style={styles.fecha}> {fecha} hs </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    msgText:{
        backgroundColor: "#0070F0",
        borderRadius: 24,
        borderBottomEndRadius: 0,
        justifyContent: "center",
        alignItems: "flex-end",
        padding: 4,
    },

    text:{
        color:"#FFFFFF",
        lineHeight: 24,
        fontSize: 20,
        justifyContent: "flex-end",
        padding: 6,
    },

    fecha: {
        color:"#FFFFFF",
        fontSize: 10,
        justifyContent: "flex-end",
    }
});

export default MensajeUser;