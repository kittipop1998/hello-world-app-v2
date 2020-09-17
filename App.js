import React,{useState} from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  Image, 
  TextInput, 
  Button,} from 'react-native';

export default function App() {
  const [ input, setInput] = useState('')
  const [color, setColor] = useState('Red')
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{ uri: 'https://www.igeargeek.com/_nuxt/img/835647d.png'}}/> 
        <Text style={styles.title}>Hello World</Text>
        <TextInput value={input}
        onChangeText = {(text) => {setInput(text)}}
        placeholder="Input here" style={styles.input} />
        <Text style={{fontSize:18, marginTop:20, color: color}}
        >
          {input}
          </Text>
        <View style={styles.buttonLayout}>
          <Button title="Red" color="red" onPress={() => {setColor('red')}}/>
          <Button title="Blue" color="blue"onPress={() => {setColor('blue')}} />
          <Button title="Green" color="green" onPress={() => {setColor('green')}}/>
        </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding : 30
  },
  logo: {
    width: 150,
    height: 150,
  },
  title:{
    'fontSize':24,
    fontWeight:'bold',
    marginTop:20,
  },
  input:{
    height: 40,
    borderColor:'gray',
    borderStyle:'solid',
    borderWidth :1,
    width: '100%',
    marginTop: 20,
  },
  buttonLayout: {
    flexDirection: 'row',
    marginTop: 20,

  },
});