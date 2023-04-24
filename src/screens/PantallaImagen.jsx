import {
    StyleSheet, 
    View, 
    Text
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

import HeaderBot from '../components/HeaderBot';
import { ROUTES } from '../routes/routes';

const PantallaImagen = () => {
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
            <View style={styles.btn_camera_photo}>
                <MaterialIcons
                 name="photo-camera" 
                 size={28} 
                 color="#FFFFFF" 
                 onPress={_handlePress}
                 />
                <MaterialIcons name="insert-photo" size={28} color="#FFFFFF" />
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
    }
});

export default PantallaImagen;