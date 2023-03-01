import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { Industry } from "../../admin/entities/industry.entity";

export type UserDocument = User & Document;
@Schema({
  timestamps: true,
  versionKey: false,
})
export class User {
  @Prop()
  companyName: string;

  @Prop()
  accountName: string;

  @Prop()
  UEN: string;

  @Prop({ required: true, unique: true, type: String })
  email: string;

  @Prop()
  password: string;

  @Prop()
  randomNumber: string;

  @Prop()
  phoneNumber: string;

  @Prop()
  phoneCode: string;

  @Prop()
  logo: string;

  @Prop()
  contactPerson: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Industry.name })
  industryType: Industry;

  @Prop()
  outlets: number;

  @Prop()
  address: string;

  @Prop()
  country: string;

  @Prop()
  enrolmentDate: string;

  @Prop({ default: "" })
  lastLogin: string;

  @Prop({ default: false })
  isDeleted: boolean;

  @Prop({ default: false })
  isBlocked: boolean;

  @Prop()
  accessToken: string;

  @Prop({ default: false })
  status: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
