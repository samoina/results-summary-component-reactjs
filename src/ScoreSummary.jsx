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
				<img src={imgSrc} />
				<span className="summary__score">
					{' '}
					{category}
					<b className="extra-bold summary__score--percent">{score}</b> /100
				</span>
			</p>
		</div>
	);
};
export default ScoreSummary;
