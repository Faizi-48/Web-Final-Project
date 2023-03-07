const express = require("express")
const app=express();
const indexRoutes =require("./routes/index.routes");
app.use("/",indexRoutes);
app.listen(3000);