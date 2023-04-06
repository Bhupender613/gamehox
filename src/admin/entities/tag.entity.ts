import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { Document } from "mongoose";

export type TagDocument = Tag & Document;
@Schema({
  timestamps: true,
  versionKey: false,
})
export class Tag {
  @Prop()
  @ApiProperty()
  title: string;

  @Prop()
  @ApiProperty()
  metaTitle: string;

  @Prop()
  @ApiProperty()
  metaDescription: string;

  @Prop()
  @ApiProperty()
  description: string;

  @Prop({ default: false })
  @ApiProperty()
  addToMenu: boolean;

  @Prop()
  @ApiProperty()
  tagImage: string;

  @Prop({ default: false })
  @ApiProperty()
  enable: boolean;

  @Prop({ default: false })
  @ApiProperty()
  isDeleted: boolean;

  @Prop({ default: false })
  @ApiProperty()
  isBlocked: boolean;
}
export const TagSchema = SchemaFactory.createForClass(Tag);
