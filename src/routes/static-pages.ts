import { IncomingMessage, ServerResponse } from 'http';
import { IRouterRoute } from '../modules/router';

const nav = require('../templates/nav.html');

class StaticPagesRoutes {
  public static create = () => [{
    url: '/',
    method: 'GET',
    action: StaticPagesRoutes.homePage,
  }, {
    url: '/about',
    method: 'GET',
    action: StaticPagesRoutes.aboutPage,
  }] as IRouterRoute[];

  private static homePage = (req: IncomingMessage, res: ServerResponse) =>
    res.end(`<html><body>${nav} Hello World!</body></html>`);

  private static aboutPage = (req: IncomingMessage, res: ServerResponse) =>
    res.end(`<html><body>${nav} John Doe</body></html>`);
}

export { StaticPagesRoutes };
