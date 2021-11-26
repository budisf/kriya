import express,{ Application, Request, Response} from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import compression from "compression";
import helmet from "helmet";
import cors from "cors";
import dotenv from "dotenv";

//Routers
import UserActivityRoutes from "./routers/UserActivityRoutes";
import AuthRoutes from "./routers/AuthRoutes";
import ListActivityRoutes from "./routers/ListActivityRoutes";

class App{

    public app:Application;

    constructor(){
        this.app = express();
        this.plugins();
        this.routes();
        dotenv.config();
    }

    protected plugins(): void {
        this.app.use(bodyParser.json());
        this.app.use(morgan("dev"));
        this.app.use(compression());
        this.app.use(helmet());
        this.app.use(cors());
    }

    protected routes():void {
      
        this.app.use("/api/v1/board", UserActivityRoutes);
        this.app.use("/api/v1/task", ListActivityRoutes);
        this.app.use("/api/v1/auth", AuthRoutes);
    
    }
}

const port: number = 8000;
const app = new App().app;

app.listen(port, ()=>{
    console.log("Aplikasi ini berjalan di port " + port);

    console.log(process.env.DB_HOST);
})