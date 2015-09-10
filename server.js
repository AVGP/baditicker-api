var restify  = require('restify'),
    request  = require('request'),
    parseXml = require('xml2js').parseString

function listPools(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Content-Type', 'application/json; charset=utf-8')
    request('https://www.stadt-zuerich.ch/stzh/bathdatadownload', function(err, response, data) {
        parseXml(data, function(err, poolData) {
            var baths = poolData.bathinfos.baths,
                pools = {pools: []}
            for(var i=0, len = baths.length; i<len; i++) {
                for(var j=0, jlen = baths[i].bath.length; j<jlen; j++) {
                    var bath = baths[i].bath[j]
                    console.log(bath.title[0], bath.temperatureWater[0], bath.dateModified[0], bath.openClosedTextPlain[0])
                    pools.pools.push({
                        name: bath.title[0],
                        temperature: parseFloat(bath.temperatureWater[0]),
                        updatedAt: bath.dateModified[0],
                        open: bath.openClosedTextPlain[0].indexOf('geschlossen') >= 0 ? false : true,
                        openText: bath.openClosedTextPlain[0],
                        url: bath.urlPage[0]
                    })
                }
            }
            res.json(pools)
            next()
        })
    })
}

var server = restify.createServer()
server.get('/', listPools)
server.listen(process.env.PORT || 8080, function() {
  console.log('%s listening at %s', server.name, server.url)
});