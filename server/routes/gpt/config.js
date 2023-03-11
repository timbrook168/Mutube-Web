import express from 'express';
import { CONFIG } from '../../config';

const router = express.Router();

router.get('/', async function (req, res, next) {
    res.send({
        code: 0,
        data: CONFIG
    })
});

export default router;
