import {
    StyleSheet, 
    View, 
    KeyboardAvoidingView,
    ScrollView,
    Text,
    Image,
} from 'react-native';

import { useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';

import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

import { useIsFocused } from "@react-navigation/native";

import HeaderBot from '../components/HeaderBot';
import ImageIA from '../components/ImageIA';
import ImageUser from '../components/ImageUser';
import { ROUTES } from '../routes/routes';

import { incrementImageResponsesCount } from '../services/analitycsStorage';


const PantallaImagen = () => {
    const [selectedImage, setSelectedImage] = useState("");
    const [images, setImages] = useState([]);
    const isFocused = useIsFocused();
    const BASE_URL = "https://tnt2023.panaltesting.com.ar";

    const pickImageAsync = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        quality: 1,
        });

        if (!result.canceled) {
        setSelectedImage(""+result.assets[0].uri);
        _addUserMessage(""+result.assets[0].uri);
        console.log(selectedImage);
        console.log(images);
        } else {
        alert("You did not select any image.");
        }
    };

    const sendImageToChatbot = async (imageUri) => {
        let formData = new FormData();
        formData.append("image", {
          uri: imageUri,
          name: "image.jpg",
          type: "image/jpg",
        });
        const response = await fetch(`${BASE_URL}/image`, {
          method: "POST",
          body: formData,
        });
        const blob = await response.blob();
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(blob);
          reader.onloadend = () => {
            const base64String = reader.result;
            resolve(base64String);
          };
        });
      };


    // const fetchApi = async (img) => {
    //     try {
    //       const response = await fetch(
    //         `https://tnt2023.panaltesting.com.ar/chat?image=${img}`
    //       );
    //       const data = await response.json();
    //       setImages((imagesUpdated) =>
    //         imagesUpdated.concat({ message: data.mensaje, isUser: false })
    //       );
    //       if (!data.error) {
    //         incrementImageResponsesCount();
    //       } else {
    //         const mensajeFinal = `ERROR: ${mensajeFinal}`;
    //       }
    //     } catch (error) {
    //       console.log("ERROR", error);
    //     }
    //   };
    const sendImage = async (imageUri) => {
        const responseImg = await sendImageToChatbot(imageUri);
        incrementImageResponsesCount();
        setImages((images) =>
          images.concat([{ imageUri: responseImg, isUser: false }])
        );
      };
    


      const _addUserMessage = (imageUri) => {
        setImages((images) =>
          images.concat([{ imageUri: imageUri, isUser: true }])  //concat espera una lista
        );
        sendImage(imageUri);
        // if (selectedImage !== "") {
        //   setImages(images.concat({ message: selectedImage, isUser: true }));
        //   //fetchApi(selectedImage);
        //   //setSelectedImage("");
        // }
      };

      useEffect(() => {
        if (isFocused) {
        }
      }, [isFocused]);


    const navigation = useNavigation();

    const _handlePress = () => {
        navigation.navigate(ROUTES.CAMERA);
    };

    return(
        <View style={styles.body}>
            <HeaderBot 
                canal = "Imagen"
                activityText = "Siempre Activo"   
            />

            <KeyboardAvoidingView style={{ flex: 1 }}>
                <ScrollView style={styles.chatContent}>
                    {images.map((texto, index)=> texto.isUser? (  //map espera la definición de una función
                            <View
                             key={`msg-${index}`}
                             style={styles.msgUser}>
                                <ImageUser
                                text={texto.imageUri}
                                />
                            </View>
                            
                            ) : (
                                    <View
                                    key={`msg-${index}`}
                                    style={styles.msgIA}>
                                        <ImageIA
                                        text={texto.imageUri}
                                        />
                                    </View>
                                )
                        )
                    }
                </ScrollView>
            </KeyboardAvoidingView>

            <View style={styles.btn_camera_photo}>
                <MaterialIcons
                 name="photo-camera" 
                 size={28} 
                 color="#FFFFFF" 
                 onPress={_handlePress}
                />
                <MaterialIcons 
                    name="insert-photo"
                    size={28}
                    color="#FFFFFF"
                    onPress={pickImageAsync}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    body:{
        height: "100%",
        justifyContent: "space-between",
        flex:1,
        marginTop: 30,
        backgroundColor: "#FFFFFF",
    },

    btn_camera_photo:{
        flexDirection: "row",
        backgroundColor: "#303437",
        borderRadius: 40,
        width: 100,
        height: 50,
        justifyContent: "space-evenly",
        alignItems: "center",
        alignSelf: "center",
        marginBottom: 8,
    },

    chatContent:{
        flexDirection: "column",
        height: "79%",
        flex:1,
    },

    msgUser:{
        justifyContent: "flex-end",
        alignItems: "flex-end",
        marginRight: 4,
        marginBottom: 4,
    },

    msgIA:{
        justifyContent: "flex-start",
        alignItems: "flex-start",
        marginLeft: 4,
        marginBottom: 4,
    },
});

export default PantallaImagen;