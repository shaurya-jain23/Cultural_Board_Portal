import Initiatives from "../models/initiatives.js";

export const initiativesResourceOptions = {
  resource: Initiatives,
  options: {
    properties: {
      description: {
        type: "textarea",
      },
    },
    listProperties: [
      "name",
      "description",
      "image",
      "createdAt",
    ],
    sort: {
      direction: "desc",
      sortBy: "createdAt",
    },
  },
};

