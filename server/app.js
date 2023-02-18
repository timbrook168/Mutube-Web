import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import ChatGPTClient from './chatgpt/ChatGPTClient';

import indexRouter from './routes/index';
import chatRouter from './routes/chat';
import { GPT_KEY } from './config';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', indexRouter);
app.use('/chat', chatRouter);

global.gptClient = new ChatGPTClient(GPT_KEY);

export default app;
