module.exports = function (applications) {
    applications.get('/noticias', function (req, res) {
        applications.app.controllers.noticias.noticias(applications, req, res)

    })

    applications.get('/noticia', function (req, res) {
        applications.app.controllers.noticias.noticia(applications, req, res)
    });
}