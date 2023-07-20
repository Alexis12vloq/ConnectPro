import searchBox  from 'instantsearch.js/es/';
const algoliasearch = require('algoliasearch');
const instantsearch = require('algoliasearch');

var ALGOLIA_APPLICATION_ID = '155VABJNGB'
var ALGOLIA_SEARCH_API_KEY = '858fc1314a6155e70e2bd1e589c5092d'
var algoliaClient = algoliasearch(ALGOLIA_APPLICATION_ID, ALGOLIA_SEARCH_API_KEY)

var search = instantsearch({
    indexName: 'storage-index',
    searchClient: algoliaClient
})

search.addWidgets([
  searchBox({
        container: '#searchbox',
        placeholder: 'Buscar Producto'
    }),

    instantsearch.widgets.hits({
        container: '#hits'
    }),

    instantsearch.widgets.configure({
        hitsPerPage: 3
    })
])

