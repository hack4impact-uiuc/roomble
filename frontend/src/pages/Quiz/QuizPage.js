import React from 'react';
import PropTypes from 'prop-types';

function QuizPage(props) {
   return <h2 className="question">{props.content}</h2>;
}


QuizPage.propTypes = {
  content: PropTypes.string.isRequired
}; 

export default QuizPage; 