import React, { useState } from 'react';
// import { View, StyleSheet, Text, Button, TextInput } from 'react-native';
import { StyleSheet, Text, View, TextInput, Button, FlatList, ScrollView } from 'react-native';

import Cores from '../constantes/cores'

// import { Container } from './styles';
 
const NovoContatoTela = (props) => {

  const[nome, setNome] = useState('');
  const[telefone, setTelefone] = useState('');
  const[contato, setContato] = useState([]);
  const[contatos, setContatos] = useState([]);
  const[contadorContatos, setContadorContatos] = useState(0);

  //captura o texto digitado
  const capturarNome = (nome) => {
    setNome(nome);
    setContato([nome, telefone]);
  };

  const capturarTelefone = (telefone) => {
    setTelefone(telefone);
    setContato([nome , telefone]);
  };

//ajuste na função que adiciona contatos
  const adicionarContato = () => {
    
  // setContato([nome, telefone]);
    setContatos ((contatos) =>{
    
    setContadorContatos (contadorContatos + 1);
    
    return [{key: contadorContatos.toString(), value: contato}, ...contatos];;
    } );
  }

  return (
    <ScrollView style={estilos.scrollView}>
      <View style={estilos.viewPrincipal}>
        <View style={estilos.form}>
            <Text style={estilos.titulo}>Novo Contato</Text>
            <Text>Nome: </Text><TextInput style={estilos.textInput} placeholder="Informe seu nome" 
                          onChangeText={capturarNome} values={nome}
                          ></TextInput> 
            <Text>Telefone: </Text><TextInput style={estilos.textInput} placeholder="Informe seu telefone"
                          onChangeText={capturarTelefone} value={telefone}
                          />

            {/* <TiraFoto onFotoTirada={fotoTirada}/> */}
            <View style={estilos.viewBotao}><Button 
                title='Salvar Contato'
                color={Cores.primary}
                onPress={adicionarContato}
            />
            </View>
      </View>
        <View style={estilos.form}>
          <Text style={estilos.titulo}>Contatos Recentes</Text>
          <FlatList 
            data={contatos}
            renderItem={
            contato => (
                /*Aqui será exibida a lista de contatos*/
                <View style={estilos.itemNaLista}>
                  <Text >{contato.item.value[0]}</Text>
                  <Text >{contato.item.value[1]}</Text>
                </View>)
            }
          />
        </View>
      </View>
    </ScrollView>
    
  );
}

NovoContatoTela.navigationOptions = () => {
  return {
      headerTitle: 'Voltar',
  };
}

const estilos = StyleSheet.create({
    scrollView:{
      backgroundColor:'pink',
    },
    viewPrincipal:{
      alignItems:'center'
      
    },
    form:{
        margin: 30,
        width:'70%'
    },
    titulo:{
        fontSize:18,
        marginBottom:15,
    },
    textInput:{
        borderBottomColor:'black',
        borderBottomWidth: 1,
        marginBottom: 15, 
        paddingVertical:4
    },

    itemNaLista: {
      padding: 12,
      backgroundColor: 'lavender',
      borderColor: '#4B0082',
      borderWidth: 1,
      marginBottom: 8,
      borderRadius: 8
    },

    viewBotao:{
      alignItems:'center'
    }
});

export default NovoContatoTela;