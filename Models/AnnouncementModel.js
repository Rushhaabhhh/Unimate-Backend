const mongoose = require('mongoose');

const AnnouncementSchema = new mongoose.Schema({
    photo: {
        type: String, 
    },
    message: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('Announcement', AnnouncementSchema);
