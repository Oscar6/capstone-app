import React from 'react';
// import PropTypes from 'prop-types';

class BaseLayout extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div>
                BaseLayout.js {this.props.child}
            </div>
        );
    }
}


// BaseLayout.propTypes = {
    
// };

export default BaseLayout;
