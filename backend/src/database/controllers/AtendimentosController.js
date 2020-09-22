const connection = require('../connection');
const crypto = require('crypto');

module.exports = {

    async indexAssessor(req, res){

        const assessor = await connection('assessor').select('*');

        return res.json(assessor);

    },

    async createAssessor(req, res){

        const {name, whatsapp, email} = req.body;

        const id = crypto.randomBytes(4).toString('HEX');

        await connection('assessor').insert({
            id,
            name,
            whatsapp,
            email,
        })

        return res.json('Assessor cadastrado com sucesso na id');

    },

    async indexAtendimentos(req, res){

        const chamados = await connection('chamados').select('*');

        return res.json(chamados);

    },

    async createAtendimento(req , res){

        let today = new Date();

        let data = (today.getDate()+"/"
        +(today.getMonth() + 1)
        +"/"+today.getFullYear());

        const {
            atendente, 
            assessor,
            nome_lead, 
            telefone_lead,
            curso_lead,
            destinatário_lead,
            obersvacoes,
        } = req.body;

        const in_negotiation = 'no';
        
        
        const query = await connection('assessor').select('name').where('name',  assessor);
        
        const queryValue = JSON.stringify(query);
        const queryStringLength = queryValue.length;
        const search = queryValue.indexOf(assessor);
        const endSearch = queryValue.slice(search, queryStringLength - 3 );
         

        if(assessor != endSearch){

            return res.json("Cadastro não autorizado. Não existe nenhum assessor com esse nome");
                

        } else{

            const [id] = await connection('chamados').insert({
                atendente,
                assessor,
                nome_lead,
                telefone_lead,
                curso_lead,
                destinatário_lead,
                obersvacoes,
                data,
                in_negotiation,
            })

            return res.json('Chamada Cadastrada. Aguardando que o assessor entre em contato');
            
        }       
    },

    async moveToNegotiation(req, res){
        const {id} = req.body;

        try{
            const select = await connection('chamados').select('nome_lead', 'in_negotiation').where('id', id);

            if(select){
                await connection('chamados').update('in_negotiation', 'yes').where('id',id);
                 
                return res.json(select);
            }

        }catch(error){
            res.json('Erros');
        }

        
    }
}