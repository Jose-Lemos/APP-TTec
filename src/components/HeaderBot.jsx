import { View, Text, StyleSheet } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';

const HeaderBot = ({activityText, canal}) => {
    return(
        <View style={styles.container}>
            <FontAwesome5 name="arrow-alt-circle-left" size={50} color="#72777A" />
            <View style={styles.containRobot}>
                <FontAwesome5 name="robot" size={30} color="#0070F0" />
            </View>
            
            <View>
                <Text>Canal de {canal}</Text>
                <View style={styles.state}>
                    <View style={[styles.circleActivity, {backgroundColor: "#7DDE86"}]}>

                    </View>
                    <Text style={styles.textActivity}>{ activityText }</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        gap: 30,
        alignItems: "center",
        margin: 20,
    }, 

    containRobot:{
        height: 50,
        width: 50,
        borderRadius: 50,
        backgroundColor: "#F2F8FF",
        justifyContent: "center",
        alignItems: "center",
    },

    state:{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },

    circleActivity:{
        marginRight: 4,
        height: 10,
        width: 10,
        borderRadius: 10,
    },

    textActivity:{
        fontSize: 12,
        color: "#72777A",
        lineHeight: 16,
    },
});

export default HeaderBot;