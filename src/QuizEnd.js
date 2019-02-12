import React, { Component } from 'react';

class QuizEnd extends Component {
    constructor(props) {
        super(props);
        this.onFieldChange = this.onFieldChange.bind(this);
    }

    onFieldChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleResetClick(event) {
        // event.preventDefault();
        this.props.resetClickHandler();
    }

    render() {
        return (
            <div>
                <p>Thanks for playing!</p>
                <a href='' onClick={this.handleResetClick.bind(this)}>Reset Quiz</a>
            </div>
        );
    }
}

export default QuizEnd;
