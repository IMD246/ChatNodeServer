const router = require('express').Router();
const chatMessagesController = require("../controllers/chatMessagesController");

router.post("/insertMessages", chatMessagesController.insertManyChatMessage);

router.post("/getMessages", chatMessagesController.getMessagesByChatID);

router.post("/updateStatusMessage", chatMessagesController.updateStatusMessageHttp);

module.exports = router;