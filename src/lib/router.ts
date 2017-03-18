interface IRouterRoute {
  method: string;
  url: string;
  action: any;
}

class Router {
  public static routes: IRouterRoute[] = [];

  public static createRoutes = () => {
    Router.routes = [
      ...require('../routes/articles.routes'),
      ...require('../routes/static-pages.routes'),
    ];
  }
}

export { IRouterRoute, Router };
