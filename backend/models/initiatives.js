import mongoose from "mongoose";

const initiativesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});

const Initiatives = mongoose.model('Initiatives', initiativesSchema);
export default Initiatives;