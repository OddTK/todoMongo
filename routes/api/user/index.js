const router = require('express').Router();
const { createUser,
    getAllUsers,
    getUserById,
    updateUserById,
    deleteUserbyId,
    addHobbyToUserById
} = require('../../../controller/userController');

router.route('/')
    .post(createUser)
    .get(getAllUsers);

router.put('/addHobby/:userId', addHobbyToUserById);

router.route('/:userId')
    .get(getUserById)
    .put(updateUserById)
    .delete(deleteUserbyId);

module.exports = router;
