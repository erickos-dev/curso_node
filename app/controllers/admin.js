module.exports.formulario_inclusao_noticia = function (applicacion, req, res) {
    res.render("admin/form_add_noticia", { validacao: {}, noticia: {} });
}

module.exports.noticias_salvar = function (app, req, res) {

    var noticia = req.body;
    console.log(noticia);
    req.assert('titulo', 'Título é obrigatório').notEmpty();
    req.assert('resumo', 'Resumo é obrigatório').notEmpty();
    req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres')
        .len(10, 100);
    req.assert('autor', 'Autor é obrigatório').notEmpty();
    req.assert('data_noticia', 'Data invalida').notEmpty().isDate({ format: 'YYYY-MM-DD' });
    req.assert('noticia', 'Noticia é obrigatoria').notEmpty();

    req.getValidationResult().then(function (result) {
        if (!result.isEmpty()) {
            var errors = result.array();
            console.log(errors);
            res.render("admin/form_add_noticia", { validacao: errors, noticia: noticia });
        } else {
            var conection = app.config.dbConnection();
            var noticiasModel = new app.app.models.NoticiasDAO(conection);

            noticiasModel.salvarNoticia(noticia, function (err, result) {
                res.redirect('/noticias');
            });

        }
    });

}