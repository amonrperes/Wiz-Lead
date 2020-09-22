import React, {useEffect, useState } from 'react';
import {FlatList,Button, AsyncStorage, TouchableOpacity, View, Text, Linking, Alert} from 'react-native';

import Styles from './styles';

import api from '../../services/api';

import {AuthContext} from '../context';
 
function OpenLeads({navigation}){
    const [leads, setLeads] = useState([]);


    async function Logout(){

        await AsyncStorage.clear();

    }

    async function LoadLeads(){

        try{

            const HeaderAuthentication = await AsyncStorage.getItem('STORAGE_KEY');
            
            const response = await api.get('assessores/leads-negotiate', {headers: {Authorization: HeaderAuthentication}});

            setLeads(response.data);

        }catch{

            console.log('500');

        }
    }

    useEffect(() => {
        LoadLeads();
    }, []);

    function AddPhone(){
        Linking.openURL(`tel:${981037250}`);

        alert(TouchableOpacity.value);
    }

    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#d8d8d8',}}>
            <FlatList
            data={leads}
            style={Styles.incidentList}
            keyExtractor={leads => String(leads.id)}
            renderItem={({item: leads }) => (
                <View style={Styles.incident}>
                    <View style={Styles.AgeAction}>
                    <Text style={Styles.LeadTitle}>{leads.nome_lead}</Text>
                    <Text style={Styles.LeadAge}>{leads.destinatário_lead}</Text>
                    </View>
                    <Text style={Styles.LeadLanguage}>{leads.curso_lead}</Text>
                    <Text style={Styles.LeadObservacoes}>{leads.obersvacoes}</Text>
                    <View style={Styles.action}>
                        
                        <TouchableOpacity
                        name={leads.telefone_lead}
                        style={Styles.Button}
                        onPress={() => {
                            const Telefone = leads.telefone_lead;
                            Linking.openURL(`tel:${Telefone}`);
                        }}
                        >
                            <Text style={Styles.TextButton}>Detalhes da Negociação</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}

            />
        </View>
    );
}

export default OpenLeads;
