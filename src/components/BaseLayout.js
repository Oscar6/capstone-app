import React from 'react';
import { Container } from 'react-bootstrap'
import NavBar from './NavBar'
// import PropTypes from 'prop-types';

class BaseLayout extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div>
                <div>
                    <NavBar></NavBar>
                </div>
                <Container>

                    {this.props.children}

                </Container>
            </div>
        );
    }
}


// BaseLayout.propTypes = {
    
// };

export default BaseLayout;
