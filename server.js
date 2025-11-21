const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 3000;

// Use default middlewares
server.use(middlewares);

// Use router
server.use(router);

// Bind to 0.0.0.0
server.listen(port, '0.0.0.0', () => {
  console.log(`JSON Server is running at http://0.0.0.0:${port}`);
});
