import React, { Component } from 'react';

class QuizQuestionButton extends Component {
  state = {
  };

  constructor(props){
    super(props);
    this.onFieldChange = this.onFieldChange.bind(this);
  }
  
  onFieldChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <li>
          <button>{this.props.button_text}</button>
      </li>
    );
  }
}

export default QuizQuestionButton;
