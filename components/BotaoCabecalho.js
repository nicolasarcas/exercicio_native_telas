import React from 'react';
import { Platform } from 'react-native';
import Cores from '../constantes/cores';
import { HeaderButton } from 'react-navigation-header-buttons';
import {Ionicons} from '@expo/vector-icons';

// import { Container } from './styles';

const BotaoCabecalho = (props) => {
    return (
        <HeaderButton
            {...props}
            IconComponent={Ionicons}
            iconSize={23}
            color={Platform.OS === 'android' ? 'black' : Cores.primary}
        />
    );
};
export default BotaoCabecalho;