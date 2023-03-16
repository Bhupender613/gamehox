import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateSettingDto {
  @ApiProperty()
  @IsString()
  logoWidth: string;

  @ApiProperty()
  @IsString()
  logoHeight: string;
}
