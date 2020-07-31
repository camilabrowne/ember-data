/**
  @module @ember-data/adapter
*/
import { deprecate } from '@ember/application/deprecations';
import { dasherize } from '@ember/string';

import { pluralize } from 'ember-inflector';

import { serializeIntoHash } from './-private';
import RESTAdapter from './rest';

const FieldsForRecord = new WeakMap();

/**
  The `JSONAPIAdapter` is the default adapter used by Ember Data. It
  is responsible for transforming the store's requests into HTTP
  requests that follow the [JSON API](http://jsonapi.org/format/)
  format.

  ## JSON API Conventions

  The JSONAPIAdapter uses JSON API conventions for building the URL
  for a record and selecting the HTTP verb to use with a request. The
  actions you can take on a record map onto the following URLs in the
  JSON API adapter:

<table>
  <tr>
    <th>
      Action
    </th>
    <th>
      HTTP Verb
    </th>
    <th>
      URL
    </th>
  </tr>
  <tr>
    <th>
      `store.findRecord('post', 123)`
    </th>
    <td>
      GET
    </td>
    <td>
      /posts/123
    </td>
  </tr>
  <tr>
    <th>
      `store.findAll('post')`
    </th>
    <td>
      GET
    </td>
    <td>
      /posts
    </td>
  </tr>
  <tr>
    <th>
      Update `postRecord.save()`
    </th>
    <td>
      PATCH
    </td>
    <td>
      /posts/123
    </td>
  </tr>
  <tr>
    <th>
      Create `store.createRecord('post').save()`
    </th>
    <td>
      POST
    </td>
    <td>
      /posts
    </td>
  </tr>
  <tr>
    <th>
      Delete `postRecord.destroyRecord()`
    </th>
    <td>
      DELETE
    </td>
    <td>
      /posts/123
    </td>
  </tr>
</table>

  ## Success and failure

  The JSONAPIAdapter will consider a success any response with a
  status code of the 2xx family ("Success"), as well as 304 ("Not
  Modified"). Any other status code will be considered a failure.

  On success, the request promise will be resolved with the full
  response payload.

  Failed responses with status code 422 ("Unprocessable Entity") will
  be considered "invalid". The response will be discarded, except for
  the `errors` key. The request promise will be rejected with a
  `InvalidError`. This error object will encapsulate the saved
  `errors` value.

  Any other status codes will be treated as an adapter error. The
  request promise will be rejected, similarly to the invalid case,
  but with an instance of `AdapterError` instead.

  ### Endpoint path customization

  Endpoint paths can be prefixed with a `namespace` by setting the
  namespace property on the adapter:

  ```app/adapters/application.js
  import JSONAPIAdapter from '@ember-data/adapter/json-api';

  export default JSONAPIAdapter.extend({
    namespace: 'api/1'
  });
  ```
  Requests for the `person` model would now target `/api/1/people/1`.

  ### Host customization

  An adapter can target other hosts by setting the `host` property.

  ```app/adapters/application.js
  import JSONAPIAdapter from '@ember-data/adapter/json-api';

  export default JSONAPIAdapter.extend({
    host: 'https://api.example.com'
  });
  ```

  Requests for the `person` model would now target
  `https://api.example.com/people/1`.

  @since 1.13.0
  @class JSONAPIAdapter
  @constructor
  @extends RESTAdapter
*/
const JSONAPIAdapter = RESTAdapter.extend({
  defaultSerializer: '-json-api',

  _defaultContentType: 'application/vnd.api+json',

  supportsJSONAPIFields: false,

  /**
    @method ajaxOptions
    @private
    @param {String} url
    @param {String} type The request type GET, POST, PUT, DELETE etc.
    @param {Object} options
    @return {Object}
  */
  ajaxOptions(url, type, options = {}) {
    let hash = this._super(url, type, options);

    hash.headers['Accept'] = hash.headers['Accept'] || 'application/vnd.api+json';

    return hash;
  },

  /**
    By default the JSONAPIAdapter will send each find request coming from a `store.find`
    or from accessing a relationship separately to the server. If your server supports passing
    ids as a query string, you can set coalesceFindRequests to true to coalesce all find requests
    within a single runloop.

    For example, if you have an initial payload of:

    ```javascript
    {
      data: {
        id: 1,
        type: 'post',
        relationship: {
          comments: {
            data: [
              { id: 1, type: 'comment' },
              { id: 2, type: 'comment' }
            ]
          }
        }
      }
    }
    ```

    By default calling `post.get('comments')` will trigger the following requests(assuming the
    comments haven't been loaded before):

    ```
    GET /comments/1
    GET /comments/2
    ```

    If you set coalesceFindRequests to `true` it will instead trigger the following request:

    ```
    GET /comments?filter[id]=1,2
    ```

    Setting coalesceFindRequests to `true` also works for `store.find` requests and `belongsTo`
    relationships accessed within the same runloop. If you set `coalesceFindRequests: true`

    ```javascript
    store.findRecord('comment', 1);
    store.findRecord('comment', 2);
    ```

    will also send a request to: `GET /comments?filter[id]=1,2`

    Note: Requests coalescing rely on URL building strategy. So if you override `buildURL` in your app
    `groupRecordsForFindMany` more likely should be overridden as well in order for coalescing to work.

    @property coalesceFindRequests
    @type {boolean}
  */
  coalesceFindRequests: false,

  /**
    @method buildQuery
    @public
    @param  {Snapshot} snapshot
    @return {Object}
  */
  buildQuery(snapshot) {
    let query = this._super(...arguments);

    if (snapshot.adapterOptions) {
      let { fields } = snapshot.adapterOptions;

      if (fields) {
        query.fields = fields;
      }
    }

    return query;
  },

  /**
    In order to provide proper should reload tracking, we need to track if `fields`
    was passed through adapterOptions.

    @method findRecord
    @param {Store} store
    @param {Model} type
    @param {String} id
    @param {Snapshot} snapshot
    @return {Promise} promise
  */
  findRecord(store, type, id, snapshot) {
    let snapshotFields = snapshot.adapterOptions && snapshot.adapterOptions.fields;
    if (snapshotFields) {
      if (this.supportsJSONAPIFields) {
        captureFields(snapshot.record, snapshotFields);
      } else {
        deprecate(
          `You provided a list of "fields" in Snapshot adapterOptions.  ember-data added support for JSONAPI fields, including adding them to the request url and managing shouldReloadRecord state.  To opt-in to this feature, please set "supportsJSONAPIFields: true" on your JSON-API adapter.`,
          false,
          {
            id: 'ember-data:-built-in-fields-support',
            until: '4.0',
          }
        );
      }
    }

    return this._super(...arguments);
  },

  findMany(store, type, ids, snapshots) {
    let url = this.buildURL(type.modelName, ids, snapshots, 'findMany');
    return this.ajax(url, 'GET', { data: { filter: { id: ids.join(',') } } });
  },

  pathForType(modelName) {
    let dasherized = dasherize(modelName);
    return pluralize(dasherized);
  },

  /**
    The same snapshot might be requested multiple times. If you request a same snapshot with different fields, the
    record will be fetched and will block user interaction.

    @method shouldReloadRecord
    @param {Store} store
    @param {Snapshot} snapshot
    @return {Boolean}
  */
  shouldReloadRecord(store, snapshot) {
    if (this.supportsJSONAPIFields) {
      let snapshotFields = snapshot.adapterOptions && snapshot.adapterOptions.fields;
      if (snapshotFields) {
        return captureFields(snapshot.record, snapshotFields);
      }
    }

    return false;
  },

  updateRecord(store, type, snapshot) {
    const data = serializeIntoHash(store, type, snapshot);

    let url = this.buildURL(type.modelName, snapshot.id, snapshot, 'updateRecord');

    return this.ajax(url, 'PATCH', { data: data });
  },
});

