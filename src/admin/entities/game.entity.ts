import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import mongoose, { Document } from 'mongoose';
import { Tag } from './tag.entity';

export type GameDocument = Game & Document;
@Schema({
    timestamps: true,
    versionKey: false
})
export class Game {
    @Prop()
    @ApiProperty()
    title: string;

    @Prop()
    @ApiProperty()
    metaTitle: string;

    @Prop()
    @ApiProperty()
    metaDescription: string;

    @Prop()
    @ApiProperty()
    description: string;

    @Prop()
    @ApiProperty()
    gameWidth: string;

    @Prop()
    @ApiProperty()
    gameHeight: string;

    @Prop()
    @ApiProperty()
    gameControls: string;

    @Prop()
    @ApiProperty()
    gameFile: string;

    @Prop()
    @ApiProperty()
    fixedSpot: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Tag.name })
    primaryTag: Tag;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Tag.name })
    SecondaryTag: Tag;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Tag.name })
    tag: Tag;

    @Prop()
    @ApiProperty()
    featuredGame: string;
    
    @Prop({ default: false })
    @ApiProperty()
    visibleMobile: boolean;

    @Prop({ default: false })
    @ApiProperty()
    enable: boolean;

    @Prop({ default: false })
    @ApiProperty()
    isDeleted: boolean;

    @Prop({ default: false })
    @ApiProperty()
    isBlocked: boolean;

    
}
export const GameSchema = SchemaFactory.createForClass(Game);