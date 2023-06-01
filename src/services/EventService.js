import axios from "axios";

// const EVENT_API_BASE_URL = "http://localhost:8080/api/v1/events";
const EVENT_API_BASE_URL = "http://eventmanagementbackend-production.up.railway.app/api/v1/events";

class EventService {
  getEvents() {
    return axios.get(EVENT_API_BASE_URL).catch((error) => {
      throw new Error(`Error retrieving events: ${error.message}`);
    });
  }

  createEvent(event) {
    return axios.post(EVENT_API_BASE_URL, event).catch((error) => {
      throw new Error(`Error creating event: ${error.message}`);
    });
  }

  getEventById(eventId) {
    return axios.get(`${EVENT_API_BASE_URL}/${eventId}`).catch((error) => {
      throw new Error(`Error retrieving event: ${error.message}`);
    });
  }

  updateEvent(event, eventId) {
    return axios.put(`${EVENT_API_BASE_URL}/${eventId}`, event).catch((error) => {
      throw new Error(`Error updating event: ${error.message}`);
    });
  }

  deleteEvent(eventId) {
    return axios.delete(`${EVENT_API_BASE_URL}/${eventId}`).catch((error) => {
      throw new Error(`Error deleting event: ${error.message}`);
    });
  }

  registerEvent(eventId, participant) {
    return axios.post(EVENT_API_BASE_URL + `/${eventId}/participants`, participant)
      .catch((error) => {
        throw new Error(`Error registering: ${error.message}`);
      });
  }
  
}

export default new EventService();
