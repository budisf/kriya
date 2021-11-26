import BaseRoutes from "./BaseRoutes";
import validate from "../middlewares/AuthValidator";
import auth from "../middlewares/AuthMiddleware";

//controllers
import AuthController from "../controllers/AuthController";

class AuthRoutes extends BaseRoutes{
    
    public routes(): void {

        this.router.post("/login",validate, AuthController.login);
        this.router.post("/register", validate, AuthController.register);

    }

}

export default new AuthRoutes().router;