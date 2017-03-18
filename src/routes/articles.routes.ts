import { IRouterRoute } from '../lib/router';
import { ArticlesController } from '../controllers';

const ArticlesRoutes: IRouterRoute[] = [{
  url: '/articles',
  method: 'POST',
  action: new ArticlesController().create,
}];

module.exports = ArticlesRoutes;
