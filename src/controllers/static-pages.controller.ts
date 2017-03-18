import { IncomingMessage, ServerResponse } from 'http';

const homePageHtml = require('../templates/home.html');
const aboutPageHtml = require('../templates/about.html');
const createArticleHtml = require('../templates/create-article.html');

class StaticPagesController {
  public static homePage = (req: IncomingMessage, res: ServerResponse) =>
    res.end(homePageHtml);

  public static aboutPage = (req: IncomingMessage, res: ServerResponse) =>
    res.end(aboutPageHtml);

  public static createArticle = (req: IncomingMessage, res: ServerResponse) =>
    res.end(createArticleHtml);
}

export { StaticPagesController };
