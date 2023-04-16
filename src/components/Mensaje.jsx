import { View, StyleSheet, Text } from "react-native";


const Mensaje = ({emisor, text} ) =>{
    const borderMsg = () =>{
        if (emisor == "user"){
            return(
                StyleSheet.create({
                    msgText:{
                        backgroundColor: "#0070F0",
                        borderRadius: 24,
                        borderBottomEndRadius: 0,
                        justifyContent: "flex-end",
                        alignItems: "center",
                    }
                }
            ));
        }
        else{
            return(
                StyleSheet.create({
                    msgText:{
                        backgroundColor: "#F2F4F5",
                        borderRadius: 24,
                        borderTopLeftRadius: 0,
                        justifyContent: "flex-start",
                        alignItems: "center",
                    }
                }
            ));
        }
    };
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
    },

    text:{
        color:"#FFFFFF",
        lineHeight: 24,
        fontSize: 20,
        justifyContent: "flex-end",
        padding: 6,
    },

});

export default Mensaje;