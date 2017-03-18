import * as http from 'http';
import { IncomingMessage, ServerResponse} from 'http';
import { Subject, Observable } from 'rxjs';
import { IRouterRoute, Router } from './router';
import { Database } from './database';

interface IServerData {
  req: IncomingMessage;
  res: ServerResponse;
}

class IServerObservable<T> extends Observable<T> {
  public server: any;
}

class Server {
  public static listen = (port: number) => {
    const dbObservable: Observable<any> = Database.connect();

    dbObservable.first().subscribe(({ err }) => {
      if (err) {
        throw err;
      }

      Router.createRoutes();

      const serverObservable: IServerObservable<any> = Server.createServer();
      serverObservable.server.listen(port);

      serverObservable.subscribe(({ req, res }: IServerData) => {
        const routesMatch: IRouterRoute[] = Router.routes
         .filter(route => req.url === route.url && req.method === route.method);

        if (!routesMatch || !routesMatch.length) {
          res.statusCode = 404;
          return res.end('404: Not Found');
        }

        routesMatch.map(route => route.action(req, res));
      });
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
