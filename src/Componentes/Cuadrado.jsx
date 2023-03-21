import {StyleSheet, Text, View } from 'react-native';
import { Fontisto } from '@expo/vector-icons';



const Cuadrado = (prop) => {
    return (
        <View style={styles.cuadrado1}>
            {/*<Fontisto name="fire" size={28} color="#0070F0" />*/}
            <Text style={styles.statisticsActivity}>3.950</Text>
            <Text style={styles.descriptionStatistics}>carl Burnt</Text>
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