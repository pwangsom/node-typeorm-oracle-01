import express from "express";
const router = express.Router();

import { AdminUser } from "../entities/AdminUser";
import OracleDS from "../data-source";
import commonGetResponse from './commonGetResponse';

router.get('/',async (req, res) => {
    const data = await OracleDS.getRepository(AdminUser).find();

    return commonGetResponse(res, data);
})

router.get('/:username',async (req, res) => {
    const data = await OracleDS.getRepository(AdminUser).findOneBy({
        userName: req.params.username
    });

    return commonGetResponse(res, data);
})

export default router;