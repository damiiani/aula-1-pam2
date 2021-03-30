module.exports = (app) => {
  app.get('/books', (req, res) => {
    res.render('books/books');
  });
};