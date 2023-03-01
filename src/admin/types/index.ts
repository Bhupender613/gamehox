import { ApiProperty } from "@nestjs/swagger";
import { ObjectId } from "mongoose"

export class GetIndustryType {
    @ApiProperty()
    skip?:number; 
    @ApiProperty()
    limit?: number;
    @ApiProperty()
    search?: string; 
}