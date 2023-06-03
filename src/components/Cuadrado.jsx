import {StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';



const Cuadrado = (prop) => {
    return (
        <View style={styles.cuadrado1}>
            <Text><MaterialIcons name={prop.icon} size={24} color={prop.color} /></Text>
            <Text style={styles.statisticsActivity}>{prop.num}</Text>
            <Text style={styles.descriptionStatistics}>{prop.descriptionNum}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    cuadrado1:{
        width: 118,
        height: 118,
        backgroundColor: "#FFFFFF",
        borderRadius: 24,
        borderColor: "cyan",
        padding: 18,
        justifyContent: "space-around",
    
        
        shadowColor: "#000000",
        shadowOffset: {
          width: 0,
          height: 15,
        },
        shadowOpacity:  0.24,
        shadowRadius: 16.41,
        elevation: 20
    },

    statisticsActivity:{
        fontSize: 14,
        lineHeight: 20,
        color: "#303437",
        fontWeight: "bold",
      },
    
    descriptionStatistics:{
        fontSize: 12,
        lineHeight: 16,
        color: "#72777A",
    },
});



export default Cuadrado;