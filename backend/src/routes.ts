import express, {Request} from 'express';
import knex from './database/connection';
import PointsController from "./controllers/PointsController";
import ItemsController from "./controllers/ItemsController";

const routes = express.Router();

routes.get('/items', new ItemsController().index);

routes.post('/points', new PointsController().create)
routes.get('/points', new PointsController().index)
routes.get('/points/:id', new PointsController().show)

export default routes;
