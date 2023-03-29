import {StyleSheet, Text, View, Pressable} from 'react-native';

const Rectangulo = (prop) => {
    return (
        <View style = {[styles.rectanguloLargo , {backgroundColor: prop.bckgColor},]}>
          <View style={styles.descriptionContainerActivities}>
            <Text style={styles.activityText}>{prop.titleText}</Text>
            <Text style={styles.timeActivityText}>{prop.descText}</Text>
          </View>
          
            <View style={styles.optionContainerActivity}>
                <Text style={[styles.optionActivity1Text,{color: prop.txtColor}]}>{prop.btnText}</Text>
            </View>

          
        </View>
    );

};

const styles = StyleSheet.create({
    rectanguloLargo:{
        width: 390,
        height: 140,
        borderRadius: 24,
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row",
        marginTop: 10,
        marginBottom: 10,
    },
    
    containerRectangulos:{
        justifyContent: "space-around",
        flex: 1,
    },
    
    descriptionContainerActivities:{
        justifyContent: "space-around",
        height: 55,
    },
    
    activityText:{
        fontSize: 18,
        lineHeight: 24,
        color: "#202325",
        fontWeight:"bold",
    },
    
    timeActivityText:{
        fontSize: 14,
        lineHeight: 14,
        color: "#404446",
    },
    
    optionContainerActivity:{
        backgroundColor: "#FFFFFF",
        width: 100,
        height: 30,
        borderRadius: 48,
        alignItems: "center",
        justifyContent: "center",
    },
    
    optionActivity1Text:{
        fontSize: 14,
        lineHeight: 16,
        color: "#A05E03",
        fontWeight:"bold",
        justifyContent: "center",
    },
    
    optionActivity2Text:{
        fontSize: 14,
        lineHeight: 16,
        color: "#5555CB",
        fontWeight:"bold",
        justifyContent: "center",
    },
});

export default Rectangulo;