const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
const jsreport = require('jsreport-core')()

const app = express();

const PORT = process.env.port || 3000;

app.use(cors())
app.use(bodyParser())

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

app.get('/', (request, response) => {
  response.status(200).json({
    data: {
      name: 'Generate your PDF!'
    }
  });
});

app.post('/pdf', (req, res) => {
    jsreport.init().then(function () {     
    return jsreport.render({
        template: {
            content: req.body.content,
            engine: 'jsrender',
            recipe: 'phantom-pdf'
            }
        }).then(function(resp) {
        console.log(resp.content.toString())
    });
    }).catch(function(e) {
        console.log(e)
    })
})