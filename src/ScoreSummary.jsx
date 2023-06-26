const ScoreSummary = ({ icon }) => {
	return (
		<div>
			<p>
				<img src={icon} alt="" />
				Reaction
			</p>
			<span class="summary__score">
				<b class="extra-bold summary__score--percent">30</b> / 100
			</span>
		</div>
	);
};
export default ScoreSummary;
