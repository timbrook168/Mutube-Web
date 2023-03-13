import express from 'express';

const router = express.Router();

router.post('/', async function (req, res, next) {
    try {
        const { content, conversation_id, message_id } = req.body;
        if (content) {
            const gptRes = await global.gptClient.sendMessage(content, {
                conversationId: conversation_id,
                parentMessageId: message_id
            });
            if (gptRes) {
                res.send({
                    code: 0,
                    data: gptRes
                });
                return;
            }
        }
    } catch (e) {
        // console.error(e)
    }
    res.send({
        code: -1,
        data: {}
    });
});

export default router;
