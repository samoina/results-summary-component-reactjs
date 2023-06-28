const ScoreSummary = ({ imgSrc, category, score }) => {
	return (
		<div
			className={`main__summary--div ${
				category === 'Reaction'
					? 'main__summary--reaction'
					: category === 'Memory'
					? 'main__summary--memory'
					: category === 'Verbal'
					? 'main__summary--verbal'
					: 'main__summary--visual'
			}`}
		>
			<p>
				<img src={imgSrc} alt="icon showing category" />
				{category}
			</p>
			<span className="summary__score">
				<b className="extra-bold summary__score--percent"> {score}</b> /100
			</span>
		</div>
	);
};
export default ScoreSummary;
