import { View, StyleSheet } from "react-native";


const Mensaje = (props) =>{
    const borderMsg = () =>{
        if (props.trx == "user"){
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
        <View>
            
        </View>
    );
};

export default Mensaje;