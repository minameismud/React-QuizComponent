import React, { Component } from 'react';

class QuizQuestionButton extends Component {
    constructor(props) {
        super(props);
        this.onFieldChange = this.onFieldChange.bind(this);
    }

    onFieldChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleClick = () => {
        this.props.clickHandler(this.props.button_text);
    };

    render() {
        return (
            <li>
                <button onClick={this.handleClick.bind(this)}>{this.props.button_text}</button>
            </li>
        );
    }
}

export default QuizQuestionButton;
