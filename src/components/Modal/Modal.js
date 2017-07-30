import React from 'react';
import classnames from 'classnames';
import PropType from 'prop-types';
import {Images} from './../../Images/Images';
import Overlay from './../Overlay/Overlay';
import './Modal.scss';

const Modal = (props) => {
  return (
    <Overlay visibility={props.visibility}>
      <div className={classnames('modal', props.className, {'open': props.visibility})}>
        <div
          className="modal__close-btn"
          onClick={props.closeModal}>
          <img src={Images.ModalClose}/>
        </div>
        {props.children}
      </div>
    </Overlay>
  );
};

Modal.defaultProps = {
  className: '',
  visibility: false,
  closeModal: () => {},
};

Modal.propTypes = {
  className: PropType.string,
  visibility: PropType.bool,
  closeModal: PropType.func,
};

export default Modal;
