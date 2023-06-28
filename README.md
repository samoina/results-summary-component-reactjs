# Frontend Mentor - Results summary component solution

This is a solution to the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV). Frontend Mentor challenges help you improve your coding skills by building realistic projects. I decided to take up a personal challenge and build the projects on Frontend Mentor challenges as a way to improve my skills in Vanilla Javascript (which I am more well-versed with) and build up on my understanding of ReactJS. For this challenge, I will be using ReactJS

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Links

- Solution URL: [Github](https://github.com/samoina/results-summary-component-reactjs)
- Live Site URL: [Netlify](https://results-summary-component-reactjs.netlify.app/)

## My process

Took a mobile-first approach for this challenge. I first created the static files and then added the dynamism with the figures from the JSON file included in the starter package. I decided to hide the results section so that when a user clicks the button, it fetches the scores from the JSON file, and shows them on the summary section as well as displays the results section.

### Built with

- Semantic HTML5 markup
- BEM naming convention
- Flexbox
- Mobile-first workflow
- ReactJS

### What I learned

#### Difference between index.css and App.css

This is my first ReactJS project and I was wondering where to add my CSS styles (especially since I scaffolded my project using Vite)- what is the difference between index.css and App.css?

Found this explanation: In ReactJS, the App is the topmost component from where we get all the children components. By default, Vite sets up the index.css file which is linked to the index.html file. It is this file that determines global styles - ie styles for the entire application.

App.css on the other hand, is typically associated with App.jsx which is the entry point for the React App. For this reason, this file contains styling that is specific to the component hierarchy.

With this explanation, I figured that it would be best to have my reset styles and utility classes (if any) in the index.css file. For styles that are specific to App.js and its children components, these would go to App.css. I also noted that one can create additional css files for a more modular approach in styling (haven't done this before)

#### Where to put the className

After figuring out to put component styles in App.css, I was at crossroads at where to put the className attribute : in the parent component and then pass it to the relevant child component as a prop or otherwise? It definitely makes sense to place the className in the child component.

#### Creating a child component for each of the sections with the icons

I had some trouble looping through the icons and using useEffect hook so that the first time the page renders, it shows the icons. Then, using the setter function from the useState hook to change the icons. I would then loop through the array and set each icon to the Child component as a prop. For some reason it does not work and I am not sure why: This was my intial approach :

```jsx
const [icons, setIcons] = useState([]);

useEffect(() => {
	fetchIcons()
		.then((data) => setIcons(data))
		.catch((err) => console.error(err));
}, []);

async function fetchIcons() {
	try {
		const response = await fetch('data.json');

		const data = await response.json();

		return iconsData;
	} catch (error) {
		throw new Error(`oops! error! ${error.message}`);
	}
}

return (
		<div>
			<h2>Summary</h2>

			{icons.map((icon) => (
				<ScoreSummary
					className="main__summary--div main__summary--reaction"
					icon={icon}
				/>
			))}
    </div
)>
```

I made several attempts at this piece of code, and after while realized that I was looping through an array of objects, and what I needed to do was use dot notation to access the specific thing category or icon. But then again, the icons would not render, even though the category and the score did.

#### How do I access the images located in the assets folder after looping through the array?

I thought that it was possible to import folders (such as the asset one- again another gap I am noticing in my self-taught journey on Javascript modules). So what worked was to import each of the images, create an array and then use the index in the map method to set each icon in its rightful category. This is what it looked like:

```jsx
import icon1 from './assets/images/icon-reaction.svg';
import icon2 from './assets/images/icon-memory.svg';
import icon3 from './assets/images/icon-verbal.svg';
import icon4 from './assets/images/icon-visual.svg';

const icons = [icon1, icon2, icon3, icon4];

...
	<ul>
				{data.map((object, index) => (
					<li key={index}>
						<img src={icons[index]} /> {object.category} {object.score}
					</li>
				))}
			</ul>
...
```

#### How do I render the page with everything else from the JSON file, except the score, and only update the score when the button is clicked?

This was a bit confusing for me because I knew to place the useEffect hook so that on initial render, it displays everything except the scores. but was wondering how to change the scores dynamically only when the button is clicked.

I have yet to figure this out. - how do I fetch the 'Reaction' category and 'Icons' only on the first render, and then when the Button is clicked, change the scores from 0 to those fetched from the JSON file

#### Deployment

I did deploy the source code directly and realized it didn't work because I had obviously skipped the step where I need to build the production bundle before deployment for optimization .

Even after i did build the production bundle, I still could not get the Netlify link to work and I am wondering what step I am missing.

UPDATE: so I figured out why it wasn't working. the 'data.json' file that I had included the link in my component, was not in the public folder, and was therefore not included during npm run build. So i moved it to the public folder, re-did npm run build once more and re-deployed and got it to work (2 hours later, whew)

## Author

- Website - [Samoina Lives](https://samoinalives.wordpress.com/)
- Frontend Mentor - [Samoina](https://www.frontendmentor.io/profile/samoina)
- Twitter - [Samoina](https://www.twitter.com/samoina)
