import {StyleSheet, Text, View, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import {ROUTES} from './routes';
import { ScrollView } from 'react-native-gesture-handler';
import { Pressable } from 'react-native';

const PantallaChat = (prop) => {
    const navigation = useNavigation();

    const _handlePress = () => {
        navigation.navigate(ROUTES.HOME);
    };
    return (
        <View>
            <View >
                <Text style={styles.txtChat}>Estamos en el Chat</Text>
            </View>

            <ScrollView style={styles.chatContent}>
                <Text>CHAT...</Text>
            </ScrollView>

            <View style={styles.inputContainer}>
                <TextInput style={styles.inpText}></TextInput>
                <MaterialIcons name="send" size={24} color="black" />
            </View>

            <View style={styles.containerNavVar}>
                <Pressable onPress={_handlePress}>
                    <View style = {styles.btnHomeContainerW}>
                        <MaterialIcons name="home" size={30} color="#72777A" />
                        <Text style={[{color: "#72777A"}]}>INICIO</Text>
                    </View>
                </Pressable>
               
                <View style = {styles.btnPress}>
                    <MaterialIcons name="chat" size={24} color="#FFFFFF" />
                </View>
                
                
                <MaterialIcons name="image" size={24} color="#72777A" />
                
                
                <MaterialIcons name="mic" size={24} color="#72777A" />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
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
        marginBottom: 10,
    },

    inpText:{
        height: 50,
        width: 350,
        borderRadius:20,
        backgroundColor:"#FFFFFF",
        padding: 10,
    },

    containerNavVar:{
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        width: 390,
        height: 80,
        backgroundColor: "#FFFFFF",
        marginBottom: 10,
        borderRadius: 24,
        marginLeft: 10,
    
        shadowColor: "#000000",
            shadowOffset: {
              width: 0,
              height: 15,
            },
            shadowOpacity:  0.24,
            shadowRadius: 16.41,
            elevation: 20
      },
    
      btnPress:{
        borderRadius: 40,
        width: 40,
        height: 40,
        backgroundColor: "#72777A",
        justifyContent: "center",
        alignItems: "center",
      },

      btnHomeContainerW:{
        backgroundColor: "#FFFFFF",
        borderRadius: 48,
        width: 110,
        height: 50,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        borderColor: "#72777A",
      },
});

export default PantallaChat;