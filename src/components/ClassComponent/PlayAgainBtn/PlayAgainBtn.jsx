import React from 'react';
import style from './PlayAgainBtn.module.css';
import PropTypes from 'prop-types';

export const PlayAgainBtn = props => {
  if (props.isShown) {
    return <button onClick={props.onClick} className={style.btn}>Сыграть еще
      раз?</button>;
  }
};

PlayAgainBtn.propTypes = {
  isShown: PropTypes.bool,
  onClick: PropTypes.func,
};
