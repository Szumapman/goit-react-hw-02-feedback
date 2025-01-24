import { Feedback } from "../constants/Feedback";

type FeedbackStatProps = {
    feedback: Feedback;
    total: number;
    positivePercentage: number;
}

export const FeedbackStat = ({ feedback, total,  positivePercentage}: FeedbackStatProps) => {
  
  return (
    <div className="feedback-stats">
          <h2>Statistics</h2>
          <p>Good: {feedback.good}</p>
          <p>Neutral: {feedback.neutral}</p>
          <p>Bad: {feedback.bad}</p>
          <p>Total: {total}</p>
          <p>Positive feedback: {positivePercentage}%</p>
    </div>
  );
}