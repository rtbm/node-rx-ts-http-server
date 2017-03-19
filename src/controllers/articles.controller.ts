import { IncomingMessage, ServerResponse } from 'http';
import { Database, FormData } from '../lib';
import { Observable } from 'rxjs';

interface IArticle {
  _id?: string;
  title: string;
  body: string;
}

class ArticlesController {
  public static create = (req: IncomingMessage, res: ServerResponse) => {
    const formData: Observable<any> = FormData.getData(req);

    formData.first().subscribe(({ data }) => {
      const doc: IArticle = {
        title: data.title,
        body: data.body,
      };

      ArticlesController.collection
        .insert(doc, (err, result) => {
          if (err) { throw err; }

          return res.end(JSON.stringify(result));
        });
    });
  };

  private static collection = Database.db.collection('articles');
}

export { ArticlesController };
