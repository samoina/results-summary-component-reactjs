const Result = ({ className }) => {
	return (
		<div className={className}>
			<h1 class="main__heading--sr">Results Summary</h1>

			<p class="main__result--circle main__para--smalltext">
				<span class="extra-bold main__result--largetext">76 </span>
				of 100
			</p>

			<p class="bold"> Great</p>

			<p class="main__para main__para--smalltext">
				You scored higher than 65% of the people who have taken these tests.
			</p>
		</div>
	);
};
export default Result;
