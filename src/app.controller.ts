import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { CatsService } from './cats/cats.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly catsService: CatsService,
  ) {}

  @Get()
  @Render('index')
  getHello(): any {
    return {
      message: this.appService.getHello(),
      cats: this.catsService.findAll(),
    };
  }
}
