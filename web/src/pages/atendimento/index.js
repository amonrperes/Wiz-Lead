import React, {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiPower} from 'react-icons/fi';

import api from '../../services/api';
import Style from './index.css';
import Logo from '../../assets/logo.png';

export default function Atendimento(){


    const [atendente, setAtendente] = useState('');
    const [assessor, setAssessor] = useState('');
    const [nome_lead, setNome_lead] = useState('');
    const [telefone_lead, setTelefone_lead] = useState('');
    const [curso_lead, setCurso_lead] = useState('');
    const [destinatário_lead, setDestinatario_lead] = useState('');
    const [obersvacoes, setObservacoes] = useState('');

    const [atendimentos, setAtendimentos] = useState([]);


    useEffect(() => {
        api.get('atendimentos').then(response =>{
        setAtendimentos(response.data);
        })
    });

    async function newLead(e){
        
        e.preventDefault();

        const data = {
            atendente, 
            assessor, 
            nome_lead, 
            telefone_lead, 
            curso_lead, 
            destinatário_lead, 
            obersvacoes,
        };

        try {

            await api.post('create-atendimentos', data);

            alert('Lead cadastrado com sucesso!!!');

        } catch(err){

            alert('Houve um erro inesperado :(')
            console.log(data);

        }

    }

    return(

        <div>
            <header>
                <img class='header-logo' src={Logo} alt='Logo' width='55' height='55'/>
                <h1 class='header-title'>Wiz.Lead</h1>
                <Link to='/'>
                    <FiPower class='logoff-button' color='#fff'/>
                </Link>
            </header>

            <div class='register-lead-div'>
                <h2 class='register-lead-title'>Cadastrar Lead</h2>
                <form onSubmit={newLead} class='register-lead-form'>
                    <input type='text' id='atendente' placeholder='Atendente'
                    value={atendente}
                    onChange={e => setAtendente(e.target.value)}
                    />
                    <input type='text' id='assessor' placeholder='Assessor'
                    value={assessor}
                    onChange={e => setAssessor(e.target.value)}
                    />
                    <input type='text' id='nome_lead' placeholder='Nome do Interessado'
                    value={nome_lead}
                    onChange={e => setNome_lead(e.target.value)}
                    />
                    <input type='text' id='telefone_lead' placeholder='Telefone Lead'
                    value={telefone_lead}
                    onChange={e => setTelefone_lead(e.target.value)}
                    />
                    <input type='text' id='curso_lead' placeholder='Curso'
                    value={curso_lead}
                    onChange={e => setCurso_lead(e.target.value)}
                    />
                    <input type='text' id='destinatario_lead' placeholder='Destinatario'
                    value={destinatário_lead}
                    onChange={e => setDestinatario_lead(e.target.value)}
                    />
                    <input type='text' id='obs' placeholder='Observações'
                    value={obersvacoes}
                    onChange={e => setObservacoes(e.target.value)}
                    />
                    <input type='submit' value='Cadastrar Lead'/>
                </form>
            </div>




            <div class='select-lead-div'>
                <table>
                    <tr>
                        <th>Atendimento</th>
                        <th>Atendente</th>
                        <th>Assessor</th>
                        <th>Nome do Interessado</th>
                        <th>Telefone</th>
                        <th>Curso</th>
                        <th>Destinatario</th>
                        <th>Observações Adicionais</th>
                        <th>Data</th>
                    </tr>

                    {atendimentos.map(atendimento =>(
                    <tr>
                        <td>{atendimento.id}</td>
                        <td>{atendimento.atendente}</td>
                        <td>{atendimento.assessor}</td>
                        <td>{atendimento.nome_lead}</td>
                        <td>{atendimento.telefone_lead}</td>
                        <td>{atendimento.curso_lead}</td>
                        <td>{atendimento.destinatário_lead}</td>
                        <td>{atendimento.obersvacoes}</td>
                        <td>{atendimento.data}</td>
                    </tr>
                    ))}
                </table>
            </div>
        </div>

    )

}