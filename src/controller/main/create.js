const Post = require('./../../models/post')

module.exports = async (ctx) => {
   let post = new Post(ctx.request.body)

//    console.log ('title = ' + ctx.request.body)

   await post.save()

   ctx.status = 201
   ctx.body = post
}