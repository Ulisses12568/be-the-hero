const conncetion = require('../database/connection');

module.exports = {
 async index(request, reponse) {
   const ong_id = request.headers.authorization;
  
   const incidents = await conncetion('incidents')
     .where('ong_id', ong_id)
     .select('*');
    
   return Response.json(incidents);
  }
}