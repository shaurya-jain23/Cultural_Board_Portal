import { useEffect, useState } from 'react';
import axios from 'axios';

export const useEventPageData = (eventId) => {
  const [event, setEvent] = useState({
    eventName: '',
    clubName: '',
    bannerImage: '',
    eventIntroDesc: '',
    eventDateAndTime: '',
    eventVenue: '',
    eventActivityDesc: '',
    galleryImages: [],
    memberImages: []});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      if (!eventId) {
        setError({ message: 'Event ID is required' });
        setLoading(false);
        return;
      }
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/event/${eventId}`);
        setEvent(response.data.data);
        console.log(response);
        
      } catch (err) {
        console.error('Error fetching event data:', err);
        setError(err);
        setEvent(null);
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [eventId]);

  return { event, loading, error };
};