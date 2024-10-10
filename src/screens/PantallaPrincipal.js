import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const PantallaPrincipal = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Pantalla Principal</Text>

            <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
                <Text style={{ color: 'blue', marginTop: 20 }}>Ir a Home Screen</Text>
            </TouchableOpacity>
        </View>
    );
};

export default PantallaPrincipal;
