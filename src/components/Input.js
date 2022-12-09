import React from 'react';
import PropTypes from 'prop-types';

function Input(props) {
  const { change } = props;
  return (
    <div className="h-flex search-container">
      <input
        onChange={change}
        type="text"
        className="search"
        placeholder="search..."
      />
    </div>
  );
}

// props validation should be propTypes
Input.propTypes = {
  change: PropTypes.func.isRequired,
};
export default Input;
