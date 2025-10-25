import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  eventName: {
    type: String,
    required: [true, "Event name is required"],
    trim: true,
    maxLength: [100, "Event name cannot exceed 100 characters"]
  },
  organisedBy: {
    type: String,
    enum: [
      "Cultural Board",
      "Palates Club",
      "Finesse Club",
      "Xpressions Club",
      "Anchorenza & RadioG Club",
      "Octaves Club",
      "Montage Club",
      "Debsoc Club",
      "Litsoc Club",
      "Lumiere Club",
      "Cadence Club",
      "Alcheringa"
    ],
    required: [true, "Club name is required"],
    trim: true,
    maxLength: [100, "Club name cannot exceed 100 characters"]
  },
  frontImage: {
    type: String,
    required: [true, "Banner image is required"],
    validate: {
      validator: function(v) {
        return /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp))|^\/.*$/.test(v);
      },
      message: "Banner image must be a valid URL or file path"
    }
  },
  eventIntroDesc: {
    type: String,
    required: [true, "Event introduction description is required"],
    maxLength: [500, "Introduction description cannot exceed 500 characters"]
  },
  eventActivityDesc: {
    type: String,
    required: [true, "Event activity description is required"],
    maxLength: [2000, "Activity description cannot exceed 2000 characters"]
  },
  galleryImages: {
    type: [String],
    required: [true, "At least one gallery image is required"],
    validate: {
      validator: function(images) {
        return images.length > 0;
      },
      message: "At least one gallery image is required"
    }
  },
  memberImages: {
    type: [String],
    default: []
  },
  eventDateAndTime: {
    type: Date,
    required: [true, "Event date and time is required"],
  },
  eventVenue: {
    type: String,
    required: [true, "Event venue is required"],
    maxLength: [200, "Venue cannot exceed 200 characters"]
  },
  eventLink: {
    type: String,
    validate: {
      validator: function(v) {
        if (!v) return true; // Optional field
        return /^https?:\/\/.+\..+/.test(v);
      },
      message: "Event link must be a valid URL"
    }
  },
  isActive: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Update the updatedAt field before saving
eventSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

// Index for better query performance
eventSchema.index({ eventDateAndTime: -1 });
eventSchema.index({ isActive: 1, eventDateAndTime: -1 });

const Event = mongoose.model("Event", eventSchema);

export default Event;