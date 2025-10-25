import Event from '../models/event.js';
import Homepage from '../models/general.js';

export const getEventById = async (req, res) => {
  const { id } = req.params;

  try {
    const event = await Event.findById(id);

    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    res.status(200).json({success: true, data: event});
  } catch (error) {
    res.status(500).json({ message: 'Error fetching the event', error });
  }
};

export const getAllEvents = async (req, res) => {
  try {
    const query = { isActive: true };
    const events = await Event.find(query).sort({ eventDateAndTime: -1 });
    const homepage = await Homepage.find({});
    res.status(200).json({ events, homepage });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching events', error });
  }
};