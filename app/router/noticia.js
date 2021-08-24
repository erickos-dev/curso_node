module.exports = function (app) {
    app.get('/noticia', function (req, res) {
        var conection = app.config.dbConnection();
        var noticiasModel = app.app.models.noticiasModel(conection);

        noticiasModel.getNoticia( function (err, result) {
            res.render("noticias/noticia", { noticia: result });
        });    
    });
};