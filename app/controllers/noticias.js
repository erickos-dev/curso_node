module.exports.noticias = function (applications, req, res) {
    var conection = applications.config.dbConnection();
    var noticiasModel = new applications.app.models.NoticiasDAO(conection);

    noticiasModel.getNoticias(function (err, noticias) {
       //  console.log("🚀 ~ file: noticias.js ~ line 8 ~ noticias", noticias)
        res.render("noticias/noticias", { noticias: noticias });
    });
}

module.exports.noticia = function (applications, req, res) {
    var conection = applications.config.dbConnection();
    var noticiasModel = new applications.app.models.NoticiasDAO(conection);

    var id_noticia = req.query
    console.log("🚀 ~ file: noticias.js ~ line 16 ~ id_noticia", id_noticia)
    noticiasModel.getNoticia(id_noticia.id_noticia, function (err, result) {
        res.render("noticias/noticia", { noticia: result });
    });
}