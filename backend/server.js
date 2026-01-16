require("dotenv").config;
const app = require("./src/app");
const pool = require("./src/config/db")

const PORT = process.env.PORT || 5000;

(async () => {
    try{
        await pool.query("SELECT 1")
        console.log("DATABASE CONNECTED SUCCESSFULLY")
    } catch(err){
        console.log("DB connection error" , err)
    }
})();

app.listen(PORT , ()=> {
    console.log(`Server running on port ${PORT}`);
})