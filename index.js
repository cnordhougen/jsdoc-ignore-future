exports.handlers = {
    beforeParse: event => {
        event.source = event.source.replace(/\/\/es-future\//g, '/*')
                                   .replace(/\/\/es-future\\/g, '*/');
    }
};
