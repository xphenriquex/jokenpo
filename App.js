import React, {Component} from 'react';
import { View, Text, Button } from 'react-native';  

export default class app3 extends Component {

  constructor(props){
    super(props);

    this.state = 
    { 
        escolhaUsuario : '', 
        escolhaComputador: '' , 
        resultado: ''};
    }

  jokenpo(escolhaUsuario){
    //gera numero aleatorio (0, 1, 2)

    let numAleatorio = Math.floor(Math.random() * 3);
    let escolhaComputador = '';

    switch(numAleatorio){
      case 0: escolhaComputador = 'pedra'; break;
      case 1: escolhaComputador = 'papel'; break;
      case 2: escolhaComputador = 'tesoura'; break;
    }

    if(escolhaComputador == 'pedra'){
        if(escolhaUsuario == 'pedra'){
            resultado = 'Empate';
        }

        if(escolhaUsuario == 'papel'){
          resultado = 'Usuário ganhou';
        }

        if(escolhaUsuario == 'tesoura'){
          resultado = 'Computador ganhour';
      }
    }


  if(escolhaComputador == 'papel'){
      if(escolhaUsuario == 'papel'){
          resultado = 'Empate';
      }

      if(escolhaUsuario == 'tesoura'){
        resultado = 'Usuário ganhou';
      }

      if(escolhaUsuario == 'pedra'){
        resultado = 'Computador ganhour';
    }
  }

  if(escolhaComputador == 'tesoura'){
    if(escolhaUsuario == 'tesoura'){
        resultado = 'Empate';
    }

    if(escolhaUsuario == 'pedra'){
      resultado = 'Usuário ganhou';
    }

    if(escolhaUsuario == 'papel'){
      resultado = 'Computador ganhour';
  }
}

    this.setState({
        escolhaUsuario,
        escolhaComputador,
        resultado
    });
  }

  render () {
    return(
      <View>
        <Text>Escolha do computador: {this.state.escolhaComputador} </Text>
        <Text>Escolha do usuário: {this.state.escolhaUsuario}</Text>
        <Text>Resultado: {this.state.resultado}</Text>
        <Button title="Pedra" onPress={ () => { this.jokenpo('pedra') } } />
        <Button title="Papel" onPress={ () => { this.jokenpo('papel') } } />
        <Button title="Tesoura" onPress={ () => { this.jokenpo('tesoura') } } />
      </View>
    );
  }
}
