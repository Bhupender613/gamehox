import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { ObjectId } from 'mongoose';
import { CreateGameDto } from './create-game.dto';

export class UpdateGameDto extends PartialType(CreateGameDto) {

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
    @IsString()
    @IsNotEmpty()
    gameWidth: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    gameHeight: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    gameControls: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    gameFile: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    fixedSpot: string;

    @ApiProperty()
    primaryTag: ObjectId;

    @ApiProperty()
    SecondaryTag: ObjectId;

    @ApiProperty()
    tag: ObjectId;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    featuredGame: string;
    
    @ApiProperty()
    visibleMobile: boolean;
 
    @ApiProperty()
    enable: boolean;
    
}
