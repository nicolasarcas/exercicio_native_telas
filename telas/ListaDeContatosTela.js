import React from 'react';
import { View, StyleSheet, Text, Platform } from 'react-native';
import { HeaderButtons, Item, HeaderButton } from 'react-navigation-header-buttons';
import BotaoCabecalho from '../components/BotaoCabecalho';



const ListaDeContatosTela = () => {
  return (
      <View style={styles.viewDeFundo}>
          <Text></Text>
      </View>
  );
}

ListaDeContatosTela.navigationOptions = dadosNav => {
    return {
        
        headerTitle: 'Ir para Lista de Contatos',
        headerRight:
            <HeaderButtons HeaderButtonComponent={BotaoCabecalho}>
                    <Item title="Adicionar"
                            iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
                            onPress={() => { dadosNav.navigation.navigate("NovoContato") }} 
                            />

                    
            </HeaderButtons>
    };
}

const styles = StyleSheet.create({
    viewDeFundo:{
        flex:1,
        backgroundColor: 'pink'
    }

});

export default ListaDeContatosTela;