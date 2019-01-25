import React, {Component} from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';  

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
          resultado = 'Computador ganhou';
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
        resultado = 'Computador ganhou';
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
      resultado = 'Computador ganhou';
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
        
        <Topo></Topo>

        <View style={styles.painelAcoes}>

          <View style={styles.btnEscolha}>
            <Button title="Pedra" onPress={ () => { this.jokenpo('pedra') } } />
          </View>
          
          <View style={styles.btnEscolha}>
            <Button title="Papel" onPress={ () => { this.jokenpo('papel') } } />
          </View>
          
          <View style={styles.btnEscolha}>
            <Button title="Tesoura" onPress={ () => { this.jokenpo('tesoura') } } />
          </View>

        </View>

        <View style={styles.palco}>
          <Text style={styles.txtResultado}>{this.state.resultado}</Text>
          <Text>Escolha do computador: {this.state.escolhaComputador} </Text>
          <Image source={require('./imgs/tesoura.png')} />
          
          <Text>Escolha do usuário: {this.state.escolhaUsuario}</Text>
          <Image source={require('./imgs/tesoura.png')} />
        </View>

      </View>
    );
  }

}

class Topo  extends Component {
  render(){
    return (
      <View>
        <Image source={ require('./imgs/jokenpo.png') } />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  btnEscolha: {
    width: 90,
  },
  painelAcoes: {
    flexDirection:'row', 
    justifyContent: 'space-around', 
    paddingVertical: 10  
  },
  palco: {
    alignItems: 'center'
  },
  txtResultado: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red'
  }
});