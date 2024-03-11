const excelManager = require('./../services/files');


const getRevenue = async (dataFile)=>{
    try{
     //Read  Excel
     const transaction_data = await excelManager.readExcelFile(dataFile);
       

     let revenue_data =[];
     //Process Data and calculate total revenue
     transaction_data.forEach(element => {
         let jsonElement = JSON.parse(JSON.stringify(element));
         console.log('Calculating Total revenue for '+ jsonElement.Product);
         let revenue = jsonElement.Quantity * jsonElement.PricePerUnit - jsonElement.Discount;
         console.log(jsonElement.Product + ' revenue = ' + revenue);
         jsonElement.TotalRevenue = revenue;
         revenue_data.push(jsonElement);
     });

     excelManager.writeExcelFile(dataFile, revenue_data);
     const response = await excelManager.readExcelFile(dataFile);
     console.log("Fetching Transaction Data with revenue", response);

     return response;
    }catch(error){
        console.error(error);
        throw error;
    }
}

module.exports = getRevenue;