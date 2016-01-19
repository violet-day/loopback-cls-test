var q = require('q');

module.exports = function (MemoryModel) {

  MemoryModel.test = function (data) {
    //return MemoryModel.create(data);
    //add q.delay will cause error
    return q.delay(100)
      .then(function () {
        return MemoryModel.create(data);
      });
  };

  MemoryModel.remoteMethod('test', {
    accepts: [
      {arg: 'data', type: 'object', required: true}
    ],
    isStatic: true,
    returns: {arg: 'result', type: 'object', root: true},
    http: {verb: 'post'}
  });

};
