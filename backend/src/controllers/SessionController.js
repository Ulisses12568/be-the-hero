const conncetion = require('../database/connection');

module.exports = {
 async create(request, response) {
   const { id } = request.body;

   const ong = await Connection('ongs')
     .where('id', id)
     .select('name')
     .firts();

   if (!ong) {
       return response.status(400).json({ error: 'No Ong found with this ID' });
   }
   
    return response.json(ong);
  }
}