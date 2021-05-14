import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Server } from 'socket.io';
// import { CatsService } from 'src/cats/cats.service';
// import { Cat } from 'src/cats/schemas/cat.schema';

@WebSocketGateway()
export class EventsGateway {
  // constructor(private readonly catsService: CatsService) {}
  @WebSocketServer()
  public server: Server;

  // @SubscribeMessage('change')
  // changeModel(@MessageBody() data: any): Observable<WsResponse<unknown>> {
  //   return;
  // }

  // @SubscribeMessage('events')
  // findAll(@MessageBody() data: any): Observable<WsResponse<unknown>> {
  //   return from(this.catsService.findAll()).pipe(
  //     map((item) => ({ event: 'events', data: data })),
  //   );
  // }

  @SubscribeMessage('identity')
  async identity(@MessageBody() data: number): Promise<number> {
    return data;
  }
}
