const Announcement = require('../Models/AnnouncementModel');
const multer = require('multer');

// Configure multer for memory storage
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024, // limit file size to 5MB
  },
});

const createAnnouncement = async (req, res) => {
    try {
        upload.single('image')(req, res, async (err) => {
            if (err instanceof multer.MulterError) {
                return res.status(400).json({ error: 'File upload error' });
            } else if (err) {
                return res.status(500).json({ error: 'Unknown error during file upload' });
            }

            const { message } = req.body;
            const photo = req.file;


            const newAnnouncement = new Announcement({
                photo: photo ? photo.buffer : undefined,
                message,
                timestamp: new Date().toISOString()
            });

            await newAnnouncement.save();

            res.status(201).json(newAnnouncement);
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getAllAnnouncements = async (req, res) => {
    try {
        const announcements = await Announcement.find().sort({ timestamp: -1 });
        res.status(200).json(announcements);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createAnnouncement,
    getAllAnnouncements
};