import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { View, Text } from 'react-native';

import  PantallaInicio  from "./src/screens/PantallaInicio";
import  PantallaChat  from "./src/screens/PantallaChat";
import { ROUTES } from './src/routes/routes';
import PantallaImagen from './src/screens/PantallaImagen';
import PantallaVoz from './src/screens/PantallaVoz';

const Tab = createBottomTabNavigator();

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
                <Tab.Screen name={ROUTES.IMAGE} component={PantallaImagen} 
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
                <Tab.Screen name={ROUTES.VOICE} component={PantallaVoz} 
                    options={{
                      tabBarIcon: ({ focused }) => (
                        <CustomTabBarIcon focused={focused} iconName="mic" label="VOZ" />
                      ),
                    }}
                />
            </Tab.Navigator>
    </NavigationContainer>
  );
};

