import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateTagDto {

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    title: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    metaTitle: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    metaDescription: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    description: string;

    @ApiProperty()
    addToMenu: boolean;
 
    @ApiProperty()
    enable: boolean;
    
}
