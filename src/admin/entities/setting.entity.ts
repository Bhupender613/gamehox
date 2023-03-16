import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";
import { Document } from "mongoose";

export type SettingDocument = Setting & Document;
@Schema({
  timestamps: true,
  versionKey: false,
})
export class Setting {
  @Prop()
  @ApiProperty()
  logoWidth: string;

  @Prop()
  @ApiProperty()
  logoHeight: string;

  @Prop()
  @ApiProperty()
  @IsString()
  headerBgColor: string;

  @Prop()
  @ApiProperty()
  @IsString()
  headingColor: string;

  @Prop()
  @ApiProperty()
  @IsString()
  footerColor: string;

  @Prop()
  @ApiProperty()
  @IsString()
  gamePageBarColor: string;

  @Prop()
  @ApiProperty()
  @IsString()
  bodyBgColor: string;

  @Prop()
  @ApiProperty()
  @IsString()
  descriptionBoxBgColor: string;

  @Prop()
  @ApiProperty()
  @IsString()
  descriptionBoxBorderColor: string;

  @Prop()
  @ApiProperty()
  @IsString()
  tagTextBgColor: string;

  @Prop()
  @ApiProperty()
  @IsString()
  gameThumbBgColor: string;

  @Prop()
  @ApiProperty()
  @IsString()
  gameThumbTextColor: string;

  @Prop()
  @ApiProperty()
  enableBottomRow: boolean;

  @Prop()
  @ApiProperty()
  splashScreen: boolean;

  @Prop()
  @ApiProperty()
  enableThumbTitle: boolean;

  @Prop()
  @ApiProperty()
  searchFeature: boolean;

  @Prop()
  @ApiProperty()
  @IsString()
  homeMetaTitle: string;

  @Prop()
  @ApiProperty()
  @IsString()
  homeMetaDescription: string;

  @Prop()
  @ApiProperty()
  @IsString()
  homeDescription: string;

  @Prop()
  @ApiProperty()
  @IsString()
  bestGameMetaTitle: string;

  @Prop()
  @ApiProperty()
  @IsString()
  bestGameMetaDescription: string;

  @Prop()
  @ApiProperty()
  @IsString()
  bestGameDescription: string;

  @Prop()
  @ApiProperty()
  @IsString()
  newGameMetaTitle: string;

  @Prop()
  @ApiProperty()
  @IsString()
  newGameMetaDescription: string;

  @Prop()
  @ApiProperty()
  @IsString()
  newGameDescription: string;

  @Prop()
  @ApiProperty()
  @IsString()
  termMetaTitle: string;

  @Prop()
  @ApiProperty()
  @IsString()
  termMetaDescription: string;

  @Prop()
  @ApiProperty()
  @IsString()
  termDescription: string;

  @Prop()
  @ApiProperty()
  @IsString()
  privacyMetaTitle: string;

  @Prop()
  @ApiProperty()
  @IsString()
  privacyMetaDescription: string;

  @Prop()
  @ApiProperty()
  @IsString()
  privacyDescription: string;

  @Prop()
  @ApiProperty()
  @IsString()
  aboutMetaTitle: string;

  @Prop()
  @ApiProperty()
  @IsString()
  aboutMetaDescription: string;

  @Prop()
  @ApiProperty()
  @IsString()
  aboutDescription: string;

  @Prop()
  @ApiProperty()
  @IsString()
  tagMetaTitle: string;

  @Prop()
  @ApiProperty()
  @IsString()
  tagMetaDescription: string;

  @Prop()
  @ApiProperty()
  @IsString()
  tagDescription: string;

  @Prop({ default: false })
  @ApiProperty()
  isDeleted: boolean;

  @Prop({ default: false })
  @ApiProperty()
  isBlocked: boolean;
}
export const SettingSchema = SchemaFactory.createForClass(Setting);
