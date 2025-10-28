import Initiatives from '../models/initiatives.js';
export const getAllInitiatives = async (req, res) => {
    try {
        const initiatives = await Initiatives.find({});
        if (!initiatives || initiatives.length === 0) {
            return res.status(404).json({ success: false,   message: "Initiatives not found" });
        }
        res.status(200).json({ success: true, data: initiatives });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error fetching the initiatives", error: error.message });
    }
}
export const getInitiativeById = async (req,res) => {
    const { name } = req.params;
    try{
        const initiative = await Initiatives.findOne({ name });
        if (!initiative) {
            return res.status(404).json({ success: false, message: "Initiative not found" });
        }
        res.status(200).json({ success: true, data:     initiative });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error fetching the initiative", error: error.message });
    }
}
