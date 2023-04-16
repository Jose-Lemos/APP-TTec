import {
    StyleSheet, 
    View, 
    TextInput, 
    KeyboardAvoidingView, 
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import {ROUTES} from '../routes/routes';
import { ScrollView } from 'react-native-gesture-handler';
import { Pressable } from 'react-native';
import { useState } from 'react';

import HeaderBot from '../components/HeaderBot';
import Mensaje from '../components/Mensaje';

const PantallaChat = (prop) => {
    const [texto, setTexto] = useState("");
    const [buzon, setBuzon] = useState([]);

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
            <KeyboardAvoidingView style={{ flex: 1 }}>
                <ScrollView style={styles.chatContent}>
                    {buzon.map((texto)=>(
                            <View style={styles.msgUser}>
                                <Mensaje
                                emisor="user"
                                text={texto}
                                />
                            </View>
                            
                            )
                        )
                    }
                </ScrollView>
                    
                        <View style={styles.inputContainer}>
                            <TextInput 
                            placeholder="Escribe un mensaje" 
                            value={texto}  
                            onChangeText = {setTexto}
                            style={styles.inpText}
                            onEndEditing={()=>{
                                setBuzon(buzon.concat(texto));
                                setTexto("");
                            }}
                            >                         
                            </TextInput>
                            <MaterialIcons.Button
                                name="send" 
                                size={24} 
                                color="black"
                                onPress={()=>{
                                    setBuzon(buzon.concat(texto));
                                    setTexto("");
                                }}
                            />
                        </View>
                
            </KeyboardAvoidingView>
            
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
        flex:1,
    },

    msgUser:{
        justifyContent: "flex-end",
        alignItems: "flex-end",
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