import { ApiProperty } from "@nestjs/swagger";
import { ObjectId } from "mongoose";

export class GetTagType {
  @ApiProperty()
  skip?: number;
  @ApiProperty()
  limit?: number;
  @ApiProperty()
  search?: string;
}
export class GetGameType {
  @ApiProperty()
  skip?: number;
  @ApiProperty()
  limit?: number;
  @ApiProperty()
  search?: string;
}

export class GetSettingType {
  @ApiProperty()
  skip?: number;
  @ApiProperty()
  limit?: number;
}

export class DownloadTagCSV {
  @ApiProperty()
  isDeleted: false;
}
