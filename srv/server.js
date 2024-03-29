const cds = require('@sap/cds');
module.exports = cds.server;
const nock = require('nock');

if (process.env.NODE_ENV !== 'production') {
  nock('http://149.129.239.170:4004', {allowUnmocked: true})
    .persist()
    .get(resource => resource.includes('/todos'))
    .reply(200, [{
      id: 1,
      title: 'mockTodo',
      completed: false
    }])
    .get(resource => resource.includes('/comments'))
    .query({postId: 1})
    .reply(200, [{
      "postId": 1,
      "id": 1,
      "name": "dummy email",
      "email": "Eliseo@gardner.biz",
      "body": "dummy body"
    }])
  cds.on('bootstrap', app => app);
}
