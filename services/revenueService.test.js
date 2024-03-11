const getRevenue = require('./revenueService');
const excelManager = require('../services/files');

// Mock the excelManager module
jest.mock('../services/files');

describe('getRevenue', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should calculate total revenue for valid transaction data', async () => {
        const mockTransactionData = [
            { Product: 'Product A', Quantity: 5, PricePerUnit: 10, Discount: 2, TotalRevenue: 48 },
        ];
        excelManager.readExcelFile.mockResolvedValue(mockTransactionData);
        const result = await getRevenue('sample.xlsx');

        expect(result).toEqual([
            { Product: 'Product A', Quantity: 5, PricePerUnit: 10, Discount: 2, TotalRevenue: 48 },
        ]);
    });

    it('should handle empty transaction data', async () => {
        excelManager.readExcelFile.mockResolvedValue([]);
        const result = await getRevenue('empty.xlsx');

        expect(result).toEqual([]);
    });

   it('should handle zero quantity or price', async () => {
        const zeroQuantityData = [
            { Product: 'Product B', Quantity: 0, PricePerUnit: 15, Discount: 3, TotalRevenue: 0},
        ];
        excelManager.readExcelFile.mockResolvedValue(zeroQuantityData);
        
        const result = await getRevenue('zero.xlsx');

        expect(result).toEqual([
            { Product: 'Product B', Quantity: 0, PricePerUnit: 15, Discount: 3, TotalRevenue: 0 },
        ]);
    });

    it('should handle negative discount values', async () => {
        const negativeDiscountData = [
            { Product: 'Product C', Quantity: 3, PricePerUnit: 20, Discount: -5, TotalRevenue: 65 },
        ];
        excelManager.readExcelFile.mockResolvedValue(negativeDiscountData);
        
        const result = await getRevenue('negative.xlsx');

        expect(result).toEqual([
            { Product: 'Product C', Quantity: 3, PricePerUnit: 20, Discount: -5, TotalRevenue: 65 },
        ]);
    });

    it('should handle errors when getRevenue fails', async () => {
       
        const errorMessage = 'Data file not found';
        excelManager.readExcelFile.mockRejectedValue(new Error(errorMessage));     
        await expect(getRevenue('filedoesnotexist.xlsx')).rejects.toThrow(errorMessage);
    });

});
