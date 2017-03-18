import { Observable } from 'rxjs';
import { MongoClient } from 'mongodb';

class Database {
  public static db: any;

  public static connect = () => Observable.create(observer => MongoClient
    .connect('mongodb://localhost:27017/rx-db', (err, db) => {
      Database.db = db;
      observer.next({ err, db });
    }));
}

export { Database };
