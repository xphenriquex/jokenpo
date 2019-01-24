import React, {Component} from 'react';
import { View, Text, Button } from 'react-native';  

export default class app3 extends Component {

  constructor(props){
    super(props);

    this.state = { escolhaUsuario : '' };
  }

  jokenpo(escolhaUsuario){
    this.setState({escolhaUsuario});
  }

  render () {
    return(
      <View>
        <Text>Escolha do computador: </Text>
        <Text>Escolha do usuário: {this.state.escolhaUsuario}</Text>
        <Text>Resultado</Text>
        <Button title="Pedra" onPress={ () => { this.jokenpo('pedra') } } />
        <Button title="Papel" onPress={ () => { this.jokenpo('papel') } } />
        <Button title="Tesoura" onPress={ () => { this.jokenpo('tesoura') } } />
      </View>
    );
  }
}
