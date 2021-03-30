module.exports = (app) => {
  app.get('/form_create_book', (req, res) => {
    res.render('admin/form_create_book');
  });
};