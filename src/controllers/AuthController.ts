import {Request, Response} from "express";
import Authentication from "../utils/Authentication";
const db = require("../db/models");

class AuthController{

    login = async (req: Request, res: Response): Promise<Response> => {
        
        let {username, password } = req.body;

        const user = await db.user.findOne({
            where: {username}
        });

        let compare = await Authentication.passwordCompare(password, user.password);

        if (compare){
            let token = Authentication.generateToken(user.id, user.username, user.password);
            return res.send({
                token
            });
        }

        return res.send("auth failed");
    }

    register = async (req: Request, res: Response): Promise<Response> => {
        let {username, password } = req.body;
        const hashedPassword: string = await Authentication.hash(password);

        const user = await db.user.findOne({
            where: {username}
        });

        if(user){
            return res.send("username already exist");
        }

        const createdUser = await db.user.create({ username, password: hashedPassword });
        return res.send(createdUser);
    }
    
}

export default new AuthController();