import express from 'express';
import { celebrate, Joi } from 'celebrate';
import PointsController from "./controllers/PointsController";
import ItemsController from "./controllers/ItemsController";
import multer from 'multer';
import multerConfig from './config/multer';

const routes = express.Router();
const upload = multer(multerConfig);

routes.get('/items', new ItemsController().index);

routes.get('/points', new PointsController().index);
routes.get('/points/:id', new PointsController().show);

routes.post(
  '/points',
  upload.single('image'),
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required().email(),
      whatsapp: Joi.number().required(),
      latitude: Joi.number().required(),
      longitude: Joi.number().required(),
      city: Joi.string().required(),
      uf: Joi.string().required().max(2),
      items: Joi.string().required(),
    })
  }, {
    abortEarly: false
  }),
  new PointsController().create);

export default routes;
