import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, TouchableOpacity } from 'react-native';
import PantallaPrincipal from './src/screens/PantallaPrincipal';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="PantallaPrincipal">
                <Stack.Screen
                    name="PantallaPrincipal"
                    component={PantallaPrincipal}
                    options={{ title: 'Pantalla Principal' }}
                />
                  <Stack.Screen
                   name="HomeScreen"
                   component={HomeScreen}
                   options={({ navigation }) => ({
                   title: 'Home Screen',
                  headerStyle: { backgroundColor: 'blue'}, headerTitleAlign: 'center', headerLeft: () => (
                  <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Text style={{ color: 'white', marginLeft: 10 }}>Volver</Text>
                </TouchableOpacity>
            ),
           })}
                 />

              <Stack.Screen
                    name="DetailsScreen"
                    component={DetailsScreen}
                    options={({ navigation }) => ({
                        title: 'Details Screen',
                        headerLeft: () => (
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Text style={{ color: 'blue', marginLeft: 10 }}>Volver</Text>
                            </TouchableOpacity>
                        ),
                    })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
