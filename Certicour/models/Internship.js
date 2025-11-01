const mongoose = require('mongoose');

const internshipSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    requirements: [String],
    location: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ['Remote', 'On-site', 'Hybrid'],
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    stipend: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
        enum: ['Software Development', 'Data Science', 'Web Development', 'Design', 'Marketing', 'Other']
    },
    skills: [String],
    deadline: {
        type: Date,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Internship', internshipSchema); 