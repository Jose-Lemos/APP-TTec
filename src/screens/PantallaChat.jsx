import {StyleSheet, Text, View, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import {ROUTES} from '../routes/routes';
import { ScrollView } from 'react-native-gesture-handler';
import { Pressable } from 'react-native';

import HeaderBot from '../components/HeaderBot';

const PantallaChat = (prop) => {
    const navigation = useNavigation();

    const _handlePress = () => {
        navigation.navigate(ROUTES.HOME);
    };
    return (
        <View style={styles.body}>
            <HeaderBot 
                canal = "Texto"
                activityText = "Siempre Activo"   
            />

            <ScrollView style={styles.chatContent}>
                <Text>CHAT...</Text>
            </ScrollView>

            <View style={styles.inputContainer}>
                <TextInput style={styles.inpText}></TextInput>
                <MaterialIcons name="send" size={24} color="black" />
            </View>

            
        </View>
    );
};

const styles = StyleSheet.create({
    body:{
        height: "100%",
        justifyContent: "space-between",
        flex:1,
        marginTop: 30,
        backgroundColor: "#FFFFFF",
    },

    txtChat:{
        marginLeft: 10,
    },

    chatContent:{
        flexDirection: "column",
        height: "79%",
    },

    inputContainer:{
        flexDirection: "row", 
        justifyContent: "space-evenly",
        alignItems: "center", 
        marginBottom: 8,
        marginTop: 8,
    },

    inpText:{
        height: 50,
        width: 350,
        borderRadius:20,
        backgroundColor:"#FFFFFF",
        padding: 10,
        borderColor: "#979C9E",
        shadowColor: "#000000",
        shadowOffset: {
          width: 0,
          height: 15,
        },
        shadowOpacity:  0.24,
        shadowRadius: 16.41,
        elevation: 20
    },


});

export default PantallaChat;