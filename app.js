var fs      = require('fs'),
    pdf     = require('html-pdf'),
    html    = fs.readFileSync('./index.html', 'utf8'),
    options = { 
        filename: './cv.pdf', 
        format: 'Letter' 
    };
 
pdf.create(html, options).toFile(function(err, res) {
    if (err) {
        return console.log(err);
    }
    console.log(res);
});
