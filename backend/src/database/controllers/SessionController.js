const connection = require('../connection');

module.exports = {

    async login(request, response){

        const {id} = request.body;
        // const working = response.status(200).json('Recongnized');
        // const fail = response.status(400).json({error:'Erro ao digitar ID'});

        const session = await connection('assessor')
        .where('id',id)
        .select('name')
        .first();

        if(!session){

            return response.status(400).json({error:'Digite sua id corretamente. Nenhum assessor encontrado com esse nome'});

        } else {

            return response.status(200).json(session);

        }

    }


}