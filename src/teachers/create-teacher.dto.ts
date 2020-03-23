import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTeacherDto {

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: 'The teacher\'s name'
  })
  readonly name: string
}