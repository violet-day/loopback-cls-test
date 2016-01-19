/**
 * Created by Nemo on 16/1/19.
 */

var loopback = require('loopback');

module.exports = function (Model, option) {

  Model.defineProperty('userId', {
    type: Number
  });

  Model.observe('before save', function (ctx, next) {
    var context = loopback.getCurrentContext(),
      userId = context ? context.get('userId') : null;
    if (ctx.instance) {
      ctx.instance.userId = userId;
    } else {
      ctx.data.userId = userId;
    }

    next();

  });
};
