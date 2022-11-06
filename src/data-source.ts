import { DataSource } from "typeorm"
import oracledb from "oracledb";
import { AdminUser } from "./entities/AdminUser";
import * as dotenv from 'dotenv';
dotenv.config()

oracledb.initOracleClient({ libDir: 'D:\\opt\\oracle\\instantclient_21_3' });

const OracleDS = new DataSource({
    type: "oracle",
    host: process.env.ORACLE_HOST ,
    port: 1521,
    username: process.env.ORACLE_USER,
    password: process.env.ORACLE_PWD,
    serviceName: process.env.ORACLE_SERVICE,
    synchronize: false,
    logging: false,
    entities: [ AdminUser ],
    migrations: [],
    subscribers: [],
})

OracleDS
    .initialize()
    .then(() => {
        console.log(`Oracle data source has been initialized`);
    })
    .catch((err) => {
        console.error(`Oracle data source initialization is error`, err);
    })

export default OracleDS;