import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan'

import { default as indexRouter } from './routes/index.js';
import {default as usersRouter} from './routes/users.js';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/users', usersRouter);

export default app;
