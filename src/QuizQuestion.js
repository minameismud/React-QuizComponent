import React, { Component } from 'react';
import QuizQuestionButton from './QuizQuestionButton';

class QuizQuestion extends Component {

    constructor(props) {
        super(props);
        this.onFieldChange = this.onFieldChange.bind(this);
    }

    onFieldChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleClick(buttonText) {
        return (this.props.quiz_question.answer === buttonText ?
            this.props.showNextQuestionHandler() :
            {});
    }

    render() {
        return (
            <main>
                <section>
                    <p>{this.props.quiz_question.instruction_text}</p>
                </section>
                <section className="buttons">
                    <ul>
                        {
                            this.props.quiz_question.answer_options.map(
                                (item, index) =>
                                    <QuizQuestionButton 
                                        clickHandler={this.handleClick.bind(this)} 
                                        key={index} button_text={item} 
                                    />
                            )
                        }
                    </ul>
                </section>
            </main>
        );
    }
}

export default QuizQuestion;
