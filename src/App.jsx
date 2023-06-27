import './App.css';
import Result from './Result';
import Summary from './Summary';
import Attribution from './Attribution';

function App() {
	return (
		<div>
			<main className="main">
				<Result />
				<Summary />
			</main>
			<Attribution />
		</div>
	);
}

export default App;
