import React, {useState, useContext, useEffect, createContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import AsyncStorage from '@react-native-community/async-storage';

import NovosLeads from './pages/Lead Aberto/index';
import LeadsEmNegociacao from './pages/LeadNegociando/index';
import Login from './pages/Login/index';

const BottomTabs = createMaterialBottomTabNavigator();

import {AuthContext} from './pages/context';

import api from './services/api';

function Routes(){ 
  const [userToken, setUserToken] = useState(null);

  const HandleAuth = React.useMemo(() => ({
    SignIn: async () => {
      setUserToken(await AsyncStorage.getItem('STORAGE_KEY'));
    },

    SignOut: async () => {
      await AsyncStorage.clear();
      setUserToken(null);
    },

    MoveToNegotiation: async () => {
      const id = await AsyncStorage.getItem('STORAGE_KEY');
      const data = {id};

      await api.post('atendimentos/update', data);
    }

  }));

    return (
      <AuthContext.Provider value={HandleAuth}>
        <NavigationContainer>
          { userToken !== null ? ( 
          <BottomTabs.Navigator barStyle={{backgroundColor:"#ca3636"}}>
            <BottomTabs.Screen name="Novos Leads" component={NovosLeads}/>
            <BottomTabs.Screen name="Leads em Negociação" component={LeadsEmNegociacao}/> 
          </BottomTabs.Navigator>
          )
          : 
          <Login/>
          
  }
        </NavigationContainer>
      </AuthContext.Provider>  
    );
    
    }

  export default Routes;