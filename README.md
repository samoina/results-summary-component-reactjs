# Frontend Mentor - Results summary component solution

This is a solution to the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV). Frontend Mentor challenges help you improve your coding skills by building realistic projects. I decided to take up a personal challenge and build the projects on Frontend Mentor challenges as a way to improve my skills in Vanilla Javascript (which I am more well-versed with) and build up on my understanding of ReactJS. For this challenge, I will be using ReactJS

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview


### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Links

- Solution URL: [Github]()
- Live Site URL: [Netlify](https://samoina-results-summary-component.netlify.app/)

## My process

Took a mobile-first approach for this challenge. I first created the static files and then added the dynamism with the figures from the JSON file included in the starter package.

EDITED: I decided to hide the results section so that when a user clicks the button, it fetches the scores from the JSON file, and shows them on the summary section as well as displays the results section.

### Built with

- Semantic HTML5 markup
- BEM naming convention
- Flexbox
- Mobile-first workflow
- Vanilla Javascript

### What I learned

1. With this project, I took some time to check out the difference between the _ and body selectors when doing the CSS reset. I had been brushing over this aspect but finally understood that the _ selector is known as the universal selector. It represents ALL elements in the document and therefore styles under it will apply to each and every element.

the 'body' selector on the other hand specifically targets the <body> element and the elements within it.

```css
*,
*::before,
*::after {
	box-sizing: border-box;
	margin: 0;
}

body {
	line-height: 1.5;
	font-size: 18px;
}
```

2. In the past four projects I have done on Front-end Mentor, the feedback from the accessibility report always puzzled me - that the 'Page should contain a level-one heading'. Helpful feedback from one [@Abdul Khalid](https://www.frontendmentor.io/profile/0xAbdulKhalid) showed me how to go about it.
   _The need to add a level-one heading to improve accessibility by reading aloud the heading by screen readers, you can achieve this by adding a sr-only class to hide it from visual users (it will be useful for visually impaired users)_

Thus, I added this to this challenge as below, where sr- is for screen reader. Code Snippet from [@CSS Tricks](https://css-tricks.com/inclusively-hidden/)
PS:I am not sure if this is the correct way to write it with BEM naming convention:

```html
<h1 class="main__heading--sr">Results Summary</h1>
```

```css
.main__heading--sr {
	/* clips elemet to a rectangle coordinates set to 0, hides it */
	clip: rect(0 0 0 0);
	/* create a rectangular shape inset 50% from all sides */
	clip-path: inset(50%);
	/* set height to 1px, extremely thin, almost invisible */
	height: 1px;
	/* hide content that spills over from the 1px height */
	overflow: hidden;
	/* position element absolutely in body */
	position: absolute;
	/* prevent line breaks */
	white-space: nowrap;
	/* similar to height, narrow it horizontally */
	width: 1px;
}
```

2. I found myself needing the reminder on how to loop through BOTH the span elements with the same classname, and looping through the objects from the JSON file so that each iteration places the correct score in the correct div. I used the forEach() method as it provides an index parameter which i can then use to access the specific score for the span in that iteration

```javascript
//use the forEach loop to iterate over each element. this way we make use of the index parameter then use the same index for the score array

const scoreSpan = document.querySelectorAll('.summary__score--percent');

scoreSpan.forEach((span, index) => {
	if (index < data.length) {
		scoreSpan.forEach((span, index) => {
			let currentScore = data[index].score;
			span.textContent = currentScore;
		});
	}
});
```

### Continued development

Fetch the scoring from the JSON file to display the scores dynamically and then show the result

EDITED: this is done

## Author

- Website - [Samoina Lives](https://samoinalives.wordpress.com/)
- Frontend Mentor - [Samoina](https://www.frontendmentor.io/profile/samoina)
- Twitter - [Samoina](https://www.twitter.com/samoina)
