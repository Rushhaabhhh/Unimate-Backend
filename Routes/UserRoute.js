const router = require('express').Router();
const UserController = require('../Controllers/UserController');
const { authenticateToken } = require('../Middleware/authMiddleware');

router.post('/register', UserController.registerUser);
router.post('/login', UserController.loginUser);
router.get('/', UserController.getAllUsers);
router.get('/:userId', UserController.getUser);
router.put('/:userId', UserController.updateUser);
router.patch('/:userId', UserController.patchUser);

module.exports = router;

