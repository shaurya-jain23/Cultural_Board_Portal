import Announcement from "../models/announcement.js";

export const getAnnouncements = async (req, res) => {
  try {
    const announcements = await Announcement.find().sort({ date: -1 });
    const formatted = announcements.map(a => ({
      title: a.title,
      description: a.description,
      date: a.date,
      link: a.link || null,
    }));
    return res.status(200).json({ announcements: formatted });
  } catch (error) {
    console.error('Error fetching announcements:', error);
    return res.status(500).json({ message: 'Error fetching announcements', error });
  }
};

export const deleteAnnouncements = async (req, res) => {
  try {
    const { title } = req.params;
    const deleted = Announcement.findOneAndDelete({title});
    if (!deleted) {
      return res.status(404).json({message: 'Announcement not found'})
    }
    return res.status(200).json({success: true, message: 'Deleted', data: deleted});

  } catch (error) {
    return res.status(500).json({message: 'Error deleting announcement', error});
  }
}

export default {
  getAnnouncements,
  deleteAnnouncements
}