import { ApiProperty, PartialType } from "@nestjs/swagger";
import { CreateHomeTagdto } from "./create-hometag.dto";

export class UpdateHomeTagDto extends PartialType(CreateHomeTagdto) {
  @ApiProperty()
  tags?: [];
}
