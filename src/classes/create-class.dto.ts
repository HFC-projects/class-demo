import { IsNumber, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateClassDto {

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    type: Number,
    description: 'The class number'
  })
  readonly classNumber: Number
}