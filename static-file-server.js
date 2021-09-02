var express = require('express'),
    app = express();
app.set('port', 4200);
app.use(express.static(__dirname));
app.listen(app.get('port'), function () {
    console.log('Server started: http://127.0.0.1/:' + app.get('port') + '/');
});