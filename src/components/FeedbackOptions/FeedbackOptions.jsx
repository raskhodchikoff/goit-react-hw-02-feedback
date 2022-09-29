import PropTypes from 'prop-types';
import {
  FeedbackOptionsList,
  FeedbackOptionsBtn,
} from 'components/FeedbackOptions/FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackOptionsList>
      {options.map(option => (
        <li key={option}>
          <FeedbackOptionsBtn
            type="button"
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </FeedbackOptionsBtn>
        </li>
      ))}
    </FeedbackOptionsList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
