import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';

const searchClient = algoliasearch('P3I1RCM5CN', 'a80be3f8bce5508e0cd9280c6d63cd79');

const TestComponent = () => (
  <InstantSearch searchClient={searchClient} indexName="mule_stores">
    <SearchBox />
    <Hits />
  </InstantSearch>
);

export default TestComponent;