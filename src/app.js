const express = require('express');
const cors = require('cors');
const db_routes = require('./routes/db_routes')
const db_handler = require('./handlers/db_handler');

const port = process.env.PORT || 8080;

const app = express()
  .use(cors())
  .use(express.json())
  .use(db_routes());

app.listen(port, () => {
    console.log(`Express server listening on port ${port}`);
    // console.log(db_handler.queryVolumes());
});