const redirects = require('./data/cdpap-redirects.json')
module.exports = { trailingSlash: true, images:{unoptimized:true}, async redirects(){ return redirects } }
