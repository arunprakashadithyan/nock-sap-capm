const cds = require('@sap/cds');
const uuid = require('uuid');
const httpClient = require('@sap-cloud-sdk/http-client');


module.exports = cds.service.impl(async function () {
  const { Todos, Comments } = this.entities;

  this.on('GET', Todos, async (req) => {
    try {
      const destination = {
        name: 'my-destination',
        url: 'https://jsonplaceholder.typicode.com',
        authTokens: [{
          token: 'asasadadadadad'
        }],
        proxyConfiguration:{
          "host":"jsonplaceholder.typicode.com",
          "port":"80",
          "protocol":"http",
          "headers":{
             "Proxy-Authorization":"Bearer eU2miwtIVTKu65nDkjrYEcE06EFdkA"
          }
       }
      };

      const response = await httpClient.executeHttpRequest(destination, {
        url: '/todos',
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
      });

      return response.data;
    } catch (e) {
      req.error({
        code: 'FORBIDDEN',
        message: e.message,
        status: 403
      });
    }
  });

  this.on('READ', Comments, async (req) => {
    try {
      const destination = {
        name: 'my-destination',
        url: 'https://jsonplaceholder.typicode.com',
        authTokens: [{
          token: 'asasadadadadad'
        }],
        queryParameters: {
          postId: 1
        },
        proxyConfiguration:{
          "host":"jsonplaceholder.typicode.com",
          "port":"80",
          "protocol":"http",
          "headers":{
             "Proxy-Authorization":"Bearer SkoLWnx-dDCt5UkbKnC4K0U1axvk3c1vkMU2miwtIVTKu65nDkj"
          }
       }
      };

      const response = await httpClient.executeHttpRequest(destination, {
        // url: '/comments?postId=1',
        url: '/comments',
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
      });

      return response.data;
    } catch (e) {
      req.error({
        code: 'FORBIDDEN',
        message: e.message,
        status: 403
      });
    }
  })

});
