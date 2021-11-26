import { Request } from "express";
import UserActivityController from "../controllers/UserActivityController";
const db = require("../db/models");

class UserActivityService{
    credential: {
        id:number;
    }
    body: Request['body'];
    params: Request['params'];

    constructor (req:Request){
        this.credential = req.app.locals.credential;
        this.body = req.body;
        this.params =req.params;
    }

    getAll = async() => {
        const boards = await db.user_activity.findAll({
            where: {user_id:this.credential.id}
        });
        return boards
    }

    store = async() => {
        const { name } = this.body;
        const board = await db.user_activity.create({
            user_id:this.credential.id,
            name
        });
        return board
    }

    update = async() => {
        
        const { id } = this.params;
        const { name } = this.body;

        const boards = await db.user_activity.update({
            name
        },
        {
            where: {
                id, 
                user_id:this.credential.id
            }
        });
        return boards
    }

    show = async() => {

        const { id } = this.params;
        const boards = await db.user_activity.findOne({
            where: {
                id, 
                user_id: this.credential.id
            }
        });
        return boards
    }

    delete = async() => {

        const { id } = this.params;

        const boards = await db.user_activity.destroy({
            where: {
                id, 
                user_id:this.credential.id}
        });
        return boards

    }
}

export default UserActivityService