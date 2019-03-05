import React, {Component} from 'react';
import styled from 'styled-components';
import Map from '../src/components/Map';
import SearchPage from './components/Search';

const AppWrapper = styled.div `
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;

const Container = styled.div `
`

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      checked: false,
    }

  }
  render() {
    return (
      <AppWrapper>
        <Container>
          <Map />
          <SearchPage />
        </Container>
      </AppWrapper>
    );
  }
}

export default App;