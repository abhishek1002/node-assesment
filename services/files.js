const XLSX = require('xlsx');
const path = require('path');


const excelManager = {

    readExcelFile: async (filePath) => {
        try{
            const path1 = path.join(__dirname, filePath);
            const workbook = XLSX.readFile(path1);
            const worksheet = workbook.Sheets[workbook.SheetNames[0]];
            return XLSX.utils.sheet_to_json(worksheet);
        }catch(error){
            console.error('Error reading the excel file: ',error);
            throw new Error(error);
        }
    },

   
    writeExcelFile: async (filePath, json) =>{
        try{
            let workBook = XLSX.utils.book_new();
            const workSheet = XLSX.utils.json_to_sheet(json);
            XLSX.utils.book_append_sheet(workBook, workSheet, `Sheet 1`);
            XLSX.writeFile(workBook, path.join(__dirname, filePath));

            console.log("Excel modified succesfully");
        } catch(error){
            console.error('Error reading the excel file: ',error);
            throw new Error(error);
        }
    }

   
}

module.exports = excelManager;