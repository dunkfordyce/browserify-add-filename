module.exports = require('browserify-transform-tools').makeStringTransform('add-filename', {
}, function(content, opts, done) { 
    done(null, '// '+opts.file+'\n'+content);
});
