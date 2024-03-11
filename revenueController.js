const getRevenue = require ('./../services/revenueService');

const dataFile='../transaction_data.xlsx';
const revenueController =  async (req, res) => {
    try{
        let response =  await getRevenue(dataFile);
        res.status(200);
        res.send(response);
 
    }catch(error){
        console.error(error);
        res.status(400);
        res.send("Technical Error !!!");
    }
}

module.exports = revenueController;