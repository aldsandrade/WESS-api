const mysql = require('../db/mysql');

module.exports = {
    queryVolumes: async function() {
        let volumes = []

        await mysql.queryVolumes().then(results => {
            volumes.push({nome: 'cisternaUm', volume: results[0].volume});
            volumes.push({nome: 'cisternaDois', volume: results[1].volume});
            console.log(volumes);
        });
        
        return volumes
    },
    queryTotalVolumesPorMeses: async function(ano = 0) {
        let volumes = []

        await mysql.queryTotalVolumesPorMeses(ano).then(results => {
            for(let i=0; i<results.length; i++) {
                volumes.push(results[i].volume);
            }
            
        });
        if(volumes.length < 12) {
            for(let i = volumes.length; i < 12; i++) {
                volumes.push(0);
            }
        }
        console.log(volumes);
        return volumes;
    }
}