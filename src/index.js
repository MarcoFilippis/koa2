module.exports = (app, router) => {
    router
        .get('/', require('./controller/main/index'))
        .post('/posts', require('./controller/main/create'))

    // .get('/', async (ctx) => {
    //     ctx.body = "rota /"
    // })

}