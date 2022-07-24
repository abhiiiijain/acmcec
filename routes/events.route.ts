import { Router } from 'express';
import {
	processRequestBody,
	processRequestParams,
	processRequestQuery,
} from 'zod-express-middleware';
import {
	createEvent,
	deleteEvent,
	deleteImage,
	getAllEvents,
	updateEvent,
} from '../controllers/events.controller';
import {
	createEventSchema,
	deleteEventImageSchema,
	deleteEventSchema,
	updateEventSchema,
} from '../schema/events.schema';
import fileUpload from '../middlewares/multer.middleware';

const router = Router();
router.post(
	'/',
	processRequestBody(createEventSchema.body),
	fileUpload,
	createEvent
);
router.get('/', getAllEvents);
router.put(
	'/:id',
	processRequestParams(updateEventSchema.params),
	processRequestBody(updateEventSchema.body),
	fileUpload,
	updateEvent
);
router.delete(
	'/:id',
	processRequestParams(deleteEventSchema.params),
	deleteEvent
);
router.delete(
	'/delete-image/:id',
	processRequestParams(deleteEventImageSchema.params),
	processRequestQuery(deleteEventImageSchema.query),
	deleteImage
);
export default router;
