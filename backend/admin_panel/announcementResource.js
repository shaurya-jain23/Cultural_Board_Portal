import AdminJS from "adminjs";
import Announcement from "../models/announcement.js";

export const announcementResourceOptions = {
  resource: Announcement,
  options: {
    properties: {
    title: {
        type: "string",
      },
      description: {
        type: "textarea",
      },
      date: {
        type: "datetime",
      },
      link: {
        type: "string",
      },
      createdAt: {
        isVisible: { list: true, filter: true, show: true, edit: false },
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
      "title",
      "description",
      "date",
      "createdAt",
    ],
    sort: {
      direction: "desc",
      sortBy: "date",
    },
  },
};
