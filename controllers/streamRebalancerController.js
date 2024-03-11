const {balance,rebalance, consume} = require ('./../services/streamRebalancerService');

const getBalance =  async (req, res) => {
    try{
        let response =  await balance();
        res.status(200).send(response);
 
    }catch(error){
        console.log(error);
        res.status(400).send("Technical Error !!!");
    }
}

const doRebalance =  async (req, res) => {
    try{
        await rebalance();
        res.status(200).send({message: 'Rebalanced successfully'});
 
    }catch(error){
        console.log(error);
        res.status(400).send("Technical Error !!!");
    }
}

const doConsume =  async (req, res) => {
    try{
        await consume();
        res.status(200).send({message: 'Consume successfully'});
 
    }catch(error){
        console.log(error);
        res.status(400).send("Technical Error !!!");
    }
}

module.exports = {getBalance, doRebalance, doConsume};