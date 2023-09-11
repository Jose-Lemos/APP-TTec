import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialIcons } from '@expo/vector-icons';
import { View, Text } from 'react-native';

import  PantallaInicio  from "./src/screens/PantallaInicio";
import  PantallaChat  from "./src/screens/PantallaChat";
import { ROUTES } from './src/routes/routes';
import PantallaImagen from './src/screens/PantallaImagen';
import PantallaCamara from './src/screens/PantallaCamara';
import ImageComponent from './src/screens/IMAGE';
import ScreenGroup from './src/screens/ScreenGroup';
import ScreenLogin from './src/screens/ScreenLogin';
import ScreenSingIn from './src/screens/ScreenSingIn';





const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();



const CustomTabBarIcon = ({ focused, iconName, label }) => (
  <View
    style={{
      flexDirection: "row",
      alignItems: "center",
      gap: 5,
      backgroundColor: focused ? "black" : "transparent",
      padding: 10,
      borderRadius: 30,
      height:40,
    }}
  >
    <MaterialIcons name={iconName} size={20} color={focused ? "white" : "#72777A"} />
    {focused && <Text style={{ color: "white" }}>{label}</Text>}
  </View>
);


const ImageRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false,}}>
      <Stack.Screen name='Image' component={PantallaImagen} />
      <Stack.Screen name={ROUTES.CAMERA} component={PantallaCamara} />
    </Stack.Navigator>
  );
}

const ScreenLoginRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false,}}>
      <Stack.Screen name={ROUTES.LOGIN} component={ScreenLogin} />
      <Stack.Screen name={ROUTES.SIGNIN} component={ScreenSingIn} />
      <Stack.Screen name={ROUTES.GROUP} component={ScreenGroup} />
    </Stack.Navigator>
  );
}





export default function App() {
  

  return (
    <NavigationContainer>
            <Tab.Navigator 
              activeColor="#303437"
              inactiveColor="#FFFFFF"
              barStyle={{backgroundColor:"#72777A"}}
            screenOptions={
              {
                headerShown:false,
                tabBarShowLabel: false,
              }
            }>
                <Tab.Screen name={ROUTES.HOME} component={PantallaInicio} 
                    options={{
                      tabBarIcon: ({ focused }) => (
                        <CustomTabBarIcon
                          focused={focused}
                          iconName="home"
                          label="INICIO"
                        />
                      ),
                    }}
                />
                <Tab.Screen name={ROUTES.CHAT} component={PantallaChat} 
                    options={{
                      tabBarIcon: ({ focused }) => (
                        <CustomTabBarIcon
                          focused={focused}
                          iconName="chat"
                          label="TEXTO"
                        />
                      ),
                    }} 
                />
                <Tab.Screen name={ROUTES.IMAGE} component={ImageRoutes} 
                    options={{
                      tabBarIcon: ({ focused }) => (
                        <CustomTabBarIcon
                          focused={focused}
                          iconName="image"
                          label="IMAGEN"
                        />
                      ),
                    }} 
                />

                <Tab.Screen name={"SALA"} component={ScreenLoginRoutes} 
                    options={{
                      tabBarIcon: ({ focused }) => (
                        <CustomTabBarIcon
                          focused={focused}
                          iconName="groups"
                          label="GROUP"
                        />
                      ),
                    }} 
                />
               
            </Tab.Navigator>
    </NavigationContainer>
  );
};

