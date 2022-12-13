import { Injectable } from '@nestjs/common';

//service serve para criar classes com funcionalidades

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
