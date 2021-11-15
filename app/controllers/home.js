module.exports.index = function (application, req, res) {

    var connection = application.config.dbConnection();
    var noticiasModel = new application.app.models.NoticiasDAO(connection);

    noticiasModel.getUltimasNoticias(function (err, result) {
        console.log("🚀 ~ file: home.js ~ line 7 ~ result", result)
        res.render("home/index", {noticias: result });       
    });



}