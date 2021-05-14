import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type CatDocument = Cat & Document;

@Schema()
export class Cat {
  /**
   * The name of the Cat
   * @example Kitty
   */
  @Prop()
  name: string;

  @ApiProperty({ example: 1, description: 'The age of the Cat' })
  @Prop()
  age: number;

  @ApiProperty({
    example: 'Maine Coon',
    description: 'The breed of the Cat',
  })
  @Prop()
  breed: string;
}

export const CatSchema = SchemaFactory.createForClass(Cat);
