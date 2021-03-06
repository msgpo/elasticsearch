module.exports = {
  name: 'Elasticsearch',
  acronym: 'ES',
  logging: { level: 'info' },
  entityTypes: ['*'],
  styles: ['./styles/es.less'],
  block: {
    component: {
      file: './component/es.js'
    },
    template: {
      file: './template/es.hbs'
    }
  },
  summary: {
    component: {
      file: './component/es-summary.js'
    },
    template: {
      file: './template/es-summary.hbs'
    }
  },
  request: {
    // Provide the path to your certFile. Leave an empty string to ignore this option.
    // Relative paths are relative to the integration's root directory
    cert: '',
    // Provide the path to your private key. Leave an empty string to ignore this option.
    // Relative paths are relative to the integration's root directory
    key: '',
    // Provide the key passphrase if required.  Leave an empty string to ignore this option.
    // Relative paths are relative to the integration's root directory
    passphrase: '',
    // Provide the Certificate Authority. Leave an empty string to ignore this option.
    // Relative paths are relative to the integration's root directory
    ca: '',
    // An HTTP proxy to be used. Supports proxy Auth with Basic Auth, identical to support for
    // the url parameter (by embedding the auth info in the uri)
    proxy: '',
    /**
     * If set to false, the integration will ignore SSL errors.  This will allow the integration to connect
     * to servers without valid SSL certificates.  Please note that we do NOT recommending setting this
     * to false in a production environment.
     */
    rejectUnauthorized: true
  },
  options: [
    {
      key: 'url',
      name: 'Elasticsearch URL',
      description:
        'URL for your Elasticsearch REST API including the schema and port if applicable (e.g., ttps://elastic.prod:9200)',
      default: '',
      type: 'text',
      userCanEdit: true,
      adminOnly: false
    },
    {
      key: 'kibanaUrl',
      name: 'Kibana URL',
      description:
        'URL for your Elasticsearch Kibana interface including the schema and port if applicable (e.g., https://elastic.prod:9243/app/kibana).  If left blank no link to Kibana will be shown.',
      default: '',
      type: 'text',
      userCanEdit: true,
      adminOnly: false
    },
    {
      key: 'username',
      name: 'Username',
      description: 'Elasticsearch account username (Leave this blank if you are not using Basic Auth via Shield)',
      default: '',
      type: 'text',
      userCanEdit: true,
      adminOnly: false
    },
    {
      key: 'password',
      name: 'Password',
      description: 'Elasticsearch account password (Leave this blank if you are not using Basic Auth via Shield)',
      default: '',
      type: 'password',
      userCanEdit: true,
      adminOnly: false
    },
    {
      key: 'index',
      name: 'Index for Elasticsearch',
      description:
        'Comma delimited list of Elasticsearch indexes you want searched for results (no spaces between commas)',
      default: '',
      type: 'text',
      userCanEdit: true,
      adminOnly: false
    },
    {
      key: 'query',
      name: 'Search Query',
      description:
        'The search query to execute as JSON.  The top level property should be a `query` object and must be a valid JSON search request when sent to the ES `_search` REST endpoint.',
      default:
        '{"query": { "simple_query_string": { "query": "\\"{{entity}}\\"" } }, "from": 0, "size": 10, "sort": [ {"timestamp": "desc" } ] } }',
      type: 'text',
      userCanEdit: true,
      adminOnly: false
    },
    {
      key: 'highlightEnabled',
      name: 'Enable Highlighting',
      description:
        'If checked, the integration will display highlighted search terms via the Elasticsearch Highlighter',
      default: true,
      type: 'boolean',
      userCanEdit: true,
      adminOnly: false
    },
    {
      key: 'highlightQuery',
      name: 'Highlight Query',
      description:
        'The highlighter query to execute when a user clicks to view additional details. The top level property should be a `query` object. This query should typically match the query portion of your `Search Query`.  Highlighting will attempt to highlight against all fields and will return the first 10 results.  Only runs if the `Enable Highlighting` option is checked',
      default: '{"query": { "simple_query_string": { "query": "\\"{{entity}}\\"" } } }',
      type: 'text',
      userCanEdit: true,
      adminOnly: false
    },
    {
      key: 'summaryFields',
      name: 'Summary Fields',
      description:
        'Comma delimited list of "_source" fields to include as part of the summary (no spaces between commas).  These fields must be returned by your search query.',
      default: 'index',
      type: 'text',
      userCanEdit: true,
      adminOnly: false
    },
    {
      key: 'includeFieldNameInSummary',
      name: 'Include Field Name in Summary',
      description: 'If checked, field names will be included as part of the summary fields.',
      default: true,
      type: 'boolean',
      userCanEdit: true,
      adminOnly: false
    },
    {
      key: 'documentTitleField',
      name: 'Document Title Field',
      description:
        '"_source" field to use as the title for each returned document in the details template.  This field must be returned by your search query.',
      default: '',
      type: 'text',
      userCanEdit: true,
      adminOnly: false
    }
  ]
};
