var loopback = require('loopback');

module.exports = function enableAuthentication(app) {
  // define customer auth
  var remotes = app.remotes();
  remotes.before('**', function (ctx, next) {
    var userId = ctx.req.query.userId;
    if (userId) {
      var lbCtx = loopback.getCurrentContext();
      lbCtx && lbCtx.set('userId', userId);
    }
    next();
  });

};