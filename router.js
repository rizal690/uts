'use strict';

module.exports = function(app){
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

    app.route('/tampil')
        .get(jsonku.tampilsemuabuku);

    app.route('/tampil/:id')
        .get(jsonku.tampilberdasarkanid);

    
}