import { View, StyleSheet, Text, Image } from "react-native";


const ImageUser = ({text} ) =>{
    return(
        <View style={styles.msgText}>
            <Image  source={{uri: ''+text}}
                    style={{width: 300, height: 300, borderBottomLeftRadius: 20, borderTopLeftRadius:20, borderTopRightRadius:20}} 
            />
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


});

export default ImageUser;