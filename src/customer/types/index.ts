import { ApiProperty } from "@nestjs/swagger";
import { ObjectId } from "mongoose"

export class GetCustomerType {
    @ApiProperty()
    skip?:number; 
    @ApiProperty()
    limit?: number;
    @ApiProperty()
    search?: string; 
    @ApiProperty()
    searchKeyword?:string; 
    @ApiProperty()
    user?:ObjectId; 
    @ApiProperty()
    outlet?:ObjectId; 
    @ApiProperty()
    isDeleted?:boolean; 
}
export class CsvFieldType {
    @ApiProperty()
    user:ObjectId; 
    @ApiProperty()
    outlet:ObjectId; 
}
