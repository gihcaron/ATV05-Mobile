import { StyleSheet, Text, View, Image, Button } from 'react-native'
import React from 'react'

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Conheça o Feneco! 🗺 </Text>

      {/* <Image
            source={require("./assets/imagem-1.jpg")}
            style={styles.Image}
        /> */}
    
    <Text style={styles.content}>O feneco, ou raposa-do-deserto, é um pequeno mamífero adaptado ao clima árido do Saara, conhecido por suas grandes orelhas que ajudam na dissipação do calor e na audição apurada.</Text>

    <Button title="Ir para Detalhes" onPress={() => navigation.navigate('Detalhes')} color="red" />
    

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A2C1C5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
  },

  Image: {
    width: 270,
    height: 340,
    borderRadius: 10,
    marginTop: 20,
  }

  


});