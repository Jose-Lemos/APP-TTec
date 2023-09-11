import {
    StyleSheet, 
    View, 
    Text, 
    TouchableOpacity
} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import {ROUTES} from '../routes/routes';
import { useState, useEffect } from 'react';


import HeaderBot from '../components/HeaderBot';

import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import FormSocialButton from '../components/FormSocialButton';

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../firebaseConfig';
import { Alert } from 'react-native';

import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";

WebBrowser.maybeCompleteAuthSession();

const ScreenLogin = (prop) => {
    const navigation = useNavigation();
    const [accessToken, setAccessToken] = useState(null);
    const [userG, setUserG] = useState(null);
    const [request, response, promtAsync] = Google.useIdTokenAuthRequest({
        clientId: "767909009831-7ims6l6j3j7mbrcts86nnhci3btmuae4.apps.googleusercontent.com",
        //iosClientId: ""
        //androidClientId: ""
    });

    useEffect(()=>{
        if(response?.type === "success"){
            setAccessToken(response.authentication.accessToken);
            accessToken && fetchUserInfo();
        }
    }, [accessToken, response])

    async function fetchUserInfo(){
        let response = await fetch("https://www.googleapis.com/userinfo/v2/me", {
            headers:{
                Autorization: `Bearer ${accessToken}`
            }
        });

        let useInfo = await response.json();
        setUserG(useInfo)
    }

    const _handleSignIn = () => {
        navigation.navigate(ROUTES.SIGNIN);
    }

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const limpiarCampos = () =>{
        setEmail("")
        setPass("")
    }

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    const handleCreteUser = () => {
        createUserWithEmailAndPassword(auth, email, pass)
        .then((userCredential) =>{
            console.log("User Created!!")
            Alert.alert("User Created!!")
            const user = userCredential.user;
            console.log(user)
        })
        .catch(error => {
                console.error(error)
                Alert.alert(error.message)
            })
    }

    const handleLoginUser = () => {
        signInWithEmailAndPassword(auth, email, pass)
        .then((userCredential) =>{
            console.log("Login Success!!")
            Alert.alert("Login Succes!!")
            const user = userCredential.user;
            //console.log(user)
            navigation.navigate(ROUTES.GROUP, {user});
            // _handleLoginSuccess(user)
        })
        .catch(error => {
                console.error(error)
                Alert.alert(error.message)
            })
    }


    return (
        <View style={styles.body}>
            <HeaderBot 
                canal = "Sala Común"
                activityText = "Siempre Activo"   
            />

            <View style={styles.formContainer}>
                <FormInput
                    keyboardType="email-address"
                    labelValue={email}
                    placeholderText={"email"}
                    onChangeText = {(userMail) => setEmail(userMail)}
                />

                <FormInput
                    secureTextEntry={true}
                    labelValue={pass}
                    placeholderText={"password"}
                    onChangeText = {(userPass) => setPass(userPass)}
                />

                <FormButton
                    buttonTitle={"LOGIN"}
                    handleFunc={handleLoginUser}
                />

                
                <TouchableOpacity onPress={_handleSignIn}>
                    <Text style={{textAlign: 'center', marginTop: 8}}> SingIn? create account </Text>
                </TouchableOpacity>

                

                <View
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: StyleSheet.hairlineWidth,
                        marginTop: 50,
                        width: "90%",
                        marginLeft: 18,
                    }}
                />

                <FormSocialButton
                    buttonTitle={"Login with Google"}
                    handleFunc={promtAsync}
                />
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

    formContainer: {
        flex: 1,
        justifyContent: "center",
    },

    buttonContainer: {
        marginTop: 10,
        width: '90%',
        backgroundColor: '#303437',
        marginLeft: 18,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        borderRadius: 30,
        height: 50,
    },
    
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    

});

export default ScreenLogin;