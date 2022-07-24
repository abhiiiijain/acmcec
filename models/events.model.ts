import { prop, getModelForClass } from '@typegoose/typegoose';

interface File {
	path: string;
}

export class Event {
	@prop({ required: true })
	public title: string;

	@prop({ required: true })
	public description: string;

	@prop()
	public date: string;

	@prop()
	public startTime: string;

	@prop()
	public endTime: string;

	@prop({ required: true })
	public images: Array<File>;
}

export const EventModel = getModelForClass(Event, {
	schemaOptions: {
		timestamps: true,
	},
});
