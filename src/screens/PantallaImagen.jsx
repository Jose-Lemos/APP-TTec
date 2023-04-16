import {
    StyleSheet, 
    View, 
    Text,
} from 'react-native';

import HeaderBot from '../components/HeaderBot';

const PantallaImagen = () => {
    return(
        <View style={styles.body}>
            <HeaderBot 
                canal = "Imagen"
                activityText = "Siempre Activo"   
            />
            <Text>Imagen</Text>
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
});

export default PantallaImagen;