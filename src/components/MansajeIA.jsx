import { View, StyleSheet, Text } from "react-native";


const MensajeIA = ({user, text, fecha} ) =>{
    return(
        <View style={styles.msgText}>
            <Text style={{color: "#303437", fontWeight: "bold"}}> {user} </Text>
            <Text style={styles.text}> {text} </Text>
            <Text style={styles.fecha}> {fecha} hs </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    msgText:{
        backgroundColor: "#F2F4F5",
        borderRadius: 24,
        borderTopLeftRadius: 0,
        justifyContent: "center",
        alignItems: "flex-start",
        padding: 4,
    },

    text:{
        color:"#303437",
        lineHeight: 24,
        fontSize: 20,
        justifyContent: "flex-start",
        padding: 6,
    },

    fecha:{
        color:"#303437",
        fontSize: 10,
        marginLeft: 8,
        textAlign: "right",
    }

});

export default MensajeIA;