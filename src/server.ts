import * as path from 'path';
import * as express from 'express';
import * as bodyParser from 'body-parser';
// Angular 2
import 'angular2-universal/polyfills';
import {
  expressEngine,
  BASE_URL,
  ORIGIN_URL,
  REQUEST_URL,
  NODE_ROUTER_PROVIDERS,
  NODE_HTTP_PROVIDERS
} from 'angular2-universal';

import {provide, enableProdMode} from 'angular2/core';
import {APP_BASE_HREF} from 'angular2/router';

// Application
import {App} from './app/app.component';

let app = express();
let root = path.join(path.resolve(__dirname, '..'));

enableProdMode();

// Express View
app.engine('.html', expressEngine);
app.set('views', __dirname);
app.set('view engine', 'html');

app.use(bodyParser.json());


function ngApp(req, res) {
  let baseUrl = '/';
  let url = req.originalUrl || '/';
  res.render('index', {
    directives: [ App ],
    platformProviders: [
      provide(ORIGIN_URL, {useValue: 'http://localhost:3000'}),
      provide(BASE_URL, {useValue: baseUrl}),
    ],
    providers: [
      provide(REQUEST_URL, {useValue: url}),
      NODE_ROUTER_PROVIDERS,
      NODE_HTTP_PROVIDERS,
    ],
    async: true,
    preboot: false // { appRoot: 'app' } // your top level app component selector
  }, function(err, content){
  res.send(content);
  });
}

// Serve static files
app.use(express.static(root, {index: false}));

// Our API for demos only
app.get('/data.json', (req, res) => {
  res.json({
    data: 'fake data'
  });
});

// Routes with html5pushstate
app.use('/', ngApp);

// Server
app.listen(3000, () => {
  console.log('Listen on http://localhost:3000');
});
