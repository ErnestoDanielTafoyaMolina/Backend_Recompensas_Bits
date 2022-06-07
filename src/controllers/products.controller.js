import { getConnection } from "../database/connection";

export const getProducts = async (req,res) => {
    
     const pool = await getConnection();
     const products = await pool.request().query('SELECT * FROM Productos');

     console.log(products)

    res.json(products.recordset);
};