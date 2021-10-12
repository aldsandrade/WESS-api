const mysql = require('../db/mysql');

module.exports = {
    queryVolumes: async function() {
        let volumes = {
            cisterna1: 0,
            cisterna2: 0
        }

        await mysql.queryVolumes().then(results => {
            volumes.cisterna1 = results[0].volume;
            volumes.cisterna2 = results[1].volume;
            console.log(volumes);
        });
        
        return volumes
    }
}