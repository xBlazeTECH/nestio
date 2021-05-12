import { Controller, Get, MessageEvent, Render, Sse } from '@nestjs/common';
import { interval, Observable } from 'rxjs';
import { AppService } from './app.service';
import { map } from 'rxjs/operators';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getHello(): any {
    return { message: this.appService.getHello() };
  }

  @Sse('sse')
  sse(): Observable<MessageEvent> {
    return interval(1000).pipe(map((_) => ({ data: { hello: 'world' } })));
  }
}
