import "reflect-metadata"
import { DataSource } from "typeorm"
import * as oracledb from "oracledb";
import { AdminUser } from "./entity/AdminUser";
import * as dotenv from 'dotenv';
dotenv.config()

oracledb.initOracleClient({ libDir: 'D:\\opt\\oracle\\instantclient_21_3' });

export const OracleDS = new DataSource({
    type: "oracle",
    host: process.env.ORACLE_HOST ,
    port: 1521,
    // schema: process.env.ORACLE_SCHEMA,
    username: process.env.ORACLE_USER,
    password: process.env.ORACLE_PWD,
    serviceName: process.env.ORACLE_SERVICE,
    synchronize: false,
    logging: false,
    entities: [ AdminUser ],
    migrations: [],
    subscribers: [],
})