/**
 * @author Paul BRIE <aelythe@gmail.com>
 *
 * Class representing a custom Http object
 */
import config from '../config';

export default class Http {

  /**
   * performs a request
   *
   * @endpoint {string} http endpoint
   * @data {object} http data object sent
   * @options {object} http options object
   */
  static request(endpoint, data, options) {
    const settings = this.upgradeHeaders(endpoint, data, options);
    const req = $.ajax(settings);

    return req;
  }

  /**
   * loads options with default values
   *
   * @endpoint {string} http endpoint string
   * @data {object} data object sent
   * @options {object} http options object
   * @return {object} the enhanced http options object
   */
  static upgradeHeaders(endpoint, data, receivedOptions = {}) {
    const options = receivedOptions;

    if (!options.method) {
      options.method = 'POST';
    }

    if (!options.url) {
      options.url = `http:\/\/${config.api}:${config.apiPort}/api/${endpoint}`;
    }

    if (!options.data) {
      options.data = JSON.stringify(data);
    }

    if (!options.headers) {
      options.headers = {
        'Content-Type': 'application/json',
      };
    }
    options.headers['X-App-Id'] = config.xAppId;
    options.headers['X-App-Secret'] = config.xAppSecret;

    return options;
  }
}
