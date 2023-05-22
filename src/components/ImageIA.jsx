import { View, StyleSheet, Text, Image } from "react-native";


const ImageIA = ({text} ) =>{
    return(
        <View style={styles.msgText}>
            <Image  source={{uri: ''+text}}
                    style={{width: 300, height: 300, borderBottomRightRadius:20, borderBottomLeftRadius:20, borderTopRightRadius:20}} 
            />
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


});

export default ImageIA;