function hasSomeFields(cachedFields, snapshotFields) {
  const listOfCachedFields = cachedFields.split(',').map(field => field.trim());
  const listOfSnapshotFields = snapshotFields.split(',').map(field => field.trim());

  return (
    listOfSnapshotFields.every(i => listOfCachedFields.indexOf(i) > -1) ||
    (listOfSnapshotFields.length < listOfCachedFields.length &&
      listOfSnapshotFields.every(i => listOfCachedFields.indexOf(i) > -1))
  );
}

function equalFields(cachedFields, snapshotFields) {
  return cachedFields.some(entry => {
    let isEqual;

    for (let key in snapshotFields) {
      if (entry[key]) {
        // we found a potential match
        isEqual = hasSomeFields(entry[key], snapshotFields[key]);
      } else {
        isEqual = false;
      }

      if (isEqual === false) {
        // if entry doesn't have it, lets move onto the other cached fields
        break;
      }
    }

    return isEqual;
  });
}

function captureFields(record, snapshotFields) {
  let cachedFields = FieldsForRecord.get(record);
  if (cachedFields && cachedFields.length) {
    // have seen this record with these fields before - don't fetch
    if (equalFields(cachedFields, snapshotFields)) {
      return false;
    }

    // have seen this record but not these fields - fetch new record
    cachedFields.push(snapshotFields);
    FieldsForRecord.set(record, cachedFields);
    return true;
  } else {
    // never seen this record yet
    FieldsForRecord.set(record, [snapshotFields]);
    // TODO: Since we capture fields in the initial requests, I don't think this is possible.  However,
    // if we are missing a piece of the puzzle, then should we reload or not? Or just return undefined?
    return true;
  }
}

export default JSONAPIAdapter;
