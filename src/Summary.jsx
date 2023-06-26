import { useEffect, useState } from 'react';
import icon1 from './assets/images/icon-reaction.svg';
import icon2 from './assets/images/icon-memory.svg';
import icon3 from './assets/images/icon-verbal.svg';
import icon4 from './assets/images/icon-visual.svg';

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

	const fetchObjects = async () => {
		try {
			const response = await fetch('./data.json');

			const data = await response.json();

			return data;
		} catch (err) {
			console.error('There was an error');
		}
	};

	return (
		<div>
			<h2>Summary</h2>

			<ul>
				{data.map((object, index) => (
					<li key={index}>
						<img src={icons[index]} /> {object.category} {object.score}
					</li>
				))}
			</ul>
		</div>
	);
};
export default Summary;
