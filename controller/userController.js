const { isEmail } = require('validator');
const { User } = require('../model');

module.exports = {
    createUser: async (req, res) => {
        const { username, email, role, powerLevel } = req.body;
        if (!isEmail(email)) {
            return res.status(401).json({ error: 'Invalid email' });
        }
        try {
            const newUser = await User.create({
                username,
                email,
                role,
                powerLevel,
            });
            res.json(newUser);
        } catch (e) {
            res.json(e);
        }
    },
    getAllUsers: async (req, res) => {
        try {
            const users = await User.find();
            res.json(users);
        } catch (e) {
            res.json(e);
        }
    },
};