const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['student', 'admin'],
        default: 'student'
    },
    savedCourses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }],
    savedInternships: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Internship'
    }],
    progress: {
        completedCourses: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Course'
        }],
        savedQuestions: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'InterviewQuestion'
        }]
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', userSchema); 