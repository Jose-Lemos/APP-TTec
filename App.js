import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

import  PantallaInicio  from "./src/screens/PantallaInicio";
import  PantallaChat  from "./src/screens/PantallaChat";
import { ROUTES } from './src/routes/routes';

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
            </Tab.Navigator>
    </NavigationContainer>
  );
};

