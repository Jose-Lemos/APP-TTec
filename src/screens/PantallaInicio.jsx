import { SafeAreaView, StyleSheet, Text, View, ScrollView, Pressable} from 'react-native';
import {useIsFocused, useNavigation } from "@react-navigation/native";
import {ROUTES} from '../routes/routes';
import { getTextResponsesCount } from '../services/analitycsStorage';
import { getImageResponsesCount } from '../services/analitycsStorage';

import Cuadrado from '../components/Cuadrado';  // debe ser de la misma forma que el export
import Rectangulo from '../components/Rectangulo';
import { useEffect, useState } from 'react';



const PantallaInicio =  () => {
  const isFocused = useIsFocused();
  const navigation = useNavigation();
  const [analalyticsCount, setAnalalyticsCount] = useState([]);

  const _handlePressChat = () => {
    navigation.navigate(ROUTES.CHAT);
  };

  const _handlePressImage = () => {
    navigation.navigate(ROUTES.IMAGE);
  };

  const _handlePressSala = () => {
    try{
      navigation.navigate(ROUTES.GROUP);
    }catch (error){
      navigation.navigate(ROUTES.LOGIN);
    }
    
  };

  
  const getCountValues = async () => {
    const textCount = await getTextResponsesCount();
    const imageCount = await getImageResponsesCount();
    setAnalalyticsCount([
      {
        key: "textCount",
        icon: "chat",
        num: textCount,
        descriptionNum: "Rtas gen.",
        color: "#0070F0",
      },
      {
        key: "imageCount",
        icon: "image",
        num: imageCount,
        descriptionNum: "Img. gen.",
        color: "#0070F0",
      },
    ]);
  };
  
  useEffect(() => {
    if (isFocused) {
      getCountValues();
    }
  }, [isFocused]);
  
  return (
    <View style={styles.container}>
      <Text style={styles.home}>Inicio</Text>
      <Text style={styles.overview}>Resumen</Text>

      <View style = {styles.rectangulo1}>
        {analalyticsCount.map((item) => (
            <Cuadrado {...item} />
          ))}
        {/*
        <Cuadrado icon="chat" num={textCount} descriptionNum="Rtas gen" color="#0070F0"></Cuadrado>
        <Cuadrado icon="image" num="1.000" descriptionNum="Img gen" color="#0070F0"></Cuadrado>
        <Cuadrado icon="mic" num="15" descriptionNum="Trad. real" color="#0070F0"></Cuadrado>/*}
        {/*<View style={styles.cuadrado1}>
          <Text><MaterialIcons name="alarm" size={28} color="#0070F0" /></Text>
          <Text style={styles.statisticsActivity}>3hs 14min</Text>
          <Text style={styles.descriptionStatistics}>Total Time</Text>
        </View>
        <View style={styles.cuadrado1}>
          <Text><MaterialIcons name="sports-mma" size={28} color="#0070F0" /></Text>
          <Text style={styles.statisticsActivity}>15</Text>
          <Text style={styles.descriptionStatistics}>Exercises</Text>
        </View>*/}
      </View>


      <ScrollView style = {styles.containerRectangulos}>
        <Pressable onPress={_handlePressChat}>
          <Rectangulo bckgColor="#FFF9F0" titleText="Canal de Texto" descText="Chatea con la IA" txtColor="#A05E03" btnText="CHATEÁ" ></Rectangulo>
        </Pressable>
        
        <Pressable onPress={_handlePressImage}>
          <Rectangulo bckgColor="#F0F0FF" titleText="Canal de Imagen" descText="Imágenes desde Imágenes" txtColor="#5555CB" btnText="CREÁ" ></Rectangulo>
        </Pressable>
        <Pressable onPress={_handlePressSala}>
          <Rectangulo bckgColor="#FFF0FD" titleText="Canal de Sala Común" descText="Sala común de chat" txtColor="#5555CB" btnText="COMPARTE" ></Rectangulo>
        </Pressable>
        
        {/*<View style = {[styles.rectanguloLargo , {backgroundColor: "#FFF9F0"},]}>
          <View style={styles.descriptionContainerActivities}>
            <Text style={styles.activityText}>Canal de Texto</Text>
            <Text style={styles.timeActivityText}>Chatea con la IA</Text>
          </View>
          <View style={styles.optionContainerActivity}>
            <Text style={styles.optionActivity1Text}>CHATEÁ</Text>
          </View>
        </View>


        <View style = {[styles.rectanguloLargo , {backgroundColor: "#F0F0FF"},]}>
          <View style={styles.descriptionContainerActivities}>
            <Text style={styles.activityText}>Canal de Imagen</Text>
            <Text style={styles.timeActivityText}>Imágenes desde Imágenes</Text>
          </View>
          <View style={styles.optionContainerActivity}>
            <Text style={styles.optionActivity2Text}>CREÁ</Text>
          </View>
        </View>

        <View style = {[styles.rectanguloLargo , {backgroundColor: "#FFF0FD"},]}>
          <View style={styles.descriptionContainerActivities}>
            <Text style={styles.activityText}>Canal de Voz</Text>
            <Text style={styles.timeActivityText}>Convertí tu voz a texto</Text>
          </View>
          <View style={styles.optionContainerActivity}>
            <Text style={styles.optionActivity2Text}>HABLÁ</Text>
          </View>
        </View>*/}
      </ScrollView>

      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 30,
    marginHorizontal: 10,
    backgroundColor: "#FFFFFF",
  },

  home:{
    fontWeight: "bold",
    fontSize: 24,
    lineHeight: 32,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    color: "#303437",
    marginLeft: 8,
  },

  overview:{
    fontSize: 18,
    lineHeight: 24,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    color: "#404446",
    marginBottom: 10,
    marginLeft: 8,
  },

  rectangulo1:{
    flexDirection: "row",
    justifyContent: "space-around",
  },

  containerRectangulos:{
    flex: 1,
    marginTop: 10,
  },

  
});

export default PantallaInicio;