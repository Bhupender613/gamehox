import { ApiProperty, PartialType } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { CreateHomeTagdto } from "./create-hometag.dto";

export class UpdateHomeTagDto extends PartialType(CreateHomeTagdto) {
  @ApiProperty()
  tags?: [];
}
