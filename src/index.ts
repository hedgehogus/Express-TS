import express from 'express';
import { router } from './routes/loginRoutes';
import bodyParser from 'body-parser';
import cookieSession from "cookie-session";
import { router as controllerRouter } from './controllers/decorators/constroller';
import './controllers/LoginController';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['asdf'] }));
app.use(controllerRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

