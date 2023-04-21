import { View, StyleSheet, Text } from "react-native";


const MensajeUser = ({text} ) =>{
    return(
        <View style={styles.msgText}>
            <Text style={styles.text}> {text} </Text>
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

});

export default MensajeUser;