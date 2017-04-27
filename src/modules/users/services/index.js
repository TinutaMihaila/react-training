import api from '../../../classes/Http';

export default class ServUsers {

  static getAll(data, cb) {
    api
    .request('users', data)
    .then((result) => {
      cb(null, result);
    },
    (jqXHR) => {
      const err = jqXHR;

      cb(err, null);
    });
  }
}
