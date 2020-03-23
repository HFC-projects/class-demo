import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from  'class-validator';
import { ClassesService } from '../classes.service';

@ValidatorConstraint()
export class ClassValidator implements ValidatorConstraintInterface{
  constructor(private classesService: ClassesService){}

  async validate(classId: String, args: ValidationArguments){
    return await (this.classesService.findOne(classId)) == null;
  }
}