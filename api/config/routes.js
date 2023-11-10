import express from "express";
import { PostUsersController } from "../useCases/users/post/controller";
import { PostAuthenticationsController } from "../useCases/authentications/post/controller";
import { PutUsersController } from "../useCases/users/put/controller";
import { GetUsersController } from "../useCases/users/get/controller";
import { PutTimelinesController } from "../useCases/timelines/put/controller";
import { GetTimelinesController } from "../useCases/timelines/get/controller";
import { GetAlertsController } from "../useCases/alerts/get/controller";
import { DeleteUsersController } from "../useCases/users/delete/controller";

// eslint-disable-next-line new-cap
const routes = express.Router();

/** GET USERS */
routes.post("/users", new PostUsersController().handle);
routes.put("/users/:id", new PutUsersController().handle);
routes.get("/users/:id?", new GetUsersController().handle);
routes.delete("/users/:id", new DeleteUsersController().handle);

/** GET USERS */
routes.put("/timelines", new PutTimelinesController().handle);
routes.get("/timelines", new GetTimelinesController().handle);

/** GET ALERTS */
routes.get("/alerts", new GetAlertsController().handle);

/** GET AUTHENTICATIONS */
routes.post("/authentications", new PostAuthenticationsController().handle);

export default routes;
