const pdf = require('html-pdf');

module.exports = (req, res) => {
    var html = req.body.content;
    var options = {format: 'Letter', orientation: 'portrait', border: {
        "top": "2cm",
        "right": "1.5cm",
        "bottom": "2cm",
        "left": "1.5cm"
    }};

    pdf.create(html, options).toFile('PDF/prova.pdf', function(err, response){
        res.status(200).json({
            data: {
                name: 'PDF Generated!'
            }
        });
    });


}