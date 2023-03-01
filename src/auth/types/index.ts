import { ApiProperty } from "@nestjs/swagger";
import { ObjectId } from "mongoose"

export class UserLoginType {
    @ApiProperty()
    email:string; 
    @ApiProperty()
    password: string;
}

