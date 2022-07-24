import { object, string, TypeOf } from 'zod';

/* --------------------------------- ANCHOR createEvent --------------------------------- */

// use in route
export const createEventSchema = {
	body: object({
		title: string({ required_error: 'Title is required' })
			.min(3, 'Minimum 3 characters are required')
			.max(50, 'Maximum 50 characters are allowed')
			.optional(),
		description: string({
			required_error: 'Description is required',
		}).optional(),
		date: string().optional(),
		startTime: string().optional(),
		endTime: string().optional(),
	}),
};

// use in controller
export type CreateEventBody = TypeOf<typeof createEventSchema.body>;

/* --------------------------------- ANCHOR UpdateEvent --------------------------------- */

export const updateEventSchema = {
	body: object({
		title: string({ required_error: 'Title is required' })
			.min(3, 'Minimum 3 characters are required')
			.max(50, 'Maximum 50 characters are allowed')
			.optional(),
		description: string({
			required_error: 'Description is required',
		}).optional(),
		date: string().optional(),
		startTime: string().optional(),
		endTime: string().optional(),
	}),

	params: object({
		id: string(),
	}),
};

export type UpdateEventBody = TypeOf<typeof updateEventSchema.body>;
export type UpdateEventParams = TypeOf<typeof updateEventSchema.params>;

/* --------------------------------- ANCHOR DeleteEvent --------------------------------- */
export const deleteEventSchema = {
	params: object({
		id: string(),
	}),
};
export type DeleteEventParams = TypeOf<typeof deleteEventSchema.params>;

/* --------------------------------- ANCHOR DeleteEvent Image --------------------------------- */
export const deleteEventImageSchema = {
	params: object({
		id: string(),
	}),
	query: object({
		path: string({ required_error: 'path query is required' }),
	}),
};

export type DeleteEventImageParams = TypeOf<
	typeof deleteEventImageSchema.params
>;

export type DeleteEventImageQuery = TypeOf<typeof deleteEventImageSchema.query>;
