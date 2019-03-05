import React from 'react';
import { ReactAutosuggestGeocoder } from 'react-autosuggest-geocoder';

class SearchPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
      latitude: Infinity,
      longitude: Infinity
    };
  }

  render() {
    return (
      <div>
        <ReactAutosuggestGeocoder
          url='https://api.geocode.earth/v1'
          apiKey='...'
          onSuggestionSelected={(event, { search, suggestion, method }) => {
            this.setState({
              location: suggestion.properties.label,
              latitude: suggestion.geometry.coordinates[1],
              longitude: suggestion.geometry.coordinates[0]
            })
          }} />
      </div>
    );
  }
}

export default SearchPage;