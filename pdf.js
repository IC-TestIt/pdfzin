const jsreport = require('jsreport-core')()

module.exports = (req, res) => {
  jsreport.init().then(function () {     
    
    jsreport.render({
      template: {
        content: req.body.content,
        engine: 'jsrender',
        recipe: 'phantom-pdf'
      }
    }).then((resp) => {
      res.status(200).json({
        data: resp.content.toString()
      })
    }).catch(function(e) {
      console.log(e)
    })

  })
}