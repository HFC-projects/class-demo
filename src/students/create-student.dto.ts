import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateStudentDto {

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: 'The student\'s name'
  })
  readonly name: string
}