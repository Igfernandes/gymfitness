export const apiRoutes = {
  auth: "/authentications",
  users: {
    default: "/users",
    put: (id) => {
      return `/users/${id}`;
    },
    delete: (id) => {
      return `/users/${id}`;
    },
  },
  timelines: {
    default: "/timelines",
  },
  notifies: {
    default: "/alerts",
  },
};
