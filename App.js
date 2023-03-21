import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import Cuadrado from './src/Componentes/Cuadrado';  // debe ser de la misma forma que el export


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.home}>Home</Text>
      <Text style={styles.overview}>Overview</Text>

      <View style = {styles.rectangulo1}>
        <Cuadrado icon="fuego" num="3.921" descriptionNum="blabla">

        </Cuadrado>
        <View style={styles.cuadrado1}>
          <MaterialIcons name="alarm" size={28} color="#0070F0" />
          <Text style={styles.statisticsActivity}>3hs 14min</Text>
          <Text style={styles.descriptionStatistics}>Total Time</Text>
        </View>
        <View style={styles.cuadrado1}>
          <MaterialIcons name="sports-mma" size={28} color="#0070F0" />S
          <Text style={styles.statisticsActivity}>15</Text>
          <Text style={styles.descriptionStatistics}>Exercises</Text>
        </View>
      </View>

      <View style = {styles.containerRectangulos}>
        <View style = {[styles.rectanguloLargo , {backgroundColor: "#FFF9F0"},]}>
          <View style={styles.descriptionContainerActivities}>
            <Text style={styles.activityText}>Push-Ups</Text>
            <Text style={styles.timeActivityText}>Tomorrow 8 AM</Text>
          </View>
          <View style={styles.optionContainerActivity}>
            <Text style={styles.optionActivity1Text}>WARM-UP</Text>
          </View>
        </View>
        

        <View style = {[styles.rectanguloLargo , {backgroundColor: "#F0F0FF"},]}>
          <View style={styles.descriptionContainerActivities}>
            <Text style={styles.activityText}>Workout</Text>
            <Text style={styles.timeActivityText}>Today 2:45 hs</Text>
          </View>
          <View style={styles.optionContainerActivity}>
            <Text style={styles.optionActivity2Text}>FITNESS</Text>
          </View>
        </View>

        <View style = {[styles.rectanguloLargo , {backgroundColor: "#FFF0FD"},]}>
          <View style={styles.descriptionContainerActivities}>
            <Text style={styles.activityText}>Workout</Text>
            <Text style={styles.timeActivityText}>Today 3:00 hs</Text>
          </View>
          <View style={styles.optionContainerActivity}>
            <Text style={styles.optionActivity2Text}>FITNESS</Text>
          </View>
        </View>
      </View>

      <View style={styles.containerNavVar}>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  

  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 30,
    marginHorizontal: 10,
  },

  home:{
    fontWeight: "bold",
    fontSize: 24,
    lineHeight: 32,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    color: "#303437",
  },

  overview:{
    fontSize: 18,
    lineHeight: 24,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    color: "#404446",
    marginBottom: 10,
  },

  rectangulo1:{
    flexDirection: "row",
    justifyContent: "space-between",
  },

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


  rectanguloLargo:{
    width: 390,
    height: 140,
    borderRadius: 24,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
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

  containerNavVar:{
    width: 390,
    height: 80,
    backgroundColor: "gray",
    marginBottom: 10,
    borderRadius: 10,
  },
});
