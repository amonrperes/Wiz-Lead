import {StyleSheet, Button, View} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({

    background:{
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
        width:350,
        height:350,
    },

    incidentList:{
        marginTop:30,
        width: 350,
    },

    incident: {
        padding:15,
        borderRadius:3,
        backgroundColor:'#FFF',
        marginBottom:9
    },

    LeadTitle:{
        fontWeight: 'bold',
        fontSize: 23,
    },

    LeadLanguage:{
        fontSize: 20,
        marginBottom:18,
        fontStyle:'italic',
    },

    LeadAge:{
        fontSize:18,
        display: 'flex',
        marginBottom:10,
        marginTop:5,
        marginRight:100,
    },

    LeadObservacoes:{
        fontSize:16,
        marginBottom:10,
    },
    
    AgeAction:{
        marginTop:10,
        flexDirection: 'row',
        justifyContent:'space-between',
    },

    Button:{
        padding:13,
        backgroundColor:'#ca3636',
        fontSize:18,
        borderRadius:3,
        width: 190,
        marginTop:5,
        color:'#FFF',
        textAlign:'center',
        alignSelf: 'center',
    },

    TextButton:{
        fontSize:15,
        color:'#FFF',
    },

    action:{
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})