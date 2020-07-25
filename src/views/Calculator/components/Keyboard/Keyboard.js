import React from 'react';
import PropTypes from 'prop-types';

import { MuiButton } from 'components';

import './styles.css';

const Keyboard = props => {
  const { data } = props;

  return (
    <div id="grid-buttons">
      {
        data.map((data) => (
          <MuiButton
            bgColor={data.bgColor}
            content={data.tag}
            key={data.tag}
          />
        ))
      }
    </div>
  );
}

Keyboard.propTypes = {
  data: PropTypes.array.isRequired
}

export default Keyboard;