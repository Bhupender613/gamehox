import { ApiProperty } from "@nestjs/swagger";
import { ObjectId } from "mongoose"

export class GetTagType {
    @ApiProperty()
    skip?:number; 
    @ApiProperty()
    limit?: number;
    @ApiProperty()
    search?: string; 
}
export class GetGameType {
    @ApiProperty()
    skip?:number; 
    @ApiProperty()
    limit?: number;
    @ApiProperty()
    search?: string; 
}

