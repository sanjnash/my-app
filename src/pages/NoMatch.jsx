import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const NoMatch = props => {
    return (
        <div>
          <h2>Nothing to see here!</h2>
          <p>
            <Link to="/">Go to the home page</Link>
          </p>
        </div>
      );
}

NoMatch.propTypes = {}

export { NoMatch}