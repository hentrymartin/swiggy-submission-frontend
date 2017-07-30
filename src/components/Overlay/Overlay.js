import React from 'react';
import PropType from 'prop-types';
import classnames from 'classnames';
import './Overlay.scss';

const Overlay = (props) => {
  return (
    <div className={classnames('overlay', {'show': props.visibility})}>
      {props.children}
    </div>
  );
};

Overlay.defaultProps = {
  visibility: false,
};

Overlay.propTypes = {
  visibility: PropType.bool,
};

export default Overlay;
