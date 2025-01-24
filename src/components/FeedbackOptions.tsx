type FeedbackOptionsProps = {
    statOptions: string[];
    onLeaveFeedback: (e: { target: { innerText: string; }; }) => void;
}


export const FeedbackOptions = ({ statOptions, onLeaveFeedback }: FeedbackOptionsProps) => {
    return (
        <div className="feedback-options">
            {statOptions.map((option) => (
                <button key={option} onClick={(e) => onLeaveFeedback({ target: { innerText: e.currentTarget.innerText } })}>
                    {option}
                </button>
            ))}
        </div>
    )
}