import {Request, Response} from "express";
import IController from "./ControllerInterface";
import ListActivityService from "../services/ListActivityService";



class ListActivityController implements IController{

    index = async (req: Request, res: Response): Promise<Response> => {

        const service: ListActivityService = new ListActivityService(req);
        const data = await service.getAll();
        
        return res.send(data)
    }

    taskByBoard = async (req: Request, res: Response): Promise<Response> => {

        const service: ListActivityService = new ListActivityService(req);
        const data = await service.getByBoard();
        
        return res.send(data)
    }

    create = async (req: Request, res: Response): Promise<Response> => {
        
        const service: ListActivityService = new ListActivityService(req);
        const data = await service.store();

        return res.send({
            data : data,
            message : "data created"
        });

    }

    show = async (req: Request, res: Response): Promise<Response> => {
        
        const service: ListActivityService = new ListActivityService(req);
        const data = await service.show();
        return res.send(data)
    }

    update= async (req: Request, res: Response): Promise<Response> => {

        const service: ListActivityService = new ListActivityService(req);
        const data = await service.update();

         return res.send({
            data : data,
            message : "data updated"
        });
    }

    delete = async (req: Request, res: Response): Promise<Response> => {
        
        const service: ListActivityService = new ListActivityService(req);
        const data = await service.delete();

        return res.send({
            message : "data deleted"
        });
    }
    
}

export default new ListActivityController();