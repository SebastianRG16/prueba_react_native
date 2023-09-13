import React from 'react'
import { View, Text, Button, StyleSheet, Image } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack"

type Props = {
    navigation: StackNavigationProp<any, any>;
  };

function DetailsComponents({ navigation }: Props) {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Esta es la pagina de detalles</Text>
        <Image
        source={require('../assets/favicon.png')}
        style={styles.image}
      />
        <View style={styles.buttonContainer}>
            <Button
                title='Ir al inicio'
                onPress={() => navigation.navigate('inicio')}
            />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 20,
      },
    title: {
      fontSize: 24,
      marginBottom: 20,
      textAlign: 'center',
    },
    buttonContainer: {
      marginBottom: 20,
    },
  });

export default DetailsComponents