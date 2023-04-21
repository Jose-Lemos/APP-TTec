import { View, StyleSheet, Text } from "react-native";


const MensajeIA = ({text} ) =>{
    return(
        <View style={styles.msgText}>
            <Text style={styles.text}> {text} </Text>
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

});

export default MensajeIA;