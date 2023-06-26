import './App.css';
import Result from './Result';
import Summary from './Summary';
import Button from './Button';

function App() {
	return (
		<main>
			<Result className="main__result" />
			<Summary className="main__summary" />
			<Button />
			<Atrribution className="attribution" />
		</main>
	);
}

export default App;
