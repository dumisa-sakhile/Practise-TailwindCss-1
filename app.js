const express = require("express");
const expressLayouts = require("express-ejs-layouts");
require("dotenv").config();
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(expressLayouts);
app.set("view engine", "ejs")
app.set("layout","./layouts/default");


app.use("/", require("./routes/defaultRouter"))

app.all("*",(req,res)=>{
    data ={
        title : "404"
    }
    res.status(404).render("404",data);
})

const port = 5000 || process.env.PORT;

app.listen(port, console.log(`App listening on ${port}`));