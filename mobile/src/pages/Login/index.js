import React, {useState, useCallback} from 'react';
import {Form, View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from  '@react-navigation/native';

import Home from '../Lead Aberto/index';
import Styles from './styles';

import api from '../../services/api';
import RoutesState from '../../routes';

import {AuthContext} from '../context';


function Login(){


    const [id, setId] = useState('');

    const {SignIn} = React.useContext(AuthContext);

    async function handleIdLogin(){

        const data = {id};
        console.log(data);
        
        try{

            const login = await api.post('login', data);

            if(login){

               await AsyncStorage.setItem('STORAGE_KEY', id);
               SignIn();

            } else{

             Alert.alert('Oooops...','(500)Houve um erro inesperado :(');

            }  

        }catch{

            Alert.alert(':(','ID não encontrada!')
        }
    } 

    return (

        <View style={Styles.background}>

            <Text style={Styles.textTitle}>
                Welcome!
            </Text>
            <TextInput
            value={id}
            onChangeText={(id) => setId(id)}
            style={Styles.Inputs}
            />

            <TouchableOpacity style={Styles.Button} onPress={handleIdLogin}>
                <Text style={Styles.textButton}>
                    Entrar 
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.NoIdButton} onPress={() => {Alert.alert('Ainda não tem sua ID? O_o','Peça ao gerente comercial que gere uma ID para você. É bem rápido!! :D')}}>
                <Text style={Styles.textButton2}>
                    Não tenho uma ID de Assessor :(
                </Text>
            </TouchableOpacity>

        </View>

    );


}

export default Login;