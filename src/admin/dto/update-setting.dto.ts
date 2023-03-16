import { PartialType } from "@nestjs/mapped-types";
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";
import { CreateSettingDto } from "./create-setting.dto";

export class UpdateSettingDto extends PartialType(CreateSettingDto) {
  @ApiProperty()
  @IsString()
  logoWidth: string;

  @ApiProperty()
  @IsString()
  logoHeight: string;

  @ApiProperty()
  @IsString()
  headerBgColor: string;

  @ApiProperty()
  @IsString()
  headingColor: string;

  @ApiProperty()
  @IsString()
  footerColor: string;

  @ApiProperty()
  @IsString()
  gamePageBarColor: string;

  @ApiProperty()
  @IsString()
  bodyBgColor: string;

  @ApiProperty()
  @IsString()
  descriptionBoxBgColor: string;

  @ApiProperty()
  @IsString()
  descriptionBoxBorderColor: string;

  @ApiProperty()
  @IsString()
  tagTextBgColor: string;

  @ApiProperty()
  @IsString()
  gameThumbBgColor: string;

  @ApiProperty()
  @IsString()
  gameThumbTextColor: string;

  @ApiProperty()
  enableBottomRow: boolean;

  @ApiProperty()
  splashScreen: boolean;

  @ApiProperty()
  enableThumbTitle: boolean;

  @ApiProperty()
  searchFeature: boolean;

  @ApiProperty()
  @IsString()
  homeMetaTitle: string;

  @ApiProperty()
  @IsString()
  homeMetaDescription: string;

  @ApiProperty()
  @IsString()
  homeDescription: string;

  @ApiProperty()
  @IsString()
  bestGameMetaTitle: string;

  @ApiProperty()
  @IsString()
  bestGameMetaDescription: string;

  @ApiProperty()
  @IsString()
  bestGameDescription: string;

  @ApiProperty()
  @IsString()
  newGameMetaTitle: string;

  @ApiProperty()
  @IsString()
  newGameMetaDescription: string;

  @ApiProperty()
  @IsString()
  newGameDescription: string;

  @ApiProperty()
  @IsString()
  termMetaTitle: string;

  @ApiProperty()
  @IsString()
  termMetaDescription: string;

  @ApiProperty()
  @IsString()
  termDescription: string;

  @ApiProperty()
  @IsString()
  privacyMetaTitle: string;

  @ApiProperty()
  @IsString()
  privacyMetaDescription: string;

  @ApiProperty()
  @IsString()
  privacyDescription: string;

  @ApiProperty()
  @IsString()
  aboutMetaTitle: string;

  @ApiProperty()
  @IsString()
  aboutMetaDescription: string;

  @ApiProperty()
  @IsString()
  aboutDescription: string;

  @ApiProperty()
  @IsString()
  tagMetaTitle: string;

  @ApiProperty()
  @IsString()
  tagMetaDescription: string;

  @ApiProperty()
  @IsString()
  tagDescription: string;
}
