import {
    StyleSheet, 
    View, 
    TextInput, 
    KeyboardAvoidingView, 
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation, useRoute } from "@react-navigation/native";
import { ScrollView } from 'react-native-gesture-handler';
import { useState, useEffect, useRef } from 'react';
//import { useIsFocused } from "@react-navigation/native";

import HeaderBot from '../components/HeaderBot';
import MensajeUser from '../components/MensajeUser';
import MensajeIA from '../components/MansajeIA';


import { getDatabase, ref, onValue, set, push, child } from 'firebase/database';

const ScreenGroup = (prop) => {
    const db = getDatabase();
    const params = useRoute().params;
    const [texto, setTexto] = useState("");
    const [buzon, setBuzon] = useState([]);
    const scrollViewRef = useRef(null);


    const formatearKeyFecha = ( ) =>{

      let dia = ""
      let mes = ""
      let año = ""
      let hora = ""
      let min = ""
      let sec = ""
      let numFinalFecha = ""

      let fechaHora = getCurrentDate().split(" ");

      
      if (fechaHora.length > 0) {
        let soloFecha = fechaHora[0]
        let soloHora = fechaHora[1]


        let horaList = soloHora.split(":")
        if (horaList.length > 0){
          hora = horaList[0]
          min = horaList[1]
          sec = horaList[2]

          if (hora.length == 1){
            hora = "0"+ hora
          }

          if (min.length == 1){
            min = "0"+ min
          }

          if(sec.length ==1){
            sec = "0"+ sec
          }

        }
        
        let fechaList = soloFecha.split("-")
        if (fechaList.length > 0) {
          dia = fechaList[0]
          if(dia.length == 1){
            dia = "0"+dia
          }

          mes = fechaList[1]
          if(mes.length == 1){
            mes = "0"+mes
          }

          año = fechaList[2]

          numFinalFecha = año+mes+dia+hora+min+sec
          
        }

        
      }

      return numFinalFecha
    }

    const getCurrentDate=()=>{
  
        var date = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();
        var hours = new Date().getHours(); //To get the Current Hours
        var min = new Date().getMinutes(); //To get the Current Minutes
        var sec = new Date().getSeconds(); //To get the Current Seconds
  
        //Alert.alert(date + '-' + month + '-' + year);
        // You can turn it in to your desired format
        return date + '-' + month + '-' + year + " " + hours + ":" + min + ":" + sec;//format: d-m-y;
    }

    const getMessages = async() =>{
      //setBuzon([]);
      
      const starCountRef = await ref(db, "messages/");
        onValue(starCountRef, (snapshot)=> {
          let buzon1 = []
          const data = snapshot.val();
          if(data != null){
            const claves = Object.keys(data).map(key=>{
              const valueMsg = data[key]
              
              buzon1 = buzon1.concat({ message: valueMsg.message, user: valueMsg.user, fecha: valueMsg.fecha })
              // setBuzon((messagesUpdated) =>
              //   messagesUpdated.concat({ message: valueMsg.message, user: valueMsg.user, fecha: valueMsg.fecha })
              // );

              
            });
          }
          setBuzon(buzon1)


        })
    };
    

      useEffect(() => {
        getMessages();

      }, []);



      const _addUserMessage = () => {
        if (texto !== "") {
          const email = params.user.email

          const newKey = push(child(ref(db),"messages")).key;

          set(ref(db, 'messages/'+formatearKeyFecha()+newKey), {message: texto, user: email, fecha: getCurrentDate() })
          //getMessages()
          setTexto("");
        }
      };

    const navigation = useNavigation();

    return (
        <View style={styles.body}>
            <HeaderBot 
                canal = "Sala Común"
                activityText = {params.user.email}  
            />
            <KeyboardAvoidingView style={{ flex: 1 }}>
                <ScrollView style={styles.chatContent} ref={scrollViewRef} 
                  onContentSizeChange={() =>
                    scrollViewRef.current.scrollToEnd({ animated: true })
                  } 
                >
                    {buzon.map((texto, index)=> texto.user == params.user.email? (
                            <View
                             key={`msg-${index}`}
                             style={styles.msgUser}>
                                <MensajeUser
                                text={texto.message}
                                fecha={texto.fecha}
                                />
                            </View>
                            
                            ) : (
                                    <View
                                    key={`msg-${index}`}
                                    style={styles.msgIA}>
                                        <MensajeIA
                                        user={texto.user}
                                        text={texto.message}
                                        fecha={texto.fecha}
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

export default ScreenGroup;