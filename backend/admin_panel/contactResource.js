import AdminJS from "adminjs";
import Contact from "../models/contact.js";

export const contactResourceOptions = {
  resource: Contact,
  options: {
    properties: {
      // Section properties
      title: {
        isTitle: true,
      },
      description: {
        type: "textarea",
      },
      order: {
        isTitle: false,
      },
      members: {
        isArray: true,
      },
      "members.name": {
        isTitle: true,
      },
      "members.designation": {
        isRequired: true,
      },
      "members.department": {
        isRequired: true,
      },
      "members.image": {
        isRequired: true,
      },
      "members.description": {
        type: "textarea",
        isRequired: false,
      },
      "members.phoneNo": {
        isRequired: true,
      },
      "members.mailId": {
        isRequired: true,
      },
      "members.linkedin": {
        isRequired: false,
      },
      "members.order": {
        isRequired: false,
      },
      createdAt: {
        isVisible: { list: true, filter: true, show: true, edit: false },
      },
    },
    actions: {
      show: {
        handler: async (request, response, context) => {
          return { record: context.record.toJSON() };
        },
      },
    },
    listProperties: [
      "title",
      "description",
      "order",
      "members",
      "createdAt",
    ],
    sort: {
      direction: "desc",
      sortBy: "createdAt",
    },
  },
};