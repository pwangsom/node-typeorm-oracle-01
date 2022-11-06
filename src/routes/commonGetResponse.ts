import { response } from 'express';

function commonGetResponse(res: typeof response, data: object){
    if(data){
        res.status(200).json(data);
    } else if(!data) {
        res.status(404).json({ error: "Data not found" });
    } else {
        res.status(401).json({ error: "Internal server error" });
    }

    return res;
}

export default commonGetResponse;