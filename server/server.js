import express from 'express';
import fs from 'fs';
import path from 'path';

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../src/App';
import Homepage from '../src/pages/Homepage'

import { matchPath, StaticRouter } from 'react-router-dom';
import routes from '../src/routes';

import { ServerStyleSheets, ThemeProvider } from '@material-ui/core/styles';
import theme from '../src/theme'


const PORT = 3030;

const app = express();

function renderFullPage(html, css) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>My page</title>
        <style id="jss-server-side">${css}</style>
      </head>
      <body>
        <div id="root">${html}</div>
      </body>
    </html>
  `;
}

function handleRender(req, res) {
  const sheets = new ServerStyleSheets();

  // Render the component to a string.
  const html = ReactDOMServer.renderToString(
    sheets.collect(
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>,
    ),
  );

  // Grab the CSS from the sheets.
  const css = sheets.toString();

  // Send the rendered page back to the client.
  res.send(renderFullPage(html, css));
}



// app.use('^/$', (req, res, next) => {
//   fs.readFile(path.resolve('./build/index.html'), 'utf-8', (err, data) => {
//     if (err) {
//       console.log(err);
//       return res.status(500).send('Some error happened');
//     }
//     return res.send(
//       data.replace(
//         '<div id="root"></div>',
//         `<div id="root">${ReactDOMServer.renderToString(
//           <StaticRouter location={req.url} context={{}}>
//             <App />
//           </StaticRouter>
//         )}</div>`
//       )
//     );
//   });
// });

app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.use(handleRender);

app.listen(PORT, () => {
  console.log(`App launched on port: ${PORT}`);
});
