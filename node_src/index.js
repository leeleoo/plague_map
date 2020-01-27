let request = require('request')
let cheerio = require('cheerio')
let fs = require('fs')

request({
  url   : 'https://3g.dxy.cn/newh5/view/pneumonia?scene=2&clicktime=1579591033&enterid=1579591033&from=groupmessage&isappinstalled=0',
  method: 'GET',
  header: {
    'User-Agent':
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36',
    Referer     : 'https://www.meituri.com'
  }
}, (err, response, body) => {
  if (err) {
    return console.log('err', err)
  }
//  console.log('body',body)
  let window = {}
  let $ = cheerio.load(body, { ignoreWhitespace: true })
  eval($('#getAreaStat').html())
  console.log(' window.getAreaStat ', window.getAreaStat )
  let data_map = {}
//  console.log($('.fold___xVOZX'))

  fs.writeFile('./data.js', 'let data = ' + JSON.stringify(window.getAreaStat),
    { 'flag': 'w+' }, function(err) {
      if (err) {
        throw err
      }
      console.log('done')

    })
})
