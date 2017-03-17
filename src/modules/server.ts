import * as http from 'http';
import { IncomingMessage, ServerResponse} from 'http';
import { Subject, Observable } from 'rxjs';
import { Router, IRouterRoute } from './router';

interface IServerData {
  req: IncomingMessage;
  res: ServerResponse;
}

class IServerObservable<T> extends Observable<T> {
  public server: any;
}

class Server {
  public static listen = (port: number) => {
    const serverObservable: IServerObservable<any> = Server.createServer();

    serverObservable.server.listen(port);

    serverObservable.subscribe(({ req, res }: IServerData) => {
      const routes: IRouterRoute[] = Router.routes
        .filter(route => req.url === route.url && req.method === route.method);

      if (!routes || !routes.length) {
        return res.end('404');
      }

      routes.map(route => route.action(req, res));
    });
  };

  private static createServer = () => {
    const subject: Subject<any> = new Subject();
    const observable: IServerObservable<any> = subject.asObservable() as IServerObservable<any>;

    observable.server = http.createServer((req: IncomingMessage, res: ServerResponse) =>
      subject.next({ req, res } as IServerData));

    return observable;
  };
}

export { Server };
