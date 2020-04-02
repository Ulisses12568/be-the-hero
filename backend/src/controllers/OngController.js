const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    async index(request, responde) {
        const ongs = await connection('ongs').select('*');
        
        return response.json(ongs);
    },

async create(request, responde) {
    const { name, email, whatsapp, city, uf } = request.body;

    const id = crypto.randomBytes(4).toString('HEX');
    
    await connection('ongs').insert({
    id,
    name,
    email,
    whatsapp,
    city,
    uf,
    })
    
    return response.json({ id });
  }
};