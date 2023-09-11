import {
    StyleSheet, 
    View, 
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import {ROUTES} from '../routes/routes';
import { useState } from 'react';
import { useIsFocused } from "@react-navigation/native";

import HeaderBot from '../components/HeaderBot';

import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import FormSocialButton from '../components/FormSocialButton';

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../firebaseConfig';
import { Alert } from 'react-native';


const ScreenSingIn = () => {
    const isFocused = useIsFocused();
    const navigation = useNavigation();

    const _handleLoginSuccess = (user) => {
        navigation.navigate(ROUTES.GROUP, {user});
    };


    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    const handleCreteUser = () => {
        createUserWithEmailAndPassword(auth, email, pass)
        .then(() =>{
            // console.log("User Created!!")
            // Alert.alert("User Created!!")
            // const user = userCredential.user;
            // console.log(user)
            // navigation.navigate(ROUTES.GROUP, {user});
            handleLoginUser();
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
            console.log(user)
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
                    buttonTitle={"SIGN-IN"}
                    handleFunc={handleCreteUser}
                />
                

                

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

export default ScreenSingIn;