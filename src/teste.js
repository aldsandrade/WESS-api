
const mysql = require('./db/mysql');

async function rodar() {
    await mysql.queryTotalVolumesPorMeses(2019).then(results => {
        console.log(results);
    })
}

rodar();
