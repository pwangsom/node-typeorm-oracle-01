import "log-timestamp"
import express from "express";

import defaultRouter from "./routes/defaultRoute";
import adminRouter from "./routes/adminUserRoute";

process.env.TZ = "Asia/Bangkok";
console.log(new Date().toString());

const app = express();

// Common Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var logger = function TimestampLog(req, res, next){
    console.log(req.originalUrl);
    next();
}

app.use(logger);

// Import Data Sourcess
import OracleDS from "./data-source";
OracleDS;

// Import Routers
app.use('/', defaultRouter);
app.use('/admin', adminRouter);

// Port
const port = process.env.PORT || 3100;
app.listen(port, () => console.log(`Server running is on ${port}...`));