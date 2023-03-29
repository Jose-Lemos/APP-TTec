import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, ScrollView} from 'react-native';

import {ROUTES} from './src/Componentes/routes';

import PantallaInicio from './src/Componentes/PantallaInicio';
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator, Header } from '@react-navigation/stack';
import PantallaChat from './src/Componentes/PantallaChat';


const Stack = createStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerTitle: "",}}>
        <Stack.Screen name={ROUTES.HOME} component={PantallaInicio}></Stack.Screen>
        <Stack.Screen name={ROUTES.CHAT} component={PantallaChat}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
};

const styles = StyleSheet.create({
  
});
