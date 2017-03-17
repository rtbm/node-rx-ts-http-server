import { Server } from './modules/server';

const PORT = process.env.PORT || 8080;

Server.listen(PORT);
