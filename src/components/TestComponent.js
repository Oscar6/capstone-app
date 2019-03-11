import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import {InstantSearch, SearchBox, Hits, Highlight} from 'react-instantsearch-dom';

const Hit = ({hit}) =>
    <div className="hit">
        <div className="hit-name">
            <Highlight attributeName="name" hit={hit}/>
        </div>
    </div>

const Content = () =>
    <div className="content">
        <Hits hitComponent={Hit}/>
    </div>

const searchClient = algoliasearch(
    "P3I1RCM5CN",
    "a80be3f8bce5508e0cd9280c6d63cd79"
);

class TestComponent extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <InstantSearch indexName="mule_stores" searchClient={searchClient}>
            <header className="header">
                <SearchBox translations={{placeholder: 'Find Store'}} />
            </header>
            
            <main>
                <Content />
            </main>
            </InstantSearch>
        );
    }
}

export default TestComponent;