//Intialize Streams
let stream1 = {id:1, balance: 50000};
let stream2 = {id:2, balance: 50000};

const  balance = async ()=>{
    console.log({stream1,stream2});
    return {stream1,stream2};
   
}

const rebalance = async ()=>{
    try{
        const avgBalance= (stream1.balance + stream2.balance)/2;
        stream1.balance = avgBalance;
        stream2.balance = avgBalance;

        console.log('Rebalanced successfully');
    }catch(error){
        console.error(error);
        throw error;
    }
}

const consume = async ()=>{

    try{
        const amount1 = Math.floor(Math.random()*3000) +2000;  //Random consumption between 2k and 5k
        if(stream1.balance > 0) stream1.balance -= amount1;

        const amount2 = Math.floor(Math.random()*3000) +2000;  //Random consumption between 2k and 5k
        if(stream2.balance > 0) stream2.balance -= amount2;

        console.log('Consumed successfully');
    }catch(error){
        console.error(error);
        throw error;
    }
}

module.exports = {balance, rebalance,consume}