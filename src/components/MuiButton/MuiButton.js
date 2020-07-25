import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const MuiButton = props => {
  const { content, bgColor } = props;

  return (
    <button
      style={{
        backgroundColor: `${bgColor}`
      }}
    >{content}</button>
  );
}

MuiButton.propTypes = {
  bgColor: PropTypes.string.isRequired,
  content: PropTypes.any.isRequired
}

export default MuiButton;