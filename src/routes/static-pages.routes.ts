import { IRouterRoute } from '../lib/router';
import { StaticPagesController } from '../controllers';

const StaticPagesRoutes: IRouterRoute[] = [{
  url: '/',
  method: 'GET',
  action: StaticPagesController.homePage,
}, {
  url: '/about',
  method: 'GET',
  action: StaticPagesController.aboutPage,
}, {
  url: '/create-article',
  method: 'GET',
  action: StaticPagesController.createArticle,
}];

module.exports = StaticPagesRoutes;
