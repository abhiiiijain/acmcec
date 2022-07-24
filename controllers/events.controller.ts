import { Request, Response } from 'express';
import {
	CreateEventBody,
	DeleteEventImageParams,
	DeleteEventImageQuery,
	DeleteEventParams,
	UpdateEventBody,
	UpdateEventParams,
} from '../schema/events.schema';
import { Event, EventModel } from '../models/events.model';
import { StatusCodes } from 'http-status-codes';
import {
	FileToDelete,
	deleteMultipleFiles,
	deleteSingleFile,
} from '../helpers/file.helper';

/* --------------------------- ANCHOR create event -------------------------- */
export const createEvent = async (
	req: Request<{}, {}, CreateEventBody>,
	res: Response
) => {
	try {
		const { description, title, date, startTime, endTime } = req.body;

		const images = req.files;

		await EventModel.create({
			description,
			title,
			date,
			startTime,
			endTime,
			images,
		}); //entry in db

		return res
			.status(StatusCodes.CREATED)
			.send('Congratulations and Celebrations, event ben gya ;)');
	} catch (err) {
		deleteMultipleFiles(req.files as FileToDelete[]);

		res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('o bhi nhi gya ;(');
	}
};

/* -------------------------- ANCHOR get all events ------------------------- */

export const getAllEvents = async (req: Request, res: Response) => {
	try {
		const events = await EventModel.find();

		res.status(StatusCodes.OK).send(events);
	} catch (err) {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(
			'something went wrong'
		);
	}
};

/* -------------------------- ANCHOR update event ------------------------- */

export const updateEvent = async (
	req: Request<UpdateEventParams, {}, UpdateEventBody>,
	res: Response
) => {
	try {
		const { id } = req.params;
		const { title, description, date, startTime, endTime } = req.body;

		const images: object[] = [];

		const event = await EventModel.findById(id);

		if (!event)
			return res
				.status(StatusCodes.NOT_FOUND)
				.send('event not found check your id');

		if (req.files && req.files.length > 0 && event) {
			images.push(
				...(event.images as object[]),
				...(req.files as object[])
			);
		}

		await EventModel.findByIdAndUpdate(
			id,
			{
				title,
				description,
				date,
				startTime,
				endTime,
				images: images.length > 0 ? images : [...event.images],
			},
			{ new: true }
		);

		res.status(StatusCodes.OK).send('aOK');
	} catch (err) {
		deleteMultipleFiles(req.files as FileToDelete[]);
		res.status(StatusCodes.NOT_FOUND).send('kripya dubara koshish kre');
	}
};

/* --------------------------- ANCHOR Delete Event -------------------------- */

export const deleteEvent = async (
	req: Request<DeleteEventParams>,
	res: Response
) => {
	try {
		const { id } = req.params;
		const event = await EventModel.findById(id);

		if (!event)
			return res.status(StatusCodes.NOT_FOUND).send('Event Not Found');

		deleteMultipleFiles(event.images as FileToDelete[]);

		await EventModel.findByIdAndDelete(id);

		res.status(StatusCodes.OK).send('Event Deleted');
	} catch (err) {
		res.status(StatusCodes.NOT_FOUND).send('Invalid id');
	}
};

/* --------------------------- ANCHOR Delete Event Image -------------------------- */

export const deleteImage = async (
	req: Request<DeleteEventImageParams, {}, {}, DeleteEventImageQuery>,
	res: Response
) => {
	try {
		const { id } = req.params;
		const { path } = req.query;
		const event = await EventModel.findById(id);

		if (!event)
			return res.status(StatusCodes.NOT_FOUND).send('Event Not Found');

		deleteSingleFile(path);

		const images: Event['images'] = event.images;

		const filteredImages = images.filter(img => img.path === path);

		event.images = filteredImages;

		await event.save();

		res.status(StatusCodes.OK).send('image deleted successfully');
	} catch (err) {
		res.status(StatusCodes.NOT_FOUND).send(
			'event not found please check id'
		);
	}
};
