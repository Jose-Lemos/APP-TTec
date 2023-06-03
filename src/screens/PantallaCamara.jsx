import { useNavigation, useRoute } from "@react-navigation/native";
import { Camera, CameraType } from 'expo-camera';
import { useState, useRef } from 'react';
import { manipulateAsync } from "expo-image-manipulator";
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

import HeaderBot from '../components/HeaderBot';

const PantallaCamara = () => {
    const navigation = useNavigation();
    const params = useRoute().params;
    const [image, setImage] = useState(null);
    const camera = useRef(null);
    const [type, setType] = useState(CameraType.back);
    const [permission, requestPermission] = Camera.useCameraPermissions();
    

    const takePicture = async () => {
        if (camera.current) {
          const data = await camera.current.takePictureAsync();
          const resized = await manipulateAsync(data.uri, [
            { resize: { height: 400 } },
          ]);
          setImage(resized.uri);
          params?._addUserMessage(resized.uri);
          navigation.goBack();
        } else {
          console.warn("Cámara no lista");
        }
      };

    if (!permission) {
        // Camera permissions are still loading
        return <View />;
      }
    
      if (!permission.granted) {
        // Camera permissions are not granted yet
        return (
          <View style={styles.container}>
            <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
            <Button onPress={requestPermission} title="grant permission" />
          </View>
        );
      }
    
      function toggleCameraType() {
        setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
      }
    
    return(
        <View style={styles.body}>
            <HeaderBot 
                canal = "Camara"
                activityText = "Siempre Activo"   
            />
            <View style={styles.container}>
                <Camera style={styles.camera} type={type} ref={camera}>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button} onPress={takePicture}>
                            <Ionicons name="radio-button-off-sharp" size={80} color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
                            <Entypo name="back-in-time" size={40} color="black" />
                        </TouchableOpacity>

                        
                    </View>
                </Camera>
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

    container: {
        flex: 1,
        justifyContent: 'center',
    },

    camera: {
        flex: 1,
    },
    
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        margin: 64,
    },
    
    button: {
        flex: 1,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
});

export default PantallaCamara;