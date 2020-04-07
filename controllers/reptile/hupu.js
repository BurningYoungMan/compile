const superagent = require('superagent')
const cheerio = require('cheerio')

const targetUrl = 'http://bbs.hupu.com/all-gambia'
const baseUrl = 'https://bbs.hupu.com/'

const fetchHuPuData = ()=>{
    return new Promise((resolve, reject) => {
    superagent
        .get(targetUrl)
        .end(async (err, res) => {
            if (err) {
                console.log(err);
                return;
            }
            let $ = cheerio.load(res.text);
            let listItems = $('.bbsHotPit .textSpan');
            let info = []
            listItems.each(async (index, elem) => {
                let titleElem = $(elem).find('a');
                let origin = titleElem ? titleElem.attr('href') : '';
                let title = titleElem ? titleElem.attr('title') : '';
                if (origin != '') {
                    info.push({
                        origin: baseUrl+origin,
                        title
                    })
                }
            })
            resolve(info)
        })
    })
}

const getInfo = async () => {
    let info = await fetchHuPuData()
    return info
}

module.exports = {
    getInfo
}