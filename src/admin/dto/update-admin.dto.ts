import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';
import { CreateAdminDto } from './create-admin.dto';

export class UpdateAdminDto extends PartialType(CreateAdminDto) {

    @ApiProperty()
    @IsString()
    name:string;

    @ApiProperty()
    @IsString()
    phoneNumber:string;
}
