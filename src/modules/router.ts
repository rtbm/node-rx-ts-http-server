import { StaticPagesRoutes } from '../routes';

export interface IRouterRoute {
  method: string;
  url: string;
  action: any;
}

class Router {
  public static routes: IRouterRoute[] = [];

  public static createRoutes = () => {
    const routes: IRouterRoute[] = [
      ...StaticPagesRoutes.create(),
    ];

    Router.routes = [
      ...Router.routes,
      ...routes,
    ];
  }
}

Router.createRoutes();

export { Router };
