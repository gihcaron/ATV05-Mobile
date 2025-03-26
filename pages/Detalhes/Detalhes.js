import React from "react";
import { View, Text, Button, StyleSheet, Image} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function Detalhes ({ navigation }) {
  return (
    <View style={styles.container}>
    <ScrollView>
      <Text style={styles.text}>Tela de Detalhes</Text>
      <Text style={styles.content}>Veja só como o Feneco é Fofo!</Text>

      <Image
                  source={require("../../assets/feneco01.jpg")}
                  style={styles.Image}
      />
      <Image
                  source={require("../../assets/feneco02.jpg")}
                  style={styles.Image}
      />
      <Image
                  source={require("../../assets/feneco03.jpg")}
                  style={styles.Image}
      />
      <Image
                  source={require("../../assets/feneco04.jpg")}
                  style={styles.Image}
      />
      <Image
                  source={require("../../assets/feneco05.jpg")}
                  style={styles.Image}
      />

      <View style={{ marginTop: 20 }}>
        <Button title="Voltar para Home" onPress={() => navigation.goBack()} color="#247D7F" />
      </View>
      
          
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#A2C1C5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
    backgroundColor: '#247D7F',
    padding: 17,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,  
  },

  content: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'justify',
    margin: 20,
    backgroundColor: '#247D7F',
    padding: 17,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,

  },

  Image: {
    width: 300,
    height: 250,
    borderRadius: 10,
    marginTop: 20,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,

  }
});
