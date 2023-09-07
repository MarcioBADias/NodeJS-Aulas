const url = require('url')
const address = 'https://www.meusite.com.br/catalog?heroclix=blue_marvel'
const parseUrl = new url.URL(address)

console.log(parseUrl.host)
console.log(parseUrl.pathname)
console.log(parseUrl.search)
console.log(parseUrl.searchParams)
console.log(parseUrl.searchParams.get('heroclix'))