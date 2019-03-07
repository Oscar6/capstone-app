import React from 'react';
import Header from './Header';
// import PropTypes from 'prop-types';

class BaseLayout extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div>
                <Header />
                {this.props.children}
            </div>
        );
    }
}


// BaseLayout.propTypes = {
    
// };

export default BaseLayout;
