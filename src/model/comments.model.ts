import { getModelForClass, prop, Ref } from "@typegoose/typegoose";
import { customAlphabet } from "nanoid";


const nanoid = customAlphabet("1234567890abcdefghijklmnopqrstuvwxyz", 10);

export class Comments {
  @prop({ required: true })
  public name: string;

  @prop({ required: true})
  public movieId: number;

  @prop({ required: true, maxlength: 500})
  public comment: string;
}

export const CommentModel = getModelForClass(Comments, {
  schemaOptions: {
    timestamps: true,
  },
});
