
const getRevenue = require('../services/revenueService'); // Mocked version


// Mock the getRevenue module
jest.mock('../services/revenueService');


describe('revenueController', () => {
    // Mock Express request and response objects
    const req = {};
    const res = {
        status: jest.fn(),
        send: jest.fn(),
    };

    it('should return revenue data when getRevenue succeeds', async () => {
        // Mock successful getRevenue call
        getRevenue.mockResolvedValue({ totalRevenue: 1000 });

        await revenueController(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.send).toHaveBeenCalledWith({ totalRevenue: 1000 });
    });

    it('should handle errors when getRevenue fails', async () => {
        // Mock failed getRevenue call
        const errorMessage = 'Data file not found';
        getRevenue.mockRejectedValue(new Error(errorMessage));
        console.error = jest.fn();
        await revenueController(req, res);

        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.send).toHaveBeenCalledWith('Technical Error !!!');
        expect(console.error).toHaveBeenCalledWith(new Error(errorMessage));
    });
});
