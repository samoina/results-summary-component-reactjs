const Result = ({ className }) => {
	return (
		<div className="main__result">
			<h1 className="main__heading--sr">Results Summary</h1>
			<p>Your Result</p>

			<p className="main__result--circle main__para--smalltext">
				<span className="extra-bold main__result--largetext">76 </span>
				of 100
			</p>

			<p className="bold"> Great</p>

			<p className="main__para main__para--smalltext">
				You scored higher than 65% of the people who have taken these tests.
			</p>
		</div>
	);
};
export default Result;
