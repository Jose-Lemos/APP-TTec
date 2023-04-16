import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

import  PantallaInicio  from "./src/screens/PantallaInicio";
import  PantallaChat  from "./src/screens/PantallaChat";
import { ROUTES } from './src/routes/routes';
import PantallaImagen from './src/screens/PantallaImagen';
import PantallaVoz from './src/screens/PantallaVoz';

const Tab = createBottomTabNavigator();

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
                
              }
            }>
                <Tab.Screen name={ROUTES.HOME} component={PantallaInicio} 
                    options={{
                      tabBarLabel: "Inicio",
                      tabBarIcon:({ color })=>(
                      <MaterialIcons name="home" size={40} color={color} />
                      ),
                    }}  
                />
                <Tab.Screen name={ROUTES.CHAT} component={PantallaChat} 
                    options={{
                      tabBarLabel: "Texto",
                      tabBarIcon:({ color })=>(
                      <MaterialIcons name="chat" size={40} color={color} />
                      ),
                    }}  
                />
                <Tab.Screen name={ROUTES.IMAGE} component={PantallaImagen} 
                    options={{
                      tabBarLabel: "Imagen",
                      tabBarIcon:({ color })=>(
                      <MaterialIcons name="image" size={40} color={color} />
                      ),
                    }}  
                />
                <Tab.Screen name={ROUTES.VOICE} component={PantallaVoz} 
                    options={{
                      tabBarLabel: "Voz",
                      tabBarIcon:({ color })=>(
                      <MaterialIcons name="mic" size={40} color={color} />
                      ),
                    }}  
                />
            </Tab.Navigator>
    </NavigationContainer>
  );
};

