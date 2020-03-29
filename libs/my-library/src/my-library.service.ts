import { Injectable } from '@nestjs/common';

@Injectable()
export class MyLibraryService {
    sayHello(){
        console.log('Hello World');
    }
}
