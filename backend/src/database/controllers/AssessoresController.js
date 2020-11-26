const connection = require('../connection');

module.exports = {

    async indexLeads(request, response){

        const id = request.headers.authorization;
        const nameQuery = await connection('assessor').select('name').where('id', id);
        
        const nameQueryString = JSON.stringify(nameQuery);
        const length = nameQueryString.length;
        const name = nameQueryString.slice(10, (length-3));

        const chamadoQuery = await connection('chamados').select('*').where({assessor:name,in_negotiation:'no'});

 
        if(!chamadoQuery){

            return response.status(400).json({error:'Não há leads cadastrado em seu nome'})

        } else{

            return response.json(chamadoQuery);

        }


    },

    async leadInNegotiation(request, response){

        const id = request.headers.authorization;
        const nameQuery = await connection('assessor').select('name').where('id', id);
        
        const nameQueryString = JSON.stringify(nameQuery);
        const length = nameQueryString.length;
        const name = nameQueryString.slice(10, (length-3));

        const chamadoQuery = await connection('chamados').select('*').where({assessor:name,in_negotiation:'yes'});
        
        
        if(!chamadoQuery){

            return response.status(400).json({error:'Não há leads em negociação ainda'})

        } else{

            return response.json(chamadoQuery);

        }


    },
    
    async leadsWithCompleteNegotiation(request, response){

        const id = request.headers.authorization;
        const nameQuery = await connection('assessor').select('name').where('id', id);
        
        const nameQueryString = JSON.stringify(nameQuery);
        const length = nameQueryString.length;
        const name = nameQueryString.slice(10, (length-3));

        const chamadoQuery = await connection('chamados').select('*').where({assessor:name,in_negotiation:'complete'});

        if(!chamadoQuery){

            return response.status(400).json({error:'Não há leads concluídos ainda'})

        } else{

            return response.json(chamadoQuery);

        }

 
        

    }


}
