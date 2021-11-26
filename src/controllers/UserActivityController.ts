import {Request, Response} from "express";
import IController from "./ControllerInterface";
import UserActivityService from "../services/UserActivityService";



class UserActivityController implements IController{

    index = async (req: Request, res: Response): Promise<Response> => {

        const service: UserActivityService = new UserActivityService(req);
        const boards = await service.getAll();
        
        return res.send(boards)
    }

    create = async (req: Request, res: Response): Promise<Response> => {
        
        const service: UserActivityService = new UserActivityService(req);
        const board = await service.store();

        return res.send({
            data : board,
            message : "board created"
        });

    }

    show = async (req: Request, res: Response): Promise<Response> => {
        
        const service: UserActivityService = new UserActivityService(req);
        const board = await service.show();
        return res.send(board)
    }

    update= async (req: Request, res: Response): Promise<Response> => {

        const service: UserActivityService = new UserActivityService(req);
        const board = await service.update();

         return res.send({
            data : board,
            message : "board updated"
        });
    }

    delete = async (req: Request, res: Response): Promise<Response> => {
        
        const service: UserActivityService = new UserActivityService(req);
        const board = await service.delete();

        return res.send({
            message : "board deleted"
        });
    }
    
}

export default new UserActivityController();