import mongoose from 'mongoose';

// Base schema for common contact fields
const baseContactFields = {
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    minlength: [2, 'Name must be at least 2 characters long']
  },
  designation: {
    type: String,
    required: [true, 'Designation is required'],
    trim: true,
    minlength: [2, 'Designation must be at least 2 characters long']
  },
  image: {
    type: String,
    required: [true, 'Profile image is required'],
  },
  department: {
    type: String,
    required: [true, 'Department is required'],
    trim: true
  },
  description: {
    type: String,
    required: false,
    trim: true,
    minlength: [10, 'Description must be at least 10 characters long']
  },
  phoneNo: { 
    type: String, 
    trim: true,
    required: true
  },
  mailId: { 
    type: String, 
    trim: true,
    required: true
  },
  linkedin: { 
    type: String, 
    trim: true,
  },
  order: {
    type: Number,
    default: 0
  },
  isActive: {
    type: Boolean,
    default: true
  }
};

// Member Schema
const memberSchema = new mongoose.Schema(baseContactFields);

// Main Contact Schema
const contactSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Section title is required'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Section description is required'],
    trim: true
  },
  order: {
    type: Number,
    default: 0
  },
  members: [memberSchema]
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});


const Contact = mongoose.model('Contact', contactSchema);

export default Contact;