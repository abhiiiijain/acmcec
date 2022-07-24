import express from 'express';
import mongoose from 'mongoose';
import env from 'dotenv';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import eventRouter from './routes/events.route';

env.config();

const app = express();
const DB_URI = process.env.DB_URI as string;

app.use(express.json());
app.use(helmet());
app.use(cookieParser());

app.use('/api/events', eventRouter);

mongoose.connect(DB_URI, () => {
	app.listen(8000);
});
