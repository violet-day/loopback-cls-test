/**
 * Created by Nemo on 16/1/19.
 */

var request = require('supertest');
var _ = require('lodash');
var app = require('../server/server.js');

var test = function (userId) {
  request(app)
    .post('/api/MemoryModels/test')
    .query({userId: userId})
    .send({data: {title: 'test'}})
    .end(function (err, res) {
      console.log(userId, res.body.userId);
    })
};


_.times(20, function () {
  test(_.random(1, 100))
});