import React from 'react';

const Suggestions = (props) => {
    const options = props.results.map(store => (
        <li key={store.storeId}>
            {store.name}
        </li>
    ))

    return <ul>{options}</ul>
}

export default Suggestions;
