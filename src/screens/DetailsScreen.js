import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const DetailsScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Pantalla Principal')}>
                <Text style={{ color: 'blue', marginTop: 20 }}>Ir a PantallaPrincipal</Text>
            </TouchableOpacity>
        </View>
    );
};

export default DetailsScreen;
