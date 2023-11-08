export const apiRoutes = {
  auth: "/authentications",
  users: {
    default: "/users",
    put: (id) => {
      return `/users/${id}`;
    },
  },
};
