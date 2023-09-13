import React from 'react'
import { View, Text, Button, StyleSheet  } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack"

type Props = {
    navigation: StackNavigationProp<any, any>;
  };

  function InitialComponent({ navigation }: Props) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Estás en la pantalla inicial</Text>
        <View style={styles.buttonContainer}>
          <Button
            title='Ir a detalles'
            onPress={() => navigation.navigate('detalles')}
          />
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
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

export default InitialComponent