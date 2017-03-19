import { IncomingMessage } from 'http';
import * as qs from 'querystring';
import { Observable } from 'rxjs';

class FormData {
  public static getData = (req: IncomingMessage) => Observable.create(observer => {
    const chunks: any[] = [];

    req.on('data', chunk => chunks.push(chunk));

    req.on('end', () => {
      const buffer = Buffer.concat(chunks);
      const data = qs.parse(buffer.toString());
      observer.next({ data });
    });
  });
}

export { FormData };
