import express from 'express';
import { getHomePageData } from '../controllers/homePage.controller.js'; // Import the controller
import { getAllClub, getClubById } from '../controllers/club.controller.js';
import { getContacts } from '../controllers/contact.controller.js';
import { getAllEvents, getEventById } from '../controllers/event.controller.js';
import { getAllInitiatives, getInitiativeById } from '../controllers/initiatives.controller.js';
import { getAnnouncements } from '../controllers/announcement.controller.js';
const router = express.Router();

// Define the route and use the controller function
router.get('/', (req, res) => {
  res.send('Welcome to the Home Page!');
});
router.get('/home', getHomePageData);
router.get('/club/:name', getClubById);
router.get('/event/:id', getEventById);
router.get('/contacts', getContacts);
router.get('/allclubs' , getAllClub);
router.get('/allevents' , getAllEvents);
router.get('/allinitiatives' , getAllInitiatives);
router.get('/initiative/:name' , getInitiativeById);
router.get('/announcements', getAnnouncements)
export default router;