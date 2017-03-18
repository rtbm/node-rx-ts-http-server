import { IncomingMessage, ServerResponse } from 'http';
import { Database } from '../lib/database';

interface IArticle {
  _id?: string;
  title: string;
  body: string;
}

class ArticlesController {
  private collection;

  constructor() {
    this.collection = Database.db.collection('articles');
  }

  public create = (req: IncomingMessage, res: ServerResponse) => {
    this.collection.insert({
      title: 'foo',
      body: 'bar',
    } as IArticle, (err, result) => {
      if (err) {
        throw err;
      }

      res.end(JSON.stringify(result));
    });
  };
}

export { ArticlesController };
