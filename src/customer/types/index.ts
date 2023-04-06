import { ApiProperty } from "@nestjs/swagger";
import { ObjectId } from "mongoose";

export class GetAllGameType {
  @ApiProperty()
  skip?: number;
  @ApiProperty()
  limit?: number;
  @ApiProperty()
  search?: string;
}
export class GameByTag {
  @ApiProperty()
  skip?: number;
  @ApiProperty()
  limit?: number;
  @ApiProperty()
  id?: ObjectId;
}

export class AllTagType {
  @ApiProperty()
  skip?: number;
  @ApiProperty()
  limit?: number;
  @ApiProperty()
  search?: string;
}
