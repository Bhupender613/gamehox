import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { CreateIndustryDto } from './create-industry.dto';

export class UpdateIndustryDto extends PartialType(CreateIndustryDto) {

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name:string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    identificationAlphabet:string;
}
