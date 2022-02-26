const router = require('express').Router();
const { createUser, getAllUsers, getUserById } = require('../../../controller/userController');

router.post('/', createUser);
router.get('/', getAllUsers);

router.route('/:userId')
    .get(getUserById)
module.exports = router;
