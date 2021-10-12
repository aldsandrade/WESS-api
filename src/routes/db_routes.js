const express = require('express');
const handler = require('../handlers/db_handler');

module.exports = () => {
    const router = express.Router();
    
    router.get('/volumes', async function(req, res, next)  {
      res.status(200).json(await handler.queryVolumes())
    });

    return router;
}