const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    register_date: {
        type: Date,
        default: Date.now,
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user',
    },
    profilePicture: {
        type: String,
        default: 'default_profile.jpg', // Default profile picture path
    },
    name: {
        type: String,
        default: '',
    }
});

// Middleware to ensure 'name' matches 'username'
UserSchema.pre('save', function(next) {
    if (this.isModified('username')) {
        this.name = this.username;
    }
    next();
});

module.exports = mongoose.model('User', UserSchema);
