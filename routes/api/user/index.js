const router = require('express').Router();
const { createUser, getAllUsers } = require('../../../controller/userController');

router.post('/', createUser);
router.get('/', getAllUsers);
module.exports = router;
