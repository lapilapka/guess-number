import React from 'react';
import style from './ClassComponent.module.css';
import PropTypes from 'prop-types';
import PlayAgainBtn from './PlayAgainBtn';

export class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: '',
      number: 5,
      userNumber: '',
      randomNumber: this.generateRandomNumber(),
      count: 0,
      isShownPlayAgainBtn: false,
      value: '',
    };
  }

  generateRandomNumber = () => Math.floor(
    Math.random() * this.props.max - this.props.min) + this.props.min;

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.randomNumber);
    this.setState(state => ({
      count: state.count + 1,
    }));
    this.setState((state) => {
      if (!state.userNumber) {
        return {
          result: `Введите число`,
        };
      }

      if (state.userNumber > state.randomNumber) {
        return {
          result: `${state.userNumber} больше загаданного`,
        };
      }

      if (state.userNumber < state.randomNumber) {
        return {
          result: `${state.userNumber} меньше загаданного`,
        };
      }
      if (state.userNumber < state.randomNumber) {
        return {
          result: `${state.userNumber} меньше загаданного`,
        };
      }
      return {
        result: `Вы угадали ${state.userNumber}, 
        количество попыток ${state.count}`,
        isShownPlayAgainBtn: true,
      };
    });
  };

  handleChahge = e => {
    this.setState({
      userNumber: e.target.value,
    });
  };

  onClick = e => {
    e.preventDefault();
    this.setState({
      userNumber: '',
      result: `Введите число`,
      randomNumber: this.generateRandomNumber(),
      count: 0,
      isShownPlayAgainBtn: false,
    });
  };

  render() {
    return (<div className={style.game}>
      <p className={style.result}>{this.state.result}</p>
      <form className={style.form}
        onSubmit={this.handleSubmit}>
        <label className={style.label}
          htmlFor='user_number'>
          Угадай число
        </label>
        <input className={style.input}
          type='number'
          id='user_number'
          value={this.state.userNumber}
          onChange={this.handleChahge} />
        <button className={style.btn}>Угадать</button>
        <PlayAgainBtn isShown={this.state.isShownPlayAgainBtn}
          onClick={this.onClick}></PlayAgainBtn>
      </form>
    </div>);
  }
}

ClassComponent.propTypes = {
  min: PropTypes.number, max: PropTypes.number,
};
