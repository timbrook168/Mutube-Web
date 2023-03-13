import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import ChatGPTClientV1 from './chatgpt/ChatGPTClientV1';

import indexRouter from './routes/index';

import gptChatRouter from './routes/gpt/chat';
import gptConfigRouter from './routes/gpt/config';

import { GPT_KEY } from './config';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', indexRouter);
app.use('/gpt/chat', gptChatRouter);
app.use('/gpt/config', gptConfigRouter);

global.gptClient = new ChatGPTClientV1(GPT_KEY);

export default app;
