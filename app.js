const app = require('./config/server');
const homeRoute = require('./app/routes/home');
const createBookRoute = require('./app/routes/form_create_book');
const booksRoute = require('./app/routes/books');

homeRoute(app);
createBookRoute(app);
booksRoute(app);

app.listen(3000, () => console.log('Express server online'));