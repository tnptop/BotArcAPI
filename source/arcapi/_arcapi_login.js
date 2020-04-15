// filename : /arcapi/_arcapi_login.js
// author   : CirnoBakaBOT
// date     : 04/12/2020
// comment  : login

const TAG = 'arcapi/_arcapi_login.js';

const arcfetch = require('../corefunc/arcfetch');
const ArcAPIRequest = arcfetch.ArcAPIRequest;

module.exports = (name, password, deviceid) => {
  return new Promise((reslove, reject) => {

    // construct remote request
    const _remote_request =
      new ArcAPIRequest('POST', `auth/login`, {
        username: name,
        userpwd: password,
        deviceid: deviceid,
        postdata: new URLSearchParams({ 'grant_type': 'client_credentials' })
      });

    // send request
    arcfetch(_remote_request)
      .then((root) => { return reslove(root.access_token); })
      .catch((e) => { return reject(e); })
  });
}