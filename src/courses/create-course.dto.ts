import { IsString, IsNotEmpty, IsMongoId, Validate } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ClassValidator } from 'src/classes/validators/class.validator';

export class CreateCourseDto {

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: 'The course\'s name'
  })
  readonly name: string

  @IsNotEmpty()
  @IsMongoId()
  @Validate(ClassValidator, {message: 'invalid class id'})
  @ApiProperty({
    type: String,
    description: 'The ID of course\'s class entitys' 
  })
  readonly class: string

  @IsMongoId()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: 'The ID of course\'s teacher entity'
  })
  readonly teacher: string
}