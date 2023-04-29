import {
    StyleSheet, 
    View, 
    TextInput, 
    KeyboardAvoidingView, 
    Button,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import {ROUTES} from '../routes/routes';
import { ScrollView } from 'react-native-gesture-handler';
import { Pressable } from 'react-native';
import { useState, useEffect } from 'react';
import { useIsFocused } from "@react-navigation/native";

import HeaderBot from '../components/HeaderBot';
import MensajeUser from '../components/MensajeUser';
import MensajeIA from '../components/MansajeIA';
import { incrementTextResponsesCount } from '../services/analitycsStorage';

const PantallaChat = (prop) => {
    const [texto, setTexto] = useState("");
    const [buzon, setBuzon] = useState([]);
    const isFocused = useIsFocused();

    const fetchApi = async (message) => {
        try {
          const response = await fetch(
            `https://tnt2023.panaltesting.com.ar/chat?question=${message}`
          );
          const data = await response.json();
          setBuzon((messagesUpdated) =>
            messagesUpdated.concat({ message: data.mensaje, isUser: false })
          );
          if (!data.error) {
            incrementTextResponsesCount();
          } else {
            const mensajeFinal = `ERROR: ${mensajeFinal}`;
          }
        } catch (error) {
          console.log("ERROR", error);
        }
      };
    
      useEffect(() => {
        if (isFocused) {
        }
      }, [isFocused]);

      const _addUserMessage = () => {
        if (texto !== "") {
          setBuzon(buzon.concat({ message: texto, isUser: true }));
          fetchApi(texto);
          setTexto("");
        }
      };

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
                    {buzon.map((texto, index)=> texto.isUser? (
                            <View
                             key={`msg-${index}`}
                             style={styles.msgUser}>
                                <MensajeUser
                                text={texto.message}
                                />
                            </View>
                            
                            ) : (
                                    <View
                                    key={`msg-${index}`}
                                    style={styles.msgIA}>
                                        <MensajeIA
                                        text={texto.message}
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
                            onSubmitEditing={_addUserMessage}
                            >                         
                            </TextInput>
                            <MaterialIcons.Button
                                name="send" 
                                size={24} 
                                color="black"
                                onPress={_addUserMessage}
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
        marginRight: 4,
        marginBottom: 4,
    },

    msgIA:{
        justifyContent: "flex-start",
        alignItems: "flex-start",
        marginLeft: 4,
        marginBottom: 4,
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