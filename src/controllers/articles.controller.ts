import { IncomingMessage, ServerResponse } from 'http';
import { Database } from '../lib/database';

interface IArticle {
  _id?: string;
  title: string;
  body: string;
}

class ArticlesController {
  public static create = (req: IncomingMessage, res: ServerResponse) => ArticlesController
    .collection.insert({
      title: 'foo',
      body: 'bar',
    } as IArticle, (err, result) => {
      if (err) {
        throw err;
      }
      res.end(JSON.stringify(result));
    });

  private static collection = Database.db.collection('articles');
}

export { ArticlesController };
