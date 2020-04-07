const Router = require('koa-router');
// const reptileHuPu = require('../controllers/reptile/hupu')
// const responseWrapper = require('../utils/responseWrapper')
const router = new Router()


router.get('/', async (ctx, next) => {
    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>自动编译!</h1>';
})

router.post('github/burn', async(ctx,next) =>{
    var str = "接收成功"
    ctx.response.body = str
    console.log(str)
})

// router.post('/reptile/hupu', async (ctx, next) => {
//     var str = await reptileHuPu.getInfo()
//     ctx.response.body = responseWrapper({data:str})
//     console.log(typeof (str))
// })

module.exports = router