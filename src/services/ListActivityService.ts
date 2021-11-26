import { Request } from "express";
const db = require("../db/models");

class ListActivityService{
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

        const data = await db.list_activity.findAll({
            where: { user_id:this.credential.id}
        });
        return data
    }

    getByBoard = async() => {

        const {board_id} = this.params;
        const data = await db.list_activity.findAll({
            where: { user_activity_id:board_id, user_id:this.credential.id}
        });
        return data
    }

    store = async() => {
        const { desc, user_activity_id } = this.body;
        const data = await db.list_activity.create({
            user_id:this.credential.id,
            desc,
            user_activity_id
        });
        return data
    }

    update = async() => {
        
        const { id } = this.params;
        const { desc, user_activity_id } = this.body;

        const data = await db.list_activity.update({
            desc,
            user_activity_id
        },
        {
            where: {
                id, 
                user_id:this.credential.id
            }
        });
        return data
    }

    show = async() => {

        const { board_id, id } = this.params;
        const data = await db.list_activity.findOne({
            where: {
                id, 
                user_id: this.credential.id,
                user_activity_id : board_id
            }
        });
        return data
    }

    delete = async() => {

        const { id } = this.params;

        const data = await db.list_activity.destroy({
            where: {
                id, 
                user_id:this.credential.id}
        });
        return data

    }
}

export default ListActivityService