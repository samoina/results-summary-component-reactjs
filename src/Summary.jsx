import { useEffect, useState } from 'react';
import icon1 from './assets/images/icon-reaction.svg';
import icon2 from './assets/images/icon-memory.svg';
import icon3 from './assets/images/icon-verbal.svg';
import icon4 from './assets/images/icon-visual.svg';
import ScoreSummary from './ScoreSummary';
import Button from './Button';

const Summary = () => {
	const [data, setData] = useState([]);

	const icons = [icon1, icon2, icon3, icon4];

	useEffect(() => {
		const getObj = async () => {
			const objectsFromFile = await fetchObjects();
			setData(objectsFromFile);
		};

		getObj();
	}, []);

	//Fetch objects asynchronously
	const fetchObjects = async () => {
		try {
			const response = await fetch('./public/data.json');

			const data = await response.json();

			return data;
		} catch (err) {
			console.error('There was an error');
		}
	};

	return (
		<div className="main__summary">
			<h2>Summary</h2>

			{data.map((object, index) => (
				<ScoreSummary
					key={index}
					imgSrc={icons[index]}
					category={object.category}
					score={object.score}
				/>
			))}
			<Button />
		</div>
	);
};
export default Summary;
