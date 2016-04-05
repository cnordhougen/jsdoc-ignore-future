var conf  = require('jsdoc/env').conf.ignoreFuture || { start: 'es-future>', end: '<es-future' },
    start = new RegExp('\/\/' + conf.start, 'g'),
    end   = new RegExp('\/\/' + conf.end, 'g');

exports.handlers = {
    beforeParse: event => {
        event.source = event.source.replace(start, '/*')
                                   .replace(end, '*/');
    }
};
