import AdminJS from "adminjs";
import Event from "../models/event.js";

export const eventResourceOptions = {
  resource: Event,
  options: {
    properties: {
      eventIntroDesc: {
        type: "textarea",
      },
      eventActivityDesc: {
        type: "textarea",
      },
      galleryImages: {
        type: "string",
      },
      eventDateAndTime: {
        type: "datetime",
      },
    },
    actions: {
      // can add custom actions
      show: {
        // Customize the "show" (view details) action
        handler: async (request, response, context) => {
          return { record: context.record.toJSON() };
        },
      },
    },
    listProperties: [
      "eventName",
      "clubName",
      "eventDateAndTime",
      "eventVenue",
      "isActive",
    ],
    sort: {
      direction: "desc",
      sortBy: "eventDateAndTime",
    },
  },
};
