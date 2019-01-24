import React, {Component} from 'react';
import { View, Text, Button } from 'react-native';  

export default class app3 extends Component {

  constructor(props){
    super(props);
  }

  render () {
    return(
      <View>
        <Text>Escolha do computador</Text>
        <Text>Escolha do usuário</Text>
        <Text>Resultado</Text>
        <Button title="Pedra" />
        <Button title="Papel" />
        <Button title="Tesoura" />
      </View>
    );
  }
}
