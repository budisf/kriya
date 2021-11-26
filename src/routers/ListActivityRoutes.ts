import BaseRoutes from "./BaseRoutes";
import auth from "../middlewares/AuthMiddleware";
import validate from "../middlewares/ListActivityValidator";

//controllers
import ListActivityController from "../controllers/ListActivityController";

class ListActivityRoutes extends BaseRoutes{
    
    public routes(): void {

        this.router.get("/", auth, ListActivityController.index);
        this.router.get("/:board_id", auth, ListActivityController.taskByBoard);
        this.router.post("/", auth, validate, ListActivityController.create);
        this.router.get("/:board_id/:id", auth, ListActivityController.show);
        this.router.put("/:id", auth, validate, ListActivityController.update);
        this.router.delete("/:id", auth, ListActivityController.delete);

    }

}

export default new ListActivityRoutes().router;