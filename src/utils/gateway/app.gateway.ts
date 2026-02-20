import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  OnGatewayConnection,
  OnGatewayDisconnect,
  MessageBody,
  ConnectedSocket
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({ cors: { origin: '*' } })
export class AppGateway implements OnGatewayConnection, OnGatewayDisconnect {
  
  @WebSocketServer()
  server!: Server;

  handleConnection(client: Socket) {
    console.log(`🟢 Celular conectado no WebSocket! ID: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    console.log(`🔴 Celular desconectado: ${client.id}`);
  }

  @SubscribeMessage('entrar_sala')
  handleEntrarSala(
    @MessageBody() roomId: string,
    @ConnectedSocket() client: Socket,
  ) {
    client.join(roomId); 
    console.log(`👥 Cliente ${client.id} começou a escutar a sala: ${roomId}`);
  }
}