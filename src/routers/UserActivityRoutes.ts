import BaseRoutes from "./BaseRoutes";
import auth from "../middlewares/AuthMiddleware";
import validate from "../middlewares/UserActivityValidator";

//controllers
import UserActivityController from "../controllers/UserActivityController";

class UserActivityRoutes extends BaseRoutes{
    
    public routes(): void {

        this.router.get("/", auth, UserActivityController.index);
        this.router.post("/", auth, validate, UserActivityController.create);
        this.router.get("/:id", auth, UserActivityController.show);
        this.router.put("/:id", auth, validate, UserActivityController.update);
        this.router.delete("/:id", auth, UserActivityController.delete);

    }

}

export default new UserActivityRoutes().router;