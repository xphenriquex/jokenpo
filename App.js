import React, {Component} from 'react';
import Topo from './src/components/Topo';
import Icone from './src/components/Icone';

import { 
  View, 
  Text, 
  Button, 
  StyleSheet,
  ScrollView
} from 'react-native';  

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
    
    let escolhaComputador = '';

    //gera numero aleatorio (0, 1, 2)
    let numAleatorio = Math.floor(Math.random() * 3);
    

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
          resultado = 'Você ganhou';
        }

        if(escolhaUsuario == 'tesoura'){
          resultado = 'Você perder';
      }
    }


    if(escolhaComputador == 'papel'){
        if(escolhaUsuario == 'papel'){
            resultado = 'Empate';
        }

        if(escolhaUsuario == 'tesoura'){
          resultado = 'Você ganhou';
        }

        if(escolhaUsuario == 'pedra'){
          resultado = 'Você perdeu';
      }
    }

    if(escolhaComputador == 'tesoura'){
      if(escolhaUsuario == 'tesoura'){
          resultado = 'Empate';
      }

      if(escolhaUsuario == 'pedra'){
        resultado = 'Você ganhou';
      }

      if(escolhaUsuario == 'papel'){
        resultado = 'Você perdeu';
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
      <ScrollView style={ styles.corpo }>
        
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
          
          <Icone escolha={this.state.escolhaComputador} jogador={'Computador'}></Icone>
          <Icone escolha={this.state.escolhaUsuario} jogador={'Você'}></Icone> 

        </View>

      </ScrollView>
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
    color: 'red',
    paddingTop: 10,
    paddingBottom: 10
  },
  corpo: {
    backgroundColor: '#fff', 
    flex: 1
  }
});