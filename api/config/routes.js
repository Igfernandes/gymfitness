import express from "express";
import { PostUsersController } from "../useCases/users/post/controller";
import { PostAuthenticationsController } from "../useCases/authentications/post/controller";
import { PutUsersController } from "../useCases/users/put/controller";
import { GetUsersController } from "../useCases/users/get/controller";

// eslint-disable-next-line new-cap
const routes = express.Router();

/** GET USERS */
routes.post("/users", new PostUsersController().handle);
routes.put("/users/:id", new PutUsersController().handle);
routes.get("/users/:id?", new GetUsersController().handle);

/** GET AUTHENTICATIONS */
routes.post("/authentications", new PostAuthenticationsController().handle);

export default routes;
