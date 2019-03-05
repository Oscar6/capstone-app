import React, {Component} from 'react';
import styled from 'styled-components';
import Map from '../src/components/Map';

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
        </Container>
      </AppWrapper>
    );
  }
}

export default App;