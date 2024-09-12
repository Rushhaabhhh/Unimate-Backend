const router = require('express').Router();
const multer = require('multer');
const AnnouncementController = require('../Controllers/AnnouncementController');
const { authenticateToken } = require('../Middleware/authMiddleware');

// Configure multer for file upload
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


// Routes
router.post('/create', upload.single('photo'), AnnouncementController.createAnnouncement);
router.get('/all', AnnouncementController.getAllAnnouncements);

module.exports = router;
