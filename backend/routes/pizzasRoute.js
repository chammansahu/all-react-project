import  express from  'express';
 const router =  express.Router();
import  Pizza  from '../models/pizzaModel.js';

router.get("/getallpizzas", async(req, res) => {
    try {
        const pizzas = await Pizza.find({})
        res.send(pizzas)
    } catch (error) {
        return res.status(400).json({message:error})
    } 
});
export default router;