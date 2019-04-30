const app = require('./api');

const APP_PORT = 3001;

app.listen(APP_PORT, () => {
  console.log('Server listening on port:', APP_PORT);
});
