module.exports = function (applications) {
    applications.get('/noticias', function (req, res) {

        var conection = applications.config.dbConnection();
        var noticiasModel = new applications.app.models.noticiasModel(conection);

        noticiasModel.getNoticias(function (err, noticias) {
            console.log("🚀 ~ file: noticias.js ~ line 8 ~ noticias", noticias)
            res.render("noticias/noticias", { noticias: noticias });
        });

    })
}